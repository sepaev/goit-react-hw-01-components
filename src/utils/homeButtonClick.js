import ReactDOM from 'react-dom';
import { Profile } from '../conponents/SocialProfile/SocialProfile';
import { Statistics } from '../conponents/Statistics/Statistics';
import { FriendList } from '../conponents/FriendList/FriendList';
import { TransactionHistory } from '../conponents/TransactionHistory/TransactionHistory';
import user from '../json/user.json';
export const homeButtonClick = e => {
  if (e.target.nodeName !== 'BUTTON') return;
  console.log(typeof e.target.id);
  switch (e.target.id) {
    case 'profile':
      ReactDOM.render(
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />,
        document.getElementById('root'),
      );
      break;
    case 'statistics':
      ReactDOM.render(<Statistics />, document.getElementById('root'));
      break;
    case 'friendList':
      ReactDOM.render(<FriendList />, document.getElementById('root'));
      break;
    case 'transactionHistory':
      ReactDOM.render(<TransactionHistory />, document.getElementById('root'));
      break;
    default:
      break;
  }
};
