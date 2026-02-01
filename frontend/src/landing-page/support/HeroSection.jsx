function HeroSection() {
  return (
    <>
      <section className="container-fluid my-5" id="supportHero">
        <div className="container my-5 p-5">
          <div className="row mb-5" id="supportWrapper">
            <div className="col-6  text-center">
              {" "}
              <h3 className="fs-4">Support Portal</h3>
            </div>
            <div className="col-6 text-center">
              {" "}
              <a href="">Track Ticket</a>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-5">
              <h2 className="mb-4">
                Search for an answer or browse help topics to create a ticket
              </h2>
              <input
                className="mb-4"
                type="text"
                placeholder="Eg: how do i activate F&O"
              />
              <a href="">Track account opening</a>

              <a href="">Track segment activation</a>

              <a href="">Intraday margins</a>

              <a href="">Kite user manual</a>
            </div>
            <div className="col-2"></div>
            <div className="col-5 ">
              <h3>Features</h3>
              <ol>
                <li>
                  <a href=""> Current Takeovers and Delisting – January 2024</a>
                </li>
                <li>
                  {" "}
                  <a href="">Latest Intraday leverages – MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
