import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../utils/supabaseClient.js';
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  price: yup
    .number()
    .positive('Price must be positive')
    .required('Price is required'),
  short_description: yup.string().required('Short description is required'),
  dimension: yup.string().required('Dimension is required'),
});

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      // Upload image to Supabase Storage
      const fileExtension = file.name.split('.').pop();
      const uniqueFileName = `${values.category}_${values.name}_${
        values.dimension
      }_${uuidv4()}.${fileExtension}`;
      const filePath = `rekawice/${uniqueFileName}`;

      const { error: uploadError } = await supabase.storage
        .from('rekawice')
        .upload(filePath, file, { contentType: file.type });

      if (uploadError) {
        console.error(uploadError.message);
        return;
      }

      // Generate the public URL for the uploaded image
      const { publicURL } = supabase.storage
        .from('rekawice')
        .getPublicUrl(filePath);

      // Insert product data into the database, including the public URL of the image
      const product = { ...values, image_path: filePath, image_url: publicURL };
      console.log(product);
      const { error: insertError } = await supabase
        .from('products')
        .insert([product]);

      if (insertError) {
        console.error(insertError.message);
      } else {
        // Reset the form and show a success message
        reset();
        setFile(null);
        setFilePreview(null);
        toast({
          title: 'Product added successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(file);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setFile(null);
      setPreviewImage(null);
    }
  };

  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        <GridItem colSpan={2}>
          <FormControl id='name' isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input {...register('name')} />
            <Text color='red.500'>{errors.name?.message}</Text>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id='category' isInvalid={errors.category}>
            <FormLabel>Category</FormLabel>
            <Input {...register('category')} />
            <Text color='red.500'>{errors.category?.message}</Text>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id='price' isInvalid={errors.price}>
            <FormLabel>Price</FormLabel>
            <Controller
              name='price'
              control={control}
              render={({ field }) => (
                <NumberInput min={0} {...field}>
                  <NumberInputField />
                </NumberInput>
              )}
            />
            <Text color='red.500'>{errors.price?.message}</Text>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl
            id='short_description'
            isInvalid={errors.shortDescription}
          >
            <FormLabel>Short Description</FormLabel>
            <Textarea {...register('short_description')} />
            <Text color='red.500'>{errors.shortDescription?.message}</Text>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id='dimension' isInvalid={errors.dimension}>
            <FormLabel>Dimension</FormLabel>
            <Input {...register('dimension')} />
            <Text color='red.500'>{errors.dimension?.message}</Text>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id='file'>
            <FormLabel>Upload Image</FormLabel>
            <InputGroup>
              <InputLeftAddon>
                <AttachmentIcon />
              </InputLeftAddon>
              <Input
                type='file'
                accept='.png,.jpeg,.jpg'
                onChange={handleFileChange}
              />
            </InputGroup>
          </FormControl>
          {previewImage && (
            <Box mt={4}>
              <Image
                src={previewImage}
                alt='Preview'
                boxSize='100px'
                objectFit='cover'
                borderRadius='md'
              />
            </Box>
          )}
        </GridItem>
      </Grid>

      <Button mt={6} type='submit' colorScheme='blue'>
        Submit
      </Button>
    </Box>
  );
};

export default ProductForm;
