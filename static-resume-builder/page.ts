const toogle = document.getElementById("button") as HTMLButtonElement;
const skill = document.getElementById("skill-section") as HTMLElement;

toogle.addEventListener("click", () => {
  if (skill.style.display === "none") {
    skill.style.display = "block";
  } else {
    skill.style.display = "none";
  }
});