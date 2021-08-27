import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { goHomeClick } from '../../utils/goHomeClick';

export const Statistics = (props)  => {
console.log(props.stats);
  return (
    <div className={css.taskTwo}>
      <section className={css._container}>
        <h2 className={css._title}>{props.title}</h2>

        <ul className={css._statList}>
          {props.stats.map(({id, label, percentage, color = getColor(percentage)}) => 
          <li key ={id} className={css.[`_statItem_${color}`]}>
            <span className={css._label}>{label}</span>
            <span className={css._percentage}>{percentage}%</span>
          </li>
          )}
        </ul>
      </section>
      <button className='goHome' onClick={goHomeClick}>go home from Statistics</button>
    </div>
  );
};

function getColor(number) {
  if (number <= 10) return 'purple';
  if (number <= 20) return 'red';
  if (number <= 50) return 'blue';
  return 'green';
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object),
};