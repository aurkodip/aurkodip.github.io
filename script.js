// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el, i) => {
  el.dataset.delay = (i % 3) * 90;
  observer.observe(el);
});



// Translation Data
const translations = {
  en: {
    nav_work: "Work",
    nav_services: "Services",
    nav_pedigree: "Approach",
    nav_experience: "Experience",
    nav_skills: "Stack",
    nav_book_call: "Start a Project",
    hero_badge: "Available for Engagements · Kolkata, IN / Global Remote",
    hero_headline: "Engineering Mission-Critical Mobile Systems, Enterprise Solutions &amp; Intelligent Products",
    hero_desc: "Mobile solutions architect (Kotlin, KMP, Flutter) with expertise in Spring Boot &amp; FastAPI backend engineering. Bringing 12+ years of technical depth spanning native <strong>Android (Kotlin &amp; Jetpack Compose)</strong>, <strong>Flutter</strong>, <strong>Backend</strong>, <strong>Cloud</strong>, and enterprise <strong>SAP consulting</strong>.",
    hero_cta_contact: "Schedule Discovery Call",
    hero_cta_work: "View Featured Apps",
    section_work: "Featured Mobile Work",
    section_services: "Solutions &amp; Engineering Capabilities",
    section_skills: "Technical Stack &amp; Toolkit",
    skill_title_flutter: "Android (Kotlin) &amp; Flutter Mobile",
    skill_title_ai: "AI &amp; Machine Learning",
    skill_title_datascience: "Data Science &amp; Statistical Analytics",
    skill_title_backend: "Backend, APIs &amp; Cloud",
    skill_title_sap: "SAP &amp; Enterprise Architecture",
    skill_title_practices: "Engineering Practices &amp; Delivery",
    section_experience: "Experience &amp; Trajectory",
    exp_date_1: "Jul 2021 — Present",
    exp_company_1: "Freelance",
    exp_role_1: "Senior Mobile Engineer &amp; IT Consultant",
    exp_desc_1: "Delivering specialized mobile engineering and solutions consulting for startups and enterprise clients. Primary focus on high-performance native Android applications with Kotlin and Jetpack Compose, secondary cross-platform delivery with Flutter, and robust backend microservices with Spring Boot and cloud architectures.",
    exp_date_2: "Jan 2018 — Mar 2021 · 3 yrs 3 mos",
    exp_company_2: "Freelance",
    exp_role_2: "SAP Consultant",
    exp_desc_2: "Independent SAP consulting covering implementation, customization, and optimization of SAP landscapes. Specialized in ABAP development, SAP Mobile, and functional modules (MM, EHS) for enterprise clients across industries.",
    exp_date_3: "Jan 2015 — Nov 2017 · 2 yrs 11 mos",
    exp_company_3: "Accenture",
    exp_role_3: "SAP Techno-Functional Consultant",
    exp_desc_3: "Delivered SAP techno-functional consulting at Accenture, bridging technical ABAP development with functional module expertise. Worked on large-scale enterprise implementations, deepening skills in systems thinking, stakeholder management, and enterprise-grade delivery.",
    section_education: "Academic Pedigree",
    edu_badge_1: "Postgraduate",
    edu_degree_1: "Statistical Methods &amp; Analytics",
    edu_institution_1: "Indian Statistical Institute, Kolkata",
    edu_period_1: "July 2024 — July 2025",
    edu_badge_2: "Undergraduate",
    edu_degree_2: "Bachelor of Technology — Information Technology",
    edu_institution_2: "Bengal Institute of Technology, Kolkata",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Have an app idea? Let's engineer something <em>remarkable.</em>",
    contact_sub: "Available for fractional mobile leadership, 0-to-1 MVP builds, and technical architecture advisory. Direct senior collaboration with zero agency overhead.",
    contact_linkedin: "↗ LinkedIn Profile",
    footer_location: "Kolkata, India · Available Worldwide",
    footer_desc: "Solutions Architect | Kotlin · Spring · Flutter · Python · ERP"
  },
  de: {
    nav_work: "Projekte",
    nav_services: "Leistungen",
    nav_pedigree: "Arbeitsweise",
    nav_experience: "Erfahrung",
    nav_skills: "Stack",
    nav_book_call: "Projekt starten",
    hero_badge: "Verfügbar für Projekte · Remote",
    hero_headline: "Entwicklung unternehmenskritischer mobiler Systeme, Unternehmenslösungen &amp; intelligenter Produkte",
    hero_desc: "Mobile Solutions Architect (Kotlin, KMP, Flutter) mit Expertise in Spring Boot &amp; FastAPI Backend-Engineering. Über 12 Jahre technische Tiefe in nativem <strong>Android (Kotlin &amp; Jetpack Compose)</strong>, <strong>Flutter</strong>, <strong>Backend</strong>, <strong>Cloud</strong> und Enterprise-<strong>SAP-Beratung</strong>.",
    hero_cta_contact: "Erstgespräch buchen",
    hero_cta_work: "Projekte ansehen",
    section_work: "Ausgewählte Mobile Apps",
    section_services: "Lösungen &amp; Fähigkeiten",
    section_skills: "Technologie-Stack &amp; Toolkit",
    skill_title_flutter: "Android (Kotlin) &amp; Flutter Mobile",
    skill_title_ai: "KI &amp; Maschinelles Lernen",
    skill_title_datascience: "Data Science &amp; Statistische Analytik",
    skill_title_backend: "Backend, APIs &amp; Cloud",
    skill_title_sap: "SAP &amp; Unternehmensarchitektur",
    skill_title_practices: "Engineering-Praktiken &amp; Delivery",
    section_experience: "Erfahrung &amp; Werdegang",
    exp_date_1: "Jul 2021 — Heute",
    exp_company_1: "Freiberuflich",
    exp_role_1: "Senior Mobile-Entwickler &amp; IT-Berater",
    exp_desc_1: "Spezialisierte IT-Beratung und mobile Entwicklung für Startups und Unternehmenskunden. Fokus auf native Android-Entwicklung mit Kotlin und Jetpack Compose, plattformübergreifende Lösungen mit Flutter sowie Spring Boot Backend-Microservices.",
    exp_date_2: "Jan 2018 — Mär 2021 · 3 J. 3 M.",
    exp_company_2: "Freiberuflich",
    exp_role_2: "SAP-Berater",
    exp_desc_2: "Unabhängige SAP-Beratung für die Implementierung, Anpassung und Optimierung von SAP-Systemlandschaften. Spezialisiert auf ABAP, SAP Mobile und Module MM &amp; EHS.",
    exp_date_3: "Jan 2015 — Nov 2017 · 2 J. 11 M.",
    exp_company_3: "Accenture",
    exp_role_3: "Techno-funktionaler SAP-Berater",
    exp_desc_3: "Techno-funktionale SAP-Beratung bei Accenture, die technische ABAP-Entwicklung mit funktionaler Modulexpertise verknüpft.",
    section_education: "Ausbildung",
    edu_badge_1: "Postgraduiert",
    edu_degree_1: "Statistische Methoden &amp; Analytik",
    edu_institution_1: "Indian Statistical Institute, Kolkata",
    edu_period_1: "Juli 2024 — Juli 2025",
    edu_badge_2: "Erststudium",
    edu_degree_2: "Bachelor of Technology — Informationstechnologie",
    edu_institution_2: "Bengal Institute of Technology, Kolkata",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Haben Sie eine Projektidee? Lassen Sie uns etwas <em>Außergewöhnliches</em> aufbauen.",
    contact_sub: "Verfügbar für fraktionierte Führung, 0-to-1 MVP-Entwicklung und technische Architekturberatung.",
    contact_linkedin: "↗ LinkedIn Profil",
    footer_location: "Kolkata, Indien · Weltweit verfügbar",
    footer_desc: "Solutions Architect | Kotlin · Spring · Flutter · Python · ERP"
  },
  fr: {
    nav_work: "Projets",
    nav_services: "Services",
    nav_pedigree: "Approche",
    nav_experience: "Expérience",
    nav_skills: "Stack",
    nav_book_call: "Démarrer un projet",
    hero_badge: "Disponible pour projets · Télétravail",
    hero_headline: "Ingénierie de systèmes mobiles critiques, solutions d'entreprise &amp; produits intelligents",
    hero_desc: "Architecte de solutions mobiles (Kotlin, KMP, Flutter) avec expertise en ingénierie backend Spring Boot &amp; FastAPI. Plus de 12 ans de profondeur technique couvrant <strong>Android natif (Kotlin &amp; Jetpack Compose)</strong>, <strong>Flutter</strong>, <strong>Backend</strong>, <strong>Cloud</strong> et conseil <strong>SAP d'entreprise</strong>.",
    hero_cta_contact: "Planifier un échange",
    hero_cta_work: "Découvrir mes apps",
    section_work: "Applications Récentes",
    section_services: "Solutions &amp; Capacités d'Ingénierie",
    section_skills: "Stack Technique &amp; Outils",
    skill_title_flutter: "Android (Kotlin) &amp; Flutter Mobile",
    skill_title_ai: "IA &amp; Machine Learning",
    skill_title_datascience: "Data Science &amp; Analyse Statistique",
    skill_title_backend: "Backend, APIs &amp; Cloud",
    skill_title_sap: "SAP &amp; Architecture d'Entreprise",
    skill_title_practices: "Pratiques d'Ingénierie &amp; Livraison",
    section_experience: "Expérience &amp; Parcours",
    exp_date_1: "Juil 2021 — Présent",
    exp_company_1: "Indépendant",
    exp_role_1: "Ingénieur Mobile Senior &amp; Consultant IT",
    exp_desc_1: "Conseil en ingénierie mobile pour startups et grandes entreprises. Priorité sur le développement Android natif haute performance avec Kotlin et Jetpack Compose, solutions multiplateformes avec Flutter et microservices backend Spring Boot.",
    exp_date_2: "Janv 2018 — Mars 2021 · 3 ans 3 mo.",
    exp_company_2: "Indépendant",
    exp_role_2: "Consultant SAP",
    exp_desc_2: "Conseil SAP indépendant englobant l'implémentation, la personnalisation et l'optimisation des architectures SAP. Spécialisé en développement ABAP, SAP Mobile et modules MM &amp; EHS.",
    exp_date_3: "Janv 2015 — Nov 2017 · 2 ans 11 mo.",
    exp_company_3: "Accenture",
    exp_role_3: "Consultant SAP Techno-Fonctionnel",
    exp_desc_3: "Conseil techno-fonctionnel SAP chez Accenture, alliant développement technique ABAP et expertise des modules métiers lors de déploiements d'envergure.",
    section_education: "Formation Académique",
    edu_badge_1: "Postgrade",
    edu_degree_1: "Méthodes Statistiques &amp; Analytique",
    edu_institution_1: "Institut indien de statistique (ISI), Calcutta",
    edu_period_1: "Juillet 2024 — Juillet 2025",
    edu_badge_2: "Licence",
    edu_degree_2: "Bachelor of Technology — Informatique",
    edu_institution_2: "Institut de technologie du Bengale (BIT), Calcutta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Un projet en tête ? Bâtissons quelque chose d'<em>exceptionnel.</em>",
    contact_sub: "Disponible pour leadership mobile fractionné, MVPs 0-à-1 et conseil en architecture technique.",
    contact_linkedin: "↗ Profil LinkedIn",
    footer_location: "Calcutta, Inde · Disponible dans le monde entier",
    footer_desc: "Architecte Solutions | Kotlin · Spring · Flutter · Python · ERP"
  },
  es: {
    nav_work: "Proyectos",
    nav_services: "Servicios",
    nav_pedigree: "Enfoque",
    nav_experience: "Experiencia",
    nav_skills: "Stack",
    nav_book_call: "Iniciar Proyecto",
    hero_badge: "Disponible para proyectos · Remoto",
    hero_headline: "Ingeniería de sistemas móviles críticos, soluciones empresariales y productos inteligentes",
    hero_desc: "Arquitecto de soluciones móviles (Kotlin, KMP, Flutter) con experiencia en ingeniería backend con Spring Boot y FastAPI. Más de 12 años de profundidad técnica en <strong>Android nativo (Kotlin &amp; Jetpack Compose)</strong>, <strong>Flutter</strong>, <strong>Backend</strong>, <strong>Cloud</strong> y consultoría <strong>SAP empresarial</strong>.",
    hero_cta_contact: "Agendar llamada",
    hero_cta_work: "Ver aplicaciones",
    section_work: "Aplicaciones Destacadas",
    section_services: "Soluciones y Capacidades Técnicas",
    section_skills: "Stack Tecnológico y Herramientas",
    skill_title_flutter: "Android (Kotlin) y Flutter Móvil",
    skill_title_ai: "IA y Aprendizaje Automático",
    skill_title_datascience: "Ciencia de Datos y Análisis Estadístico",
    skill_title_backend: "Backend, APIs y Nube",
    skill_title_sap: "SAP y Arquitectura Empresarial",
    skill_title_practices: "Prácticas de Ingeniería y Entrega",
    section_experience: "Experiencia y Trayectoria",
    exp_date_1: "Jul 2021 — Presente",
    exp_company_1: "Freelance",
    exp_role_1: "Ingeniero Móvil Senior y Consultor de TI",
    exp_desc_1: "Consultoría de ingeniería móvil para startups y corporativos. Enfoque primordial en Android nativo con Kotlin y Jetpack Compose, desarrollo multiplataforma con Flutter y microservicios backend robustos con Spring Boot.",
    exp_date_2: "Ene 2018 — Mar 2021 · 3 años 3 meses",
    exp_company_2: "Freelance",
    exp_role_2: "Consultor SAP",
    exp_desc_2: "Consultoría SAP independiente enfocada en implementación, personalización y desarrollo ABAP, SAP Mobile y módulos MM y EHS.",
    exp_date_3: "Ene 2015 — Nov 2017 · 2 años 11 meses",
    exp_company_3: "Accenture",
    exp_role_3: "Consultor Tecno-Funcional SAP",
    exp_desc_3: "Servicios de consultoría tecno-funcional SAP en Accenture, integrando desarrollo ABAP con módulos de negocio en implementaciones a gran escala.",
    section_education: "Educación y Formación",
    edu_badge_1: "Postgrado",
    edu_degree_1: "Métodos Estadísticos &amp; Analítica",
    edu_institution_1: "Instituto de Estadística de la India (ISI), Calcuta",
    edu_period_1: "Julio 2024 — Julio 2025",
    edu_badge_2: "Pregrado",
    edu_degree_2: "Grado en Tecnología — TI",
    edu_institution_2: "Instituto de Tecnología de Bengala (BIT), Calcuta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "¿Tiene una idea en mente? Construyamos algo <em>extraordinario.</em>",
    contact_sub: "Disponible para liderazgo móvil fraccional, creación de MVPs 0-a-1 y asesoría en arquitectura técnica.",
    contact_linkedin: "↗ Perfil de LinkedIn",
    footer_location: "Calcuta, India · Disponible a nivel global",
    footer_desc: "Arquitecto de Soluciones | Kotlin · Spring · Flutter · Python · ERP"
  },
  zh: {
    nav_work: "作品",
    nav_services: "服务",
    nav_pedigree: "合作理念",
    nav_experience: "经历",
    nav_skills: "技术栈",
    nav_book_call: "发起项目",
    hero_badge: "承接新项目合作 · 全球远程",
    hero_headline: "工程化构建关键任务移动系统、企业级解决方案与智能产品",
    hero_desc: "移动解决方案架构师（Kotlin、KMP、Flutter），具备 Spring Boot 与 FastAPI 后端工程专业能力。拥有 12+ 年技术沉淀，全面覆盖原生 <strong>Android (Kotlin &amp; Jetpack Compose)</strong>、<strong>Flutter</strong>、<strong>后端</strong>、<strong>云计算</strong> 与企业级 <strong>SAP 咨询</strong>。",
    hero_cta_contact: "预约初步沟通",
    hero_cta_work: "查看精选作品",
    section_work: "精选移动应用",
    section_services: "解决方案与工程能力",
    section_skills: "技术栈与工具箱",
    skill_title_flutter: "Android (Kotlin) 与 Flutter 移动端",
    skill_title_ai: "人工智能与机器学习 (AI/ML)",
    skill_title_datascience: "数据科学与统计学分析",
    skill_title_backend: "后端、API 与云架构",
    skill_title_sap: "SAP 与企业级系统架构",
    skill_title_practices: "工程规范与交付实践",
    section_experience: "工作经历与职业履历",
    exp_date_1: "2021年7月 — 至今",
    exp_company_1: "自由职业",
    exp_role_1: "资深移动端工程师 &amp; IT 顾问",
    exp_desc_1: "为初创团队及企业客户提供专业的移动工程与咨询方案。主攻基于 Kotlin 和 Jetpack Compose 的高性能原生 Android 开发，次攻 Flutter 跨平台架构，并提供坚固的 Spring Boot 微服务后端支持。",
    exp_date_2: "2018年1月 — 2021年3月 · 3年3个月",
    exp_company_2: "自由职业",
    exp_role_2: "SAP 顾问",
    exp_desc_2: "独立开展 SAP 顾问服务，涵盖实施、定制与优化，专注 ABAP 开发、SAP Mobile 以及 MM、EHS 业务模块。",
    exp_date_3: "2015年1月 — 2017年11月 · 2年11个月",
    exp_company_3: "Accenture (埃森哲)",
    exp_role_3: "SAP 技术与业务顾问",
    exp_desc_3: "在埃森哲提供大型企业级 SAP 顾问服务，融合 ABAP 技术开发与业务模块交付经验。",
    section_education: "教育背景",
    edu_badge_1: "研究生",
    edu_degree_1: "统计学方法与数据分析",
    edu_institution_1: "印度统计研究所 (ISI)，加尔各答",
    edu_period_1: "2024年7月 — 2025年7月",
    edu_badge_2: "本科",
    edu_degree_2: "工学学士 — 信息技术 (IT)",
    edu_institution_2: "孟加拉理工学院 (BIT)，加尔各答",
    edu_period_2: "2010年 — 2014年",
    contact_tagline: "有产品想法？让我们携手构建<em>非凡之作</em>。",
    contact_sub: "承接兼职移动技术领导、0-to-1 MVP 架构研发以及系统技术咨询。",
    contact_linkedin: "↗ LinkedIn 个人主页",
    footer_location: "印度加尔各答 · 面向全球客户",
    footer_desc: "解决方案架构师 | Kotlin · Spring · Flutter · Python · ERP"
  },
  ja: {
    nav_work: "実績",
    nav_services: "サービス",
    nav_pedigree: "アプローチ",
    nav_experience: "経歴",
    nav_skills: "技術構成",
    nav_book_call: "プロジェクト相談",
    hero_badge: "新規プロジェクト受付中 · リモート対応",
    hero_headline: "ミッションクリティカルなモバイルシステム、企業向けソリューション、高機能知能製品の開発",
    hero_desc: "モバイルソリューションアーキテクト（Kotlin、KMP、Flutter）。Spring BootおよびFastAPIバックエンド開発にも精通。ネイティブ<strong>Android (Kotlin &amp; Jetpack Compose)</strong>、<strong>Flutter</strong>、<strong>バックエンド</strong>、<strong>クラウド</strong>、企業向け<strong>SAPコンサルティング</strong>を網羅する12年以上の技術的厚みを提供。",
    hero_cta_contact: "初回相談を予約する",
    hero_cta_work: "アプリ実績を見る",
    section_work: "注目のモバイルアプリ",
    section_services: "ソリューションと技術能力",
    section_skills: "技術スタック &amp; ツールキット",
    skill_title_flutter: "Android (Kotlin) &amp; Flutter モバイル",
    skill_title_ai: "AI &amp; 機械学習",
    skill_title_datascience: "データサイエンス &amp; 統計分析",
    skill_title_backend: "バックエンド、API &amp; クラウド",
    skill_title_sap: "SAP &amp; エンタープライズ設計",
    skill_title_practices: "エンジニアリング実践 &amp; デリバリー",
    section_experience: "経歴 &amp; トラジェクトリ",
    exp_date_1: "2021年7月 — 現在",
    exp_company_1: "フリーランス",
    exp_role_1: "シニアモバイルエンジニア &amp; ITコンサルタント",
    exp_desc_1: "スタートアップや企業顧客に向けたモバイルエンジニアリングとITコンサルティング。KotlinとJetpack ComposeによるネイティブAndroid開発を最優先とし、Flutterによるクロスプラットフォーム開発、Spring Bootによる堅牢なバックエンドも提供。",
    exp_date_2: "2018年1月 — 2021年3月 · 3年3ヶ月",
    exp_company_2: "フリーランス",
    exp_role_2: "SAPコンサルタント",
    exp_desc_2: "SAP環境の導入、カスタマイズ、最適化を担当する独立コンサルティング。ABAP開発、SAP Mobile、MM・EHSモジュールに特化。",
    exp_date_3: "2015年1月 — 2017年11月 · 2年11ヶ月",
    exp_company_3: "アクセンチュア",
    exp_role_3: "SAPテクノ・ファンクショナル・コンサルタント",
    exp_desc_3: "アクセンチュアにて大規模エンタープライズ導入に参画。技術的ABAP開発と業務機能モジュールを繋ぐコンサルティングを提供。",
    section_education: "学歴",
    edu_badge_1: "大学院・専門課程",
    edu_degree_1: "統計手法＆分析",
    edu_institution_1: "インド統計大学 (ISI) コルカタ校",
    edu_period_1: "2024年7月 — 2025年7月",
    edu_badge_2: "学部卒",
    edu_degree_2: "技術学士 — 情報技術 (IT)",
    edu_institution_2: "ベンガル工科大学 (BIT) コルカタ校",
    edu_period_2: "2010年 — 2014年",
    contact_tagline: "アプリの構想がありますか？ <em>素晴らしいもの</em>を一緒に作りましょう。",
    contact_sub: "フラクショナル・リード、0から1のMVP開発、技術アーキテクチャ助言に対応。",
    contact_linkedin: "↗ LinkedIn プロフィール",
    footer_location: "インド、コルカタ · 全世界対応",
    footer_desc: "ソリューションアーキテクト | Kotlin · Spring · Flutter · Python · ERP"
  },
  ko: {
    nav_work: "프로젝트",
    nav_services: "서비스",
    nav_pedigree: "업무 방식",
    nav_experience: "경력",
    nav_skills: "기술스택",
    nav_book_call: "프로젝트 시작",
    hero_badge: "신규 프로젝트 수주 가능 · 글로벌 원격",
    hero_headline: "미션 크리티컬 모바일 시스템, 엔터프라이즈 솔루션 및 지능형 제품 엔지니어링",
    hero_desc: "모바일 솔루션 아키텍트(Kotlin, KMP, Flutter)이자 Spring Boot 및 FastAPI 백엔드 엔지니어링 전문가입니다. 네이티브 <strong>Android (Kotlin &amp; Jetpack Compose)</strong>, <strong>Flutter</strong>, <strong>백엔드</strong>, <strong>클라우드</strong> 및 엔터프라이즈 <strong>SAP 컨설팅</strong>에 걸친 12년 이상의 깊이 있는 기술 역량을 제공합니다.",
    hero_cta_contact: "디스커버리 미팅 예약",
    hero_cta_work: "앱 포트폴리오 보기",
    section_work: "주요 모바일 프로젝트",
    section_services: "솔루션 및 엔지니어링 역량",
    section_skills: "기술 스택 및 툴킷",
    skill_title_flutter: "Android (Kotlin) 및 Flutter 모바일",
    skill_title_ai: "AI 및 머신러닝",
    skill_title_datascience: "데이터 사이언스 및 통계 분석",
    skill_title_backend: "백엔드, API 및 클라우드",
    skill_title_sap: "SAP 및 엔터프라이즈 아키텍처",
    skill_title_practices: "엔지니어링 프랙티스 &amp; 배포",
    section_experience: "경력 및 이력",
    exp_date_1: "2021년 7월 — 현재",
    exp_company_1: "프리랜서",
    exp_role_1: "시니어 모바일 엔지니어 &amp; IT 컨설턴트",
    exp_desc_1: "스타트업 및 엔터프라이즈 고객을 위한 전문 모바일 엔지니어링 및 솔루션 컨설팅. Kotlin 및 Jetpack Compose 기반 고성능 네이티브 Android 개발을 필두로, Flutter 크로스 플랫폼 개발과 Spring Boot 백엔드 마이크로서비스를 통합 제공합니다.",
    exp_date_2: "2018년 1월 — 2021년 3월 · 3년 3개월",
    exp_company_2: "프리랜서",
    exp_role_2: "SAP 컨설턴트",
    exp_desc_2: "SAP 환경 구축, 커스터마이징 및 최적화 독립 컨설팅. ABAP 개발, SAP Mobile, MM 및 EHS 모듈 전문.",
    exp_date_3: "2015년 1월 — 2017년 11월 · 2년 11개월",
    exp_company_3: "액센츄어",
    exp_role_3: "SAP 테크노-펑셔널 컨설턴트",
    exp_desc_3: "액센츄어에서 대규모 엔터프라이즈 구축 프로젝트 수행. 기술적 ABAP 개발과 비즈니스 모듈 전문성을 결합한 컨설팅 제공.",
    section_education: "학력 및 교육",
    edu_badge_1: "대학원 과정",
    edu_degree_1: "통계 방법론 &amp; 분석",
    edu_institution_1: "인도 통계 대학 (ISI), 콜카타",
    edu_period_1: "2024년 7월 — 2025년 7월",
    edu_badge_2: "학사 과정",
    edu_degree_2: "공학사 — 정보기술 (IT)",
    edu_institution_2: "벵골 공과 대학교 (BIT), 콜카타",
    edu_period_2: "2010년 — 2014년",
    contact_tagline: "새로운 앱 아이디어가 있으신가요? 함께 <em>놀라운 일</em>을 만들어 봅시다.",
    contact_sub: "파트타임 모바일 리더십, 0-to-1 MVP 개발, 기술 아키텍처 자문 가능.",
    contact_linkedin: "↗ LinkedIn 프로필",
    footer_location: "인도 콜카타 · 전 세계 원격 가능",
    footer_desc: "솔루션 아키텍트 | Kotlin · Spring · Flutter · Python · ERP"
  }
};

// Language Selector Logic
const langBtn = document.getElementById('langBtn');
const langSelector = document.querySelector('.lang-selector');
const langDropdown = document.getElementById('langDropdown');
const langCurrent = document.getElementById('langCurrent');
const langOpts = document.querySelectorAll('.lang-opt');

if (langBtn && langSelector) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    langSelector.classList.remove('active');
  });

  if (langDropdown) {
    langDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      const selectedLang = opt.getAttribute('data-lang');
      setLanguage(selectedLang);
      langSelector.classList.remove('active');
    });
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLang', lang);
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();
  
  langOpts.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Apply translations
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (translations[lang][key].includes('<') || translations[lang][key].includes('&')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// Initial language load
const savedLang = localStorage.getItem('preferredLang') || 'en';
if (savedLang !== 'en') {
  setLanguage(savedLang);
}

// ==================== INTERACTIVE SCREENSHOT GALLERY ====================
function initScreenGallery(tabClass, slideClass, dataAttr) {
  const tabs = document.querySelectorAll(tabClass);
  const slides = document.querySelectorAll(slideClass);
  if (!tabs.length || !slides.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute(dataAttr);
      if (!target) return;
      tabs.forEach(t => {
        const isMatch = t.getAttribute(dataAttr) === target;
        t.classList.toggle('active', isMatch);
        t.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
      slides.forEach(s => {
        const isMatch = s.getAttribute('data-screen-id') === target;
        s.classList.toggle('active', isMatch);
      });
    });
  });
}

initScreenGallery('.k2-tab', '.k2-deck-item', 'data-k2-screen');
initScreenGallery('.aqua-tab', '.aqua-deck-item', 'data-aqua-screen');
initScreenGallery('.viom-tab', '.viom-deck-item', 'data-viom-screen');
