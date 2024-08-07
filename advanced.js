const people = [
  {
    name: "Saoirse Culligan",
    profilePic:
      "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=200&h=200&auto=format&fit=crop",
    greeting: "Heileo! Dia duit.",
    linkedIn: "https://www.linkedin.com/in/saoirse-culligan",
  },
  {
    name: "Juan Castillo",
    profilePic:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=200&h=200&auto=format&fit=crop",
    greeting: "Hola! Como estas?",
    linkedIn: "https://www.linkedin.com/in/juan-castillo",
  },
];
const container = document.querySelector("#card-container");

for (let person of people) {
  const card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  const image = document.createElement("img");
  image.src = person.profilePic;
  card.appendChild(image);

  const username = document.createElement("h2");
  username.textContent = person.name;
  card.appendChild(username);

  const message = document.createElement("p");
  message.textContent = person.greeting;
  card.appendChild(message);

  const link = document.createElement("a");
  link.textContent = "View LinkedIn Profile";
  link.href = person.linkedIn;
  card.appendChild(link);
}
