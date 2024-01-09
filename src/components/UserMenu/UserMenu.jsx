import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Button, Greeting, Name, UserMenuWrap } from './UserMenu.styled';
import { logout } from '../../redux/auth/operations';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuWrap>
      <Greeting>
        Hello, <Name>{name}</Name>
      </Greeting>
      <Button type="button" aria-label="Logout" onClick={handleLogout}>
        Logout
      </Button>
    </UserMenuWrap>
  );
};
