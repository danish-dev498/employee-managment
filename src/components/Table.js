import React from 'react';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function ProductTable({ products }) {
  const categories = [...new Set(products.map((product) => product.category))];
  console.log(categories);

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <tr>
              <td colSpan='4'>
                <strong>{category}</strong>
              </td>
            </tr>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stocked ? 'Yes' : 'No'}</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

function AppData() {
  return (
    <div>
      <h2>Products</h2>
      <ProductTable products={PRODUCTS} />
    </div>
  );
}

export default AppData;
