import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userData = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('password is required')
});

const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '' , password:''}}
        userData={userData}
        onSubmit={(data) => {
            console.log(data);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default FormikForm