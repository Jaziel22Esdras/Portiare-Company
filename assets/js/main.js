const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");
const cursorGlow = document.querySelector(".cursor-glow");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 8);
});

const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((el) => observer.observe(el));
}

const filterButtons = document.querySelectorAll(".filter-btn");
const solutionCards = document.querySelectorAll(".solution-card");
if (filterButtons.length && solutionCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      solutionCards.forEach((card) => {
        const categories = card.dataset.category || "";
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

const caseTitle = document.querySelector("#case-title");
const caseText = document.querySelector("#case-text");
const caseMeta = document.querySelector("#case-meta");
const nextCaseButton = document.querySelector("#next-case");

const caseItems = [
  {
    title: "Lançamento de campanha omnichannel com impacto nacional.",
    text: "Unificamos mídia, criação e dados para aumentar alcance qualificado e reduzir custo de aquisição.",
    meta: "Impacto: +35M pessoas alcançadas"
  },
  {
    title: "Programa de conteúdo orientado por dados para crescimento de marca.",
    text: "Ajustamos calendário, formatos e distribuição com inteligência de audiência em tempo real.",
    meta: "Impacto: +42% de brand lift"
  },
  {
    title: "Automação criativa com IA para acelerar produção e performance.",
    text: "Escalamos testes de criativos e personalização para diferentes públicos e canais de mídia.",
    meta: "Impacto: +66% de ROI em campanhas"
  }
];

let caseIndex = 0;
if (nextCaseButton && caseTitle && caseText && caseMeta) {
  nextCaseButton.addEventListener("click", () => {
    caseIndex = (caseIndex + 1) % caseItems.length;
    caseTitle.textContent = caseItems[caseIndex].title;
    caseText.textContent = caseItems[caseIndex].text;
    caseMeta.textContent = caseItems[caseIndex].meta;
  });
}

const accordionItems = document.querySelectorAll(".accordion-item");
if (accordionItems.length) {
  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      accordionItems.forEach((entry) => entry.classList.remove("active"));
      if (!isOpen) item.classList.add("active");
    });
  });
}

const magneticButtons = document.querySelectorAll(".btn-magnetic");
magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.15}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});

const canUseCursorGlow = window.matchMedia("(pointer:fine)").matches;
if (cursorGlow && canUseCursorGlow) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

const yearElements = document.querySelectorAll(".year");
if (yearElements.length) {
  const year = String(new Date().getFullYear());
  yearElements.forEach((element) => {
    element.textContent = year;
  });
}
