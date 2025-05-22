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
    </main>
  );
}

export default Service;
