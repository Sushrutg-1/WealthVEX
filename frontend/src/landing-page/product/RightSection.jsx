function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5 my-5 p-5 ">
              <div className="px-5 mt-3">
                <h1>{productName}</h1>
                <p className="mt-4 ">{productDescription}</p>
              </div>
              <div className="px-5">
                <a href={learnMore} style={{ textDecoration: "none" }}>
                  Learn More{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>{" "}
                </a>
              </div>
            </div>
            <div className="col-5  p-5">
              <img src={imageURL} alt="kite" style={{ width: "75%" }} />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RightSection;
