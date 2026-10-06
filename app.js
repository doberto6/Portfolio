const projects = [
  {
    title: "SIGN",
    mark: "SG",
    category: "ShellHacks 2026",
    summary:
      "SIGN converts spoken or typed English into a structured 3D model that signs the speech. Users can record audio or enter text; the app transcribes the content, generates a signing plan, and displays an illustrative interpretation through a full-body 3D character.",
    tags: ["ShellHacks 2026", "Accessibility", "Speech to text", "3D character", "Signing plan"],
    color: "#c8912d",
    image: "./assets/sign.png",
    link: "https://github.com/Devon-Tren/sign",
    linkLabel: "View GitHub repo",
  },
  {
    title: "MOVE",
    mark: "MV",
    category: "ShellHacks 2025",
    summary:
      "On-device computer-vision dodge game built for people who work at home. Uses pose tracking to get remote workers moving, with EMA/hysteresis tuning to reduce false hits and progressive difficulty ramps to keep the game active without feeling random.",
    tags: ["ShellHacks 2025", "On-device CV", "Pose tracking", "EMA/Hysteresis", "WebGPU", "Next.js"],
    color: "#253143",
    image: "./assets/move.png",
    link: "https://github.com/doberto6/move",
    linkLabel: "View GitHub repo",
  },
  {
    title: "InsureFair",
    mark: "IF",
    category: "ShellHacks 2024",
    summary:
      "Web app that helps users pick optimal insurance plans. This was a fun first hackathon project where I learned the fundamentals of web development, collaborated under time pressure, and got a clearer feel for turning an idea into a working interface.",
    tags: ["ShellHacks 2024", "First hackathon", "Web development", "Insurance planning"],
    color: "#8c6f4f",
    image: "./assets/insurefair.png",
    link: "https://github.com/hector1128/insurefair",
    linkLabel: "View GitHub repo",
  },
];

const workItems = [
  {
    title: "JPMorganChase",
    mark: "JPMC",
    category: "Experience",
    position: "Software Engineer Intern",
    duration: "June 2026 - August 2026",
    location: "Tampa, Florida",
    summary:
      "Improved AI model efficiency across the CIB AI Marketplace, reducing token consumption by 22% and generating approximately $180K in annualized cost savings by developing automated token usage and optimization tooling.",
    bullets: [
      "Evaluated 50+ LLM deployments across enterprise use cases, benchmarking AI agents and plugins for token efficiency, response quality, latency, and cost.",
      "Identified effective AI solutions for production deployment by comparing performance across practical business workflows.",
      "Implemented the internal MCP Marketplace inside the enterprise VDI environment, enabling secure Windows and Linux access to AI agents and plugins.",
    ],
    tags: ["CIB AI Marketplace", "LLM evaluation", "MCP", "VDI", "Automation"],
    color: "#7a4626",
    image: "./assets/jpmc.png",
  },
  {
    title: "Handshake AI",
    mark: "H",
    category: "Experience",
    position: "AI Trainer",
    duration: "April 2026 - Present",
    location: "Remote",
    summary:
      "Completed 200+ AI training and evaluation tasks by assessing large language model responses for accuracy, reasoning, and instruction following while adhering to detailed quality guidelines.",
    bullets: [
      "Improved training data quality by providing structured feedback and annotations on AI-generated responses.",
      "Supported iterative model refinement through careful evaluation of response quality and instruction following.",
    ],
    tags: ["AI evaluation", "LLM training", "Annotation", "Quality review"],
    color: "#d5ff42",
    image: "./assets/handshake.png",
  },
  {
    title: "NASA-Space Force Delta",
    mark: "NASA",
    category: "Experience",
    position: "Software Engineer Intern",
    duration: "May 2025 - August 2025",
    location: "Orlando, Florida",
    summary:
      "Automated meteorological data preprocessing for 100,000+ weather records, reducing manual data preparation time by developing Python pipelines for cleaning, validation, and analysis.",
    bullets: [
      "Enabled scalable weather data analysis by writing complex SQL queries to extract and aggregate large meteorological datasets.",
      "Analyzed multi-height wind tower measurements for weather research workflows.",
      "Contributed to research presented by the 25th Weather Squadron at the 104th AMS Conference.",
    ],
    tags: ["Python", "SQL", "Meteorological data", "Data pipelines", "Weather research"],
    color: "#24328f",
    image: "./assets/nasa.png",
  },
  {
    title: "Mathnasium",
    mark: "M",
    category: "Experience",
    position: "Lead Instructor",
    duration: "January 2024 - August 2024",
    location: "Orlando, Florida",
    summary:
      "Delivered individualized instruction to groups of up to 4 students, covering subjects from 1st-grade math through calculus.",
    bullets: [
      "Developed tailored learning plans and progress reports based on student assessment results and learning needs.",
      "Conducted assessment review meetings with parents to discuss progress, address concerns, and adjust learning strategies.",
      "Managed daily center operations, scheduling, phone inquiries, and parent relationships to keep workflows running smoothly.",
    ],
    tags: ["Instruction", "Operations", "Client communication", "Learning plans"],
    color: "#d82020",
    image: "./assets/mathnasium.png",
  },
  {
    title: "InsightU Tutoring LLC",
    mark: "IU",
    category: "Experience",
    position: "Co-Founder",
    duration: "September 2023 - Present",
    location: "Orlando, Florida",
    summary:
      "Co-founded and scaled a private tutoring company from the ground up, generating over $27K in revenue and serving 73+ recurring clients across multiple grade levels and subjects.",
    bullets: [
      "Designed and executed strategic growth initiatives aligned with the company mission to deliver personalized, high-impact learning experiences.",
      "Built client relationships, coordinated tutoring operations, and helped shape the service model from the earliest stage.",
    ],
    tags: ["Entrepreneurship", "Tutoring", "Growth", "Client service"],
    color: "#111827",
    image: "./assets/insightu.png",
  },
];

const views = document.querySelectorAll("[data-view]");
const viewButtons = document.querySelectorAll("[data-view-button]");
const projectGrid = document.querySelector("[data-project-grid]");
const projectDetail = document.querySelector("[data-project-detail]");
const workGrid = document.querySelector("[data-work-grid]");
const workDetail = document.querySelector("[data-work-detail]");
const copyEmailButton = document.querySelector("[data-copy-email]");

function setView(nextView) {
  views.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === nextView);
  });

  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewButton === nextView);
  });

  const nextUrl =
    nextView === "intro" ? window.location.pathname : `${window.location.pathname}#${nextView}`;

  window.history.replaceState(null, "", nextUrl);
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function renderSquareGrid(items, grid, type) {
  grid.innerHTML = items
    .map(
      (item, index) => `
        <button
          class="${type === "project" ? "project-preview" : "square-tile"} ${index === 0 ? "active" : ""}"
          type="button"
          data-${type}-index="${index}"
          style="--tile-color: ${item.color}"
          aria-expanded="${index === 0}"
        >
          ${
            type === "project"
              ? `
                <span class="project-preview-image">
                  ${
                    item.image
                      ? `<img src="${item.image}" alt="${item.title} screenshot" />`
                      : `<span>${item.mark}</span>`
                  }
                </span>
                <span class="project-preview-meta">
                  <strong>${item.title}</strong>
                  <span>${item.category}</span>
                </span>
              `
              : `
                <span class="square-mark" aria-hidden="true">
                  ${
                    item.image
                      ? `<img src="${item.image}" alt="" />`
                      : item.mark
                  }
                </span>
                <span class="experience-hover">
                  <strong>${item.position}</strong>
                  <span>${item.duration}</span>
                </span>
              `
          }
        </button>
      `,
    )
    .join("");
}

function renderDetail(item, detail) {
  detail.style.setProperty("--detail-color", item.color);
  const detailMeta =
    item.position && item.duration ? `${item.position} / ${item.duration}` : item.category;

  detail.innerHTML = `
    ${
      item.image
        ? `<img class="detail-image" src="${item.image}" alt="${item.title} screenshot" />`
        : `<div class="detail-mark">${item.mark}</div>`
    }
    <div>
      <p class="eyebrow">${detailMeta}</p>
      <h3>${item.title}</h3>
      ${item.location ? `<p class="detail-location">${item.location}</p>` : ""}
      <p>${item.summary}</p>
      ${
        item.bullets
          ? `<ul class="detail-bullets">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
          : ""
      }
      <div class="tag-row">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      ${
        item.link
          ? `<a class="detail-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || "View project"}</a>`
          : ""
      }
    </div>
  `;
}

function bindSquareGrid(items, grid, detail, type) {
  grid.querySelectorAll(`[data-${type}-index]`).forEach((button) => {
    button.addEventListener("click", () => {
      setActiveItem(items, grid, detail, type, Number(button.dataset[`${type}Index`]));
    });
  });
}

function setActiveItem(items, grid, detail, type, index) {
  grid.querySelectorAll(`[data-${type}-index]`).forEach((button) => {
    const isActive = Number(button.dataset[`${type}Index`]) === index;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-expanded", String(isActive));
  });

  renderDetail(items[index], detail);
}

function initializeSquareSection(items, grid, detail, type) {
  renderSquareGrid(items, grid, type);
  bindSquareGrid(items, grid, detail, type);
  setActiveItem(items, grid, detail, type, 0);
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

initializeSquareSection(projects, projectGrid, projectDetail, "project");
initializeSquareSection(workItems, workGrid, workDetail, "work");

const initialHash = window.location.hash.replace("#", "");
if (initialHash && document.querySelector(`[data-view="${initialHash}"]`)) {
  setView(initialHash);
}
