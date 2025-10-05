import React from 'react';

const Book = ({ boi }) => {
  const { image } = boi;

  return (
    <div className="card bg-base-100 shadow-sm border">
      <figure className="m-6 py-5 bg-gray-100">
        <img src={image} className="h-44 skew-y-6 shadow-2xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
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
