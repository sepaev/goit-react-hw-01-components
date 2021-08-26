import css from './Home.module.css';
import { homeButtonClick } from '../../utils/homeButtonClick'
export const HomeButtons = (props) => {
  console.log(props);
  return (
    <div className={css.wrapper}>
    <ul className={css.list}>
      <li>
        <button className={css.button} id={1} ><p className={css.task}>Задание 1</p>
        Профиль социальной сети</button>
      </li>
      <li>
        <button className={css.button} id={2} ><p className={css.task}>Задание 2</p>
        Секция статистики</button>
      </li>
      <li>
        <button className={css.button} id={3} ><p className={css.task}>Задание 3</p>
        Список друзей</button>
      </li>
      <li>
        <button className={css.button} id={4} ><p className={css.task}>Задание 4</p>
        История транзакций</button>
      </li>
      </ul>
      </div>
  );
}

export const loadListner = () => {
  console.log(css);
  document.querySelector(`.${css.list}`).addEventListener('click', homeButtonClick);
}
