import PropTypes from "prop-types";
import { LabelSpan, PercentageSpan, StatItemLi } from "./Statistics.styled";

export const Stat = ({ color, label, percentage }) => {
  return (
    <StatItemLi color={color}>
      <LabelSpan>{label}</LabelSpan>
      <PercentageSpan>{percentage}%</PercentageSpan>
    </StatItemLi>
  );
};

Stat.propTypes = {
  color: PropTypes.oneOf(["purple", "red", "blue", "green"]),
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
