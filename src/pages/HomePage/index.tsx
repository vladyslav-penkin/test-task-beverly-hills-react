import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';
import { CardsList } from '@components/CardsList';
import { Media } from '@components/Media';
import { Slider } from '@components/Slider';

export const HomePage: FC = () => {
  return (
    <main className="main">
      <Container>
        <CardsList />
      </Container>
      <Media />
      <Slider />
    </main>
  );
};
