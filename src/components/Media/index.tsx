import { FC, useEffect, useRef } from 'react';
import './styles.scss';
import { useLocation } from 'react-router-dom';
import { Container } from '@components/Container';
import { MediaVideo } from '@components/Media/MediaVideo';

export const Media: FC = () => {
  const { pathname } = useLocation();
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pathname === '/game') {
      mediaRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="Media" ref={mediaRef}>
        <Container>
          <div className="Media_container">
            <h2 className="Media_title">Premium Free Online Game!</h2>
            <p className="Media_description">
              Enjoy high-quality, free slot machines without risk! Developed by leading software developers, they
              offer unique themes, captivating graphics, and generous bonuses. Available on online casinos and gaming
              platforms. Discover the world of risk-free entertainment and get to know the game!
            </p>
          </div>
          <MediaVideo />
        </Container>
      </section>
  );
};