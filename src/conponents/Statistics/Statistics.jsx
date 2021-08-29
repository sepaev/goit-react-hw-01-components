import PropTypes from "prop-types";
import { Stat } from "./Stat";
import { goHomeClick } from "../../utils/goHomeClick";
import {
  ContainerDiv,
  StatListUl,
  TaskTwoSection,
  TitleH2,
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <TaskTwoSection>
      <ContainerDiv>
        <TitleH2>{title}</TitleH2>
        <StatListUl>
          {stats.map(({ id, label, percentage }) => (
            <Stat
              key={id}
              label={label}
              percentage={percentage}
              color={getColor(percentage)}
            />
          ))}
        </StatListUl>
      </ContainerDiv>
      <button className="goHome" onClick={goHomeClick}>
        go home from Statistics
      </button>
    </TaskTwoSection>
  );
};

function getColor(number) {
  if (number <= 10) return "purple";
  if (number <= 20) return "red";
  if (number <= 50) return "blue";
  return "green";
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object),
};
