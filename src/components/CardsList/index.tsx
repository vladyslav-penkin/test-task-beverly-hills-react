import { FC } from 'react';
import './styles.scss';
import cards from '@api/cards.json';
import { CardInfo } from '@components/CardInfo';

export const CardsList: FC = () => {
  return (
    <section className="CardsList">
      {cards.map(({ image, title, description }) => (
        <CardInfo key={title} image={image} title={title} description={description} />
      ))}
    </section>
  );
};