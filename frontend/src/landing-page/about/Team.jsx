function Team() {
  return (
    <section>
      <div className="container">
        <div className="row mb-2 border-top pt-5">
          <h1 className="fs-3 text-center">People</h1>
        </div>
        <div className="row mt-5 p-5">
          <div className="col-6 text-center ml-5 ">
            <img
              src="../media/images/nithinKamath.jpg"
              alt="Profile"
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h4 className="mt-3">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6  p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              {" "}
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
