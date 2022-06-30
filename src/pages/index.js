import React from 'react'
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  Text
} from "./LoginElements";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <FormContent>
        <Form action="#">
          <FormH1>Login to your account</FormH1>
          <FormLabel htmlFor="for">Email</FormLabel>
          <FormInput type="email" required />
          <FormLabel htmlFor="for">Password</FormLabel>
          <FormInput type="password" required />
          <FormButton type="submit">Continue</FormButton>
          <Text>Forgot password?</Text>
        </Form>
      </FormContent>
    </div>
  );
}

export default Login