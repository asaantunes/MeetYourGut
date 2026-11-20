const translations = {
  en: [
    'Approach','Clinical areas','Mindfulness','About','Book a consultation',
    'GASTROENTEROLOGY · MINDFULNESS · WELLBEING','A space to<br /><em>listen to your body.</em>','Science, presence and compassion. A more human approach to digestive health and the relationship between body and mind.','Discover the approach <span aria-hidden="true">→</span>',
    'MY APPROACH','Digestive health is<br />more than symptoms.','The digestive system is in constant dialogue with the brain, autonomic nervous system, microbiota and our life experiences. Each consultation begins with attentive listening and a thorough clinical understanding.','I combine evidence-based medicine with a biopsychosocial perspective, respecting each person’s pace and story.',
    'CLINICAL AREAS','Specialist knowledge,<br /><em>integrated care.</em>',
    'General gastroenterology','Assessment and follow-up of digestive symptoms and conditions.','Gut–brain axis','A neurogastroenterology-informed approach to symptoms reflecting this connection.','Hepatology','Diagnosis, guidance and follow-up for liver and biliary conditions.','Digestive endoscopy','Experience in diagnostic and therapeutic digestive procedures.',
    'a moment<br /><i>for you</i>','MINDFULNESS &amp; COMPASSION','Returning<br /><em>to the present moment.</em>','Mindfulness is the practice of paying attention to the present moment with curiosity and without judgment. It can help us recognise sensations, emotions and patterns, cultivating a more aware and compassionate relationship with our experience.','Dr Rita Ornelas combines her medical experience with training in mindfulness meditation, compassion and self-compassion. Her approach invites practice and attentive guidance, respecting each person’s journey.','Explore guided practices ↓',
    'Medicine that brings together science, clinical listening and a genuine understanding of each story.','BACKGROUND','A specialist in gastroenterology with a particular interest in neurogastroenterology, gut–brain interaction disorders and hepatology.','+25 years','of clinical experience','Endoscopy','diagnostic and therapeutic','Consultant','in gastroenterology since 2020','consultations in three languages',
    'Because caring deeply goes beyond relieving symptoms.','Dr Rita’s training includes <strong>mindfulness meditation teaching</strong> (Dharma Moon) and <strong>compassion cultivation</strong> (Compassion Institute), bringing presence and attention to the person into her care.',
    'CONSULTATIONS AND ENDOSCOPIC EXAMINATIONS','Let’s care for<br /><em>your digestive health.</em>','To book a consultation or an examination, choose the most convenient town and healthcare facility.','A MOMENT FOR YOU','Practise,<br /><em>at your own pace.</em>','A space to discover guided meditations and content on mindfulness and wellbeing, bringing practice into your everyday life.','SPOTIFY CONTENT · COMING SOON'
  ],
  fr: [
    'Approche','Domaines cliniques','Pleine conscience','Parcours','Prendre rendez-vous',
    'GASTROENTÉROLOGIE · PLEINE CONSCIENCE · BIEN-ÊTRE','Un espace pour<br /><em>écouter son corps.</em>','Science, présence et compassion. Une approche plus humaine de la santé digestive et de la relation entre le corps et l’esprit.','Découvrir l’approche <span aria-hidden="true">→</span>',
    'MON APPROCHE','La santé digestive est<br />bien plus que des symptômes.','Le système digestif dialogue constamment avec le cerveau, le système nerveux autonome, le microbiote et notre vécu. Chaque consultation commence par une écoute attentive et une compréhension clinique approfondie.','J’associe une médecine fondée sur les preuves à une perspective biopsychosociale, en respectant le rythme et l’histoire de chacun.',
    'DOMAINES CLINIQUES','Expertise médicale,<br /><em>soins intégrés.</em>',
    'Gastroentérologie générale','Évaluation et suivi des symptômes et maladies digestives.','Axe intestin–cerveau','Une approche fondée sur la neurogastroentérologie pour les symptômes liés à cette relation.','Hépatologie','Diagnostic, orientation et suivi des maladies du foie et des voies biliaires.','Endoscopie digestive','Expérience des actes digestifs diagnostiques et thérapeutiques.',
    'un moment<br /><i>pour soi</i>','PLEINE CONSCIENCE &amp; COMPASSION','Revenir<br /><em>au moment présent.</em>','La pleine conscience est une pratique d’attention au moment présent, avec curiosité et sans jugement. Elle peut nous aider à reconnaître sensations, émotions et habitudes, pour cultiver une relation plus consciente et bienveillante avec notre expérience.','La Dre Rita Ornelas associe son expérience médicale à des formations en méditation de pleine conscience, compassion et autocompassion. Son approche invite à la pratique et à un accompagnement attentif, dans le respect du cheminement de chacun.','Découvrir les pratiques guidées ↓',
    'Une médecine qui associe science, écoute clinique et compréhension sincère de chaque histoire.','PARCOURS','Médecin spécialiste en gastroentérologie, particulièrement intéressée par la neurogastroentérologie, les troubles de l’axe intestin–cerveau et l’hépatologie.','+25 ans','d’expérience clinique','Endoscopie','diagnostique et thérapeutique','Consultante','en gastroentérologie depuis 2020','consultations en trois langues',
    'Parce que prendre soin en profondeur va au-delà du soulagement des symptômes.','Le parcours de la Dre Rita comprend des formations en <strong>enseignement de la méditation de pleine conscience</strong> (Dharma Moon) et en <strong>culture de la compassion</strong> (Compassion Institute), intégrant présence et attention à la personne dans ses soins.',
    'CONSULTATIONS ET EXAMENS ENDOSCOPIQUES','Prenons soin<br /><em>de votre santé digestive.</em>','Pour prendre rendez-vous pour une consultation ou un examen, choisissez la localité et l’établissement qui vous conviennent le mieux.','UN MOMENT POUR VOUS','Pratiquer,<br /><em>à votre rythme.</em>','Un espace pour découvrir des méditations guidées et des contenus sur la pleine conscience et le bien-être, à intégrer dans votre quotidien.','CONTENUS SPOTIFY · BIENTÔT'
  ]
};
const selectors = ['nav a[href="#abordagem"]','nav a[href="#areas"]','nav a[href="#mindfulness"]','nav a[href="#percurso"]','nav a[href="#consulta"]','.hero-copy .eyebrow','.hero h1','.hero-text','.hero .button','#abordagem .eyebrow','.intro h2','.intro-grid div p:nth-child(1)','.intro-grid div p:nth-child(2)','.section-heading .eyebrow','.section-heading h2',...Array.from({length:4},(_,i)=>[`.cards article:nth-child(${i+1}) h3`,`.cards article:nth-child(${i+1}) p`]).flat(),'.mindfulness-art span','.mindfulness-copy .eyebrow','.mindfulness-copy h2','.mindfulness-copy p:nth-of-type(2)','.mindfulness-copy p:nth-of-type(3)','.mindfulness-copy a','.quote-section blockquote','.credentials .eyebrow','.credentials-lead','.credentials li:nth-child(1) strong','.credentials li:nth-child(1) span','.credentials li:nth-child(2) strong','.credentials li:nth-child(2) span','.credentials li:nth-child(3) strong','.credentials li:nth-child(3) span','.credentials li:nth-child(4) span','.journey-transition','.journey-training p:nth-child(2)','.appointment .eyebrow','.appointment h2','.appointment > div:first-child > p:last-child','.meditations .eyebrow','.meditations h2','.meditations > div:nth-child(2) > p:first-child','.meditations .coming'];
selectors[selectors.indexOf('.appointment > div:first-child > p:last-child')] = '.appointment-description';
selectors[selectors.indexOf('nav a[href="#mindfulness"]')] = 'nav a[href="#meditacoes"]';
selectors[selectors.indexOf('.mindfulness-copy p:nth-of-type(2)')] = '.unused-mindfulness-description';
selectors[selectors.indexOf('.mindfulness-copy p:nth-of-type(3)')] = '.mindfulness-description';
selectors[selectors.indexOf('.mindfulness-copy a')] = '.purpose-practice';
translations.en[2] = 'Mindfulness practices';
translations.fr[2] = 'Pratiques de pleine conscience';
translations.en[selectors.indexOf(".intro-grid div p:nth-child(1)")] = "Meet Your Gut begins with the idea that understanding our digestive health can be a starting point for understanding ourselves better.";
translations.en[selectors.indexOf(".intro-grid div p:nth-child(2)")] = "The digestive system is in constant dialogue with the brain, the autonomic nervous system, the microbiota and our life experiences. This connection invites us to care for digestive health by considering the whole person: their body, emotions, thoughts and the context in which they live.";
translations.fr[selectors.indexOf(".intro-grid div p:nth-child(1)")] = "Meet Your Gut est né de l’idée que comprendre notre santé digestive peut être un point de départ pour mieux nous comprendre.";
translations.fr[selectors.indexOf(".intro-grid div p:nth-child(2)")] = "Le système digestif dialogue constamment avec le cerveau, le système nerveux autonome, le microbiote et notre vécu. Ce lien nous invite à prendre soin de la santé digestive en considérant la personne dans sa globalité : son corps, ses émotions, ses pensées et le contexte dans lequel elle vit.";
const nodes = selectors.map(selector => document.querySelector(selector));
const original = nodes.map(node => node ? node.innerHTML : '');
const additionalNodes = [document.querySelector('.doctor-bio'), document.querySelector('.appointment-languages'), ...document.querySelectorAll('.practice-options h3, .practice-options p, .practice-options span, .practice-options a')];
const additionalOriginal = additionalNodes.map(node => node.innerHTML);
const additionalTranslations = {en:['A gastroenterology specialist with 25 years of clinical experience.','Consultations in Portuguese, English and French.','Spotify content','Guided meditations and reflections to listen to wherever you are.','Coming soon','Online courses','Practices and learning to explore at your own pace.','Coming soon','Group courses','See the calendar of upcoming gatherings.','Coming soon','Individual sessions','A space for personal guidance in your practice.','Coming soon'],fr:['Médecin spécialiste en gastroentérologie, avec 25 ans d’expérience clinique.','Consultations en portugais, anglais et français.','Contenus Spotify','Méditations guidées et réflexions à écouter où que vous soyez.','Bientôt','Formations en ligne','Des pratiques et apprentissages à découvrir à votre rythme.','Bientôt','Formations en groupe','Consultez le calendrier des prochaines rencontres.','Bientôt','Séances individuelles','Un espace d’accompagnement personnel pour votre pratique.','Bientôt']};
translations.en[selectors.indexOf('.mindfulness-copy h2')] = 'Integrated training<br /><em>and practice.</em>';
translations.fr[selectors.indexOf('.mindfulness-copy h2')] = 'Formation et<br /><em>pratique intégrées.</em>';
translations.en[selectors.indexOf('.mindfulness-description')] = "<p>Learning to recognise what happens within us — in our bodies, emotions and thoughts — can create space to respond to life with greater awareness and freedom of choice.</p><p>Rita Ornelas combines her medical experience and personal practice with training in mindfulness meditation teaching through the Mindfulness and Meditation Teacher Certification Program (MMTCP), compassion cultivation through the Compassion Institute and Internal Family Systems (IFS).</p><p>Through the practices and educational activities she shares, she invites us to cultivate curious and gentle attention to our present experience, recognise automatic patterns and explore how we relate to ourselves when facing difficulties.</p><p>This is also an opportunity to get to know the different parts of ourselves — those that demand, fear, avoid or seek to protect us — and listen to them with greater understanding and compassion.</p>";
translations.fr[selectors.indexOf('.mindfulness-description')] = "<p>Apprendre à reconnaître ce qui se passe en nous — dans le corps, les émotions et les pensées — peut ouvrir un espace pour répondre à la vie avec davantage de conscience et de liberté de choix.</p><p>Rita Ornelas associe son expérience médicale et sa pratique personnelle à des formations en enseignement de la méditation de pleine conscience dans le cadre du Mindfulness and Meditation Teacher Certification Program (MMTCP), en culture de la compassion auprès du Compassion Institute et en Internal Family Systems (IFS).</p><p>À travers les pratiques et les propositions éducatives qu’elle partage, elle invite à cultiver une attention curieuse et bienveillante à l’expérience du moment, à reconnaître les schémas automatiques et à explorer la manière dont nous nous traitons face aux difficultés.</p><p>C’est aussi une occasion de découvrir les différentes parties de nous-mêmes — celles qui exigent, craignent, évitent ou cherchent à nous protéger — et de les écouter avec davantage de compréhension et de compassion.</p>";
const purposeNodes = ['.purpose .eyebrow','.purpose h2','.purpose-intro','.purpose-paths'].map(s => document.querySelector(s));
const purposeOriginal = purposeNodes.map(node => node.innerHTML);
const newsletterNodes = ['.newsletter-menu','.social-links a:first-child'].map(s => document.querySelector(s));
const newsletterOriginal = newsletterNodes.map(node => node.innerHTML);
const newsletterTranslations = {en:['Subscribe to the newsletter ↗','Subscribe to the newsletter ↗'],fr:['S’abonner à la newsletter ↗','S’abonner à la newsletter ↗']};
const purposeTranslations = {en:['THE PURPOSE OF MEET YOUR GUT','From digestive health<br /><em>to self-understanding.</em>','Meet Your Gut begins with the idea that listening to the body can be a starting point for understanding ourselves better. Symptoms deserve clinical attention and may also invite us to explore our experience with curiosity and care.','Understanding digestive health','A space for rigorous, accessible scientific information about symptoms, the microbiome, the gut–brain axis and the influence of stress on digestion.','Discovering yourself with compassion','Through mindfulness, compassion and the Internal Family Systems (IFS) model, we can explore our relationship with our body, emotions, fears and inner patterns — cultivating self-understanding and more conscious choices.'],fr:['LA RAISON D’ÊTRE DE MEET YOUR GUT','De la santé digestive<br /><em>à la connaissance de soi.</em>','Meet Your Gut est né de l’idée qu’écouter son corps peut être un point de départ pour mieux se comprendre. Les symptômes méritent une attention clinique et peuvent aussi nous inviter à explorer notre expérience avec curiosité et bienveillance.','Comprendre la santé digestive','Un espace d’information scientifique rigoureuse et accessible sur les symptômes, le microbiome, l’axe intestin–cerveau et l’influence du stress sur la digestion.','Se découvrir avec compassion','Grâce à la pleine conscience, à la compassion et au modèle Internal Family Systems (IFS), nous pouvons explorer notre relation au corps, aux émotions, aux peurs et aux schémas intérieurs — pour cultiver la connaissance de soi et des choix plus conscients.']};
purposeTranslations.en[2] = "<p>Through evidence-based medical knowledge and practices of mindfulness and compassion, Meet Your Gut aims to help each person better understand what they feel, cultivate a more attentive and gentle relationship with their body and recognise new possibilities for caring for themselves.</p><p>Symptoms deserve clinical attention and careful listening. The experience of living with them can also create space for curiosity, self-understanding and more conscious choices, respecting each person’s pace and story.</p><p><strong>Understand. Connect. Grow.</strong></p><p>From gut awareness to a deeper understanding of ourselves.</p>";
purposeTranslations.fr[2] = "<p>Grâce à des connaissances médicales fondées sur les preuves et à des pratiques de pleine conscience et de compassion, Meet Your Gut cherche à aider chaque personne à mieux comprendre ce qu’elle ressent, à cultiver une relation plus attentive et bienveillante avec son corps et à reconnaître de nouvelles possibilités de prendre soin de soi.</p><p>Les symptômes méritent une attention clinique et une écoute soigneuse. L’expérience de vivre avec eux peut aussi ouvrir un espace à la curiosité, à la connaissance de soi et à des choix plus conscients, dans le respect du rythme et de l’histoire de chaque personne.</p><p><strong>Comprendre. Se connecter. Grandir.</strong></p><p>De la conscience de l’intestin à une compréhension plus profonde de nous-mêmes.</p>";
purposeTranslations.en.splice(3, 4, "<article><span>01</span><h3>Understand</h3><p class=\"purpose-subtitle\"><em>Get to know digestive health better.</em></p><p>Rigorous, accessible scientific information about the digestive system, the microbiota and the gut–brain relationship. An invitation to understand symptoms and the factors that influence them, so we can take a more informed role in caring for our own health.</p></article><article><span>02</span><h3>Connect</h3><p class=\"purpose-subtitle\"><em>Cultivate presence and listen to experience.</em></p><p>Through mindfulness and compassion, learn to pay attention to the body, emotions and thoughts with curiosity and gentleness. Create space to recognise what is present and what we need, respecting our own pace.</p></article><article><span>03</span><h3>Grow</h3><p class=\"purpose-subtitle\"><em>Deepen self-understanding and create space for choice.</em></p><p>Explore automatic patterns and different parts of ourselves through mindfulness, compassion and the Internal Family Systems (IFS) model. Cultivate a more understanding relationship with ourselves and greater freedom to act in line with what we value.</p></article>");
purposeTranslations.fr.splice(3, 4, "<article><span>01</span><h3>Comprendre</h3><p class=\"purpose-subtitle\"><em>Mieux connaître la santé digestive.</em></p><p>Des informations scientifiques rigoureuses et accessibles sur le système digestif, le microbiote et la relation intestin–cerveau. Une invitation à comprendre les symptômes et les facteurs qui les influencent, pour participer de manière plus éclairée au soin de sa propre santé.</p></article><article><span>02</span><h3>Se connecter</h3><p class=\"purpose-subtitle\"><em>Cultiver la présence et écouter l’expérience.</em></p><p>Grâce à la pleine conscience et à la compassion, apprendre à prêter attention au corps, aux émotions et aux pensées avec curiosité et bienveillance. Créer un espace pour reconnaître ce qui est présent et ce dont nous avons besoin, dans le respect de notre rythme.</p></article><article><span>03</span><h3>Grandir</h3><p class=\"purpose-subtitle\"><em>Approfondir la connaissance de soi et ouvrir un espace au choix.</em></p><p>Explorer les schémas automatiques et les différentes parties de nous-mêmes à la lumière de la pleine conscience, de la compassion et du modèle Internal Family Systems (IFS). Cultiver une relation plus compréhensive avec nous-mêmes et une plus grande liberté d’agir en accord avec ce qui compte pour nous.</p></article>");
const picker = document.querySelector('#language');
additionalTranslations.en[0] = "<p>A specialist in gastroenterology with a clinical practice in the Algarve and Alentejo, she has over 25 years of clinical experience and a career dedicated to diagnostic and therapeutic digestive endoscopy. She has a particular interest in neurogastroenterology, disorders of gut–brain interaction and hepatology.</p><p>Her practice is grounded in evidence-based medical knowledge and attentive listening to each person. She seeks to understand symptoms in the context of individual history, lifestyle habits and the relationship between the digestive system, the nervous system and emotional experience.</p><p>Throughout her career, she has also deepened her training in mindfulness, compassion and Internal Family Systems (IFS), areas that enrich the way she listens and supports people.</p><p>She created Meet Your Gut to bring knowledge about digestive health closer to the experiences of people living with symptoms, offering a space for information, practice and self-understanding. She values care developed together, respecting each person’s needs, choices and pace.</p>";
additionalTranslations.fr[0] = "<p>Médecin spécialiste en gastroentérologie, exerçant en Algarve et en Alentejo, elle compte plus de 25 ans d’expérience clinique et un parcours consacré à l’endoscopie digestive diagnostique et thérapeutique. Elle s’intéresse particulièrement à la neurogastroentérologie, aux troubles de l’interaction intestin–cerveau et à l’hépatologie.</p><p>Sa pratique repose sur des connaissances médicales fondées sur les preuves et sur une écoute attentive de chaque personne. Elle cherche à comprendre les symptômes dans le contexte de l’histoire individuelle, des habitudes de vie et de la relation entre le système digestif, le système nerveux et l’expérience émotionnelle.</p><p>Au fil de son parcours, elle a également approfondi sa formation en pleine conscience, en compassion et en Internal Family Systems (IFS), des domaines qui enrichissent sa manière d’écouter et d’accompagner.</p><p>Elle a créé Meet Your Gut pour rapprocher les connaissances sur la santé digestive de l’expérience des personnes vivant avec des symptômes, en proposant un espace d’information, de pratique et de connaissance de soi. Elle valorise des soins construits ensemble, dans le respect des besoins, des choix et du rythme de chaque personne.</p>";
additionalTranslations.en[4] = 'Listen on Spotify ↗';
additionalTranslations.fr[4] = 'Écouter sur Spotify ↗';
additionalTranslations.en.splice(11, 3, 'Newsletter', 'Articles on the gut–brain axis, the microbiome and self-understanding.', 'Subscribe to the newsletter ↗');
additionalTranslations.fr.splice(11, 3, 'Newsletter', 'Articles sur l’axe intestin–cerveau, le microbiome et la connaissance de soi.', 'S’abonner à la newsletter ↗');
const pageMetadata = {
  "pt": {
    "title": "Rita Ornelas | Gastrenterologista no Algarve | Meet Your Gut",
    "description": "Rita Ornelas, médica especialista em Gastrenterologia no Algarve e Alentejo. Conheça o Meet Your Gut, os locais de consulta, exames endoscópicos e recursos.",
    "locale": "pt_PT"
  },
  "en": {
    "title": "Rita Ornelas | Gastroenterologist in the Algarve | Meet Your Gut",
    "description": "Rita Ornelas, a gastroenterologist practising in the Algarve and Alentejo. Discover Meet Your Gut, consultation locations, endoscopic examinations and resources.",
    "locale": "en_GB"
  },
  "fr": {
    "title": "Rita Ornelas | Gastro-entérologue en Algarve | Meet Your Gut",
    "description": "Rita Ornelas, gastro-entérologue en Algarve et en Alentejo. Découvrez Meet Your Gut, les lieux de consultation, les examens endoscopiques et les ressources.",
    "locale": "fr_FR"
  }
};
const appointmentServices = {
  "pt": [
    "Consultas · Exames endoscópicos",
    "Consultas",
    "Exames endoscópicos",
    "Consultas · Exames endoscópicos",
    "Consulta presencial ou online",
    "Consultas · Exames endoscópicos",
    "Consultas"
  ],
  "en": [
    "Consultations · Endoscopic examinations",
    "Consultations",
    "Endoscopic examinations",
    "Consultations · Endoscopic examinations",
    "In-person or online consultation",
    "Consultations · Endoscopic examinations",
    "Consultations"
  ],
  "fr": [
    "Consultations · Examens endoscopiques",
    "Consultations",
    "Examens endoscopiques",
    "Consultations · Examens endoscopiques",
    "Consultation en présentiel ou en ligne",
    "Consultations · Examens endoscopiques",
    "Consultations"
  ]
};
function setLanguage(language) {
  document.querySelectorAll('.appointment-service').forEach((node, index) => { node.textContent = appointmentServices[language][index]; });
  document.querySelector('.hero-signature span').textContent = {pt:'Médica Gastroenterologista · Algarve e Alentejo',en:'Gastroenterologist · Algarve and Alentejo',fr:'Médecin gastro-entérologue · Algarve et Alentejo'}[language];
  const metadata = pageMetadata[language];
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content = metadata.description;
  document.querySelector('meta[property="og:title"]').content = metadata.title;
  document.querySelector('meta[property="og:description"]').content = metadata.description;
  document.querySelector('meta[property="og:locale"]').content = metadata.locale;
  const text = language === 'pt' ? original : translations[language];
  nodes.forEach((node, index) => { if (node) node.innerHTML = text[index]; });
  const extra = language === 'pt' ? additionalOriginal : additionalTranslations[language];
  additionalNodes.forEach((node, index) => { node.innerHTML = extra[index]; });
  const purposeText = language === 'pt' ? purposeOriginal : purposeTranslations[language];
  purposeNodes.forEach((node, index) => { node.innerHTML = purposeText[index]; });
  const newsletterText = language === 'pt' ? newsletterOriginal : newsletterTranslations[language];
  newsletterNodes.forEach((node, index) => { node.innerHTML = newsletterText[index]; });
  document.documentElement.lang = { pt: 'pt-PT', en: 'en', fr: 'fr' }[language];
  document.querySelector('nav').setAttribute('aria-label', {pt:'Navegação principal',en:'Main navigation',fr:'Navigation principale'}[language]);
  document.querySelector('.menu-toggle').setAttribute('aria-label', {pt:'Abrir menu',en:'Open menu',fr:'Ouvrir le menu'}[language]);
  try { localStorage.setItem('meet-your-gut-language', language); } catch (_) {}
}
picker.addEventListener('change', () => setLanguage(picker.value));
try { const saved = localStorage.getItem('meet-your-gut-language'); if (saved && ['pt','en','fr'].includes(saved)) { picker.value = saved; setLanguage(saved); } } catch (_) {}
