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
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Error loading products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid templateColumns='repeat(auto-fill, minmax(20rem, 1fr))' gap={6}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

function ProductCard({ product }) {
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
      mutate('/api/products');
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
      {isOpen && <EditProductModal product={product} onClose={onClose} />}
    </Box>
  );
}

function EditProductModal({ product, onClose }) {
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

  const onSubmit = async (data) => {
    const { category, short_description, image_url } = data;

    const { error } = await supabase
      .from('products')
      .update({ category, short_description, image_url })
      .eq('id', product.id);

    if (error) {
      console.error('Error updating product:', error);
    } else {
      // Refresh the data
      mutate('/api/products');
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
