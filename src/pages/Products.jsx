import { useState } from "react";
import { Package, Edit3, Trash2 } from "lucide-react";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Subscription", price: "$29.99", stock: "In Stock", sales: 150 },
    { id: 2, name: "Enterprise License", price: "$199.00", stock: "Limited", sales: 45 },
    { id: 3, name: "Basic Cloud Plan", price: "$9.99", stock: "In Stock", sales: 320 },
  ]);

  /* Add New Product */
  const addProduct = () => {
    const name = prompt("Enter product name");
    const price = prompt("Enter price");
    const stock = prompt("Enter stock status");
    const sales = prompt("Enter sales");

    if (name && price) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        stock,
        sales,
      };

      setProducts([...products, newProduct]);
    }
  };

  /* Delete Product */
  const deleteProduct = (id) => {
    const updated = products.filter((item) => item.id !== id);
    setProducts(updated);
  };

  /* Edit Product */
  const editProduct = (id) => {
    const product = products.find((item) => item.id === id);

    const newName = prompt("Edit name", product.name);
    const newPrice = prompt("Edit price", product.price);

    const updatedProducts = products.map((item) =>
      item.id === id
        ? { ...item, name: newName || item.name, price: newPrice || item.price }
        : item
    );

    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Products & Services</h2>
        <button className="addBtn" onClick={addProduct}>
          + Add Product
        </button>
      </header>

      <div className="grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <div className="iconBox">
              <Package size={32} />
            </div>

            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>

            <div className="stats">
              <span>
                Stock: <strong>{item.stock}</strong>
              </span>
              <span>
                Sales: <strong>{item.sales}</strong>
              </span>
            </div>

            <div className="actions">
              <button className="edit" onClick={() => editProduct(item.id)}>
                <Edit3 size={16} /> Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteProduct(item.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;