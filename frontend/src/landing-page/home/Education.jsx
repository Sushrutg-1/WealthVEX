function Education() {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row p-5">
            <div className="col-5">
              <img
                src="../media/images/education.svg"
                alt="Education SVG Image"
                style={{ width: "90%" }}
              />
            </div>
            <div className="col-1"></div>
            <div className="col-6 mt-4">
              <h1 className="fs-2 mb-5">Free and open market education</h1>
              <p>
                varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                Versity <i className="fa-solid fa-arrow-right-long"></i>
              </a>
              <p className="mt-5">
                Trading Q&A the most active trading and investment community in
                india for all your market related queries.
              </p>
              <a href="" style={{ textDecoration: "none" }}>
                Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
