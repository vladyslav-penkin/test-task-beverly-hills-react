import { FC } from 'react';
import './App.scss';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { ContactsPage } from '@pages/ContactsPage';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="game" element={<HomePage />} />
            <Route path="privacy" element={<Navigate to="/" />} />
            <Route path="cookie" element={<Navigate to="/" />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};