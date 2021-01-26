import React from 'react';

import { Container, Title, Subtitle, ForgotPassword, Form, Input, LoginButton, SignButton } from './styles';

const SignForm: React.FC = () => {
  return (
    <Container>
      <Title>Estamos quase lá</Title>
      <Subtitle>Preencha o formulário para verificarmos seu cadastro</Subtitle>

      <Form>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>

        <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        <LoginButton>Login</LoginButton>
        <SignButton>Cadastrar</SignButton>
      </Form>
    </Container>
  );
}

export default SignForm;