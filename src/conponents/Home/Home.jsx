import css from './Home.module.css';
import { homeButtonClick } from '../../utils/homeButtonClick'
export const HomeButtons = (props) => {
  return (
    <div className={css._container}>
      <h1 className={css._title}>Home work 01 REACT 'COMPONENTS'</h1>
      <ul className={css._list} onClick={homeButtonClick}>
        <li>
          <button className={css._button} id='profile' ><p className={css._task}>Задание 1</p>
          Профиль социальной сети</button>
        </li>
        <li>
          <button className={css._button} id='statistics' ><p className={css._task}>Задание 2</p>
          Секция статистики</button>
        </li>
        <li>
          <button className={css._button} id='friendList' ><p className={css._task}>Задание 3</p>
          Список друзей</button>
        </li>
        <li>
          <button className={css._button} id='transactionHistory' ><p className={css._task}>Задание 4</p>
          История транзакций</button>
        </li>
      </ul>
    </div>
  );
}