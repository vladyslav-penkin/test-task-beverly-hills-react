import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';
import { Navbar } from '@components/Navbar';

export const Header: FC = () => {
  return (
    <header className="Header">
      <Container>
        <Navbar />
        <h1 className="Header_title">
          Explore our highly acclaimed website featuring high-quality free social casino slot games.
        </h1>
      </Container>
    </header>
  );
};