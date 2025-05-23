import React from "react";
import "./service.css";
import { services } from "../../data";

function Service() {
  return (
    <main>
      <section className="first-content">
        <div className="first-wrapper">
          <h1>About Us 1</h1>
          <p>
            Home <span>&gt;</span> About
          </p>
        </div>
      </section>

      <section className="second-content">
        <div className="second-wrapper">
          <h1>Experts in business, promote growth & sales</h1>
          <p>
            Business it will frequently occur that pleasures have
            repudiatedannoyances accepted. The wise man therefore always holds
            in these matters to this principle of selection he rejects pleasures
            to secure other greater pleasures.
          </p>
        </div>
        <div className="second-wrapper2">
          <div className="second-display">
            {services.map((box) => (
              <div key={box.id} className="box">
                <img src={box.img} alt="" />
                <div className="box-content">
                  <h1>{box.title}</h1>
                  <p>{box.information}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="second-wrapper3">
          <div class="container">
            <div class="sidebar">
              <div class="icon">
                <img src="user-icon.png" alt="User" />
              </div>
              <div class="icon">
                <img src="chart-icon.png" alt="Chart" />
              </div>
              <div class="account-label">My Account</div>
            </div>

            <main class="hero-section">
              <img src="team-photo.jpg" alt="Team Pic" class="hero-image" />
              <button class="feedback-btn">
                ▶ Watch Our Customer Feedback Video
              </button>
              <div class="experience-badge">
                <strong>8+</strong>
                <br />
                Years Experience
                <br />
                in Field.
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="third-content">
        <div className="third-wrapper">
          <section class="timeline-section">
            <div class="timeline">
              <div class="milestone">
                <div class="content">
                  <h3>New Milestone</h3>
                  <p>
                    No one rejects dislikes or avoids pleasures itself because
                    it is pleasures, but because those who pursue pleasure
                    rationally.
                  </p>
                </div>
                <div class="year">2021</div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/service-new-1.jpg"
                  alt="Milestone"
                />
              </div>

              <div class="milestone">
                <div class="content">
                  <h3>New Milestone</h3>
                  <p>
                    No one rejects dislikes or avoids pleasures itself because
                    it is pleasures, but because those who pursue pleasure
                    rationally.
                  </p>
                </div>
                <div class="year">2021</div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/faq1-min.jpg"
                  alt="Milestone"
                />
              </div>

              <div class="milestone active">
                <div class="content">
                  <h3>New Milestone</h3>
                  <p>
                    No one rejects dislikes or avoids pleasures itself because
                    it is pleasures, but because those who pursue pleasure
                    rationally.
                  </p>
                </div>
                <div class="year">2021</div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/Home-2-slider-image-2.jpeg"
                  alt="Milestone"
                />
              </div>

              <div class="milestone">
                <div class="content">
                  <h3>New Milestone</h3>
                  <p>
                    No one rejects dislikes or avoids pleasures itself because
                    it is pleasures, but because those who pursue pleasure
                    rationally.
                  </p>
                </div>
                <div class="year">2021</div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/Home-2-slider-image-3-1.jpeg"
                  alt="Milestone"
                />
              </div>

              <div class="milestone">
                <div class="content">
                  <h3>New Milestone</h3>
                  <p>
                    No one rejects dislikes or avoids pleasures itself because
                    it is pleasures, but because those who pursue pleasure
                    rationally.
                  </p>
                </div>
                <div class="year">2021</div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/Home-2-slider-image-3-2.jpeg"
                  alt="Milestone"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="fourth-content">
        <div class="fourth-wrapper">
          <div class="mission-block">
            <div class="item">
              <div class="text-1">
                <div className="seperate-text">
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/case-5-2.jpg"
                  alt="Mission"
                />
              </div>

              <div className="text">
                <div className="reduce" id="reduce-1"></div>

                <p>Our Growth, Compare to Last Financial Year</p>
                <span>2.5X</span>
              </div>
            </div>
            <div class="item">
              <div className="text">
                <div className="reduce" id="reduce-2"></div>

                <p>Our Growth, Compare to Last Financial Year</p>
                <span>10k</span>
              </div>
              <div class="text-1">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/price-tab-bg.jpg"
                  alt="Vision"
                />

                <div className="seperate-text">
                  <h4>Our Vision</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="text-1">
                <div className="seperate-text">
                  <h4>Our Core Values</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>

                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/about-home-2.jpg"
                  alt="Core Values"
                />
              </div>

              <div className="text">
                <div className="reduce" id="reduce-3"></div>
                <p>High Retention Reflects our Commitment to Success.</p>
                <span>67%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-content">
        <div className="fifth-wrapper">
          <div class="team-section">
            <h2>Dedicated Team Professional Individuals</h2>
            <div class="team-grid">
              <div class="team-card">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/team-1-min-768x640.jpg"
                  alt="Team Member"
                />
                <h4>Mr. Drummond</h4>
                <p>CEO & Founder</p>
              </div>
              <div class="team-card">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/team-6-min-768x640.jpg"
                  alt="Team Member"
                />
                <h4>Grace Tanwarah</h4>
                <p>Design Strategist</p>
              </div>
              <div class="team-card">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/team-3-min-768x640.jpg"
                  alt="Team Member"
                />
                <h4>Felix Ekwem</h4>
                <p>Lead Developer</p>
              </div>
            </div>
            <button class="load-more">Load More</button>
          </div>

          <div class="testimonial-section">
            <h3>Words from our satisfied clients</h3>
            <div class="testimonials">
              <div class="quote-box">
                <div className="client-photos" id="client-photos">
                  <img
                    src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/testi-2.jpg"
                    alt="pic"
                  />
                </div>
                <p>
                  "CoreIT gave me exactly what I needed. Their dedication and
                  transparency is top-notch."
                </p>
                <strong>Jane Norbert</strong>
                <br />
                <small>Happy Client</small>
              </div>
              <div class="client-photos">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/testi1-1.jpg"
                  alt="Client"
                />
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/testi1-3.jpg"
                  alt="Client"
                />
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/01/testi1-2.jpg"
                  alt="Client"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Service;
