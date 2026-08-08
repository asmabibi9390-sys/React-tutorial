import { useMemo, useState } from "react";

const products = [
  "Laptop",
  "Mobile",
  "Mouse",
  "Keyboard",
  "Headphones"
];

function ProductSearch() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="product-search">

      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <p key={product}>
          {product}
        </p>
      ))}

    </div>
  );
}

export default ProductSearch;