import React, { useState } from 'react';
import { Link } from 'react-router';

const Book = ({ boi }) => {
  const { image, bookName, tags, author, bookId } = boi;
  const [hoverStyle, setHoverStyle] = useState(false);

  return (
    <Link
      to={`/book/${bookId}`}
      onMouseEnter={() => setHoverStyle(true)}
      onMouseLeave={() => setHoverStyle(false)}
      className="card bg-base-100 shadow-sm border cursor-pointer"
    >
      <figure className="m-6 py-5 bg-gray-100">
        <img
          src={image}
          className={`h-44  ${
            hoverStyle ? 'skew-y-0' : 'skew-y-6'
          } shadow-2xl transition duration-300`}
        />
      </figure>
      <div className="card-body">
        <div className="card-actions flex-row gap-5 text-green-500">
          {tags.map((tag, i) => (
            <div key={i} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
      </div>
    </Link>
  );
};

export default Book;

// {
//     "bookId": 9,
//     "bookName": "The Girl on the Train",
//     "author": "Paula Hawkins",
//     "image": "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 316,
//     "rating": 4.2,
//     "category": "Mystery",
//     "tags": [
//         "Suspense",
//         "Psychological"
//     ],
//     "publisher": "Riverhead Books",
//     "yearOfPublishing": 2015
// }
