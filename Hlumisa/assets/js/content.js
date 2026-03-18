// Edit the text, links, icons, and image paths in the data below.
const serviceItems = [
  {
    title: "Collective Learning",
    text: "Hold gathering spaces where young people can learn together about environmental issues, climate action, and shared sustainability challenges.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h12v14H6z"></path><path d="M9 9h6"></path><path d="M9 13h4"></path><path d="M14 5v14"></path></svg>',
  },
  {
    title: "Youth Climate Advocacy",
    text: "Amplify youth perspectives in public dialogue, climate conversations, and environmental action spaces that shape Eswatini's future.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 8-8"></path><path d="M12 4l8 4-8 4-8-4 8-4Z"></path><path d="M12 12v8"></path><path d="M8 18h8"></path></svg>',
  },
  {
    title: "Physical and Digital Platforms",
    text: "Create places for gathering and exchange, both online and in person, so young people can connect, organize, and build climate community.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M17 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M4 20c0-3 2-5 5-5s5 2 5 5"></path><path d="M10 20c0-2 2-4 5-4s5 2 5 4"></path></svg>',
  },
  {
    title: "Creative Arts and Storytelling",
    text: "Use creativity, culture, and storytelling to make climate conversations more visible, accessible, and youth-led.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v5"></path><path d="M12 16v5"></path><path d="M4.5 7.5l3.5 2"></path><path d="M16 14.5l3.5 2"></path><path d="M4.5 16.5l3.5-2"></path><path d="M16 9.5l3.5-2"></path><circle cx="12" cy="12" r="4"></circle></svg>',
  },
  {
    title: "Education and Environmental Awareness",
    text: "Support climate education, environmental awareness, and shared understanding through volunteer-led activity and peer learning.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10"></path><path d="M12 7v10"></path><path d="M5 5h4v4H5z"></path><path d="M15 15h4v4h-4z"></path></svg>',
  },
];

const projectItems = [
  {
    tag: "2020 milestone",
    title: "Interactive Forum Concept",
    text: "Hlumisa was first conceived in 2020 as an interactive forum event for young climate leaders between ECCo and Bushfire Festival.",
    image: "assets/images/project-workshops.svg",
    alt: "Illustration for interactive forum concept",
  },
  {
    tag: "2021 milestone",
    title: "NDC Youth Engagement",
    text: "The revision of Eswatini's Nationally Determined Contributions helped reinvigorate Hlumisa, bringing together fresh young minds and a steering committee.",
    image: "assets/images/project-school-outreach.svg",
    alt: "Illustration for NDC youth engagement",
  },
  {
    tag: "2022 milestone",
    title: "Green Round Table Launch",
    text: "Hlumisa was launched at the first edition of the Green Round Table, an annual event for young environmentalists in collaboration with Bushfire.",
    image: "assets/images/project-tree-planting.svg",
    alt: "Illustration for Green Round Table launch",
  },
  {
    tag: "Current focus",
    title: "Creative Climate Platforms",
    text: "Volunteer-led projects can combine creative arts, storytelling, and youth dialogue to make environmental action visible and collaborative.",
    image: "assets/images/project-policy-dialogues.svg",
    alt: "Illustration for creative climate platforms",
  },
  {
    tag: "Current focus",
    title: "Digital and Physical Gathering Spaces",
    text: "Hlumisa focuses on platforms where young people can gather, exchange ideas, and learn together across both digital and physical spaces.",
    image: "assets/images/project-cleanup.svg",
    alt: "Illustration for digital and physical gathering spaces",
  },
];

const involvementItems = [
  {
    title: "Volunteer",
    text: "Join a volunteer-run movement and contribute your time, ideas, and energy to youth-led environmental action.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"></path></svg>',
  },
  {
    title: "Partner With Us",
    text: "Collaborate with Hlumisa on youth forums, learning spaces, environmental events, and climate-focused community engagement.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12l3 3 5-5"></path><path d="M3 12h4"></path><path d="M17 12h4"></path><path d="M8 8V5"></path><path d="M16 19v-3"></path></svg>',
  },
  {
    title: "Attend Events",
    text: "Take part in gatherings, forums, and collective learning spaces that connect youth, climate issues, and shared action.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v4"></path><path d="M17 4v4"></path><path d="M4 10h16"></path><path d="M5 6h14v13H5z"></path><path d="M9 14h2"></path><path d="M13 14h2"></path></svg>',
  },
  {
    title: "Become a Youth Advocate",
    text: "Help shape climate conversations in Eswatini and represent a youth perspective through advocacy, creativity, and collaboration.",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"></path><path d="M8 7c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4 2-4 4 2 4 4 4 4-2 4-4"></path></svg>',
  },
];

const contactItems = [
  {
    title: "Email",
    text: '<p><a class="detail-link" href="mailto:hlumisa.eswatini@gmail.com">hlumisa.eswatini@gmail.com</a></p><p class="micro-copy">Primary public contact email for Hlumisa.</p>',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"></path><path d="m5 7 7 6 7-6"></path></svg>',
  },
  {
    title: "Location",
    text: "<p>Eswatini</p><p class=\"micro-copy\">Independent grassroots movement working with young climate and environmental changemakers in Eswatini.</p>",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
  },
  {
    title: "Social Links",
    text: '<div class="social-row"><a class="social-link" href="https://www.instagram.com/hlumisa_sz?igsh=MTNpdGVzYTcyN2sxMw==" target="_blank" rel="noreferrer" aria-label="Hlumisa Instagram"><span class="social-mark" aria-hidden="true">IG</span><span>Instagram</span></a><a class="social-link" href="https://www.facebook.com/share/17DvACKTM2/" target="_blank" rel="noreferrer" aria-label="Hlumisa Facebook"><span class="social-mark" aria-hidden="true">FB</span><span>Facebook</span></a><a class="social-link" href="https://www.linkedin.com/company/hlumisa-youth-climate-network/" target="_blank" rel="noreferrer" aria-label="Hlumisa LinkedIn"><span class="social-mark" aria-hidden="true">IN</span><span>LinkedIn</span></a></div><p class="micro-copy">Add the official X / Twitter link here if you want it displayed too.</p>',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5a7 7 0 0 1 7 7"></path><path d="M5 12a7 7 0 0 1 7-7"></path><path d="M12 19a7 7 0 0 1-7-7"></path><path d="M19 12a7 7 0 0 1-7 7"></path><circle cx="12" cy="12" r="2"></circle></svg>',
  },
];

function renderServices() {
  const root = document.getElementById("services-grid");
  if (!root) return;

  root.innerHTML = serviceItems
    .map(
      (item) => `
        <article class="card info-card reveal">
          <div class="card-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const root = document.getElementById("projects-grid");
  if (!root) return;

  root.innerHTML = projectItems
    .map(
      (item) => `
        <article class="card project-card reveal">
          <img src="${item.image}" alt="${item.alt}">
          <div class="project-body">
            <span class="tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="text-link" href="#contact">Read More</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderInvolvement() {
  const root = document.getElementById("involvement-grid");
  if (!root) return;

  root.innerHTML = involvementItems
    .map(
      (item) => `
        <article class="card info-card reveal">
          <div class="card-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  const root = document.getElementById("contact-cards");
  if (!root) return;

  root.innerHTML = contactItems
    .map(
      (item) => `
        <article class="card contact-card reveal">
          <div class="card-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          ${item.text}
        </article>
      `
    )
    .join("");
}

renderServices();
renderProjects();
renderInvolvement();
renderContacts();
