import { FC } from 'react';
import './styles.scss';
import { NavbarLink } from '../NavbarLink';
import { NavList } from '@/types/NavList';

export const NavbarList: FC = () => {
  const navbarList = Object.entries(NavList);
  return (
    <ul className="NavbarList">
      {navbarList.map(([title, to]) => {
        const lowerCasedTitle = title.toLowerCase();
        const firstCapitalWord = lowerCasedTitle.charAt(0).toUpperCase() + lowerCasedTitle.slice(1);
        return (
          <li className="NavbarList_item">
            <NavbarLink to={to} title={firstCapitalWord} />
          </li>
        );
      })}
    </ul>
  );
};