const Ingredients = (props) => {
  return (
    <div>
      <h1>Ingredients on hand:</h1>
      <ul>
        {props.ingredients.map((item, indx) => (
          <li key={indx} className="list-items">
            {item}
          </li>
        ))}
      </ul>
      <div className="dialog-box">
        <div>
          <h4>Ready for a recipe?</h4>
          <p>Generate a receipe from the list of ingredients.</p>
        </div>
        <button
          onClick={props.toggle}
          title={
            props.ingredients.length <= 3
              ? "Please add Atleast 4 Ingredients"
              : undefined
          }
          disabled={props.ingredients.length <= 3}
          style={{
            opacity: props.ingredients.length > 3 ? "1" : "0.6",
            cursor: props.ingredients.length <= 3 && "none",
          }}
        >
          Get a receipe
        </button>
      </div>
    </div>
  );
};
export default Ingredients;
