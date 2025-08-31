const AddIngredients = (props) => {
  return (
    <form action={props.handleFormAction} className="add-ingredient">
      <input
        aria-label="Add Ingridient"
        placeholder="e.g. Oregano"
        name="ingridient"
        type="text"
        required={true}
      />
      <button>Add Ingridient</button>
    </form>
  );
};

export default AddIngredients;
