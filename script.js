const projects = [
  {
    title: "Weather App",
    description: "A web app that shows weather info using the OpenWeather API.",
  },
  {
    title: "To-Do List",
    description: "A simple and interactive to-do list app using local storage.",
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio you're viewing right now!",
  }
];
 
function loadProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(div);
  });
}
 
function toggleTheme() {
  document.body.classList.toggle("dark");
}
 
window.onload = loadProjects;
