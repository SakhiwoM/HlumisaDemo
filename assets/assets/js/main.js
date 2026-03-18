const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const themeToggle = document.querySelector(".theme-toggle");
const donationTiers = document.querySelectorAll(".donation-tier");
const customAmountWrapper = document.getElementById("custom-amount-wrapper");
const customDonationInput = document.getElementById("custom-donation");
const selectedAmount = document.getElementById("selected-amount");
const modalAmount = document.getElementById("modal-amount");
const donationModal = document.getElementById("donation-modal");
const projectModal = document.getElementById("project-modal");
const projectModalTag = document.getElementById("project-modal-tag");
const projectModalTitle = document.getElementById("project-modal-title");
const projectModalImage = document.getElementById("project-modal-image");
const projectModalText = document.getElementById("project-modal-text");
const projectModalDetail = document.getElementById("project-modal-detail");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const projectCloseButtons = document.querySelectorAll("[data-close-project]");
const openDonationButtons = document.querySelectorAll(".js-open-donation");
const openProjectButtons = document.querySelectorAll(".js-open-project");
const projectCards = document.querySelectorAll(".js-project-card");
const yearTarget = document.getElementById("year");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeStorageKey = "hlumisa-theme";

let currentAmount = 100;
let lastFocusedElement = null;

function formatAmount(value) {
  return `E${new Intl.NumberFormat("en-US").format(value)}`;
}

function setNavState(isOpen) {
  body.classList.toggle("nav-open", isOpen);
  if (!navToggle) return;
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

function applyTheme(theme) {
  body.dataset.theme = theme;

  if (!themeToggle) return;

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function syncSelectedAmount(value) {
  currentAmount = Number(value) || 0;
  const display = currentAmount > 0 ? formatAmount(currentAmount) : "Custom amount";
  selectedAmount.textContent = display;
  modalAmount.textContent = display;
}

function setActiveTier(targetButton) {
  donationTiers.forEach((button) => {
    button.classList.toggle("active", button === targetButton);
  });
}

function openDonationModal() {
  lastFocusedElement = document.activeElement;
  donationModal.hidden = false;
  body.classList.add("modal-open");
  donationModal.querySelector(".modal-close")?.focus();
}

function closeDonationModal() {
  donationModal.hidden = true;
  body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function openProjectModal(projectIndex) {
  const project = window.projectItems?.[projectIndex];
  if (!project || !projectModal) return;

  lastFocusedElement = document.activeElement;
  projectModalTag.textContent = project.tag;
  projectModalTitle.textContent = project.title;
  projectModalImage.src = project.image;
  projectModalImage.alt = project.alt;
  projectModalText.textContent = project.text;
  projectModalDetail.textContent = project.detail || "";
  projectModal.hidden = false;
  body.classList.add("modal-open");
  projectModal.querySelector(".modal-close")?.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.hidden = true;
  body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function bindDonationTiers() {
  donationTiers.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.dataset.amount;
      setActiveTier(button);

      if (amount === "custom") {
        customAmountWrapper.hidden = false;
        customDonationInput.focus();
        syncSelectedAmount(Number(customDonationInput.value) || 0);
        return;
      }

      customAmountWrapper.hidden = true;
      customDonationInput.value = "";
      syncSelectedAmount(Number(amount));
    });
  });

  customDonationInput?.addEventListener("input", (event) => {
    const nextAmount = Number(event.target.value);
    syncSelectedAmount(nextAmount > 0 ? nextAmount : 0);
  });
}

function bindForms() {
  document.querySelectorAll(".demo-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const statusKey = form.id === "interest-form" ? "interest" : "contact";
      const statusField = document.querySelector(`[data-form-status="${statusKey}"]`);

      if (!statusField) return;

      statusField.textContent =
        statusKey === "interest"
          ? "Thanks for your interest. This demo form does not send data yet, but it is ready to connect to a live form service."
          : "Thanks for your message. This is a prototype contact form, so no email has been sent yet.";

      form.reset();
    });
  });
}

function bindRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) return;
  if (prefersReducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem(themeStorageKey);
const initialTheme = storedTheme || (prefersDarkScheme.matches ? "dark" : "light");
applyTheme(initialTheme);

syncSelectedAmount(currentAmount);
bindDonationTiers();
bindForms();
bindRevealAnimations();

themeToggle?.addEventListener("click", () => {
  const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem(themeStorageKey, nextTheme);
});

openDonationButtons.forEach((button) => button.addEventListener("click", openDonationModal));
modalCloseButtons.forEach((button) => button.addEventListener("click", closeDonationModal));
openProjectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openProjectModal(Number(button.dataset.projectIndex));
  });
});
projectCards.forEach((card) => {
  const open = () => openProjectModal(Number(card.dataset.projectIndex));
  card.addEventListener("click", open);
});
projectCloseButtons.forEach((button) => button.addEventListener("click", closeProjectModal));

navToggle?.addEventListener("click", () => {
  setNavState(!body.classList.contains("nav-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavState(false));
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open") || !siteNav || !navToggle) return;

  const clickedInsideNav = siteNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideNav && !clickedToggle) {
    setNavState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
    if (!donationModal.hidden) closeDonationModal();
    if (projectModal && !projectModal.hidden) closeProjectModal();
  }
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  },
  { passive: true }
);

// Replace the donation modal flow with a live payment redirect or embedded checkout later.
