import css from './Home.module.css';
import { homeButtonClick } from '../../utils/homeButtonClick'
export const HomeButtons = (props) => {
  console.log(props);
  return (
    <div className={css.buttons__wrapper}>
    <ul className={css.buttons__list} onClick={homeButtonClick}>
      <li>
        <button className={css.buttons__button} id='profile' ><p className={css.buttons__task}>Задание 1</p>
        Профиль социальной сети</button>
      </li>
      <li>
        <button className={css.buttons__button} id='statistics' ><p className={css.buttons__task}>Задание 2</p>
        Секция статистики</button>
      </li>
      <li>
        <button className={css.buttons__button} id='friendList' ><p className={css.buttons__task}>Задание 3</p>
        Список друзей</button>
      </li>
      <li>
        <button className={css.buttons__button} id='transactionHistory' ><p className={css.buttons__task}>Задание 4</p>
        История транзакций</button>
      </li>
      </ul>
      </div>
  );
}