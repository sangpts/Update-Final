import React from "react";
import About from "./component/about";
import Background from "./component/background";
import FooterMarketing from "./component/footer";
import HeaderMarketing from "./component/header";
import Login from "./component/login";

export default function Marketing() {
  function parallax(element, distance, speed) {
    const itemMarketing = document.querySelector(element);
    itemMarketing.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function (e) {
    parallax(
      ".marketing main .about .container .about__img .parallax",
      window.scrollY,
      -0.7
    );
    parallax(".marketing main .about .container .title", window.scrollY, -0.5);
    parallax(
      ".marketing main .about .container .contain",
      window.scrollY,
      -0.5
    );
    parallax(
      ".marketing main .background .container .background__slowgan-title",
      window.scrollY,
      -0.1
    );
    parallax(
      ".marketing .register_marketing .container .register__btn",
      window.scrollY,
      -0.2
    );
  });
  return (
    <div className="marketing">
      <HeaderMarketing />
      <main>
        {/* background */}
        <Background />
        {/* about my website */}
        <About />
        {/* register and go home page */}
        <Login />
      </main>
      <FooterMarketing />
    </div>
  );
}
