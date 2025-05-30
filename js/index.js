// footer 
let footer = document.createElement("footer");

document.body.appendChild(footer);

let today = new Date();

let thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Yongting Shi ${thisYear}`;

footer.appendChild(copyright);

// skills section
let skills = ["JavaScript", "HTML", "CSS", "SQL", "Tableau", "GitHub"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}

// message
const messageForm = document.getElementsByName("leave_message")[0];


messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;
  console.log(name, email, message);

  let messageSection = document.getElementById("messages");

  // if there is message, display message section 
  messageSection.style.display = "block";

  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `
        <div class="message-content">
        <a href="mailto:${email}">${name}</a>
        <span>${message}</span>
        </div>`;

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});


// project-fatch from github
fetch("https://api.github.com/users/yongtingshi657/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    let repositories = data;
    console.log(repositories);

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");
    
    for(let i = 0; i < repositories.length; i++){
        let project = document.createElement("li");
        project.innerHTML = `<a href= "${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
        projectList.appendChild(project);
    }
  })
  .catch((err) => {
    console.log(err); });


    
