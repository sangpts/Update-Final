import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="title">
          <h2>
            About <span className="title__stroke">M &amp; C</span>
          </h2>
        </div>
        <div className="contain">
          <p>
            Music and life go hand in hand. So join and experience my{" "}
            <span className="title__stroke">M &amp; C</span> music social
            network now
          </p>
        </div>
        <div className="about__img">
          <img src="/img/about.jpg" className="parallax" />
        </div>
      </div>
    </section>
  );
}
