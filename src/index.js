import './index.css';
import ReactDOM from 'react-dom';
import { HomeButtons, loadListner } from './conponents/Home/Home'
ReactDOM.render(<HomeButtons a='5' b={10} />, document.getElementById('root'));
loadListner();