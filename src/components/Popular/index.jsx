import React from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Title, BookContainer } from './styles';

const POPULAR_BOOKS = [
    {
      id: 1,
      title: 'The Gunslinger',
      cover: "https://images-na.ssl-images-amazon.com/images/I/71YJ5OUi8bL.jpg",
      author: 'Stephen King',
      resume: 'The Gunslinger is the first volume of a series of seven novels called The Dark Tower. It was published in 1982. The story follows Roland Deschain, the last gunslinger, who is on a quest to find the Dark Tower, in a world which has moved on from the Old West.',
      year: 1982,
      pages: 400,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Killing Floor',
      cover: "https://images-na.ssl-images-amazon.com/images/I/71mYhQ0lfGL.jpg",
      author: 'Lee Child',
      resume: 'Jack Reacher is back in this electrifying new thriller from #1 New York Times bestselling author Lee Child. Reacher takes a stroll through a small Wisconsin town and sees a class ring in a pawn shop window: West Point 2005. A tough year to graduate: Iraq, then Afghanistan.',
      year: 1997,
      pages: 400,
      rating: 4.0
    },
    {
      id: 3,
      title: "King Arthur",
      cover: "https://m.media-amazon.com/images/I/51VVn5e7fDL.jpg",
      author: "Bernard Cornwell",
      resume: "The Winter King: A Novel of Arthur is the first novel of the Warlord Chronicles trilogy by Bernard Cornwell, originally published in the UK in 1995 by Penguin Group. The book is based on characters and plot elements from Arthurian myth, but considerably changed and re-worked.",
      year: 1995,
      pages: 400,
      rating: 4.3
    }
  ]

export function Popular() {
  return (
   <Container>
      <Title>New Releases</Title>
      <BookContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {POPULAR_BOOKS.map((book) => {
            return (
              <Image
                key={book.id}
                source={{uri: book.cover}}
                style={{width: 150, height: 190, resizeMode: "contain", marginRight: 10 }}
              />
            )
          })}
        </ScrollView>
      </BookContainer>
   </Container>
  );
}
