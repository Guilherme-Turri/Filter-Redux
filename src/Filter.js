import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, selectUniqueColors } from './store/products';

const Filter = () => {
  const colors = useSelector(selectUniqueColors);
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [selectColors, setSelectedColors] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectColors }));
  }, [selectColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      }),
    );
  }, [minPrice, maxPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectColors, target.value]);
    } else {
      setSelectedColors(selectColors.filter((color) => color !== target.value));
    }
  }

  function handleChecked(color) {
    return selectColors.includes(color);
  }

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="min"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="max"
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={handleChecked(color)}
            onClick={handleChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filter;
