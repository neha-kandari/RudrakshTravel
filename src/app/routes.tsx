import { createBrowserRouter } from 'react-router';
import { RootLayout } from './pages/RootLayout';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
