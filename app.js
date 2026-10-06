const projects = [
  {
    title: "Project One",
    category: "Web app",
    summary:
      "A future case study for a web product, dashboard, or interactive build. Add the problem, your role, and the result here.",
    tags: ["Frontend", "UX", "Case study"],
    color: "#a68a64",
  },
  {
    title: "Project Two",
    category: "Design system",
    summary:
      "A spot for brand direction, UI explorations, prototypes, or a redesign that shows your eye for clear visual choices.",
    tags: ["Visual design", "Prototype", "Research"],
    color: "#65735b",
  },
  {
    title: "Project Three",
    category: "Technical build",
    summary:
      "Use this for an automation, tool, backend idea, or anything that proves you can organize complicated work.",
    tags: ["Systems", "Code", "Iteration"],
    color: "#253143",
  },
  {
    title: "Project Four",
    category: "Personal experiment",
    summary:
      "A playful slot for a smaller experiment, class project, creative build, or anything that reveals your taste.",
    tags: ["Creative", "Learning", "Polish"],
    color: "#8c6f4f",
  },
];

const views = document.querySelectorAll("[data-view]");
const viewButtons = document.querySelectorAll("[data-view-button]");
const projectList = document.querySelector("[data-project-list]");
const projectVisual = document.querySelector("[data-project-visual]");
const projectCategory = document.querySelector("[data-project-category]");
const projectTitle = document.querySelector("[data-project-title]");
const projectSummary = document.querySelector("[data-project-summary]");
const projectTags = document.querySelector("[data-project-tags]");
const copyEmailButton = document.querySelector("[data-copy-email]");

function setView(nextView) {
  views.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === nextView);
  });

  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewButton === nextView);
  });

  window.location.hash = nextView === "intro" ? "" : nextView;
}

function renderProjectList() {
  projectList.innerHTML = projects
    .map(
      (project, index) => `
        <button class="project-tile ${index === 0 ? "active" : ""}" type="button" data-project-index="${index}">
          <span class="project-chip" style="--project-color: ${project.color}"></span>
          <span>
            <strong>${project.title}</strong>
            <span>${project.category}</span>
          </span>
        </button>
      `,
    )
    .join("");

  projectList.querySelectorAll("[data-project-index]").forEach((button) => {
    button.addEventListener("click", () => {
      setProject(Number(button.dataset.projectIndex));
    });
  });
}

function setProject(index) {
  const project = projects[index];

  projectList.querySelectorAll("[data-project-index]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.projectIndex) === index);
  });

  projectVisual.style.setProperty("--project-color", project.color);
  projectCategory.textContent = project.category;
  projectTitle.textContent = project.title;
  projectSummary.textContent = project.summary;
  projectTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});

copyEmailButton.addEventListener("click", async () => {
  const email = "your.email@example.com";

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "Copied";
    window.setTimeout(() => {
      copyEmailButton.textContent = "Copy email";
    }, 1400);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.addEventListener("keydown", (event) => {
  const activeView = document.querySelector(".view.active")?.dataset.view;

  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    const viewOrder = ["intro", "work", "story", "process", "contact"];
    const activeIndex = viewOrder.indexOf(activeView);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + direction + viewOrder.length) % viewOrder.length;
    setView(viewOrder[nextIndex]);
  }
});

renderProjectList();
setProject(0);

const initialHash = window.location.hash.replace("#", "");
if (initialHash && document.querySelector(`[data-view="${initialHash}"]`)) {
  setView(initialHash);
}
