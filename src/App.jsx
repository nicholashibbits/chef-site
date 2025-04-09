import React from "react";

function App() {
  return (
    <>
      <header className="primary-header margin-block-start-24">
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
        <section className="section " id="about">
          <div className="container">
            <div className="even-columns">
              <div>
                <picture>
                  <source srcSet="assets/about.avif" type="image/avif" />
                  <source srcSet="assets/about.webp" type="image/webp" />
                  <img
                    className="shift-up box-shadow-1"
                    src="assets/about.jpg"
                    alt="several plates of food seen from above on a white table, some with figs and basil and others with grapefruit and sliced bananas with a brown sauce on top"
                  />
                </picture>
              </div>
              <div className="flow">
                <header className="section-header">
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
                  Whether it's for a romantic evening with your significant
                  other or if you're hosting a large party and need food for a
                  big group, we're here to help!
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
        <section className="section bg-neutral-200 text-center">
          <div className="container">
            <header className="section-header" data-decoration="true">
              <h2 className="fs-800 clr-primary-500 ff-accent">
                We make great food
              </h2>
              <p className="fs-600 uppercase">
                Cooking is our passion, with quality and freshness being of the
                utmost importance
              </p>
            </header>
            <div className="grid-auto-fit">
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900 uppercase">
                  Fresh Ingredients
                </h3>
                <p>
                  We take food seriously, and the first thing to making great
                  food is using fresh ingredients. If the ingredients don't meet
                  our standard, we don't use them.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900 uppercase">
                  Professional chef
                </h3>
                <p>
                  Chef Wellington is a professionally trained chef who's worked
                  in top kitchens around the world.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900 uppercase">
                  Ready for you
                </h3>
                <p>
                  Stop using services where you have to re-heat your food. We
                  get it to your door ready to eat, without sacrificing any
                  quality at all.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900 uppercase">
                  Made with love
                </h3>
                <p>
                  Food is our passion, and we infuse that love and passion into
                  every single plate that we make and deliver straight to your
                  home.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section clr-neutral-100 bg-neutral-900 text-center"
          id="meals"
        >
          <div className="container" data-type="wide">
            <header className="section-header" data-decoration="true">
              <h2
                className="fs-800 ff-accent 
              "
              >
                This is a nice big headline
              </h2>
              <p className="fs-600 uppercase">
                This is a subhead which mentions som interesting things
              </p>
            </header>

            <div className="even-columns">
              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet="assets/meal-01.avif" type="image/avif" />
                    <source srcSet="assets/meal-01.webp" type="image/webp" />
                    <img
                      src="assets/meal-01.jpg"
                      loading="lazy"
                      alt="A nicely presented plate with a cooked peice of salmon on top of a bed of vegetables, with more vegetables on top of it"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      About this meal
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam egestas egestas dignissim.
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet="assets/meal-02.avif" type="image/avif" />
                    <source srcSet="assets/meal-02.webp" type="image/webp" />
                    <img
                      src="assets/meal-02.jpg"
                      loading="lazy"
                      alt="Several steak tacos on a table, along with several limes"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      About this meal
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam egestas egestas dignissim.
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet="assets/meal-03.avif" type="image/avif" />
                    <source srcSet="assets/meal-03.webp" type="image/webp" />
                    <img
                      src="assets/meal-03.jpg"
                      loading="lazy"
                      alt="Clams being tossed in a pan"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      About this meal
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam egestas egestas dignissim.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testimonials section padding-block-start-48"
          id="testimonials"
          data-type="wide"
        >
          <div className="container">
            <h2 className="section-header clr-primary-500 fs-800 ff-accent text-center">
              What our clients are saying about us
            </h2>

            <div className="even-columns">
              <div className="card | box-shadow-1">
                <picture>
                  <source
                    srcSet="assets/testimonial-01.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="assets/testimonial-01.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/testimonial-01.jpg"
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card-body text-center padding-48 ">
                  <p>
                    John Wellington and his team make the most amazing food.
                    Every single time I've ordered, I've been blown-away by the
                    quality. You can tell they only use fresh ingredients and
                    put a lot of love into every single meal they make! You
                    really can't ask for anything more, it's always fantastic.
                  </p>
                </div>
                <div className="card-footer text-center | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-primary-500">John Deer</p>
                  <p>Lover of good food</p>
                </div>
              </div>
              <div className="card | box-shadow-1">
                <picture>
                  <source
                    srcSet="assets/testimonial-02.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="assets/testimonial-02.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/testimonial-02.jpg"
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card-body text-center padding-48 ">
                  <p>
                    John Wellington and his team make the most amazing food.
                    Every single time I've ordered, I've been blown-away by the
                    quality. You can tell they only use fresh ingredients and
                    put a lot of love into every single meal they make! You
                    really can't ask for anything more, it's always fantastic.
                  </p>
                </div>
                <div className="card-footer text-center | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-primary-500">John Deer</p>
                  <p>Lover of good food</p>
                </div>
              </div>
              <div className="card | box-shadow-1">
                <picture>
                  <source
                    srcSet="assets/testimonial-03.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="assets/testimonial-03.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/testimonial-03.jpg"
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card-body text-center padding-48 ">
                  <p>
                    John Wellington and his team make the most amazing food.
                    Every single time I've ordered, I've been blown-away by the
                    quality. You can tell they only use fresh ingredients and
                    put a lot of love into every single meal they make! You
                    really can't ask for anything more, it's always fantastic.
                  </p>
                </div>
                <div className="card-footer text-center | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-primary-500">John Deer</p>
                  <p>Lover of good food</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="primary-footer section | bg-neutral-900 clr-neutral-100 text-center flow">
        <div class="container">
          <p class="fw-bold">Homecooked mealsdelivered straight to your door</p>
          <p>©2022 Persronal Chef Services</p>
          <p>
            555 Boulevard Anywhere, Montreal, Quebec, J1S 1S9 | 123-555-1234
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
