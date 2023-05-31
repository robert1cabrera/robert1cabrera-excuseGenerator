/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the_excuse").innerHTML = generateExcuse();
  });
  console.log("Hello From the best coder!");
};

let generateExcuse = () => {
  let who = ["The giraffe", "My Chicken", "His Dog", "My great grandmother"];
  let action = ["ate", "launched", "crushed", "dismantled"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let windex = Math.floor(Math.random() * who.length);
  let aindex = Math.floor(Math.random() * action.length);
  let whindex = Math.floor(Math.random() * what.length);
  let wnndex = Math.floor(Math.random() * when.length);

  return (
    who[windex] +
    " " +
    action[aindex] +
    " " +
    what[whindex] +
    " " +
    when[wnndex]
  );
};
