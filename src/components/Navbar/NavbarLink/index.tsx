import { FC } from 'react';
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  to: string;
}

export const NavbarLink: FC<Props> = ({ title, to }) => {
  const { pathname } = useLocation();
  let href = pathname;
  if (href === '/home') href = '/';

  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('NavbarLink', { 'NavbarLink-active': isActive })}
    >
      {title}
      {to === href && (
        <motion.div className="NavbarLink_background" layoutId="underline" />
      )}
    </NavLink>
  );
};