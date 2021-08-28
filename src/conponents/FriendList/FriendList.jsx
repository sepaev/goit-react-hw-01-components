import PropTypes       from 'prop-types';
import css             from './FriendList.module.css';
import { Friend }      from './Friend';
import { goHomeClick } from '../../utils/goHomeClick';

export const FriendList=({ friends }) => {
 return (
  <div className={css.taskThree} >
   <ul className={css._list}>
    {friends.map(({ avatar, name, isOnline, id, color=getColor(isOnline)}) =>
      <Friend
       key={id}
       color={color}
       avatar={avatar}
       name={name}
      />
    )}
   </ul>
   <button className='goHome' onClick={goHomeClick}>go home from FriendList</button>
  </div>
 );
};
function getColor(bool) {
 return (bool) ? 'green' : 'red';
}
FriendList.propTypes={
 friends: PropTypes.arrayOf(PropTypes.object),
};