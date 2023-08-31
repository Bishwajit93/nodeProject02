import React from 'react';

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form className="row g-2">
        <div className="col-12 col-md-4">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-12 col-md-4">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
        <div className="col-12 col-md-3">
          <select className="form-select my-1 mr-sm-2">
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="col-12 col-md-1">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
