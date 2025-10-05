import React, { use } from 'react';
import Book from './Book';

const Home = ({ dataPromises }) => {
  const data = use(dataPromises);
  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl font-bold">Book</h1>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {data.map((boi) => (
          <Book key={boi.bookId} boi={boi}></Book>
        ))}
      </div>
    </div>
  );
};

export default Home;
