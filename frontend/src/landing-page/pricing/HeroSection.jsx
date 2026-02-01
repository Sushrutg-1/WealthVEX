import React from "react";

function HeroSection() {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row text-center my-5 py-5 border-bottom">
            <h1>Pricing</h1>
            <p className="text-muted">
              Free equity investment and flat &#8377;20 traday and F&O trades.
            </p>
          </div>
          <div className="row text-center p-5">
            <div className="col-4 px-5">
              <img src="../media/images/pricingEquity.svg" alt="" />
              <h3> Free equity delivery </h3>
              <p className="text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
            <div className="col-4 px-5">
              <img src="../media/images/intradayTrades.svg" alt="" />
              <h3> Intraday and F&O trades </h3>
              <p className="text-muted">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades
              </p>
            </div>
            <div className="col-4 px-5">
              <img src="../media/images/pricingEquity.svg" alt="" />
              <h3> Free direct MF</h3>
              <p className="text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
