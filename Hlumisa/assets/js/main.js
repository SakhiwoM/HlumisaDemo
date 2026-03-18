const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const donationTiers = document.querySelectorAll(".donation-tier");
const customAmountWrapper = document.getElementById("custom-amount-wrapper");
const customDonationInput = document.getElementById("custom-donation");
const selectedAmount = document.getElementById("selected-amount");
const modalAmount = document.getElementById("modal-amount");
const donationModal = document.getElementById("donation-modal");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const openDonationButtons = document.querySelectorAll(".js-open-donation");
const yearTarget = document.getElementById("year");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

syncSelectedAmount(currentAmount);
bindDonationTiers();
bindForms();
bindRevealAnimations();

openDonationButtons.forEach((button) => button.addEventListener("click", openDonationModal));
modalCloseButtons.forEach((button) => button.addEventListener("click", closeDonationModal));

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
