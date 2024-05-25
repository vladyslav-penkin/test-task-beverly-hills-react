import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';
import { FooterList } from '@components/FooterList';

export const Footer: FC = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer_container">
          <img className="Footer_image" src="./src/assets/images/eighteen.png" alt="adult" />
          <section className="Footer_disclaimer">
            <h2 className="Footer_title">Disclaimer:</h2>
            <p className="Footer_description">
              This website is intended for individuals over 18 years old. test-task-beverly-hills.onrender.com offers a variety of
              free social casino games. It is important to know that test-task-beverly-hills.onrender.com does not offer real
              money winnings. Players cannot wager or win real money. Please note that success here does not guarantee
              future success in playing for real money.
            </p>
          </section>
        </div>
        <FooterList />
        <p className="Footer_allRights">© 2019-2024 Relax Gaming Group. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};
