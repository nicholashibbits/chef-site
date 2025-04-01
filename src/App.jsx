import React from "react";

function App() {
  return (
    <>
      <header className="primary-header margin-block-start-24 bg-neutral-900">
        <img
          src="assets/logo.svg"
          alt="Chef John Wellington"
          className="logo mx-auto"
        />
        <nav className="primary-navigation margin-block-start-24">
          <ul className="flex-group mx-auto">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#meals">Meals</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero text-center bg-neutral-900 clr-neutral-100">
          <div className="container">
            <h1 className="fs-900 ff-accent margin-block-end-48 mx-auto ">
              Homecooked meals delivered straight to your door
            </h1>
            <div className="flex-group mx-auto">
              <button className="button" data-type="accent">
                Place order
              </button>
              <a href="#about" className="button" data-type="outline">
                More info
              </a>
            </div>
          </div>
        </section>
        <section className="section bg-neutral-200" id="about">
          <div className="container">
            <div className="even-columns">
              <div>
                <img
                  className="shift-up box-shadow-1"
                  src="assets/about.jpg"
                  alt=""
                />
              </div>
              <div className="flow">
                <header className="section-heading">
                  <h2 className="fs-800 ff-accent clr-primary-500">
                    Amazing food without the hassle
                  </h2>
                  <p className="fs-600 uppercase">
                    we do all the work, so all you have to do is sit back and
                    enjoy
                  </p>
                </header>
                <p className="lead">It's ready to go</p>
                <p>
                  Whether it’s for a romantic evening with your significant
                  other or if you’re hosting a large party and need food for a
                  big group, we’re here to help!
                </p>
                <p>
                  We can cater to whatever your needs are, and ensure that our
                  delicious food is delivered at the perfect moment, fresh, hot,
                  and ready to eat exactly when you need it to be there.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center section bg-neutral-900 clr-neutral-100">
          <header className="section-heading" data-decoration="true">
            <h2 className="fs-800">This is a heading</h2>
            <p className="fs-600 uppercase">This is a subtitle</p>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </section>
        <section className="section bg-neutral-200">
          <header className="section-heading">
            <h2 className="fs-800">This is a heading</h2>
            {/* <p className="fs-600 uppercase">This is a subtitle</p> */}
          </header>
          <div className="even-columns">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Chef John Wellington. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
