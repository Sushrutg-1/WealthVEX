function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <section>
        <div className="container my-3">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5 p-5">
              <img src={imageURL} alt="kite" style={{ width: "75%" }} />
            </div>
            <div className="col-5 mt-3 p-5">
              <div>
                <h1>{productName}</h1>
                <p className="mt-4">{productDescription}</p>
              </div>
              <div>
                <a
                  href={tryDemo}
                  className="m-3"
                  style={{ textDecoration: "none" }}
                >
                  Try Demo <i className="fa-solid fa-arrow-right-long"></i>{" "}
                </a>
                <a
                  href={learnMore}
                  className="m-5"
                  style={{ textDecoration: "none" }}
                >
                  Learn More{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>{" "}
                </a>
              </div>
              <div className="mt-3">
                <a href={googlePlay} style={{ textDecoration: "none" }}>
                  {" "}
                  <img src="../media/images/googlePlayBadge.svg" alt="" />
                </a>
                <a
                  href={appStore}
                  className="m-5"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <img src="../media/images/appstoreBadge.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftSection;
