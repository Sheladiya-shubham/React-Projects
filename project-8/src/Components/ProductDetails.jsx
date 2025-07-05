import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("product")) || [];
    const foundProduct = savedProducts.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  // Handle Product Not Found
  if (!product) {
    return (
      <div className="container my-5">
        <div className="product-not-found text-center">
          <h3>No Product Found</h3>
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        {/* Product Details Card */}
        <div className="row align-items-center bg-white p-4 shadow rounded">
          
          {/* Product Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Product Information */}
          <div className="col-md-6">
            <h2 className="mb-3">{product.name}</h2>

            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Description:</strong> {product.desc}
            </p>
            <p className="h5 text-success">
              Price: ₹{product.price}
            </p>

            <Link to="/" className="btn btn-primary mt-3">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
