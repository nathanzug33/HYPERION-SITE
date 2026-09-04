/* ===== Hyperion Group — metiers.js =====
   Un seul endroit pour modifier les métiers : titre, phrase courte, description, profils, icône.
   L'id sert d'ancre : secteurs.html#aeronautique ouvre directement la fiche.  */

window.HYPERION_METIERS = [
  /* ---------- INDUSTRIE ---------- */
  { id:"aeronautique", group:"industrie", title:"Aéronautique & Défense",
    short:"Conception, calcul, essais et industrialisation de systèmes embarqués et de structures.",
    desc:"Nous accompagnons avionneurs, motoristes et équipementiers sur l'ensemble du cycle produit : bureau d'études, calcul de structures, essais, qualité et industrialisation. Les exigences de certification (EN 9100, DO-178, ITAR) et les cadences de production font de ce secteur l'un des plus demandeurs en profils qualifiés.",
    profils:["Ingénieur d'études mécanique","Ingénieur calcul structures","Ingénieur systèmes embarqués","Responsable qualité / conformité","Méthodes & industrialisation"],
    icon:'<path d="M3 13l8-1 4-8h2l-2 8 6 2v2l-6 0-1 5h-2l-1-5-8 1z"/>' },

  { id:"energie", group:"industrie", title:"Énergie & Environnement",
    short:"Nucléaire, renouvelables, réseaux, hydrogène et traitement de l'eau ou des déchets.",
    desc:"Du nucléaire aux énergies renouvelables, en passant par les réseaux, l'hydrogène et les installations de traitement, nous renforçons les équipes d'ingénierie, d'exploitation et de maintenance. La transition énergétique crée un besoin durable de compétences en process, sûreté, électricité et automatisme.",
    profils:["Ingénieur process","Ingénieur sûreté / HSE","Chef de projet énergies renouvelables","Ingénieur électricité & automatisme","Chargé d'affaires maintenance"],
    icon:'<path d="M13 2L5 14h6l-1 8 9-13h-6l0-7z"/>' },

  { id:"chimie", group:"industrie", title:"Chimie & Matériaux",
    short:"Procédés, formulation, laboratoire et production en environnement réglementé.",
    desc:"Chimie fine, pétrochimie, matériaux composites, plasturgie : nous mobilisons des ingénieurs procédés, des chimistes et des experts qualité sur des sites où la sécurité (ATEX, SEVESO) et la traçabilité sont centrales. Nos consultants interviennent aussi bien en R&D qu'en production.",
    profils:["Ingénieur procédés","Chimiste / formulateur","Ingénieur matériaux & composites","Responsable HSE site","Technicien laboratoire"],
    icon:'<path d="M9 3h6M10 3v6L4 20a1 1 0 001 1h14a1 1 0 001-1L14 9V3"/><path d="M7 15h10"/>' },

  { id:"mobilite", group:"industrie", title:"Automobile, ferroviaire, naval",
    short:"Systèmes de mobilité, électrification, sûreté de fonctionnement et production.",
    desc:"Constructeurs et équipementiers de la mobilité font face à l'électrification, aux nouvelles normes et à la digitalisation des usines. Nous plaçons des profils en conception mécanique et électronique, en sûreté de fonctionnement, en qualité fournisseurs et en amélioration continue.",
    profils:["Ingénieur conception mécanique","Ingénieur électronique de puissance","Ingénieur sûreté de fonctionnement","Qualité fournisseurs","Ingénieur amélioration continue / lean"],
    icon:'<path d="M4 16V9a2 2 0 012-2h12a2 2 0 012 2v7"/><path d="M3 16h18M7 20h0M17 20h0"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M8 11h8"/>' },

  { id:"mecanique", group:"industrie", title:"Mécanique & Life Sciences",
    short:"Machines spéciales, dispositifs médicaux, pharma et agroalimentaire.",
    desc:"De la machine spéciale au dispositif médical, de la ligne pharmaceutique à l'agroalimentaire : nous intervenons sur la conception, la validation (GMP, ISO 13485), l'industrialisation et la maintenance d'équipements de production exigeants.",
    profils:["Ingénieur mécanique / machines spéciales","Ingénieur validation & qualification","Ingénieur affaires réglementaires","Ingénieur maintenance industrielle","Chef de projet industrialisation"],
    icon:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>' },

  /* ---------- IT & NUMÉRIQUE ---------- */
  { id:"dev", group:"it", title:"Développement & logiciel",
    short:"Applications métier, logiciels embarqués, web et mobile, en équipes agiles.",
    desc:"Nous mettons à disposition des développeurs et architectes logiciel sur des applications métier, des logiciels embarqués ou temps réel, du web et du mobile. Nos consultants s'intègrent à vos équipes agiles et aux environnements industriels où le logiciel pilote la production.",
    profils:["Développeur back-end / front-end","Développeur logiciel embarqué (C/C++)","Architecte logiciel","Tech lead","Ingénieur test & qualité logicielle"],
    icon:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>' },

  { id:"data", group:"it", title:"Data & Intelligence artificielle",
    short:"Data engineering, analytics, IA et maintenance prédictive industrielle.",
    desc:"Collecte, fiabilisation et valorisation des données : nous accompagnons vos projets data, de la mise en place de plateformes à la modélisation IA. Dans l'industrie, cela signifie souvent maintenance prédictive, vision par ordinateur et optimisation des process à partir des données machines.",
    profils:["Data engineer","Data scientist / ML engineer","Data analyst / BI","Architecte data","Ingénieur IA industrielle"],
    icon:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>' },

  { id:"cyber", group:"it", title:"Cybersécurité",
    short:"Sécurité des SI et des systèmes industriels (OT), conformité et gouvernance.",
    desc:"Sécurisation des systèmes d'information et des réseaux industriels (OT/SCADA), audits, mise en conformité (NIS2, ISO 27001), réponse à incident : nous plaçons des experts capables de parler aussi bien aux DSI qu'aux responsables de production.",
    profils:["Analyste SOC","Ingénieur sécurité OT / industriel","Pentester","RSSI / GRC","Architecte sécurité"],
    icon:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M10 11V9.5a2 2 0 014 0V11"/>' },

  { id:"cloud", group:"it", title:"Infrastructure & Cloud",
    short:"Réseaux, systèmes, cloud public ou privé, DevOps et exploitation.",
    desc:"Administration systèmes et réseaux, migration et exploitation cloud (AWS, Azure, GCP), conteneurisation, CI/CD : nos consultants conçoivent et opèrent des infrastructures fiables, y compris pour les sites de production où la disponibilité est critique.",
    profils:["Ingénieur systèmes & réseaux","Ingénieur cloud / DevOps","Administrateur bases de données","Architecte infrastructure","Ingénieur SRE / exploitation"],
    icon:'<path d="M7 18a4 4 0 01-.5-8 6 6 0 0111.6 1.5A3.5 3.5 0 0117 18z"/><path d="M9 21h6M12 18v3"/>' },

  { id:"projets", group:"it", title:"Pilotage de projets SI",
    short:"Chefferie de projet, PMO, MOA et déploiement d'ERP / MES.",
    desc:"Cadrage, pilotage, conduite du changement : nous mettons à disposition des chefs de projet, PMO et consultants MOA pour vos programmes SI, en particulier les déploiements d'ERP, de MES et les projets d'usine connectée.",
    profils:["Chef de projet SI","PMO","Consultant MOA / fonctionnel","Product owner","Consultant ERP / MES"],
    icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11M15 9v11"/>' }
];

window.HYPERION_GROUPS = {
  industrie:{ title:"Industrie", intro:"Aéronautique, énergie, chimie, mobilité, mécanique : les secteurs où les compétences techniques sont les plus rares." },
  it:{ title:"IT & Numérique", intro:"Développement, data, cybersécurité, cloud, pilotage : le numérique au service des entreprises et des usines." }
};
