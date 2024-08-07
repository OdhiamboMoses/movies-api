const person = {
  name: "Saoirse Culligan",
  profilePic:
    "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=200&h=200&auto=format&fit=crop",
  greeting: "Heileo! Dia duit.",
  linkedIn: "https://www.linkedin.com/in/saoirse-culligan",
};

const profilePic = document.querySelector(".profile-pic");
const username = document.querySelector(".name");
const greeting = document.querySelector(".greeting");
const linkedIn = document.querySelector(".linked-in");

profilePic.src = `${person.profilePic}`;
username.textContent = `${person.name}`;
greeting.textContent = `${person.greeting}`;
linkedIn.href = `${person.linkedIn}`;
