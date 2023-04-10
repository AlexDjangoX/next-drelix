import React, { useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import { supabase } from '../../utils/supabaseClient';

// Fetch products using SWR
const fetcher = async (url) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
};

function Products() {
  const { data, error, mutate } = useSWR('/api/products', fetcher);

  if (error) return <div>Error loading products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid templateColumns='repeat(auto-fill, minmax(20rem, 1fr))' gap={6}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} mutate={mutate} />
      ))}
    </Grid>
  );
}

function ProductCard({ product, mutate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', product.id);

    if (error) {
      console.error('Error deleting product:', error);
    } else {
      // Refresh the data
      mutate();
    }
  };

  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} w='20rem' h='25rem'>
      <Text>{product.category}</Text>
      <Box mb={4}>
        <img src={product.image_url} alt={product.short_description} />
      </Box>
      <Text>{product.short_description}</Text>
      <Button colorScheme='red' onClick={handleDelete}>
        Delete
      </Button>
      <Button colorScheme='blue' onClick={handleEdit}>
        Edit
      </Button>
      {isOpen && (
        <EditProductModal product={product} onClose={onClose} mutate={mutate} />
      )}
    </Box>
  );
}

function EditProductModal({ product, onClose, mutate }) {
  const [newImage, setNewImage] = useState(null);
  const [publicUrlDataBase, setPublicUrlDataBase] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: product.category,
      short_description: product.short_description,
      image_url: product.image_url,
    },
  });

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExtension = file.name.split('.').pop();
      const uniqueFileName = `${product.category}_${product.name}_${
        product?.dimension
      }_${uuidv4()}.${fileExtension}`;
      console.log(uniqueFileName);
      const filePath = `${uniqueFileName}`;
      console.log(filePath);
      // Upload the image to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from('rekawice')
        .upload(filePath, file, { contentType: file.type });

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
      } else {
        // Construct the public URL
        const projectUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}`;
        const publicURL = `${projectUrl}/storage/v1/object/public/rekawice/${filePath}`;
        console.log(publicURL);
        setPublicUrlDataBase(publicURL);
        // Update the new image preview
        setNewImage(publicURL);
      }
    }
  };

  const onSubmit = async (data) => {
    const { category, short_description, image } = data;
    // Handle the image upload
    let imageUrl = product.image_url;
    if (image.length) {
      const { error } = await supabase.storage
        .from('rekawice')
        .upload(`products/${image[0].name}`, image[0], { upsert: true });

      if (error) {
        console.error('Error uploading image:', error);
        return;
      }
    }

    const { error } = await supabase
      .from('products')
      .update({
        category,
        short_description,
        image_url: publicUrlDataBase === '' ? imageUrl : publicUrlDataBase,
      })
      .eq('id', product.id);

    if (error) {
      console.error('Error updating product:', error);
    } else {
      // Refresh the data
      mutate();
      onClose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl id='category' isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Select {...register('category')}>
                <option value='gloves'>Gloves</option>
                <option value='shoes'>Shoes</option>
                <option value='boots'>Boots</option>
                <option value='pants'>Pants</option>
                <option value='shirts'>Shirts</option>
              </Select>
              <Text color='red.500'>{errors.category?.message}</Text>
            </FormControl>

            <FormControl
              id='short_description'
              isInvalid={errors.short_description}
            >
              <FormLabel>Short Description</FormLabel>
              <Input {...register('short_description')} />
              <Text color='red.500'>{errors.short_description?.message}</Text>
            </FormControl>

            <FormControl id='image_url' isInvalid={errors.image_url}>
              <FormLabel>Image URL</FormLabel>
              <Input {...register('image_url')} />
              <Text color='red.500'>{errors.image_url?.message}</Text>
            </FormControl>

            <Box mt={4}>
              <Text>Current Image:</Text>
              <Image
                src={newImage || product.image_url}
                alt='Current image'
                width='100'
                height='100'
              />
            </Box>

            <FormControl id='image' isInvalid={errors.image}>
              <FormLabel>Image</FormLabel>
              <Input
                type='file'
                accept='image/*'
                {...register('image')}
                onChange={handleImageChange}
              />

              <Text color='red.500'>{errors.image?.message}</Text>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' type='submit'>
              Update
            </Button>
            <Button colorScheme='gray' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default Products;
