import React, { useContext } from 'react';
import { ReadContext } from '../../App';

const ReadBooks = () => {
  const [read, setRead] = useContext(ReadContext);
  return (
    <div className="flex flex-col gap-5">
      {read.map((r) => (
        <div key={r.bookId} className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img className="h-44" src={r.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{r.bookName}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
