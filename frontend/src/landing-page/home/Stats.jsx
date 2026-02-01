function Stats() {
  return (
    <>
      <section>
        <div className="container my-5 p-5">
          <div className="row py-5">
            <div className="col-6 ">
              <h1 className="fs-2 pb-5 mt-5">Trust with confidence </h1>
              <h2 className="fs-4">customer-first always</h2>
              <p className="text-muted">
                That's why 1.3+ crore customer trust WealthVEX with &#x20B9;
                3.5+ lakh crore worth of equity investment.
              </p>
              <h2 className="fs-4">No spam or gimmicks</h2>
              <p className="text-muted">
                no gimmicks, spams, "gamification", or annoying push
                notifications. High quality apps that you use at you pace, the
                way you like.
              </p>
              <h2 className="fs-4">The WealthVEX universe</h2>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investment in 30+
                fintech startup offers you tailored services specific to your
                needs.
              </p>
              <h2 className="fs-4">Do better with money</h2>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilatate transaction but actively help you do better with
                money.
              </p>
            </div>
            <div className="col-6 ">
              <img
                src="../media/images/ecosystem.png"
                alt="Ecosystem Image"
                style={{ width: "90%" }}
              />

              <div className="text-center">
                <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                  {" "}
                  Explore our products{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                <a href="" style={{ textDecoration: "none" }}>
                  Try kite demo <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
