const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => navigation.classList.toggle('open'));
}

const detailHero = document.querySelector('.detail-hero');
if (detailHero) {
  const projectImages = {
    'torre-riga': 'torre-riga.webp',
    'tribu-coco-del-mar': 'tribu-coco-del-mar.webp',
    'hospital-materno-fetal': 'materno-fetal.webp',
    'urgencias-pediatricas': 'urgencias-pediatricas.webp',
    'nuevo-ion': 'nuevo-ion.webp',
    'park-eleven': 'park-eleven.webp',
    'galeras-panawest': 'galeras-panawest.webp'
  };
  const projectKey = location.pathname.split('/').filter(Boolean).pop();
  if (projectImages[projectKey]) {
    detailHero.style.backgroundImage = `linear-gradient(90deg,rgba(6,22,34,.88),rgba(6,22,34,.25)),url("../../assets/images/${projectImages[projectKey]}")`;
  }
  const detailInner = detailHero.querySelector('.inner');
  if (detailInner) {
    const backLink = document.createElement('a');
    backLink.className = 'project-back';
    backLink.href = '../index.html';
    backLink.textContent = '← Volver a proyectos';
    detailInner.prepend(backLink);
  }
  document.querySelectorAll('img[src^="/assets/"]').forEach(image => {
    image.src = `../../${image.getAttribute('src').slice(1)}`;
  });
}

const specialties = {
  electricos: {
    title: 'Sistemas Eléctricos',
    intro: 'Desarrollamos el diseño integral de sistemas eléctricos para proyectos residenciales, comerciales e industriales, garantizando cumplimiento normativo, eficiencia energética y facilidad constructiva.',
    items: ['Diseño de sistemas de fuerza e iluminación.','Balance y distribución de cargas eléctricas.','Diseño de alimentaciones para sistemas de aire acondicionado.','Diseño de infraestructura eléctrica secundaria (aguas abajo del transformador).','Dimensionamiento de transformadores y plantas eléctricas.','Diseño de cuartos eléctricos y áreas técnicas.','Diseño de alimentaciones para ascensores, bombas y equipos especiales.','Balance de módulos de medición.','Desarrollo de tableros eléctricos y cuadros de carga.','Elaboración de diagramas unifilares.','Memorias de cálculo eléctrico.','Cálculo de caída de tensión.','Estudios de corto circuito.','Especificaciones técnicas y detalles constructivos.']
  },
  hidrosanitarios: {
    title: 'Sistemas Hidrosanitarios',
    intro: 'Diseñamos sistemas hidráulicos y sanitarios eficientes, optimizando el consumo de agua y garantizando el correcto funcionamiento de toda la infraestructura.',
    groups: [
      ['Agua Potable',['Diseño de red de distribución.','Cálculo hidráulico.','Isométricos.','Dimensionamiento de tuberías.','Cálculo de capacidad de tanques.','Diseño de sistemas de bombeo.','Memorias de cálculo.','Diseño hasta línea de propiedad.']],
      ['Sistema Sanitario',['Diseño de red sanitaria.','Isométricos.','Cálculo hidráulico.','Memorias técnicas.','Diseño hasta acometida o línea de propiedad.']],
      ['Sistema Pluvial',['Diseño de drenaje pluvial.','Cálculo hidráulico.','Isométricos.','Dimensionamiento de bajantes.','Diseño de bombeo de achique cuando aplique.','Memorias de cálculo.']]
    ]
  },
  hvac: {
    title: 'Aire Acondicionado y Ventilación',
    intro: 'Diseñamos sistemas HVAC priorizando eficiencia energética, confort térmico y facilidad de mantenimiento.',
    items: ['Cálculo de cargas térmicas.','Diseño de sistemas VRF.','Diseño de expansión directa.','Diseño de agua helada (cuando aplique).','Selección de equipos.','Diseño de ductería.','Diseño de tuberías de refrigeración.','Sistemas de extracción y ventilación.','Extracción de cocinas.','Extracción de baños.','Extracción e inyección de estacionamientos.','Sistemas de extracción de monóxido de carbono.','Memorias de cálculo.','Especificaciones técnicas.']
  },
  incendios: {
    title: 'Sistema Húmedo Contra Incendios',
    intro: 'Diseñamos sistemas de protección contra incendios conforme a NFPA, optimizando cobertura, hidráulica y confiabilidad.',
    items: ['Diseño de redes de rociadores.','Diseño de gabinetes contra incendio.','Diseño de redes húmedas.','Selección de rociadores.','Cálculo hidráulico.','Selección de bombas contra incendio.','Isométricos.','Diagramas hidráulicos.','Detalles constructivos.','Memorias técnicas.']
  },
  especiales: {
    title: 'Sistemas Especiales',
    intro: 'Diseñamos e integramos soluciones de voz y datos, CCTV, control de acceso, audio y automatización de acuerdo con las necesidades de cada proyecto.'
  },
  mep: {
    title: 'Coordinación MEP',
    intro: 'Integramos todas las disciplinas del proyecto en un único modelo digital para detectar conflictos antes de la construcción, reduciendo cambios en obra, costos y retrasos.',
    items: ['Coordinación BIM entre todas las disciplinas MEP.','Modelado 3D en Autodesk Revit.','Desarrollo de modelos BIM LOD según requerimiento del proyecto.','Coordinación entre arquitectura, estructura y MEP.','Detección y resolución de interferencias (Clash Detection).','Revisión técnica de diseños existentes.','Optimización de rutas de tuberías, ductos y bandejas.','Coordinación de espacios técnicos y cuartos MEP.','Revisión de constructibilidad.','Generación de planos coordinados.','Emisión de reportes de interferencias.','Actualización de modelos conforme a revisiones del proyecto.','Apoyo técnico durante la coordinación interdisciplinaria.']
  },
  valor: {
    title: 'Ingeniería de Valor',
    intro: 'Analizamos y optimizamos diseños para reducir costos de construcción, mejorar la eficiencia del proyecto y mantener el cumplimiento técnico y normativo sin comprometer la calidad.',
    items: ['Optimización de diseños para reducir costos de construcción.','Revisión de alternativas técnicas.','Evaluación de diferentes tecnologías.','Optimización de espacios técnicos.','Revisión de capacidad instalada.','Propuestas de mejora durante la etapa de diseño.','Asistencia técnica durante licitaciones.']
  }
};

const triggers = document.querySelectorAll('[data-specialty]');
if (triggers.length) {
  const modal = document.createElement('div');
  modal.className = 'specialty-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = '<div class="specialty-modal-backdrop" data-close-modal></div><section class="specialty-modal-panel" role="dialog" aria-modal="true" aria-labelledby="specialty-modal-title"><button class="specialty-modal-close" type="button" aria-label="Cerrar ventana" data-close-modal>×</button><div class="eyebrow">Especialidad</div><h2 id="specialty-modal-title"></h2><p class="specialty-modal-intro"></p><div class="specialty-modal-content"></div><button class="btn dark specialty-modal-action" type="button" data-close-modal>Cerrar</button></section>';
  document.body.appendChild(modal);
  const title = modal.querySelector('h2');
  const intro = modal.querySelector('.specialty-modal-intro');
  const content = modal.querySelector('.specialty-modal-content');
  let lastTrigger;

  const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastTrigger) lastTrigger.focus({preventScroll:true});
  };
  const openModal = trigger => {
    const data = specialties[trigger.dataset.specialty];
    if (!data) return;
    lastTrigger = trigger;
    title.textContent = data.title;
    intro.textContent = data.intro;
    content.innerHTML = data.groups ? data.groups.map(group => `<div class="specialty-modal-group"><h3>${group[0]}</h3>${list(group[1])}</div>`).join('') : (data.items ? list(data.items) : '');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.specialty-modal-close').focus();
  };

  triggers.forEach(trigger => trigger.addEventListener('click', () => openModal(trigger)));
  modal.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
}
