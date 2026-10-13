(() => {
  const data = window.PORTFOLIO;
  const $ = (s, root = document) => root.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const age = (date) => { const birth = new Date(`${date}T00:00:00`), now = new Date(); let n = now.getFullYear() - birth.getFullYear(); if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) n--; return n; };
  let scrollRevealObserver;
  const p = data.profile;
  $("#hero-name").textContent = p.name; $("#hero-role").textContent = p.headline; $("#hero-description").textContent = p.description; $("#about-description").textContent = p.about;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const typedRole = $("#typing-role");
  if (typedRole && !reduceMotion) {
    const roles = ["Computer Science Student", "Aspiring Software Developer", "Web Development Learner", "IoT Enthusiast"];
    let roleIndex = 0, charIndex = roles[0].length, deleting = true;
    const typeNext = () => {
      const role = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      typedRole.textContent = role.slice(0, Math.max(0, charIndex));
      let delay = deleting ? 42 : 72;
      if (charIndex <= 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }
      else if (charIndex >= roles[roleIndex].length && !deleting) { deleting = true; delay = 1500; }
      window.setTimeout(typeNext, delay);
    };
    window.setTimeout(typeNext, 1800);
  }
  $("#bio-name").textContent = p.name;
  const details = [["✳", "Nama panggilan", p.nickname], ["⌖", "Tempat lahir", p.birthplace], ["◷", "Tanggal lahir", p.showBirthDate ? `${new Date(`${p.birthDate}T00:00:00`).toLocaleDateString("id-ID", {day:"numeric", month:"long", year:"numeric"})} · ${age(p.birthDate)} tahun` : ""], ["⌂", "Domisili", p.city], ["⌘", "Universitas", p.university], ["▤", "Program studi", p.study], ["◉", "Semester", String(p.semester)]];
  $("#bio-list").innerHTML = details.filter(([, , v]) => v).map(([icon, label, value]) => `<div class="bio-row"><span class="bio-icon" aria-hidden="true">${icon}</span><span class="bio-label">${esc(label)}</span><b>${esc(value)}</b></div>`).join("");
  $("#education-list").innerHTML = data.education.filter(x => x.institution || x.program).map(x => `<article class="education-item reveal"><span class="timeline-pin"></span><div class="education-meta">${esc(x.period || "PENDIDIKAN SAAT INI")}</div><div><h3>${esc(x.institution)}</h3><p>${esc(x.program)}${x.detail ? ` <span>·</span> ${esc(x.detail)}` : ""}</p>${x.description ? `<p class="muted">${esc(x.description)}</p>` : ""}</div><span class="education-arrow">↗</span></article>`).join("");
  $("#skills-list").innerHTML = data.skills.filter(x => x.items?.length).map(x => `<article class="skill-card reveal"><div class="skill-card-head"><span class="skill-icon">${esc(x.icon)}</span><h3>${esc(x.category)}</h3></div><div class="skill-tags">${x.items.map(i => `<span>${esc(i)}</span>`).join("")}</div></article>`).join("");
  const categories = ["Semua", "Web Development", "Mobile Development", "Internet of Things", "Data dan Pemrograman"];
  const filter = $("#project-filters"); filter.innerHTML = categories.map((x, i) => `<button type="button" class="filter-button${i === 0 ? " active" : ""}" data-category="${esc(x)}" aria-pressed="${i === 0}">${esc(x)}</button>`).join("");
  const projectsEl = $("#projects-list");
  function renderProjects(category = "Semua") {
    const projects = data.projects.filter(x => category === "Semua" || x.category === category);
    $("#project-count").textContent = `${String(projects.length).padStart(2,"0")} PROYEK`;
    projectsEl.innerHTML = projects.map((x, i) => `<article class="project-card reveal"><div class="project-art art-${i % 4}"><span class="project-art-label">${esc(x.label || "PROJECT")}</span><span class="art-glyph">${x.category === "Internet of Things" ? "⌁" : "〈〉"}</span><span class="art-orbit"></span><span class="art-number">${String(i + 1).padStart(2,"0")}</span></div><div class="project-content"><div class="project-category">${esc(x.category)}</div><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p><div class="project-tech">${(x.technologies || []).map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="project-links"><button class="project-detail" data-project="${esc(x.name)}" type="button">Detail proyek <span>↗</span></button>${x.repository ? `<a href="${esc(x.repository)}" target="_blank" rel="noreferrer">Source code ↗</a>` : `<span class="coming-soon">Segera hadir</span>`}</div></div></article>`).join("");
    observeReveals();
  }
  renderProjects(); filter.addEventListener("click", e => { const b = e.target.closest("button[data-category]"); if (!b) return; filter.querySelectorAll("button").forEach(x => { const active = x === b; x.classList.toggle("active", active); x.setAttribute("aria-pressed", String(active)); }); renderProjects(b.dataset.category); });
  const dialog = $("#project-dialog");
  projectsEl.addEventListener("click", e => { const b = e.target.closest("[data-project]"); if (!b) return; const x = data.projects.find(y => y.name === b.dataset.project); $("#dialog-category").textContent = x.category; $("#dialog-title").textContent = x.name; $("#dialog-description").textContent = x.description; const facts = [["Status", x.status], ["Latar belakang", x.background], ["Tujuan", x.purpose], ["Fitur utama", (x.features || []).join(", ")], ["Teknologi", (x.technologies || []).join(", ")]]; $("#dialog-facts").innerHTML = facts.filter(([,v]) => v).map(([k,v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("") || `<p class="muted">Detail proyek akan diperbarui.</p>`; $("#dialog-actions").innerHTML = x.repository ? `<a class="button button-primary" href="${esc(x.repository)}" target="_blank" rel="noreferrer">Buka repository ↗</a>` : ""; dialog.showModal(); });
  $(".dialog-close").addEventListener("click", () => dialog.close()); dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  $("#hero-github").href = p.github; $("#contact-github").href = p.github;
  const contacts = [["email", "Email", v => `mailto:${v}`], ["linkedin", "LinkedIn", v => v], ["instagram", "Instagram", v => v], ["phone", "Telepon", v => `tel:${v}`]].filter(([key]) => data.contact[key]);
  $("#contact-actions").innerHTML = contacts.map(([key, label, href]) => `<a class="button button-quiet" href="${esc(href(data.contact[key]))}"${key !== "email" && key !== "phone" ? ' target="_blank" rel="noreferrer"' : ""}>${label} ↗</a>`).join("");
  $("#year").textContent = new Date().getFullYear();
  const img = $("#profile-image"); let photoMode = p.avatarMode === "profile" ? "profile" : "avatar";
  function setPhoto(mode) { photoMode = mode; const path = mode === "profile" ? p.profileImage : p.avatarImage; img.src = mode === "profile" ? path : p.avatarImage; img.alt = mode === "profile" ? `Foto profil ${p.name}` : `Avatar ilustrasi ${p.name}`; document.querySelectorAll(".photo-option").forEach(b => b.classList.toggle("active", b.dataset.photo === mode)); }
  document.querySelectorAll(".photo-option").forEach(b => b.addEventListener("click", () => setPhoto(b.dataset.photo)));
  img.addEventListener("error", () => { if (photoMode === "profile") { img.src = p.avatarImage; img.alt = `Avatar ilustrasi ${p.name}; tambahkan foto ke ${p.profileImage}`; } }); setPhoto(photoMode);
  const toggle = $(".menu-toggle"), nav = $("#nav-links"); toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu"); nav.classList.toggle("open", open); });
  nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Buka menu"); } });
  const links = [...nav.querySelectorAll("a")], sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) { const activeObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("current", a.hash === `#${e.target.id}`)); }), { rootMargin: "-35% 0px -55% 0px" }); sections.forEach(s => activeObserver.observe(s)); }
  function observeReveals() {
    const targets = document.querySelectorAll(".section-heading, .bio-card, .about-note, .education-item, .skill-card, .project-card, .contact-copy, .contact-card");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(el => { el.classList.remove("will-reveal"); el.classList.add("is-revealed"); });
      return;
    }
    if (!scrollRevealObserver) scrollRevealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        scrollRevealObserver.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -7% 0px", threshold: .04 });
    targets.forEach((el, index) => {
      if (el.classList.contains("is-revealed") || el.classList.contains("will-reveal")) return;
      el.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
      el.classList.add("will-reveal");
      scrollRevealObserver.observe(el);
    });
  }
  observeReveals();

  const updateNavbar = () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 12);
  updateNavbar(); window.addEventListener("scroll", updateNavbar, { passive: true });
  projectsEl.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const card = e.target.closest(".project-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--pointer-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--pointer-y", `${e.clientY - rect.top}px`);
  });
})();
