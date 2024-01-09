import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrap } from './Layout.styled';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Wrap>
  );
};

export default Layout;
