import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';

export const ContactsPage: FC = () => {
  return (
    <div className="ContactsPage">
      <Container>
        <form className="ContactsPage_form">
          <h2 className="ContactsPage_title">Contact</h2>
          <input className="ContactsPage_input" type="text" placeholder="Name:" required />
          <input className="ContactsPage_input" type="email" placeholder="E-mail" required />
          <button className="ContactsPage_button">Submit</button>
        </form>
      </Container>
    </div>
  );
};