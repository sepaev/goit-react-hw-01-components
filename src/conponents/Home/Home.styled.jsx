import styled from '@emotion/styled'

export const Container = styled.div`
    background-color: #e7ecf2;
    padding: 90px;
    margin: auto;
    width: 430px;
    min-height: 330px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 60px;
`;

export const List = styled.ul`
  font-family: Roboto, sans-serif;
  width: 250px;
  min-height: 330px;
  text-align: center;
  padding-left: 0;
`;

export const Button = styled.button`
  height: 100%;
  margin-bottom: 20px;
  width: 150px;
  min-height: 120px;
  padding: 15px 5px;
  font-style: italic;
  filter: drop-shadow(5px 10px 4px grey);
  &:hover {
    filter: drop-shadow(4px 4px 4px grey);
    background-color: white;
  }
`;

export const Task = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-style: initial;
  pointer-events: none;
  word-break: break-all;
`;

