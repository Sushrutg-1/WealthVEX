import React from "react";

function Awards() {
  return (
    <>
      <section>
        <div className="container my-5 p-5">
          <div className="row">
            <div className="col-6">
              <img
                src="../media/images/largestBroker.svg"
                alt="largestBroker svg"
              />
            </div>
            <div className="col-6 mt-3">
              <h1>Largest stock broker in India.</h1>
              <p className="mt-4">
                2+ million WealthVEX client contributes to over 15% of all
                retail order volumes in india daily by trading and investing in:
              </p>
              <div className="row mt-4 mb-4">
                <div className="col-6">
                  <ul>
                    <li>
                      <p>Future and Options</p>
                    </li>
                    <li>
                      <p>Commodity derivatives</p>
                    </li>
                    <li>
                      <p>currency derivatives</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <p>Future and Options</p>
                    </li>
                    <li>
                      <p>Commodity derivatives</p>
                    </li>
                    <li>
                      <p>currency derivatives</p>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="../media/images/pressLogos.png" alt="PressLogo Image" style={{width:"95%"}} className=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Awards;
