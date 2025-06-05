import { useState } from "react";
import "./App.css";
// import "./easy1.css";
import { Card } from "./boot";

let data = [
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg",
    title: "Basic Tee 8-Pack",
    text: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    color: "8 colors",
    price: 256,
    info: "sorem1",
  },
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg",
    title: "Basic Tee",
    text: "Look like a visionary CEO and wear the same black shirt every day.",
    color: "Black",
    price: 50,
    info: "sorem1",
  },
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-03.jpg",

    title: "Basic White Tee",
    text: "It's probably, like, 5000 kelvin instead of 6000 K.",
    color: "White",
    price: 32,
    info: "sorem1",
  },
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-04.jpg",

    title: "Stone Basic Tee",
    text: "White tees stain easily, and black tees fade. This is going to be gray for a while.",
    color: "Charcoal",
    price: 32,
    info: "sorem1",
  },
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-05.jpg",

    title: "Fall Basic Tee 3-Pack",
    text: "Who need stark minimalism when you could have earth tones? Embrace the season.",
    color: "3 Colors",
    price: 96,
    info: "sorem1",
  },
  {
    picture:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-05.jpg",

    title: "Fall Basic Tee 3-Pack",
    text: "Who need stark minimalism when you could have earth tones? Embrace the season.",
    color: "3 Colors",
    price: 96,
    info: "sorem1",
  },
];
function App() {
  const [value, setValue] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const handleProduct = (data) => {
    setValue(true);
    setSingleProduct(data);
  };
  const handleClose = () => {
    setValue(false);
  };
  return (
    <div className="container">
      <div className="main">
        {data.map((item) => (
          <Card
            picture={item.picture}
            title={item.title}
            text={item.text}
            color={item.color}
            price={item.price}
            clickFunction={() => handleProduct(item)}
            info={item.info}
          />
        ))}
      </div>

      {value && (
        <div className="infoItem-button">
          <button className="close-button" onClick={handleClose}>
            close
          </button>
          <h3 className="info-container">{singleProduct.title}</h3>
          <p className="info-container">{singleProduct.text}</p>
          <img src={singleProduct.picture} alt="item photo" />
        </div>
      )}
    </div>
  );
}

export default App;
