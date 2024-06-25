import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Min 3 chars!')
    .max(50, 'Max 50 chars!')
    .required('is required!'),
  number: Yup.string()
    .trim()
    .min(3, 'Min 3 chars!')
    .max(50, 'Max 50 chars!')
    .required('is required!'),
});

export default function ContactForm() {
  const name = nanoid();
  const number = nanoid();

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, action) => {
    action.resetForm();

    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={name}>Name</label>
          <Field type="text" name="name" id={name}></Field>
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor={number}>Number</label>
          <Field type="tel" name="number" id={number}></Field>
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.addContactButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
