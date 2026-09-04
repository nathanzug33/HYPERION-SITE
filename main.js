/* ===== Hyperion Group — main.js =====
   - injecte le header et le footer (un seul endroit à modifier)
   - menu mobile
   - fiches métiers cliquables (modale) sur secteurs.html, ouverture par ancre (#aeronautique…)  */

const EMAIL = "contact@hyperiongroup.fr";

const NAV = `
<div class="wrap">
 <a href="index.html"><img class="logo" src="assets/logo.png" alt="Hyperion Group"></a>
 <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
 <nav class="menu">
  <div class="item" data-page="index"><a href="index.html">Accueil</a></div>
  <div class="item" data-page="metier"><a href="index.html#metier">Le métier</a></div>
  <div class="item has-sub" data-page="offres"><a href="offres.html">Nos services</a>
    <div class="sub"><a href="offres.html#assistance">Assistance technique<small>Ingénieurs en régie, au TJM</small></a>
    <a href="offres.html#recrutement">Recrutement spécialisé<small>Chasse de profils, au succès</small></a></div></div>
  <div class="item has-sub" data-page="secteurs"><a href="secteurs.html">Secteurs</a>
    <div class="sub"><a href="secteurs.html#industrie">Industrie<small>Aéro-défense, énergie, chimie…</small></a>
    <a href="secteurs.html#it">IT &amp; Numérique<small>Dev, data, cyber, cloud…</small></a></div></div>
  <div class="item" data-page="equipe"><a href="equipe.html">L'équipe</a></div>
  <div class="item" data-page="emploi"><a href="offres-emploi.html">Offres d'emploi</a></div>
  <div class="item" data-page="contact"><a href="contact.html">Contact</a></div>
 </nav>
 <div class="nav-cta"><a class="btn sm" href="contact.html">Nous contacter</a></div>
</div>`;

const FOOT = `
<div class="wrap">
 <div class="foot-top">
  <div><img class="logo" src="assets/logo_white.png" alt="Hyperion Group"><div class="tagline">Engineering, illuminated.</div></div>
  <div class="foot-links">
   <div><b>Société</b><a href="index.html#metier">Le métier</a><a href="equipe.html">L'équipe</a><a href="index.html#implantation">Implantation</a><a href="offres-emploi.html">Offres d'emploi</a></div>
   <div><b>Offres</b><a href="offres.html#assistance">Assistance technique</a><a href="offres.html#recrutement">Recrutement</a><a href="secteurs.html#industrie">Industrie</a><a href="secteurs.html#it">IT &amp; Numérique</a></div>
   <div><b>Contact</b><a href="mailto:${EMAIL}">${EMAIL}</a><a href="contact.html">Nous écrire</a></div>
  </div>
 </div>
 <div class="foot-bottom"><span>© ${new Date().getFullYear()} Hyperion Group — Assistance technique &amp; recrutement.</span>
 <span><a href="mentions-legales.html">Mentions légales</a> · <a href="politique-cookies.html">Cookies &amp; confidentialité</a></span></div>
</div>`;

const ICON = p => `<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;

document.addEventListener("DOMContentLoaded", () => {
  /* header / footer */
  const h = document.querySelector("header.nav"); if (h) h.innerHTML = NAV;
  const f = document.querySelector("footer.foot"); if (f) f.innerHTML = FOOT;
  const page = document.body.dataset.page;
  document.querySelectorAll(`.item[data-page="${page}"]`).forEach(i => i.classList.add("active"));
  const burger = document.querySelector(".burger"), menu = document.querySelector(".menu");
  burger?.addEventListener("click", () => {
    const open = menu.classList.toggle("open"); burger.classList.toggle("open", open); burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll("[data-email]").forEach(el => { el.textContent = EMAIL; if (el.tagName === "A") el.href = "mailto:" + EMAIL; });

  /* rendu des métiers là où on le demande */
  const M = window.HYPERION_METIERS || [], G = window.HYPERION_GROUPS || {};

  // grilles de cartes (secteurs.html) : <div class="mgrid" data-group="industrie"></div>
  document.querySelectorAll(".mgrid[data-group]").forEach(grid => {
    grid.innerHTML = M.filter(m => m.group === grid.dataset.group).map(m => `
      <button class="mcard" type="button" data-metier="${m.id}">
        <span class="ico">${ICON(m.icon)}</span><h3>${m.title}</h3><p>${m.short}</p><span class="more">Voir le métier</span>
      </button>`).join("");
  });
  // tuiles hero (index.html) : <div class="mosaic" data-tiles="aeronautique,energie,…"></div>
  document.querySelectorAll("[data-tiles]").forEach(box => {
    const ids = box.dataset.tiles.split(",");
    box.insertAdjacentHTML("beforeend", ids.map(id => { const m = M.find(x => x.id === id); return m ? `<a class="tile" href="secteurs.html#${m.id}">${ICON(m.icon)}<b>${m.title}</b></a>` : ""; }).join(""));
  });
  // chips (bandes accueil) : <div class="chips" data-chips="industrie"></div>
  document.querySelectorAll(".chips[data-chips]").forEach(box => {
    box.innerHTML = M.filter(m => m.group === box.dataset.chips).map(m => `<a href="secteurs.html#${m.id}">${m.title}</a>`).join("");
  });

  /* modale fiche métier */
  const dlg = document.querySelector("dialog.mdlg");
  if (dlg) {
    const open = id => {
      const m = M.find(x => x.id === id); if (!m) return;
      dlg.innerHTML = `
        <button class="close" aria-label="Fermer">×</button>
        <div class="top"><div class="glow"></div><div class="ico">${ICON(m.icon)}</div>
          <div><small>${G[m.group]?.title || ""}</small><h3>${m.title}</h3></div></div>
        <div class="body"><p>${m.desc}</p>
          <h4>Profils que nous plaçons et recrutons</h4>
          <div class="tags">${m.profils.map(p => `<span>${p}</span>`).join("")}</div>
          <div class="mfoot"><span style="color:#8693A4;font-size:14px">Assistance technique ou recrutement, selon votre besoin.</span>
            <a class="btn" href="contact.html?metier=${encodeURIComponent(m.title)}">Nous parler de ce métier</a></div></div>`;
      dlg.querySelector(".close").onclick = () => dlg.close();
      if (!dlg.open) dlg.showModal();
      history.replaceState(null, "", "#" + m.id);
    };
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", () => { if (location.hash && M.some(m => "#" + m.id === location.hash)) history.replaceState(null, "", location.pathname); });
    document.addEventListener("click", e => { const c = e.target.closest("[data-metier]"); if (c) open(c.dataset.metier); });
    const fromHash = () => { const id = location.hash.slice(1); if (M.some(m => m.id === id)) open(id); };
    fromHash(); window.addEventListener("hashchange", fromHash);
  }

  /* contact : pré-remplir l'objet depuis ?metier= */
  const sel = document.querySelector("select[name='sujet']"), q = new URLSearchParams(location.search).get("metier");
  if (sel && q) { const msg = document.querySelector("textarea[name='message']"); if (msg && !msg.value) msg.value = `Bonjour, je vous contacte au sujet du métier : ${q}.\n`; }
});
