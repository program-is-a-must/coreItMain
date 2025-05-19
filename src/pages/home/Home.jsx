import React from "react";
import "./home.css";

function Home() {
  return (
    <main>
      <section className="first-show-container">
        <div className="first-show">
          <div className="margin">
            <div className="flatbutton">unlocking potential</div>
            <div className="main-title">
              <h1 className="bold">Harness the</h1>
              <h1>Power of</h1>
              <h1 className="bold"> Technology For </h1>
              <h1>Success...</h1>
              <p>Tailored tech solutions for your business success.</p>
            </div>
            <div className="roundbtn">
              <p>Our Services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="second_show">
        <div className="wrapper">
          <div className="about-btn">
            <p>about us</p>
          </div>
          <div className="segment-two">
            <div className="left-side">Driving strategic results</div>
            <div className="right-side">
              <p>
                Driving strategic results requires a well-defined vision, clear
                objectives, and disciplined execution.
              </p>
            </div>
          </div>
        </div>
        <div className="second-show-wrapper">
          <div className="left">
            <div className="lft">Our Approach</div>
            <div className="rht">Our Expertise</div>
          </div>
          <div className="right">
            Goals, leaders can provide direction and focus teams enabling to
            prioritize tasks effectively.
          </div>
        </div>
      </section>

      <div className="grid-container">
        <div className="grid-box">
          <h4>🏆 Top 100 Consultancy Leaders</h4>
          <p>By Global Business Awards</p>
          <p id="rotate">- 2024</p>
        </div>

        <div className="grid-box">
          <div className="grid_letter">
            <h1 className="grid_head">Align Strategy with Execution</h1>
            <p className="grid_info">
              Successful execution involves bridging the gap between strategy
              and implementation, ensuring that resources, processes, and people
              are aligned to deliver results. Regular performance tracking,
              feedback, and adaptability are essential maintaining momentum.
            </p>
          </div>
        </div>

        <div className="grid-box" id="grid-szn"></div>

        <div className="grid-box" id="quote">
          <div className="grid_ceo">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="CEO"
              className="circle-img"
            />
            <p id="Ceo">“Expert advice to elevate your business potential.”</p>

            <img
              className="sign"
              src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/sign.png"
              alt="sign"
            />

            <p className="signature"> CEO of SUPERPRO</p>
          </div>
        </div>

        <div className="grid-box" id="grid-sizing"></div>

        <div className="grid-box" id="grid_since">
          <div className="flag">
            <img
              src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/flag.png"
              alt="flag"
            />
            <p> U.S.-Based, Globally Focused.</p>
          </div>
          <p className="fla">
            Serving clients worldwide with precision and performance.
          </p>
          {/*end of the usa*/}
          <div className="grid-trust">
            <img
              src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/hill.png"
              alt="hill"
            />
            <h4>Since 2016</h4>
            <p>Building trust. Driving results.</p>
          </div>
          <button className="btn-history">Explore History</button>
        </div>
      </div>
      <section className="third">
        <div className="third_display">
          <div className="third_left">000</div>
          <div className="third_right">
            <div className="quest_btn">DID YOU KNOW?</div>

            <div className="T-R-HEAD">
              <h1>Guilding your business toward excellence</h1>
            </div>

            <div className="T-R-block">
              <div className="T-R-Box">
                <div className="T-R-Flex">
                  <p>Our Growth, Compare to Last Financial Year</p>
                  <div className="num">2.5X</div>
                </div>
              </div>
              <div className="T-R-Box">
                <div className="T-R-Flex">
                  <p>New Clients Login Our Site Every Month.</p>
                  <div className="num">10K</div>
                </div>
              </div>
              <div className="T-R-Box">
                <div className="T-R-Flex">
                  <p>High Retention Reflects our Commitment to Success.</p>
                  <div className="num">85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-page">
        <div className="fourth-wrapper">
          <div className="fourth-display">
            <div className="fourth-left">
              <div className="serv_btn">
                <p>Services</p>
              </div>
              <h1>Tailored consulting for growth</h1>
              <p>
                Power of choice is untrammelled and when nothing prevents our
                being able to do what we like best.
              </p>
              <div className="service-btn">All Services</div>
              <div className="f-l-display">
                <img
                  src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/service-home-1-ime.jpg"
                  alt="laptop"
                />

                <div className="f-l-info">
                  <h2>Market Research & Analysis</h2>
                  <p>
                    Occur that pleasures have repudiated ances accepted. The
                    wise man therefore always holds in these matters.
                  </p>
                  <h3>All Services</h3>
                </div>
              </div>
            </div>
            <div className="fourth-right">
              <div className="fourth-right_grid">
                <div className="f-r-grid-2">
                  <div className="f-r-grid-center">
                    <h1>Market Research & Analysis</h1>
                    <p>
                      Market research is the process of gathering, analyzing.
                    </p>
                    <div className="grid_flex">
                      <img
                        src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/02/image-icon-3.png"
                        alt="icon"
                      />
                      <div className="bullets">
                        <p>01</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-r-grid-2" id="grid-change">
                  <div className="f-r-grid-center">
                    <h1>Financial Planning and Support</h1>
                    <p>
                      Empower your future with expert financial planning and
                      support
                    </p>
                    <div className="grid_flex" id="grid-change-360_2">
                      <img
                        src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/service-pg-icon-1.png"
                        alt="icon"
                      />
                      <div className="bullets" id="grid-change-360">
                        <p>02</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-r-grid-2" id="grid-change">
                  <div className="f-r-grid-center">
                    <h1>IT Advisory Services</h1>
                    <p>
                      Optimize your technology investments with expert IT
                      advisory services.
                    </p>
                    <div className="grid_flex" id="grid-change-360_2">
                      <img
                        src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/02/image-icon-2.png"
                        alt="icon"
                      />
                      <div className="bullets" id="grid-change-360_2">
                        <p>03</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-r-grid-2">
                  <div className="f-r-grid-center">
                    <h1>Talent Management Consulting</h1>
                    <p>
                      We help you attract, develop, and retain top talent to
                      drive business success.
                    </p>
                    <div className="grid_flex">
                      <img
                        src="https://coreit.themepanthers.com/demo/wp-content/uploads/2025/02/image-icon-4.png"
                        alt="icon"
                      />
                      <div className="bullets">
                        <p>04</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*border radius start */}
          <div className="fourth-call">
            <div className="call_flx">
              <p>
                <span>Discuss...</span>with our experts about your need.
              </p>
              <img
                src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/arrow.png"
                alt="flow"
              />
              <div className="call_radius">
                <div className="radius-center">
                  <img
                    src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/12/phone-2.png"
                    alt="output-call"
                  />

                  <div className="block_call">
                    <h2>Call us</h2>
                    <p>+888 12 3456 78</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*border radius */}
        </div>
      </section>

      <section></section>
    </main>
  );
}

export default Home;
