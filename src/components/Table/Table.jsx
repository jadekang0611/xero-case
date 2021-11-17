import React from 'react';
import './Table.scss';

const Table = (props) => {
  function calculateSum(arr) {
    let sum = 0;
    arr.forEach((el) => {
      sum += el.cost * el.quantity;
    });
    if (sum > 0) {
      return sum;
    }
  }
  return (
    <div className="custom-table-container">
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Price</th>
          </tr>
          {props.listItems.map((item, i) => {
            return (
              <tr key={item.description - i.toString()}>
                <th>{item.description}</th>
                <th>${item.quantity}</th>
                <th>${item.cost}</th>
                <th>${item.cost * item.quantity}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <h2>Total: ${calculateSum(props.listItems)}</h2>
      </div>
    </div>
  );
};

export default Table;
