import { FC } from 'react';
import { NavbarList } from '@components/Navbar/NavbarList';

export const Navbar: FC = () => {
  return (
    <nav className="Navbar">
      <NavbarList />
    </nav>
  );
};