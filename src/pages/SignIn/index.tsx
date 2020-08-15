import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

// import { Container } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />

    <Title> Faça seu Logon </Title>

    <Input />

    <Input />

    <Button
      onPress={() => {
        console.log('ok');
      }}
    >
      Entrar
    </Button>
  </Container>
);
export default SignIn;
