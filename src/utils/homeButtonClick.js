import ReactDOM from 'react-dom';
import { Profile } from '../conponents/SocialProfile/SocialProfile';
export const homeButtonClick = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    const homeWorkNumber = (e.target.id) ? e.target.id : e.target.parentNode.id;
    console.log(homeWorkNumber);
    ReactDOM.render(<Profile a='5' b={10} />, document.getElementById('root'));

}