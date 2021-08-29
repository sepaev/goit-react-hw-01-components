import PropTypes from "prop-types";
import { Friend } from "./Friend";
import { goHomeClick } from "../../utils/goHomeClick";
import { ListUl, TaskThreeDiv } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <TaskThreeDiv>
      <ListUl>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Friend
            key={id}
            color={isOnline ? "green" : "red"}
            avatar={avatar}
            name={name}
          />
        ))}
      </ListUl>
      <button className="goHome" onClick={goHomeClick}>
        go home from FriendList
      </button>
    </TaskThreeDiv>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
