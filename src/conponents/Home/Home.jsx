import { homeButtonClick } from "../../utils/homeButtonClick";
import { Container, Title, List, Button, Task } from "./Home.styled";

export const HomeButtons = () => {
  return (
    <Container>
      <Title>Home work 01 REACT 'COMPONENTS'</Title>
      <List onClick={homeButtonClick}>
        <li>
          <Button id="profile">
            <Task>Задание 1</Task>
            Профиль социальной сети
          </Button>
        </li>
        <li>
          <Button id="statistics">
            <Task>Задание 2</Task>
            Секция статистики
          </Button>
        </li>
        <li>
          <Button id="friendList">
            <Task>Задание 3</Task>
            Список друзей
          </Button>
        </li>
        <li>
          <Button id="transactionHistory">
            <Task>Задание 4</Task>
            История транзакций
          </Button>
        </li>
      </List>
    </Container>
  );
};
