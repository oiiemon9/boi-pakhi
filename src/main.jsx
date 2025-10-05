import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';

const dataPromises = fetch(
  'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
).then((res) => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<p>loading....</p>}>
            <Home dataPromises={dataPromises}></Home>
          </Suspense>
        ),
      },
      {
        path: 'listed-books',
        Component: ListedBooks,
      },
      {
        path: 'pages-read',
        Component: PagesToRead,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
