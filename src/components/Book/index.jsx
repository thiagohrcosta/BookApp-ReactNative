import React from 'react';
import { Image } from 'react-native';
import { Container, Title, BookHeader, Subtitle, Cover, RatingBox, Rating, Header } from './styles';

import {Feather} from '@expo/vector-icons';

export function Book({title, cover, year, author, rating, pages, resume}) {
  return (
    <Container>
      <Cover>
        <Image source={{uri: cover}} style={{width: 150, height: 190, resizeMode: "contain"  }} />
      </Cover>
      <BookHeader>
      <Header>
        <Title>{title} ({year})</Title>
      </Header>
      <Header>
        <Subtitle>{author}</Subtitle>
      </Header>
      <Header>
        <Rating>
         <Feather name="star" size={24} color="#26A96C" />{rating}
        </Rating>
      </Header>
      </BookHeader>
    </Container>
  );
}
