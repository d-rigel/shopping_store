import React from "react";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";
import products from "../../data/products";
import { Pagination } from "./Pagination";
export const ShopSection = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}>
                    <div className="border-product">
                      <div className="shopBack">
                        <Link to={`/products/${product._id}`}>
                          <img src={product.image} alt={product.name} />
                        </Link>
                      </div>

                      <div className="shoptext">
                        <Link to={`/product/${product._id}`}>
                          <p>{product.name}</p>
                        </Link>
                      </div>

                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />

                      <h3>${product.price}</h3>
                    </div>
                  </div>
                ))}
                {/* pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
