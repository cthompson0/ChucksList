import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';

import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const categories = [
  {
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65',
    value: 1,
  },
  { label: 'Cars', icon: 'car', backgroundColor: '#fd9644', value: 2 },
  { label: 'Cameras', icon: 'camera', backgroundColor: '#fed330', value: 3 },
  { label: 'Games', icon: 'cards', backgroundColor: '#26de81', value: 4 },
  {
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba',
    value: 5,
  },
  { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
  {
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec',
    value: 7,
  },
  {
    label: 'Books',
    icon: 'book-open-variant',
    backgroundColor: '#fc5c65',
    value: 8,
  },
  {
    label: 'Other',
    icon: 'window-maximize',
    backgroundColor: '#fc5c65',
    value: 9,
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          width={120}
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
