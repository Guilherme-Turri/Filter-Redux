import React from 'react';
import { useSelector } from 'react-redux';

const filterColors = (colors) => (prodct) =>
  !colors.length || colors.includes(prodct.color);

const filterPrices = (prices) => (prodct) =>
  (!prices.max || prodct.price <= prices.max) &&
  (!prices.min || prodct.price >= prices.min);

const filterProducts = ({ prodcts }) => {
  const { data, filters } = prodcts;
  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
};

const Products = () => {
  const data = useSelector(filterProducts);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, color, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
