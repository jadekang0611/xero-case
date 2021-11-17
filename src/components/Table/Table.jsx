import React from 'react';
import './Table.scss';

const Table = (props) => {
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
    </div>
  );
};

export default Table;
