import React, { useState } from 'react';
import './Invoice.scss';

const Invoice = () => {
  const [values, setValues] = useState({
    description: '',
    quantity: '',
    cost: '',
    listItems: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="invoice-container">
      <h1>Invoizer</h1>
      <div className="add-form-container">
        <form>
          <div className="label-input-group">
            <div>
              <label htmlFor="trxDescription">Description</label>
              <input
                type="text"
                placeholder="Enter transaction item"
                name="description"
                label="Description"
                onChange={handleChange}
                value={values.description}
                required
              />
            </div>
            <div>
              <label htmlFor="trxQuantity">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                value={values.quantity}
                required
              />
            </div>
            <div>
              <label htmlFor="trxCost">Cost</label>
              <input
                type="number"
                placeholder="Enter unit cost"
                name="cost"
                label="Cost"
                onChange={handleChange}
                value={values.cost}
                required
              />
            </div>
            <input type="submit" value="Add item" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invoice;
