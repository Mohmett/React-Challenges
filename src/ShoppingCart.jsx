import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  // inputs
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState("");

  // Add to DOM
  const handleAddProduct = () => {
    const newProduct = {
      id: crypto.randomUUID(),
      name: productName,
      price: price,
      quantity: 3,
    };

    setProducts([...products, newProduct]);

    console.log(newProduct);
  };

  return (
    <>
      <h1>Simple Shopping Cart</h1>
      <div>
        <h3>Add a new product</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
        <div>
          <h3>Products in Card</h3>
          <ol style={{display:"flex", flexDirection:"column", gap:"20px", backgroundColor:"darkGreen", borderRadius:"10px"}}>
            {products.map((product) => (
              <>
                <li style={{padding:"10px", color:"white"}}>
                  <span>{product.name}</span> - <span>${product.price}</span>{" "}
                  <br />
                  <span style={{display:"flex",gap:"5px", alignItems:"center"}}>
                    Quantity:{" "}
                    <button
                      onClick={() => {
                        setProducts(
                          products.map((p) =>
                            p.id === product.id && p.quantity > 1
                              ? { ...p, quantity: p.quantity - 1 }
                              : p,
                          ),
                        );
                      }}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button 
                    onClick={() => {
                                        setProducts(products.map(p =>
                                            p.id === product.id ?{...p, quantity: p.quantity+1} :p
                                        ));
                                    }}
                    >+</button>
                  </span> 
                  <br />
                  <button onClick={() => {
                                        setProducts(products.filter(pr => pr.id !== product.id));
                                    }}>Remove</button>
                </li>
                <h3 style={{color:"whitesmoke"}}>
                  Total Price:
                  <span>${product.price * product.quantity}</span>
                </h3>
              </>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
