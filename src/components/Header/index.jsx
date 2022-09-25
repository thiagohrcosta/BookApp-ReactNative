import React from 'react';
import { Image, Text } from 'react-native';
import {
  Container,
  Profile,
  Avatar,
  Title,
  Subtitle,
  Button,
  UserInfo
} from './styles';

import { Feather } from '@expo/vector-icons';

export function Header() {
  return (
    <Container>
      <Profile>
        <Avatar>
          <Image source={{uri: 'https://avatars.githubusercontent.com/u/28869405?v=4'}} style={{width: 48, height: 48, borderRadius: 50 }} />
        </Avatar>
        <UserInfo>
          <Text>Welcome back </Text>
          <Text> useremail@email.com</Text>
        </UserInfo>
      </Profile>
      <Button>
        <Feather name="log-out" size={24} color="#fff" />
      </Button>
    </Container>

  );
}
