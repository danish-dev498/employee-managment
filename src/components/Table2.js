import { useState } from 'react';

const PRODUCTS = [
  { category: 'react', price: '$1', stocked: true, name: 'Apple' },
  { category: 'react', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'react', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'PHP', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'PHP', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'PHP', price: '$1', stocked: true, name: 'Peas' },
];

function FilterableProductTable({ products }) {
  const [searchField, setSearchField] = useState('');
  const [isInStock, setIsInStock] = useState();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleStockProduct = (e) => {
    setIsInStock(e.target.checked);
  };

  console.log('check data', isInStock);

  return (
    <div>
      <SearchBar
        handleChange={handleChange}
        handleStockProduct={handleStockProduct}
      />
      <ProductTable
        products={products}
        searchField={searchField}
        isInStock={isInStock}
      />
    </div>
  );
}

function SearchBar({ handleChange, handleStockProduct }) {
  return (
    <form>
      <input type='text' placeholder='Search...' onChange={handleChange} />
      <label>
        <input type='checkbox' onChange={handleStockProduct} />
        &nbsp;Only show products in stock
      </label>
    </form>
  );
}

function ProductTable({ products, searchField, isInStock }) {
  const rows = [];
  let lastCat = '';

  //   console.log(searchField);

  const filterData = products.filter((product) => {
    return product.name.toLowerCase().includes(searchField.toLowerCase()) &&
      isInStock
      ? product.stocked === isInStock
      : product;
  });

  console.log(filterData);
  console.log(isInStock);

  return (
    <table width='25%' border='1'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filterData.map((product) => {
          if (product.category != lastCat) {
            rows.push(
              <tr>
                <th colSpan='2'>{product.category}</th>
              </tr>
            );
          }
          rows.push(
            <tr>
              <td>
                {product.name} {product.stocked ? '' : '(Out of stock)'}
              </td>
              <td>{product.price}</td>
            </tr>
          );
          lastCat = product.category;
        })}
        {rows}
      </tbody>
    </table>
  );
}

export default function ProductsList() {
  return <FilterableProductTable products={PRODUCTS} />;
}
