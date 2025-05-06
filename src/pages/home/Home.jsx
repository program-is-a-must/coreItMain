import React from "react";
import "./home.css";

function Home() {
  return (
    <main>
      <section className='first-show'>
        <div className='left'>
          <div className='flatbutton'>
            <p>unlocking potential</p>
          </div>
          <div className='main-title'>
            <h1 className='bold'>Harness the</h1>
            <h1>Power of</h1>
            <h1 className='bold'> Technology For </h1>
            <h1>Success...</h1>
            <p>Tailored tech solutions for your business success.</p>
          </div>
          <div className='roundbtn'>
            <p>Our Services</p>
          </div>
        </div>
      </section>

      <section className='second_show'>
        <div className='about-btn'>
          <p>about us</p>
        </div>
        <div className='left-side'>Driving strategic results</div>
        <div className='right-side'>
          <p>
            Driving strategic results requires a well-defined vision, clear
            objectives, and disciplined execution.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
