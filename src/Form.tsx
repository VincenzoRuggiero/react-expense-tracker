const Form = () => {
  return (
    <div className="p-3">
      <form>
        <div className="mb-2">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select name="category" id="category" className="form-select">
            <option value="" selected>
              Select category
            </option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
