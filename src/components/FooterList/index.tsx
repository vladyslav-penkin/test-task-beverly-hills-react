import { FC } from 'react';
import './styles.scss';
import { FooterList as FooterListType } from '@/types/FooterList';
import { FooterLink } from '@components/FooterList/FooterLink';

export const FooterList: FC = () => {
  const footerList = Object.entries(FooterListType);
  return (
    <nav className="FooterList">
       <ul className="FooterList_list">
        {footerList.map(([title, to]) => {
          const lowerCasedTitle = title.toLowerCase();
          const firstCapitalWord = lowerCasedTitle.charAt(0).toUpperCase() + lowerCasedTitle.slice(1);
          return (
            <li className="FooterList_item">
              <FooterLink to={to} title={firstCapitalWord} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};