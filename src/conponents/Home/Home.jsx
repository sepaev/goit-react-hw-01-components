import css                  from './Home.module.css';
import { homeButtonClick }  from '../../utils/homeButtonClick'


export const HomeButtons=() => {
 return (
  <div className={css._container}>
   <h1 className={css._title}>Home work 01 REACT 'COMPONENTS'</h1>
   <ul className={css._list} onClick={homeButtonClick}>
    <li>
     <button className={css._button} id='profile' ><span className={css._task}>Задание 1</span>
     Профиль социальной сети</button>
    </li>
    <li>
     <button className={css._button} id='statistics' ><span className={css._task}>Задание 2</span>
     Секция статистики</button>
    </li>
    <li>
     <button className={css._button} id='friendList' ><span className={css._task}>Задание 3</span>
     Список друзей</button>
    </li>
    <li>
     <button className={css._button} id='transactionHistory' ><span className={css._task}>Задание 4</span>
     История транзакций</button>
    </li>
   </ul>
  </div>
 );
}