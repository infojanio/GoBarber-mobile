import React, { useCallback, useEffect, useState } from 'react';
import { View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  // declaração dos estados
  const [providers, setProviders] = useState<Provider[]>([]); // sempre que guardarmos um array dentro do estado, é bom criar a interface

  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  // Listar providers
  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  // navegação ao clicar na imagem profile faz a navegação para a rota de PERFIL
  const navigateToProfile = useCallback(() => {
    signOut();
    // navigate('Profile');
  }, [signOut]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        renderItem={({ item }) => <UserName>{item.name}</UserName>}
      />
    </Container>
  );
};
export default Dashboard;
