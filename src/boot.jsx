// import {} from "./App";
export function Card(props) {
  return (
    <div className="card-container">
      <img className="pic-container" src={props.picture} alt="item photo" />
      <h5 className="price">{props.title}</h5>
      <p className="text-container">{props.text}</p>

      <p className="color">{props.color}</p>
      <p className="price">${props.price}</p>
      <div className="button-container">
        <button
          onClick={() => props.clickFunction(props)}
          className="button-detail"
        >
          Show product details
        </button>
      </div>
    </div>
  );
}
