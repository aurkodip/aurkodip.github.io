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


// Interactive Project Scope Configurator (Segmented Controls)
const groupPlatform = document.getElementById('groupPlatform');
const groupScope = document.getElementById('groupScope');
const groupTimeline = document.getElementById('groupTimeline');
const btnEmailScope = document.getElementById('btnEmailScope');
const btnWhatsAppScope = document.getElementById('btnWhatsAppScope');
const estimatorSummaryText = document.getElementById('estimatorSummaryText');

let selectedPlatform = 'iOS & Android (Flutter)';
let selectedScope = '0-to-1 MVP Build';
let selectedTimeline = 'Immediate (< 1 Month)';

function setupSegmentGroup(container, onSelect) {
  if (!container) return;
  const segments = container.querySelectorAll('.segment-btn');
  segments.forEach(seg => {
    seg.addEventListener('click', () => {
      segments.forEach(s => s.classList.remove('active'));
      seg.classList.add('active');
      onSelect(seg.getAttribute('data-value'));
      updateEstimatorBlueprint();
    });
  });
}

function updateEstimatorBlueprint() {
  if (estimatorSummaryText) {
    estimatorSummaryText.innerHTML = `Target: <strong>${selectedPlatform}</strong> · Scope: <strong>${selectedScope}</strong> · Horizon: <strong>${selectedTimeline}</strong>`;
  }

  const subject = encodeURIComponent(`Mobile Architecture Inquiry: ${selectedPlatform}`);
  const body = encodeURIComponent(
`Hi Aurkodip,

I'm reaching out to discuss engineering a mobile application.

Project Specifications:
• Target Ecosystem: ${selectedPlatform}
• Engagement Scope: ${selectedScope}
• Delivery Horizon: ${selectedTimeline}

Let's schedule a discovery call to discuss technical architecture, milestone deliverables, and availability.

Best regards,`
  );

  if (btnEmailScope) {
    btnEmailScope.href = `mailto:aurkodip@zohomail.in?subject=${subject}&body=${body}`;
  }

  const waText = encodeURIComponent(
`Hi Aurkodip! I'd like to discuss a mobile project:
• Target: ${selectedPlatform}
• Scope: ${selectedScope}
• Horizon: ${selectedTimeline}
Let's connect!`
  );

  if (btnWhatsAppScope) {
    btnWhatsAppScope.href = `https://api.whatsapp.com/send?text=${waText}`;
  }
}

setupSegmentGroup(groupPlatform, val => { selectedPlatform = val; });
setupSegmentGroup(groupScope, val => { selectedScope = val; });
setupSegmentGroup(groupTimeline, val => { selectedTimeline = val; });
updateEstimatorBlueprint();

// Translation Data
const translations = {
  en: {
    nav_work: "Work",
    nav_services: "Services",
    nav_pedigree: "Approach",
    nav_experience: "Experience",
    nav_skills: "Stack",
    nav_book_call: "Start a Project",
    hero_badge: "Available for Projects · Global Remote",
    hero_headline: "Engineering Production-Grade Mobile Apps for Startups & Enterprises.",
    hero_desc: "Specializing in <strong>Flutter</strong> and native <strong>Android (Kotlin & Jetpack Compose)</strong>. I partner with founders, venture studios, and tech leaders to design, build, and deploy fluid, high-performance mobile products with clean architecture and scalable cloud backends.",
    hero_cta_contact: "Schedule Discovery Call",
    hero_cta_work: "View Featured Apps",
    section_work: "Featured Mobile Work",
    section_services: "Solutions & Engineering Capabilities",
    section_skills: "Technical Stack & Toolkit",
    skill_title_flutter: "Mobile — Flutter / Dart",
    skill_title_android: "Mobile — Android / Kotlin (Native)",
    skill_title_hardware: "Hardware & Sensors",
    skill_title_backend: "Backend & Automation",
    skill_title_payments: "Payments, Integrations & Web",
    skill_title_practices: "Engineering Practices & Delivery",
    section_experience: "Experience & Trajectory",
    exp_date_1: "Jul 2021 — Present",
    exp_company_1: "Freelance",
    exp_role_1: "Mobile Developer & IT Consultant",
    exp_desc_1: "Delivering specialized IT consulting and production-ready applications for startups and enterprise clients. Engineering mobile and cross-platform solutions with Flutter and Android (Jetpack Compose) featuring clean architecture and exceptional UX, alongside delivering end-to-end solutions in AI/ML integration, full-stack development, and cloud architecture.",
    exp_date_2: "Jan 2018 — Mar 2021 · 3 yrs 3 mos",
    exp_company_2: "Freelance",
    exp_role_2: "SAP Consultant",
    exp_desc_2: "Independent SAP consulting covering implementation, customization, and optimization of SAP landscapes. Specialized in ABAP development, SAP Mobile, and functional modules (MM, EHS) for enterprise clients across industries.",
    exp_date_3: "Jan 2015 — Nov 2017 · 2 yrs 11 mos",
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
    contact_sub: "Select your requirements below to instantly format a project brief, or reach out directly for availability.",
    contact_linkedin: "↗ LinkedIn Profile",
    footer_location: "Kolkata, India · Available Worldwide",
    footer_desc: "Senior Mobile Engineer · Flutter & Android Specialist · Enterprise Solutions Architect"
  },
  de: {
    nav_work: "Projekte",
    nav_services: "Leistungen",
    nav_pedigree: "Arbeitsweise",
    nav_experience: "Erfahrung",
    nav_skills: "Stack",
    nav_book_call: "Projekt starten",
    hero_badge: "Verfügbar für Projekte · Remote",
    hero_headline: "Entwicklung produktionsreifer mobiler Apps für Startups & Unternehmen.",
    hero_desc: "Spezialisiert auf <strong>Flutter</strong> und natives <strong>Android (Kotlin & Jetpack Compose)</strong>. Ich baue hochperformante mobile Produkte mit sauberer Architektur und skalierbaren Backends.",
    hero_cta_contact: "Erstgespräch buchen",
    hero_cta_work: "Projekte ansehen",
    section_work: "Ausgewählte Mobile Apps",
    section_services: "Lösungen & Fähigkeiten",
    section_skills: "Technologie-Stack",
    skill_title_flutter: "Mobile — Flutter / Dart",
    skill_title_android: "Mobile — Android / Kotlin (Nativ)",
    skill_title_hardware: "Hardware & Sensoren",
    skill_title_backend: "Backend & Automatisierung",
    skill_title_payments: "Zahlungen, Integrationen & Web",
    skill_title_practices: "Engineering-Praktiken & Delivery",
    section_experience: "Erfahrung",
    exp_date_1: "Jul 2021 — Heute",
    exp_company_1: "Freiberuflich",
    exp_role_1: "Mobile-Entwickler & IT-Berater",
    exp_desc_1: "Spezialisierte IT-Beratung und produktionsreife Anwendungen für Startups und Unternehmenskunden. Entwicklung von Mobil- und plattformübergreifenden Lösungen mit Flutter und Android (Jetpack Compose) mit sauberer Architektur und herausragender UX.",
    exp_date_2: "Jan 2018 — Mär 2021 · 3 J. 3 M.",
    exp_company_2: "Freiberuflich",
    exp_role_2: "SAP-Berater",
    exp_desc_2: "Unabhängige SAP-Beratung für die Implementierung, Anpassung und Optimierung von SAP-Systemlandschaften.",
    exp_date_3: "Jan 2015 — Nov 2017 · 2 J. 11 M.",
    exp_role_3: "Techno-funktionaler SAP-Berater",
    exp_desc_3: "Techno-funktionale SAP-Beratung bei Accenture, die technische ABAP-Entwicklung mit funktionaler Modulexpertise verknüpft.",
    section_education: "Ausbildung",
    edu_badge_1: "Postgraduiert",
    edu_degree_1: "Statistische Methoden & Analytik",
    edu_institution_1: "Indian Statistical Institute, Kolkata",
    edu_period_1: "Juli 2024 — Juli 2025",
    edu_badge_2: "Erststudium",
    edu_degree_2: "Bachelor of Technology — Informationstechnologie",
    edu_institution_2: "Bengal Institute of Technology, Kolkata",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Lassen Sie uns etwas <em>Außergewöhnliches</em> aufbauen.",
    contact_sub: "Wählen Sie unten Ihre Anforderungen aus oder kontaktieren Sie mich direkt.",
    contact_linkedin: "↗ LinkedIn Profil",
    footer_location: "Kolkata, Indien · Weltweit verfügbar",
    footer_desc: "Senior Mobile Engineer · Flutter & Android Spezialist · Enterprise Consultant"
  },
  fr: {
    nav_work: "Projets",
    nav_services: "Services",
    nav_pedigree: "Approche",
    nav_experience: "Expérience",
    nav_skills: "Stack",
    nav_book_call: "Démarrer un projet",
    hero_badge: "Disponible pour projets · Télétravail",
    hero_headline: "Développement d'applications mobiles de production pour startups et entreprises.",
    hero_desc: "Spécialisé en <strong>Flutter</strong> et <strong>Android natif (Kotlin & Jetpack Compose)</strong>. Conception et déploiement de produits mobiles haute performance avec architecture propre et backends cloud scalables.",
    hero_cta_contact: "Planifier un échange",
    hero_cta_work: "Découvrir mes apps",
    section_work: "Applications Récentes",
    section_services: "Solutions & Capacités",
    section_skills: "Stack Technique",
    skill_title_flutter: "Mobile — Flutter / Dart",
    skill_title_android: "Mobile — Android / Kotlin (Natif)",
    skill_title_hardware: "Matériel & Capteurs",
    skill_title_backend: "Backend & Automatisation",
    skill_title_payments: "Paiements, Intégrations & Web",
    skill_title_practices: "Pratiques d'Ingénierie & Livraison",
    section_experience: "Expérience",
    exp_date_1: "Juil 2021 — Présent",
    exp_company_1: "Indépendant",
    exp_role_1: "Développeur Mobile & Consultant IT",
    exp_desc_1: "Conseil IT spécialisé et conception d'applications de production pour startups et grandes entreprises. Ingénierie de solutions mobiles avec Flutter et Android (Jetpack Compose).",
    exp_date_2: "Janv 2018 — Mars 2021 · 3 ans 3 mo.",
    exp_company_2: "Indépendant",
    exp_role_2: "Consultant SAP",
    exp_desc_2: "Conseil SAP indépendant englobant l'implémentation, la personnalisation et l'optimisation des architectures SAP.",
    exp_date_3: "Janv 2015 — Nov 2017 · 2 ans 11 mo.",
    exp_role_3: "Consultant SAP Techno-Fonctionnel",
    exp_desc_3: "Conseil techno-fonctionnel SAP chez Accenture, faisant le lien entre le développement technique ABAP et l'expertise fonctionnelle.",
    section_education: "Formation",
    edu_badge_1: "Postgrade",
    edu_degree_1: "Méthodes Statistiques & Analytique",
    edu_institution_1: "Institut indien de statistique (ISI), Calcutta",
    edu_period_1: "Juillet 2024 — Juillet 2025",
    edu_badge_2: "Licence",
    edu_degree_2: "Bachelor of Technology — Informatique",
    edu_institution_2: "Institut de technologie du Bengale (BIT), Calcutta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Bâtissons quelque chose d'<em>exceptionnel.</em>",
    contact_sub: "Sélectionnez vos critères ci-dessous ou écrivez-moi directement.",
    contact_linkedin: "↗ Profil LinkedIn",
    footer_location: "Calcutta, Inde · Disponible dans le monde entier",
    footer_desc: "Senior Mobile Engineer · Spécialiste Flutter & Android · Architecte de Solutions"
  },
  es: {
    nav_work: "Proyectos",
    nav_services: "Servicios",
    nav_pedigree: "Enfoque",
    nav_experience: "Experiencia",
    nav_skills: "Stack",
    nav_book_call: "Iniciar Proyecto",
    hero_badge: "Disponible para proyectos · Remoto",
    hero_headline: "Ingeniería de aplicaciones móviles de producción para startups y empresas.",
    hero_desc: "Especialista en <strong>Flutter</strong> y <strong>Android nativo (Kotlin & Jetpack Compose)</strong>. Construcción de aplicaciones fluidas de alto rendimiento con arquitectura limpia y backends en la nube.",
    hero_cta_contact: "Agendar llamada",
    hero_cta_work: "Ver aplicaciones",
    section_work: "Aplicaciones Destacadas",
    section_services: "Soluciones y Capacidades",
    section_skills: "Stack Tecnológico",
    skill_title_flutter: "Móvil — Flutter / Dart",
    skill_title_android: "Móvil — Android / Kotlin (Nativo)",
    skill_title_hardware: "Hardware y Sensores",
    skill_title_backend: "Backend y Automatización",
    skill_title_payments: "Pagos, Integraciones y Web",
    skill_title_practices: "Prácticas de Ingeniería y Entrega",
    section_experience: "Experiencia",
    exp_date_1: "Jul 2021 — Presente",
    exp_company_1: "Freelance",
    exp_role_1: "Desarrollador Móvil y Consultor de TI",
    exp_desc_1: "Consultoría especializada en TI y desarrollo de aplicaciones para startups y clientes corporativos con Flutter y Android (Jetpack Compose).",
    exp_date_2: "Ene 2018 — Mar 2021 · 3 años 3 meses",
    exp_company_2: "Freelance",
    exp_role_2: "Consultor SAP",
    exp_desc_2: "Consultoría SAP independiente enfocada en implementación y personalización.",
    exp_date_3: "Ene 2015 — Nov 2017 · 2 años 11 meses",
    exp_role_3: "Consultor Tecno-Funcional SAP",
    exp_desc_3: "Servicios de consultoría tecno-funcional SAP en Accenture.",
    section_education: "Educación",
    edu_badge_1: "Postgrado",
    edu_degree_1: "Métodos Estadísticos & Analítica",
    edu_institution_1: "Instituto de Estadística de la India (ISI), Calcuta",
    edu_period_1: "Julio 2024 — Julio 2025",
    edu_badge_2: "Pregrado",
    edu_degree_2: "Grado en Tecnología — TI",
    edu_institution_2: "Instituto de Tecnología de Bengala (BIT), Calcuta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Construyamos algo <em>extraordinario.</em>",
    contact_sub: "Seleccione sus requerimientos abajo o contácteme directamente.",
    contact_linkedin: "↗ Perfil de LinkedIn",
    footer_location: "Calcuta, India · Disponible a nivel global",
    footer_desc: "Senior Mobile Engineer · Especialista Flutter y Android · Consultor de Soluciones"
  },
  zh: {
    nav_work: "作品",
    nav_services: "服务",
    nav_pedigree: "合作理念",
    nav_experience: "经历",
    nav_skills: "技术栈",
    nav_book_call: "发起项目",
    hero_badge: "承接新项目合作 · 全球远程",
    hero_headline: "为初创团队与企业打造生产级移动端应用程序",
    hero_desc: "专注 <strong>Flutter</strong> 跨平台与原生 <strong>Android (Kotlin & Jetpack Compose)</strong>。构建清晰架构、高性能流畅体验的移动产品及可扩展云端服务。",
    hero_cta_contact: "预约初步沟通",
    hero_cta_work: "查看精选作品",
    section_work: "精选移动应用",
    section_services: "解决方案与工程能力",
    section_skills: "技术栈与工具箱",
    skill_title_flutter: "移动端 — Flutter / Dart",
    skill_title_android: "移动端 — Android / Kotlin (原生)",
    skill_title_hardware: "硬件与传感器",
    skill_title_backend: "后端与自动化",
    skill_title_payments: "支付、集成与 Web",
    skill_title_practices: "工程规范与交付",
    section_experience: "工作经历",
    exp_date_1: "2021年7月 — 至今",
    exp_company_1: "自由职业",
    exp_role_1: "移动端开发者 & IT 顾问",
    exp_desc_1: "为初创团队及企业客户提供专业的 IT 咨询与生产级应用解决方案。基于 Flutter 和 Android (Jetpack Compose) 构建具备清晰架构与极致体验的移动方案。",
    exp_date_2: "2018年1月 — 2021年3月 · 3年3个月",
    exp_company_2: "自由职业",
    exp_role_2: "SAP 顾问",
    exp_desc_2: "独立开展 SAP 顾问服务，涵盖实施、定制与优化。",
    exp_date_3: "2015年1月 — 2017年11月 · 2年11个月",
    exp_role_3: "SAP 技术与业务顾问",
    exp_desc_3: "在埃森哲提供 SAP 技术与业务双向咨询服务。",
    section_education: "教育背景",
    edu_badge_1: "研究生",
    edu_degree_1: "统计学方法与数据分析",
    edu_institution_1: "印度统计研究所 (ISI)，加尔各答",
    edu_period_1: "2024年7月 — 2025年7月",
    edu_badge_2: "本科",
    edu_degree_2: "工学学士 — 信息技术 (IT)",
    edu_institution_2: "孟加拉理工学院 (BIT)，加尔各答",
    edu_period_2: "2010年 — 2014年",
    contact_tagline: "让我们携手构建<em>非凡之作</em>。",
    contact_sub: "在下方选择您的项目需求，或直接与我取得联系。",
    contact_linkedin: "↗ LinkedIn 个人主页",
    footer_location: "印度，加尔各答 · 面向全球客户",
    footer_desc: "资深移动工程师 · Flutter & Android 专家 · 解决方案架构师"
  },
  ja: {
    nav_work: "実績",
    nav_services: "サービス",
    nav_pedigree: "アプローチ",
    nav_experience: "経歴",
    nav_skills: "技術構成",
    nav_book_call: "プロジェクト相談",
    hero_badge: "新規プロジェクト受付中 · リモート対応",
    hero_headline: "スタートアップと企業のための本番環境対応モバイルアプリ開発",
    hero_desc: "<strong>Flutter</strong> および <strong>Android ネイティブ (Kotlin & Jetpack Compose)</strong> に特化。クリーンアーキテクチャと高性能でスムーズなUXを備えたモバイル製品を提供します。",
    hero_cta_contact: "初回相談を予約する",
    hero_cta_work: "アプリ実績を見る",
    section_work: "注目のモバイルアプリ",
    section_services: "ソリューションと技術能力",
    section_skills: "技術スタック",
    skill_title_flutter: "モバイル — Flutter / Dart",
    skill_title_android: "モバイル — Android / Kotlin (ネイティブ)",
    skill_title_hardware: "ハードウェア & センサー",
    skill_title_backend: "バックエンド & 自動化",
    skill_title_payments: "決済、インテグレーション & Web",
    skill_title_practices: "エンジニアリング実践 & デリバリー",
    section_experience: "経歴",
    exp_date_1: "2021年7月 — 現在",
    exp_company_1: "フリーランス",
    exp_role_1: "モバイル開発者 & ITコンサルタント",
    exp_desc_1: "スタートアップや企業顧客に向けて、FlutterとAndroid（Jetpack Compose）を活用したクリーンアーキテクチャのモバイル開発とITコンサルティングを提供。",
    exp_date_2: "2018年1月 — 2021年3月 · 3年3ヶ月",
    exp_company_2: "フリーランス",
    exp_role_2: "SAPコンサルタント",
    exp_desc_2: "SAP環境の導入、カスタマイズ、最適化を担当する独立コンサルティング。",
    exp_date_3: "2015年1月 — 2017年11月 · 2年11ヶ月",
    exp_role_3: "SAPテクノ・ファンクショナル・コンサルタント",
    exp_desc_3: "アクセンチュアにて、技術的なABAP開発と業務機能モジュールの専門知識を活かしたコンサルティングを提供。",
    section_education: "学歴",
    edu_badge_1: "大学院・専門課程",
    edu_degree_1: "統計手法＆分析",
    edu_institution_1: "インド統計大学 (ISI) コルカタ校",
    edu_period_1: "2024年7月 — 2025年7月",
    edu_badge_2: "学部卒",
    edu_degree_2: "技術学士 — 情報技術 (IT)",
    edu_institution_2: "ベンガル工科大学 (BIT) コルカタ校",
    edu_period_2: "2010年 — 2014年",
    contact_tagline: "<em>素晴らしいもの</em>を一緒に作りましょう。",
    contact_sub: "以下からプロジェクト要件を選択するか、直接お問い合わせください。",
    contact_linkedin: "↗ LinkedIn プロフィール",
    footer_location: "インド、コルカタ · 全世界対応",
    footer_desc: "シニアモバイルエンジニア · Flutter & Android エキスパート · ソリューションアーキテクト"
  },
  ko: {
    nav_work: "프로젝트",
    nav_services: "서비스",
    nav_pedigree: "업무 방식",
    nav_experience: "경력",
    nav_skills: "기술스택",
    nav_book_call: "프로젝트 시작",
    hero_badge: "신규 프로젝트 수주 가능 · 글로벌 원격",
    hero_headline: "스타트업 및 엔터프라이즈를 위한 고성능 모바일 애플리케이션 엔지니어링",
    hero_desc: "<strong>Flutter</strong> 및 <strong>Android 네이티브 (Kotlin & Jetpack Compose)</strong> 전문. 클린 아키텍처와 뛰어난 고성능 사용자 경험을 갖춘 모바일 제품을 설계 및 배포합니다.",
    hero_cta_contact: "디스커버리 미팅 예약",
    hero_cta_work: "앱 포트폴리오 보기",
    section_work: "주요 모바일 프로젝트",
    section_services: "솔루션 및 역량",
    section_skills: "기술 스택 및 툴킷",
    skill_title_flutter: "모바일 — Flutter / Dart",
    skill_title_android: "모바일 — Android / Kotlin (네이티브)",
    skill_title_hardware: "하드웨어 및 센서",
    skill_title_backend: "백엔드 및 자동화",
    skill_title_payments: "결제, 연동 및 웹",
    skill_title_practices: "엔지니어링 프랙티스 & 배포",
    section_experience: "경력",
    exp_date_1: "2021년 7월 — 현재",
    exp_company_1: "프리랜서",
    exp_role_1: "모바일 개발자 & IT 컨설턴트",
    exp_desc_1: "스타트업 및 엔터프라이즈 고객을 위해 Flutter 및 Android(Jetpack Compose) 기반의 클린 아키텍처와 뛰어난 UX를 갖춘 모바일 솔루션 제공.",
    exp_date_2: "2018년 1월 — 2021년 3월 · 3년 3개월",
    exp_company_2: "프리랜서",
    exp_role_2: "SAP 컨설턴트",
    exp_desc_2: "SAP 구축, 커스터마이징 및 최적화 독립 컨설팅.",
    exp_date_3: "2015년 1월 — 2017년 11월 · 2년 11개월",
    exp_role_3: "SAP 테크노-펑셔널 컨설턴트",
    exp_desc_3: "액센츄어에서 기술적 ABAP 개발과 비즈니스 모듈 지식을 연계한 컨설팅 제공.",
    section_education: "학력",
    edu_badge_1: "대학원 과정",
    edu_degree_1: "통계 방법론 & 분석",
    edu_institution_1: "인도 통계 대학 (ISI), 콜카타",
    edu_period_1: "2024년 7월 — 2025년 7월",
    edu_badge_2: "학사 과정",
    edu_degree_2: "공학사 — 정보기술 (IT)",
    edu_institution_2: "벵골 공과 대학교 (BIT), 콜카타",
    edu_period_2: "2010년 — 2014년",
    contact_tagline: "함께 <em>놀라운 일</em>을 만들어 봅시다.",
    contact_sub: "아래에서 프로젝트 요구 사항을 선택하거나 직접 문의해 주세요.",
    contact_linkedin: "↗ LinkedIn 프로필",
    footer_location: "인도 콜카타 · 전 세계 원격 가능",
    footer_desc: "시니어 모바일 엔지니어 · Flutter & Android 스페셜리스트 · 솔루션 아키텍트"
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

// ==================== K2 FISHERIES INTERACTIVE SCREENSHOT GALLERY ====================
function initK2Gallery() {
  const tabs = document.querySelectorAll('.k2-tab');
  const thumbs = document.querySelectorAll('.k2-thumb-card');
  const slides = document.querySelectorAll('.k2-deck-item');

  if (!tabs.length || !slides.length) return;

  function switchScreen(screenId) {
    tabs.forEach(t => {
      const isMatch = t.getAttribute('data-k2-screen') === screenId;
      t.classList.toggle('active', isMatch);
      t.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    thumbs.forEach(th => {
      const isMatch = th.getAttribute('data-k2-target') === screenId;
      th.classList.toggle('active', isMatch);
    });

    slides.forEach(s => {
      const isMatch = s.getAttribute('data-screen-id') === screenId;
      s.classList.toggle('active', isMatch);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-k2-screen');
      if (target) switchScreen(target);
    });
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const target = thumb.getAttribute('data-k2-target');
      if (target) switchScreen(target);
    });
  });
}

initK2Gallery();

// ==================== AQUAPLAYER INTERACTIVE SCREENSHOT GALLERY ====================
function initAquaGallery() {
  const tabs = document.querySelectorAll('.aqua-tab');
  const thumbs = document.querySelectorAll('.aqua-thumb-card');
  const slides = document.querySelectorAll('.aqua-deck-item');

  if (!tabs.length || !slides.length) return;

  function switchScreen(screenId) {
    tabs.forEach(t => {
      const isMatch = t.getAttribute('data-aqua-screen') === screenId;
      t.classList.toggle('active', isMatch);
      t.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    thumbs.forEach(th => {
      const isMatch = th.getAttribute('data-aqua-target') === screenId;
      th.classList.toggle('active', isMatch);
    });

    slides.forEach(s => {
      const isMatch = s.getAttribute('data-screen-id') === screenId;
      s.classList.toggle('active', isMatch);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-aqua-screen');
      if (target) switchScreen(target);
    });
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const target = thumb.getAttribute('data-aqua-target');
      if (target) switchScreen(target);
    });
  });
}

initAquaGallery();
 
// ==================== VIOM INTERACTIVE SCREENSHOT GALLERY ====================
function initViomGallery() {
  const tabs = document.querySelectorAll('.viom-tab');
  const thumbs = document.querySelectorAll('.viom-thumb-card');
  const slides = document.querySelectorAll('.viom-deck-item');

  if (!tabs.length || !slides.length) return;

  function switchScreen(screenId) {
    tabs.forEach(t => {
      const isMatch = t.getAttribute('data-viom-screen') === screenId;
      t.classList.toggle('active', isMatch);
      t.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    thumbs.forEach(th => {
      const isMatch = th.getAttribute('data-viom-target') === screenId;
      th.classList.toggle('active', isMatch);
    });

    slides.forEach(s => {
      const isMatch = s.getAttribute('data-screen-id') === screenId;
      s.classList.toggle('active', isMatch);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-viom-screen');
      if (target) switchScreen(target);
    });
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const target = thumb.getAttribute('data-viom-target');
      if (target) switchScreen(target);
    });
  });
}

initViomGallery();
