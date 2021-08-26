// import React from 'react';
import ReactDOM from 'react-dom';
import user from './json/user.json';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const spanElement = React.createElement('span', { children: 'HELLO' })
// const pElement = React.createElement('p', { children: 'WORLD' })
// const spanElement = <span>HELLO</span>;
// const pElement = <p>WORLD</p>;


// const element = React.createElement('div', {
//   a: 5, b: 10, children: [spanElement, ' ', pElement],
// });

/* <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */

function Card(props) {
  console.log(props);
  return (
    <div className="profile">
      <div className="description">
        <img
          src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
          alt="user avatar"
          className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
// console.log(Card());
ReactDOM.render(<Card a='5' b={10} />, document.getElementById('root'));
// ReactDOM.render(jsxElement, document.getElementById('root'));