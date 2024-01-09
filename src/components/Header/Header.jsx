import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export const Header = () => {
  const { name } = useSelector(selectUser);

  return (
    <HeaderStyled>
      <Navigation />
      {name && <UserMenu />}
    </HeaderStyled>
  );
};
