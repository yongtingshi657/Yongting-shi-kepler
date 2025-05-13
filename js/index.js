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

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(name,email,message);

    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <div class="message-content">
        <a href="mailto:${email}">${name}</a>
        <span>${message}</span>
        </div>`
    
    let removeButton = document.createElement("button");
        removeButton.innerText ="remove";
        removeButton.type = "button";
    removeButton.addEventListener("click", ()=>{
            let entry = removeButton.parentNode;
            entry.remove();
        })
    
    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.reset();
})
