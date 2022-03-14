import React from "react";
import { Rating } from "./Rating";

export const ShopSection = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <div className="shop col-lg-4 col-md-6 col-sm-6">
                  <div className="border-product">
                    <div className="shopBack">
                      <img src="/images/6.png" alt="first product" />
                    </div>

                    <div className="shoptext">
                      <p>product name</p>
                    </div>

                    <Rating value={5} text={`${3} reviews`} />

                    <h3>$494</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
