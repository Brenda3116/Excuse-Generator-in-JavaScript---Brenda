function generateExcuse() {
  let who = [
    "A lonely jogger",
    "A two-headed pinecone",
    "A three-eyed alien",
    "A flying pig",
    "An invisible ghost",
    "A lonely merchant"
  ];
  let action = ["kicked", "yelled at", "stole", "crushed", "broke"];
  let what = ["my sandwich", "my homework", "my phone", "the car"];
  let when = [
    "on the street",
    "in my house",
    "at the park",
    "during my lunch",
    "while I was sleeping",
    "near the toilet"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  document.getElementById("excuse").textContent = excuse;
}

generateExcuse();
