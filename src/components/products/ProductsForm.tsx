import React from "react";

const ProductForm: React.FC = () => {
  return (
    <div className="col-xl-7 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Product Edit</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Category</label>
                <select id="inputState" className="form-control">
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Description</label>
              <input type="text" className="form-control" id="inputDescription" placeholder="" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputAmount">Amount</label>
                <input type="number" className="form-control" id="inputAmount" placeholder="0" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPrice">Price</label>
                <input type="number" className="form-control" id="inputPrice" placeholder="0" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Has expiry date
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;