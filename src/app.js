/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "into", "forThe", "weAre"];
  let adj = ["Great", "Big", "Last", "Ugly", "Sad", "Silly", "Emo"];
  let noun = ["Jogger", "Racoon", "Cat", "Zombie", "Gummies", "Goth", "Furro"];
  let dot = [".net", ".com", ".pe", ".tv", "us", ".fun", ".org"];

  function randomDomainName() {
    let onePronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let oneAdj = adj[Math.floor(Math.random() * adj.length)];
    let oneNoun = noun[Math.floor(Math.random() * noun.length)];
    let oneDot = dot[Math.floor(Math.random() * dot.length)];

    const domainName = `www.${onePronoun}${oneAdj}${oneNoun}${oneDot}`;
    return domainName;
  }
  const domainNameHTML = document.getElementById("domain");
  domainNameHTML.textContent = randomDomainName();
  console.log(randomDomainName());
};
