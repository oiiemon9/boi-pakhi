import React, { use, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ReadContext } from '../../App';

const BookInfo = ({ dataPromises }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = use(dataPromises);
  const { bookName, author, category, review, image, tags } = data.find(
    (b) => b.bookId === parseInt(id)
  );
  const [read, setRead] = useContext(ReadContext);
  const handelRead = () => {
    const added = read.some((book) => parseInt(id) === book.bookId);
    if (added) {
      alert('already read');
      return;
    }
    const book = data.find((b) => b.bookId === parseInt(id));
    const newArray = [...read, book];
    setRead(newArray);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm gap-10">
      <figure className="flex-1">
        <img className="" src={image} />
      </figure>
      <div className=" flex-1">
        <h1 className="card-title text-2xl font-bold">{bookName}</h1>
        <p>Click the button to listen on Spotiwhy app.</p>
        <p>By:{author} </p>
        <h6>{category}</h6>
        <p>
          <span className="font-bold">Review:</span>
          {review}
        </p>
        <div className="flex gap-2">
          <h4 className="font-bold">Tag</h4>
          {tags.map((tag, i) => (
            <p key={i} className="text-green-500">
              {tag}
            </p>
          ))}
        </div>
        <div className="flex gap-2 mt-10">
          <button onClick={handelRead} className="btn">
            Read
          </button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
        <div>
          <button className="btn btn-info" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;

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
