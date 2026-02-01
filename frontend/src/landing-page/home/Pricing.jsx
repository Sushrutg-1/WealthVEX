import React from "react";

function Pricing() {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row p-5">
            <div className="col-4">
              <h1 className="fs-2">Unbeatable Pricing</h1>
              <p>
                We pioneered the concept of discount broking and price
                transparency in india. Flat fees and no hidden charges.
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                See pricing <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
              <div className="row text-center">
                <div className="col border p-3">
                  <h1 className="text">&#x20B9;0</h1>
                  <p>
                    Free equity delivery and <br /> direct mutual funds.
                  </p>
                </div>
                <div className="col border p-3">
                  <h1>&#x20B9;20</h1>
                  <p>Indraday and F&O.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
