import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: row;
  margin-top: -150px;
  padding-bottom: 100px;

  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 20;
  color: #fff;
  font-weight: bold;
`;

export const Subtitle = styled.Text``;

export const Button = styled.View``;

export const UserInfo = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75%;

`;
