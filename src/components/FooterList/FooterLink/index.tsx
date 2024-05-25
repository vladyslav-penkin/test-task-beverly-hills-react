import { FC } from 'react';
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  to: string;
}

export const FooterLink: FC<Props> = ({ title, to }) => {
  const { pathname } = useLocation();
  let href = pathname;
  if (href === '/home') href = '/';

  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('FooterLink', { 'FooterLink-active': isActive })}
    >
      {title}
      {to === href && (
        <motion.div className="FooterLink_background" layoutId="underline-1" />
      )}
    </NavLink>
  );
};