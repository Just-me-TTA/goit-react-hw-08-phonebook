import { useSelector } from 'react-redux';
import { List, NavLinkStyled } from './Navigation.styled';
import { selectIsLoggedIn, selectRefreshing } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const notAuthorised = !isLoggedIn && !isRefreshing;

  return (
    <nav>
      <List>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>

        {!isLoggedIn && (
          <>
            <li>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </li>
          </>
        )}

        {!notAuthorised && (
          <li>
            <NavLinkStyled to="/Contacts">Contacts</NavLinkStyled>
          </li>
        )}
      </List>
    </nav>
  );
};
