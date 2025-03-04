const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const ol = document.querySelector("ol");

for (const language of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = language;
  ol.appendChild(li);
}
