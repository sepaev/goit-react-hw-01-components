import styled from "@emotion/styled";

export const TaskThreeDiv = styled.section`
  text-align: center;
  margin: auto;
`;

export const ListUl = styled.ul`
  display: block;
  margin: auto;
  width: fit-content;
`;

export const ItemLi = styled.li`
  display: flex;
  height: 108px;
  align-items: center;
  filter: drop-shadow(0px 2px 4px #a5a5a5);
  background-color: white;
  margin-bottom: 16px;
  width: 400px;
  padding: 6px 18px;
`;

export const AvatarImg = styled.img`
  width: 96px;
  height: 96px;
  border: rgba(226, 221, 221, 0.83) 1px solid;
  margin-left: 16px;
  border-radius: 10px;
  background-color: rgba(243, 238, 238, 0.83);
`;

export const NameP = styled.p`
  color: green;
  font-size: 25px;
  color: black;
  padding: 34px 0;
  margin: 0;
  margin-left: 20px;
  width: 100%;
  text-align: left;
  font-weight: 600;
`;

export const Status = styled.span`
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
