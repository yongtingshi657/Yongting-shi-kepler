let footer = document.createElement("footer");

document.body.appendChild(footer);

let today = new Date();

let thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Yongting Shi ${thisYear}`;

footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "SQL","Tableau","GitHub"];

let skillsSection = document.querySelector('#skills');

let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i< skills.length; i++) {
    let skill = document.createElement("li");

    skill.innerText= skills[i];

    skillsList.appendChild(skill);
}

