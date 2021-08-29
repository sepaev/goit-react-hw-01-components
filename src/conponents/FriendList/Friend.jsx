import PropTypes from "prop-types";
import { AvatarImg, ItemLi, NameP, Status } from "./FriendList.styled";

export const Friend = ({ color, avatar, name }) => {
  return (
    <ItemLi>
      <Status color={color}></Status>
      <AvatarImg src={avatar} alt="user avatar" />
      <NameP>{name}</NameP>
    </ItemLi>
  );
};

Friend.propTypes = {
  color: PropTypes.oneOf(["green", "red"]),
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
