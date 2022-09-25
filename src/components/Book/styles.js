import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #EEE5E9;
  height: 220px;
  width: 300px;
  padding: 10px;

  margin-right: 20px;
  margin-left: 20px;

  border-radius: 10px;

  flex-direction: row;

`;

export const BookHeader = styled.View`
  flex-direction: column;
  width: 50%;
`;

export const Header = styled.Text`
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #2C3D55;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 14;
  color: #3E4C5E;
`;

export const Cover = styled.View`

`;

export const RatingBox = styled.View`
`;

export const Rating = styled.Text`
  color: #3E4C5E;
  font-size: 14;
  font-weight: bold;
  padding: 50px;
  height: 300px;
`;
