/** @format */

function cursormove() {
  var main = document.querySelector("#main ");
  var cursor = document.querySelector("#page1 #cursor");
  var social = document.querySelectorAll("#social");
  var workbutton = document.querySelector("#button");

  main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
      y: e.clientY - cursor.offsetHeight / 2,
      scale: 1,
    });
  });

  social.forEach(function (social) {
    social.addEventListener("mouseenter", function (e) {
      gsap.to(cursor, {
        height: 0,
        width: 0,
        scale: 0,
        opacity: 0,
      });
      cursor.style.visibility = "hidden";
    });
  });
  social.forEach(function (social) {
    social.addEventListener("mouseleave", function (e) {
      gsap.to(cursor, {
        height: 120,
        width: 120,
        scale: 1,
        opacity: 1,
        ease: "power1.out",
      });
      cursor.style.visibility = "visible";
    });
  });
  workbutton.addEventListener("mouseenter", function (e) {
    gsap.to(cursor, {
      height: 0,
      width: 0,
      scale: 0,
      opacity: 0,
      ease: "power1.out",
    });
    cursor.style.visibility = "hidden";
  });
  workbutton.addEventListener("mouseleave", function (e) {
    gsap.to(cursor, {
      height: 120,
      width: 120,
      scale: 1,
      opacity: 1,
      ease: "power1.out",
    });
    cursor.style.visibility = "visible";
  });
}
cursormove();

function animation() {
  var tl = gsap.timeline();

  var text = document.querySelector("#page1-mid h1");
  var text1 = document.querySelector("#page1-mid #text1");
  var text2 = document.querySelector("#page1-mid #text2");
  var lastText = document.querySelector("#page1-last h4");
  var para = document.querySelector("#page1-mid p");
  var heading = document.querySelector("#page1-mid h2");
  var para2 = document.querySelector("#page1-mid #p2");
  var social = document.querySelector("#social");
  var workbutton = document.querySelector("#button");

  tl.from(text, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
  });
  tl.from(text1, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
  });
  tl.from(text2, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
  });
  tl.from(heading, { y: -100, opacity: 0, ease: "power2.out", duration: 0.8 });
  tl.from(para, { y: -0.3, opacity: 0, ease: "power2.out", duration: 0.8 });
  tl.from(para2, { y: -100, opacity: 0, ease: "power2.out", duration: 0.8 });
  tl.from(workbutton, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.8,
  });
  tl.from(social, { y: -100, opacity: 0, ease: "power2.out" });
  tl.from(lastText, { y: -100, opacity: 0, ease: "power2.out" });
}
animation();
