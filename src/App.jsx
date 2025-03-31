import React from "react";

function App() {
  return (
    <>
      <header class="primary-header | margin-block-start-24">
        <img src="assets/logo.svg" alt="Chef John Wellington" class="logo" />
        <nav class="primary-navigation | margin-block-start-24">
          <ul class="flex-group mx-auto">
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
        <section className="section bg-neutral-200">
          <header className="section-heading">
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
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
      <footer class="footer">
        <p>&copy; 2024 Chef John Wellington. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
