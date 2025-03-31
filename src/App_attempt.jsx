import "./App.css";

function App_attempt() {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Meals</li>
          <li className="nav-item">Testimonials</li>
        </ul>
      </nav>
      <main className="main">
        <section className="section-hero section-primary">
          {/* <div className="container"> */}
          <h1 className="heading-xl"></h1>
          <div className="buttons-wrapper">
            <div className="button">PLACE ORDER</div>
            <div className="button">MORE INFO</div>
            {/* </div> */}
          </div>
        </section>
        <section className="section-info section-primary">
          <div className="info-wrapper">
            <h2 className="heading-primary">This is a nice big heading</h2>
            <h3 className="subheading-primary">
              This is a subhead which mentions some interesting things
            </h3>
            <h4 className="heading-secondary uppercase">
              This introduces the following text
            </h4>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum
              voluptates aliquid consequuntur nisi autem atque provident illo
              ratione, possimus vel minus quibusdam quasi harum culpa sed
              inventore!
              <br />
              Voluptatum, doloribus. Amet doloremque porro eaque quia quaerat,
              quae eligendi impedit dolorum magni fuga sint, sit sunt minima!
              Error corporis, dolorum voluptate maxime doloremque sequi, totam
              fugit perferendis ex soluta earum consequuntur. Reiciendis sed a,
              architecto qui in nostrum obcaecati itaque eum, quia, repellat
              voluptas eos! Natus ut, molestiae sit, totam saepe aperiam
              accusantium delectus rem necessitatibus ipsum dicta officiis!
              Laboriosam, veniam!
            </p>
          </div>
          <div className="info-wrapper">
            <h2 className="heading-primary">This is a nice big heading</h2>
            <h3 className="subheading-primary">
              This is a subhead which mentions some interesting things
            </h3>
            <ul className="column-list-4">
              <li className="column-item">
                <h4 className="heading-secondary uppercase">
                  this is a subtitle
                </h4>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus impedit eos ratione natus placeat rem excepturi
                  molestias nihil sunt quas, dolore porro aspernatur cupiditate
                  exercitationem accusamus, nostrum, saepe aperiam! Soluta?
                </p>
              </li>
              <li className="column-item">
                <h4 className="heading-secondary uppercase">
                  this is a subtitle
                </h4>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus impedit eos ratione natus placeat rem excepturi
                  molestias nihil sunt quas, dolore porro aspernatur cupiditate
                  exercitationem accusamus, nostrum, saepe aperiam! Soluta?
                </p>
              </li>
              <li className="column-item">
                <h4 className="heading-secondary uppercase">
                  this is a subtitle
                </h4>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus impedit eos ratione natus placeat rem excepturi
                  molestias nihil sunt quas, dolore porro aspernatur cupiditate
                  exercitationem accusamus, nostrum, saepe aperiam! Soluta?
                </p>
              </li>
              <li className="column-item">
                <h4 className="heading-secondary uppercase">
                  THIS IS A SUBTITLE
                </h4>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus impedit eos ratione natus placeat rem excepturi
                  molestias nihil sunt quas, dolore porro aspernatur cupiditate
                  exercitationem accusamus, nostrum, saepe aperiam! Soluta?
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-gallery">
          <h3 className="subheading-primary">Gallery</h3>
          <div className="column-list-3">
            <div className="gallery-item">
              <img src="" alt="" />
              <div className="hover-text">
                <h4 className="heading-secondary uppercase">About this meal</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-testimonials section-primary">
          <div className="container">
            <h2 className="heading-primary">What our customers say</h2>
            <div className="testimonials-wrapper column-list-3">
              <div className="card-testimonial">
                <img src="" alt="" />
                <div className="card-testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
                  </p>
                </div>
                <div className="card-testimonial-id">
                  <img src="" alt="" />
                  <h4 className="heading-secondary uppercase">John Doe</h4>
                  <p>Manager at FoodCo.</p>
                </div>
              </div>
              <div className="card-testimonial">
                <img src="" alt="" />
                <div className="card-testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
                  </p>
                </div>
                <div className="card-testimonial-id">
                  <img src="" alt="" />
                  <h4 className="heading-secondary uppercase">John Doe</h4>
                  <p>Manager at FoodCo.</p>
                </div>
              </div>
              <div className="card-testimonial">
                <img src="" alt="" />
                <div className="card-testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
                  </p>
                </div>
                <div className="card-testimonial-id">
                  <img src="" alt="" />
                  <h4 className="heading-secondary uppercase">John Doe</h4>
                  <p>Manager at FoodCo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2025 by Omnifood. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App_attempt;
