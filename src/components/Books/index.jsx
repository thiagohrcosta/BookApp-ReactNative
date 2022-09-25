import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Book } from '../Book';
import { Header } from '../Header';
import { Popular } from '../Popular';
import { Container, Subtitle, Title, BooksContainer, SubtitleBox, BookFlex } from './styles';

const BOOKS = [
  {
    id: 1,
    title: 'Clear and Present Danger',
    cover: "https://tomclancy.com/images/tomclancy/cache/images/tomclancy/site/products/proportion/clear-and-present-new-pb_w370_h378/clear-and-present-new-pb_12070811.jpg",
    author: 'Tom Clancy',
    resume:  'Jack Ryan, Jr. is back in this thrilling new novel from #1 New York Times bestselling author Tom Clancy. The President of the United States is dead. The Vice President is missing. And the Speaker of the House is under arrest. The only person who can help is Jack Ryan, Jr., the son of the former president. But Jack is on a mission of his own, one that will take him from the streets of Washington, D.C., to the mountains of Colombia, and into the crosshairs of a ruthless killer. The President of the United States is dead. The Vice President is missing. And the Speaker of the House is under arrest. The only person who can help is Jack Ryan, Jr., the son of the former president. But Jack is on a mission of his own, one that will take him from the streets of Washington, D.C., to the mountains of Colombia, and into the crosshairs of a ruthless killer.',
    year: 1989,
    pages: 400,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'The Hunt for Red October',
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/HuntForRedOctober.JPG/220px-HuntForRedOctober.JPG",
    author: 'Tom Clancy',
    resume: 'The Hunt for Red October is a 1984 techno-thriller novel by Tom Clancy about a Soviet Union-based submarine captain who plans to defect to the United States with his ship, the Red October. The novel was adapted into a 1990 film of the same name, directed by John McTiernan and starring Sean Connery and Alec Baldwin.',
    year: 1984,
    pages: 400,
    rating: 4.1
  },
]
export function Books() {
  const [bookType, setBookType] = useState('For you');

  function handleSetBookType(type) {
    setBookType(type);
  }

  return (
    <>
      <Container>
        <BooksContainer>
          <Header />
          <Title>CHOOSE A BOOK TO READ</Title>
          <SubtitleBox>
            <Subtitle onPress={() => handleSetBookType("For you")}>For you</Subtitle>
            <Subtitle onPress={() => handleSetBookType("Popular")}>Popular</Subtitle>
            <Subtitle onPress={() => handleSetBookType("Total")}>Total</Subtitle>
          </SubtitleBox>
        </BooksContainer>
          <BookFlex>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {BOOKS.map((book) => {
              return (
                <Book
                  key={book.id}
                  title={book.title}
                  cover={book.cover}
                  author={book.author}
                  resume={book.resume}
                  year={book.year}
                  pages={book.pages}
                  rating={book.rating}
                />
              )
            })}
          </ScrollView>
        </BookFlex>
      </Container>
      <Popular />
    </>
  );
}
