import { Form, Formik } from 'formik'
import React from 'react'
import ModalWrapper from '../../App/Common/Modals/ModalWrapper'
import * as Yup from 'yup';
import MyTextInput from '../../App/Common/Form/MyTextInput';
// import LoginForm from '../../../src/Components/Auth/LoginForm'


export default function LoginForm() {
  return (
    <>
      <ModalWrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required()
          })}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className=''>
              <MyTextInput name="email" placeholder="Email Address" />
              <MyTextInput name="password" placeholder="Password" type="password" />
              <button
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                type="submit"
              >Login</button>
            </Form>
          )}
        </Formik>
      </ModalWrapper>
    </>
  )
}
