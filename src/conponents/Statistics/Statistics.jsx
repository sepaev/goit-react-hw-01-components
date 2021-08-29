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
  if (number <= 10) return "#a43cf5";
  if (number <= 20) return "#e54d66";
  if (number <= 50) return "#50c4f7";
  return "#2e9516";
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object),
};
