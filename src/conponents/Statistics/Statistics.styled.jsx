import styled from "@emotion/styled";

export const TaskTwoSection = styled.section`
  text-align: center;
`;

export const ContainerDiv = styled.div`
  margin: auto;
  text-align: crnter;
  background-color: #eff3f6;
  min-width: 375px;
  height: 250px;
  margin: auto;
  padding: 60px 50px;
  display: block;
  width: fit-content;
`;

export const TitleH2 = styled.h2`
  font-weight: 700;
  background-color: white;
  text-align: center;

  width: 100%;
  text-transform: uppercase;
  color: #4c575d;
  padding: 30px;
  font-size: 16px;
  margin: 0;
`;
export const StatListUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatItemLi = styled.li`
  width: 68px;
  padding: 10px;
  text-align: center;
  color: white;
  font-weight: 700;
  background-color: ${({ color }) => {
    switch (color) {
      case "purple":
        return "#a43cf5";
      case "red":
        return "#e54d66";
      case "blue":
        return "#50c4f7";
      case "green":
        return "#2e9516";
      default:
        return "#000";
    }
  }};
`;

export const LabelSpan = styled.span`
  display: block;
  margin-bottom: 9px;
`;

export const PercentageSpan = styled.span`
  display: block;
`;
