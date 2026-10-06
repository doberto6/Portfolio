const projects = [
  {
    title: "Project One",
    logo: "P1",
    category: "Web app",
    summary:
      "A future case study for a web product, dashboard, or interactive build. Add the problem, your role, and the result here.",
    tags: ["Frontend", "UX", "Case study"],
    color: "#a68a64",
  },
  {
    title: "Project Two",
    logo: "P2",
    category: "Design system",
    summary:
      "A spot for brand direction, UI explorations, prototypes, or a redesign that shows your eye for clear visual choices.",
    tags: ["Visual design", "Prototype", "Research"],
    color: "#65735b",
  },
  {
    title: "Project Three",
    logo: "P3",
    category: "Technical build",
    summary:
      "Use this for an automation, tool, backend idea, or anything that proves you can organize complicated work.",
    tags: ["Systems", "Code", "Iteration"],
    color: "#253143",
  },
  {
    title: "Project Four",
    logo: "P4",
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
        <article class="project-card ${index === 0 ? "active" : ""}" style="--project-color: ${project.color}">
          <button class="project-logo-button" type="button" data-project-index="${index}" aria-expanded="${index === 0}">
            <span class="project-logo">${project.logo}</span>
            <span>
              <strong>${project.title}</strong>
              <span>${project.category}</span>
            </span>
          </button>
          <div class="project-expanded">
            <p>${project.summary}</p>
            <div class="tag-row">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
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
  projectList.querySelectorAll(".project-card").forEach((card, cardIndex) => {
    const isActive = cardIndex === index;
    card.classList.toggle("active", isActive);
    card.querySelector("[data-project-index]").setAttribute("aria-expanded", String(isActive));
  });
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
    const viewOrder = ["intro", "projects", "work", "story", "contact"];
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
