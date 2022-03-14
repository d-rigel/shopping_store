import React from "react";
import { Header } from "../components/header/Header";
import { Rating } from "../components/homeComponents/Rating";
import { Message } from "../components/LoadingComps/ErrorMsg";
export const SingleProduct = () => {
  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src="/images/7.png" alt="product name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name"> product name</div>
              </div>
              <p>Product description</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center ">
                  <h6>Price</h6>
                  <span>$559</span>
                </div>

                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  <span> In Stock</span>
                  <span> unavailable</span>
                </div>

                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                  <Rating value={4} text={`${5} reviews`} />
                </div>
                <>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>Quantity</h6>
                    <select>
                      <option value={3}>4</option>
                    </select>
                  </div>
                  <button className="round-black-btn">Add To Cart</button>
                </>
              </div>
            </div>
          </div>
        </div>

        {/* RATINGS */}
        <div className="">
          <div className="col-md-6">
            <h6 className="mb-6">REVIEW</h6>
            <Message variant={"alert-info mt-3"}>No Reviews</Message>
            <div className="mb-5 ">
              <strong>Admin Rigel</strong>
              <Rating />
              <span>February 18th 2022</span>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
