// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 18 + 'px';
  ring.style.top = ry - 18 + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform = 'scale(1.4)';
    ring.style.opacity = '0.7';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'scale(1)';
    ring.style.opacity = '0.4';
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el, i) => {
  el.dataset.delay = (i % 3) * 100;
  observer.observe(el);
});

// Translation Data
const translations = {
  en: {
    nav_home: "Home",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_badge: "Available for opportunities",
    hero_title: "Digital Solutions Architect &nbsp;·&nbsp; Greater Kolkata, WB, India",
    hero_desc: "Binary Artisan, passionate about crafting intelligent digital experiences. From enterprise systems and agile startup apps to purpose-driven community platforms, I engineer digital solutions that solve real-world problems.",
    hero_cta_contact: "Get in Touch",
    hero_cta_work: "View Work",
    stat_years: "Years in tech",
    stat_domains: "Domains mastered",
    stat_isi: "PG Analytics",
    stat_btech: "IT, BIT Kolkata",
    section_skills: "Skills",
    skill_title_flutter: "Flutter & Mobile",
    skill_title_backend: "Backend & Database",
    skill_title_ai: "AI & Machine Learning",
    skill_title_datascience: "Data Science",
    skill_title_sap: "SAP & Enterprise",
    skill_title_cloud: "Cloud & Infrastructure",
    section_experience: "Experience",
    exp_date_1: "Dec 2025 — Present",
    exp_role_1: "Flutter Developer",
    exp_desc_1: "Building cross-platform mobile and desktop applications with Flutter, crafting intelligent user experiences and integrating modern backend services. Focused on delivering production-ready apps with clean architecture and exceptional UX.",
    exp_date_2: "Jul 2021 — Nov 2025 · 4 yrs 5 mos",
    exp_company_2: "Freelance",
    exp_role_2: "IT Consultant & Subject Matter Expert",
    exp_desc_2: "Provided specialized IT consulting across enterprise and startup clients. Delivered end-to-end solutions spanning full-stack development, AI/ML integration, ERP advisory, and cloud architecture. Cultivated expertise in Flutter and data science during this period.",
    exp_date_3: "Jan 2018 — Mar 2021 · 3 yrs 3 mos",
    exp_company_3: "Freelance",
    exp_role_3: "SAP Consultant",
    exp_desc_3: "Independent SAP consulting covering implementation, customization, and optimization of SAP landscapes. Specialized in ABAP development, SAP Mobile, and functional modules (MM, EHS) for enterprise clients across industries.",
    exp_date_4: "Jan 2015 — Nov 2017 · 2 yrs 11 mos",
    exp_role_4: "SAP Techno-Functional Consultant",
    exp_desc_4: "Delivered SAP techno-functional consulting at Accenture, bridging technical ABAP development with functional module expertise. Worked on large-scale enterprise implementations, deepening skills in systems thinking, stakeholder management, and enterprise-grade delivery.",
    section_education: "Education",
    edu_badge_1: "Postgraduate",
    edu_degree_1: "Statistical Methods &amp; Analytics",
    edu_institution_1: "Indian Statistical Institute, Kolkata",
    edu_period_1: "July 2024 — July 2025",
    edu_badge_2: "Undergraduate",
    edu_degree_2: "Bachelor of Technology — Information Technology",
    edu_institution_2: "Bengal Institute of Technology, Kolkata",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Let's build something <em>remarkable.</em>",
    contact_sub: "Open to Flutter & Android developer roles, AI-powered product builds, and technical consulting engagements. If you have an interesting problem, let's talk.",
    contact_linkedin: "↗ LinkedIn Profile",
    footer_location: "Kolkata, India",
    footer_desc: "Flutter Developer · AI Engineer · Enterprise Consultant"
  },
  de: {
    nav_home: "Startseite",
    nav_skills: "Fähigkeiten",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_contact: "Kontakt",
    hero_badge: "Verfügbar für neue Aufgaben",
    hero_title: "Architekt für digitale Lösungen &nbsp;·&nbsp; Region Kolkata, Westbengalen, Indien",
    hero_desc: "Binary Artisan mit Leidenschaft für die Gestaltung intelligenter digitaler Erlebnisse. Von Unternehmenssystemen und agilen Startup-Apps bis hin zu zweckorientierten Community-Plattformen entwickle ich digitale Lösungen zur Lösung realer Probleme.",
    hero_cta_contact: "Kontakt aufnehmen",
    hero_cta_work: "Projekte ansehen",
    stat_years: "Jahre in der Tech-Branche",
    stat_domains: "Fachbereiche beherrscht",
    stat_isi: "ISI PG Analytik",
    stat_btech: "BTech IT, BIT Kolkata",
    section_skills: "Fähigkeiten",
    skill_title_flutter: "Flutter & Mobile",
    skill_title_backend: "Backend & Datenbanken",
    skill_title_ai: "KI & Maschinelles Lernen",
    skill_title_datascience: "Data Science",
    skill_title_sap: "SAP & Enterprise",
    skill_title_cloud: "Cloud & Infrastruktur",
    section_experience: "Erfahrung",
    exp_date_1: "Dez 2025 — Heute",
    exp_role_1: "Flutter-Entwickler",
    exp_desc_1: "Entwicklung plattformübergreifender Mobil- und Desktop-Anwendungen mit Flutter, Gestaltung intelligenter Benutzererfahrungen und Integration moderner Backend-Dienste. Konzentration auf die Bereitstellung produktionsreifer Apps mit sauberer Architektur und herausragender UX.",
    exp_date_2: "Jul 2021 — Nov 2025 · 4 J. 5 M.",
    exp_company_2: "Freiberuflich",
    exp_role_2: "IT-Berater & Fachexperte",
    exp_desc_2: "Spezialisierte IT-Beratung für Unternehmens- und Startup-Kunden. Bereitstellung von End-to-End-Lösungen in den Bereichen Full-Stack-Entwicklung, AI/ML-Integration, ERP-Beratung und Cloud-Architektur. Ausbau der Expertise in Flutter und Data Science in diesem Zeitraum.",
    exp_date_3: "Jan 2018 — Mär 2021 · 3 J. 3 M.",
    exp_company_3: "Freiberuflich",
    exp_role_3: "SAP-Berater",
    exp_desc_3: "Unabhängige SAP-Beratung für die Implementierung, Anpassung und Optimierung von SAP-Systemlandschaften. Spezialisiert auf ABAP-Entwicklung, SAP Mobile und funktionale Module (MM, EHS) für Unternehmenskunden in verschiedenen Branchen.",
    exp_date_4: "Jan 2015 — Nov 2017 · 2 J. 11 M.",
    exp_role_4: "Techno-funktionaler SAP-Berater",
    exp_desc_4: "Techno-funktionale SAP-Beratung bei Accenture, die technische ABAP-Entwicklung mit funktionaler Modulexpertsen verknüpft. Arbeit an groß angelegten Unternehmensimplementierungen, Vertiefung der Kenntnisse in Systemdenken, Stakeholder-Management und Enterprise-Qualitätsstandards.",
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
    contact_sub: "Offen für Positionen als Flutter- & Android-Entwickler, KI-gestützte Produktentwicklungen und technische Beratungsmandate. Wenn Sie eine interessante Herausforderung haben, lassen Sie uns sprechen.",
    contact_linkedin: "↗ LinkedIn Profil",
    footer_location: "Kolkata, Indien",
    footer_desc: "Flutter-Entwickler · KI-Ingenieur · Unternehmensberater"
  },
  ja: {
    nav_home: "ホーム",
    nav_skills: "スキル",
    nav_experience: "経歴",
    nav_education: "学歴",
    nav_contact: "連絡先",
    hero_badge: "お仕事のご相談を受け付けています",
    hero_title: "デジタルソリューション・アーキテクト &nbsp;·&nbsp; インド 西ベンガル州 コルカタ近郊",
    hero_desc: "インテリジェントなデジタル体験の創造に情熱を注ぐバイナリ・アルチザン。エンタープライズシステムやアジャイルなスタートアップ向けアプリから、目的志向のコミュニティプラットフォームまで、現実世界の課題を解決するデジタルソリューションを構築しています。",
    hero_cta_contact: "お問い合わせ",
    hero_cta_work: "実績を見る",
    stat_years: "テック業界での経験年数",
    stat_domains: "習得した専門領域",
    stat_isi: "ISI 統計分析ポストグラデュエート",
    stat_btech: "BITコルカタ IT工学士",
    section_skills: "スキル",
    skill_title_flutter: "Flutter & モバイル",
    skill_title_backend: "バックエンド & データベース",
    skill_title_ai: "AI & 機械学習",
    skill_title_datascience: "データサイエンス",
    skill_title_sap: "SAP & エンタープライズ",
    skill_title_cloud: "クラウド & インフラ",
    section_experience: "経歴",
    exp_date_1: "2025年12月 — 現在",
    exp_role_1: "Flutter開発者",
    exp_desc_1: "Flutterを使用したクロスプラットフォームのモバイルおよびデスクトップアプリケーションの構築、インテリジェントなユーザー体験の設計、およびモダンなバックエンドサービスの統合。クリーンなアーキテクチャと優れたUXを備えた、本番環境向けのアプリ開発に注力。",
    exp_date_2: "2021年7月 — 2025年11月 · 4年5ヶ月",
    exp_company_2: "フリーランス",
    exp_role_2: "ITコンサルタント & 技术専門家",
    exp_desc_2: "企業およびスタートアップの顧客に対して専門的なITコンサルティングを提供。フルスタック開発、AI/ML統合、ERPアドバイザリー、クラウドアーキテクチャにわたるエンドツーエンドのソリューションを納品。この期間にFlutterとデータサイエンスの専門知識を深化。",
    exp_date_3: "2018年1月 — 2021年3月 · 3年3ヶ月",
    exp_company_3: "フリーランス",
    exp_role_3: "SAPコンサルタント",
    exp_desc_3: "SAP環境の導入、カスタマイズ、最適化をカバーする独立したSAPコンサルティング。様々な業界の企業顧客向けに、ABAP開発、SAPモバイル、および機能モジュール（MM、EHS）に特化。",
    exp_date_4: "2015年1月 — 2017年11月 · 2年11ヶ月",
    exp_role_4: "SAPテクノ・ファンクショナル・コンサルタント",
    exp_desc_4: "アクセンチュアにて、技術的なABAP開発と機能モジュールの専門知識を組み合わせたSAPテクノ・ファンクショナル・コンサルティングを提供。大規模な企業導入プロジェクトに従事し、システム思考、ステークホルダー管理、企業レベルのデリバリースキルを向上。",
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
    contact_sub: "FlutterおよびAndroid開発者のロール、AI搭載製品의 구축、技術コンサルティングのご依頼をお待ちしています。興味深い課題がございましたら、ぜひお気軽にご相談ください。",
    contact_linkedin: "↗ LinkedIn プロフィール",
    footer_location: "インド、コルカタ",
    footer_desc: "Flutterデベロッパー · AIエンジニア · エンタープライズコンサルタント"
  },
  ko: {
    nav_home: "홈",
    nav_skills: "기술",
    nav_experience: "경력",
    nav_education: "학력",
    nav_contact: "연락처",
    hero_badge: "프로젝트 제안 가능",
    hero_title: "디지털 솔루션 아키텍트 &nbsp;·&nbsp; 인도 서벵골 주 콜카타 지역",
    hero_desc: "지능형 디지털 경험을 설계하는 데 열정을 다하는 바이너리 아티산입니다. 엔터프라이즈 시스템과 애자일 스타트업 앱부터 목적 지향적인 커뮤니티 플랫폼에 이르기까지, 현실 세계의 문제를 해결하는 디지털 솔루션을 구축합니다.",
    hero_cta_contact: "문의하기",
    hero_cta_work: "포트폴리오 보기",
    stat_years: "기술 분야 경력",
    stat_domains: "마스터한 도메인 분야",
    stat_isi: "ISI 통계 분석 대학원 과정",
    stat_btech: "BIT 콜카타 IT 공학사",
    section_skills: "기술",
    skill_title_flutter: "Flutter & 모바일",
    skill_title_backend: "백엔드 & 데이터베이스",
    skill_title_ai: "AI & 머신러닝",
    skill_title_datascience: "데이터 과학",
    skill_title_sap: "SAP & 엔터프라이즈",
    skill_title_cloud: "클라우드 & 인프라",
    section_experience: "경력",
    exp_date_1: "2025년 12월 — 현재",
    exp_role_1: "Flutter 개발자",
    exp_desc_1: "Flutter를 활용한 크로스 플랫폼 모바일 및 데스크톱 애플리케이션 구축, 지능형 사용자 경험 설계 및 최신 백엔드 서비스 통합. 클린 아키텍처와 뛰어난 UX를 갖춘 제품용 앱 딜리버리에 집중.",
    exp_date_2: "2021년 7월 — 2025년 11월 · 4년 5개월",
    exp_company_2: "프리랜서",
    exp_role_2: "IT 컨설턴트 & 전문 위원",
    exp_desc_2: "기업 및 스타트업 클라이언트를 대상으로 전문 IT 컨설팅 제공. 풀스택 개발, AI/ML 통합, ERP 자문, 클라우드 아키텍처를 아우르는 엔드투엔드 솔루션 구축. 이 기간 동안 Flutter 및 데이터 과학 분야의 전문성 확보.",
    exp_date_3: "2018년 1월 — 2021년 3월 · 3년 3개월",
    exp_company_3: "프리랜서",
    exp_role_3: "SAP 컨설턴트",
    exp_desc_3: "SAP 환경의 구축, 커스터마이징 및 최적화를 담당하는 독립 SAP 컨설팅 진행. 다양한 산업군의 기업 고객을 위한 ABAP 개발, SAP 모바일 및 기능 모듈(MM, EHS) 전문 수행.",
    exp_date_4: "2015년 1월 — 2017년 11월 · 2년 11개월",
    exp_role_4: "SAP 테크노-펑셔널 컨설턴트",
    exp_desc_4: "액센츄어에서 기술적인 ABAP 개발과 비즈니스 기능 모듈 지식을 연계한 SAP 테크노-펑셔널 컨설팅 제공. 대규모 엔터프라이즈 구축 프로젝트에 참여하며 시스템적 사고, 이해관계자 관리 및 기업형 서비스 제공 역량 강화.",
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
    contact_sub: "Flutter 및 Android 개발자 역할, AI 기반 제품 빌드, 기술 컨설팅 파트너십에 열려 있습니다. 흥미로운 문제가 있다면 함께 이야기해 봅시다.",
    contact_linkedin: "↗ LinkedIn 프로필",
    footer_location: "인도 콜카타",
    footer_desc: "Flutter 개발자 · AI 엔지니어 · 엔터프라이즈 컨설턴트"
  },
  zh: {
    nav_home: "首页",
    nav_skills: "技能",
    nav_experience: "工作经历",
    nav_education: "教育背景",
    nav_contact: "联系方式",
    hero_badge: "可接受新工作机会",
    hero_title: "数字化解决方案架构师 &nbsp;·&nbsp; 印度 西孟加拉邦 大加尔各答地区",
    hero_desc: "热衷于构建智能数字化体验的二进制工匠。从企业级系统、敏捷初创应用到特定使命的社区平台，我致力于通过工程化的数字解决方案解决现实世界中的问题。",
    hero_cta_contact: "取得联系",
    hero_cta_work: "查看作品",
    stat_years: "行业经验",
    stat_domains: "精通领域",
    stat_isi: "ISI 统计分析研究生",
    stat_btech: "BIT 加尔各答 IT 工学士",
    section_skills: "技能",
    skill_title_flutter: "Flutter & 移动端",
    skill_title_backend: "后端 & 数据库",
    skill_title_ai: "AI & 机器学习",
    skill_title_datascience: "数据科学",
    skill_title_sap: "SAP & 企业级服务",
    skill_title_cloud: "云服务 & 基础设施",
    section_experience: "工作经历",
    exp_date_1: "2025年12月 — 至今",
    exp_role_1: "Flutter 开发者",
    exp_desc_1: "使用 Flutter 构建跨平台移动和桌面端应用程序，打造智能用户体验并集成现代后端服务。专注于交付具有清晰架构和极致体验（UX）的生产级应用。",
    exp_date_2: "2021年7月 — 2025年11月 · 4年5个月",
    exp_company_2: "自由职业",
    exp_role_2: "IT 顾问 & 行业专家",
    exp_desc_2: "为企业和初创客户提供专业的 IT 咨询服务。交付涵盖全栈开发、AI/ML 集成、ERP 咨询和云架构的端到端解决方案。在此期间深耕 Flutter 和数据科学领域。",
    exp_date_3: "2018年1月 — 2021年3月 · 3年3个月",
    exp_company_3: "自由职业",
    exp_role_3: "SAP 顾问",
    exp_desc_3: "独立开展 SAP 顾问服务，涵盖 SAP 系统的实施、定制和优化。专攻 ABAP 开发、SAP 移动端及面向各行业企业客户的功能模块（MM、EHS）。",
    exp_date_4: "2015年1月 — 2017年11月 · 2年11个月",
    exp_role_4: "SAP 技术与业务顾问",
    exp_desc_4: "在埃森哲提供 SAP 技术与业务双向咨询服务，连接技术层面的 ABAP 开发与业务模块的专业实践。参与大型企业级实施项目，深化系统性思维、干系人管理和企业级交付能力。",
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
    contact_sub: "诚邀 Flutter & Android 开发者岗位、AI 驱动型产品开发以及技术咨询业务的合作。如果您有亟待解决的有趣问题，欢迎来信探讨。",
    contact_linkedin: "↗ LinkedIn 个人主页",
    footer_location: "印度，加尔各答",
    footer_desc: "Flutter 开发者 · AI 工程师 · 企业顾问"
  },
  es: {
    nav_home: "Inicio",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_contact: "Contacto",
    hero_badge: "Disponible para oportunidades",
    hero_title: "Arquitecto de Soluciones Digitales &nbsp;·&nbsp; Área Metropolitana de Calcuta, WB, India",
    hero_desc: "Artesano del código binario, apasionado por crear experiencias digitales inteligentes. Desde sistemas empresariales y aplicaciones ágiles para startups hasta plataformas comunitarias con propósito, diseño soluciones digitales que resuelven problemas del mundo real.",
    hero_cta_contact: "Escríbeme",
    hero_cta_work: "Ver Proyectos",
    stat_years: "Años en tecnología",
    stat_domains: "Áreas dominadas",
    stat_isi: "Postgrado en Analítica de ISI",
    stat_btech: "Ingeniería en TI, BIT Calcuta",
    section_skills: "Habilidades",
    skill_title_flutter: "Flutter & Móvil",
    skill_title_backend: "Backend & Bases de Datos",
    skill_title_ai: "IA & Aprendizaje Automático",
    skill_title_datascience: "Ciencia de Datos",
    skill_title_sap: "SAP & Empresa",
    skill_title_cloud: "Cloud & Infraestructura",
    section_experience: "Experiencia",
    exp_date_1: "Dic 2025 — Presente",
    exp_role_1: "Desarrollador Flutter",
    exp_desc_1: "Desarrollo de aplicaciones móviles y de escritorio multiplataforma con Flutter, diseñando experiencias de usuario inteligentes e integrando servicios de backend modernos. Enfocado en la entrega de aplicaciones listas para producción con arquitectura limpia y UX excepcional.",
    exp_date_2: "Jul 2021 — Nov 2025 · 4 años 5 meses",
    exp_company_2: "Freelance",
    exp_role_2: "Consultor de TI & Experto en la Materia",
    exp_desc_2: "Consultoría especializada en TI para clientes corporativos y startups. Entrega de soluciones integrales que abarcan desarrollo full-stack, integración de IA/ML, asesoramiento en ERP y arquitectura cloud. Adquisición de experiencia profunda en Flutter y ciencia de datos durante este periodo.",
    exp_date_3: "Ene 2018 — Mar 2021 · 3 años 3 meses",
    exp_company_3: "Freelance",
    exp_role_3: "Consultor SAP",
    exp_desc_3: "Consultoría SAP independiente enfocada en la implementación, personalización y optimización del ecosistema SAP. Especialidad en desarrollo ABAP, SAP Mobile y módulos funcionales (MM, EHS) para clientes corporativos de diversas industrias.",
    exp_date_4: "Ene 2015 — Nov 2017 · 2 años 11 meses",
    exp_role_4: "Consultor Tecno-Funcional SAP",
    exp_desc_4: "Servicios de consultoría tecno-funcional SAP en Accenture, uniendo el desarrollo técnico ABAP con la experiencia en módulos funcionales. Participación en implementaciones corporativas a gran escala, fortaleciendo el pensamiento sistémico, la gestión de interesados y la entrega de estándar empresarial.",
    section_education: "Educación",
    edu_badge_1: "Postgrado",
    edu_degree_1: "Métodos Estadísticos & Analítica",
    edu_institution_1: "Instituto de Estadística de la India (ISI), Calcuta",
    edu_period_1: "Julio 2024 — Julio 2025",
    edu_badge_2: "Pregrado",
    edu_degree_2: "Grado en Tecnología — Tecnología de la Información",
    edu_institution_2: "Instituto de Tecnología de Bengala (BIT), Calcuta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Construyamos algo <em>extraordinario.</em>",
    contact_sub: "Disponible para roles de desarrollador Flutter y Android, proyectos de productos basados en IA y consultorías técnicas. Si tienes un problema interesante, hablemos.",
    contact_linkedin: "↗ Perfil de LinkedIn",
    footer_location: "Calcuta, India",
    footer_desc: "Desarrollador Flutter · Ingeniero de IA · Consultor Empresarial"
  },
  fr: {
    nav_home: "Accueil",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_education: "Éducation",
    nav_contact: "Contact",
    hero_badge: "Disponible pour de nouvelles opportunités",
    hero_title: "Architecte de Solutions Digitales &nbsp;·&nbsp; Région de Calcutta, Bengale-Occidental, Inde",
    hero_desc: "Artisan binaire, passionné par le développement d'expériences digitales intelligentes. Des architectures d'entreprise aux applications agiles pour startups en passant par les plateformes communautaires engagées, je conçois des solutions logicielles qui résolvent des défis concrets.",
    hero_cta_contact: "Me contacter",
    hero_cta_work: "Voir mes projets",
    stat_years: "Années d'expérience",
    stat_domains: "Domaines maîtrisés",
    stat_isi: "Postgrade en Analytique à l'ISI",
    stat_btech: "BTech en Informatique, BIT Calcutta",
    section_skills: "Compétences",
    skill_title_flutter: "Flutter & Mobile",
    skill_title_backend: "Backend & Bases de Données",
    skill_title_ai: "IA & Apprentissage Automatique",
    skill_title_datascience: "Science des Données",
    skill_title_sap: "SAP & Entreprise",
    skill_title_cloud: "Cloud & Infrastructure",
    section_experience: "Expérience",
    exp_date_1: "Déc 2025 — Présent",
    exp_role_1: "Développeur Flutter",
    exp_desc_1: "Développement d'applications mobiles et de bureau multiplateformes avec Flutter, conception d'expériences utilisateur intuitives et intégration de services backend modernes. Focalisé sur la livraison d'applications de production dotées d'une architecture propre et d'une UX d'exception.",
    exp_date_2: "Juil 2021 — Nov 2025 · 4 ans 5 mois",
    exp_company_2: "Indépendant",
    exp_role_2: "Consultant IT & Expert Métier",
    exp_desc_2: "Prestations de conseil IT spécialisé pour le compte de grandes entreprises et de startups. Conception et déploiement de solutions de bout en bout couvrant le développement full-stack, l'intégration IA/ML, l'accompagnement ERP et l'architecture cloud. Développement d'une expertise pointue en Flutter et en science des données.",
    exp_date_3: "Janv 2018 — Mars 2021 · 3 ans 3 mo.",
    exp_company_3: "Indépendant",
    exp_role_3: "Consultant SAP",
    exp_desc_3: "Conseil SAP indépendant englobant l'implémentation, la personnalisation et l'optimisation des architectures SAP. Spécialisation en développement ABAP, SAP Mobile et modules fonctionnels (MM, EHS) pour des comptes industriels majeurs.",
    exp_date_4: "Janv 2015 — Nov 2017 · 2 ans 11 mo.",
    exp_role_4: "Consultant SAP Techno-Fonctionnel",
    exp_desc_4: "Conseil techno-fonctionnel SAP chez Accenture, faisant le lien entre le développement technique ABAP et l'expertise fonctionnelle des modules SAP. Participation à des implémentations d'envergure, renforcement des compétences en vision systémique, gestion des parties prenantes et livraison de niveau entreprise.",
    section_education: "Éducation",
    edu_badge_1: "Postgrade",
    edu_degree_1: "Méthodes Statistiques & Analytique",
    edu_institution_1: "Institut indien de statistique (ISI), Calcutta",
    edu_period_1: "Juillet 2024 — Juillet 2025",
    edu_badge_2: "Licence",
    edu_degree_2: "Bachelor of Technology — Technologies de l'information",
    edu_institution_2: "Institut de technologie du Bengale (BIT), Calcutta",
    edu_period_2: "2010 — 2014",
    contact_tagline: "Bâtissons quelque chose d'<em>exceptionnel.</em>",
    contact_sub: "À l'écoute d'opportunités en tant que développeur Flutter & Android, de projets de création de produits basés sur l'IA ou de missions de conseil technique. Si vous avez un défi intéressant à relever, discutons-en.",
    contact_linkedin: "↗ Profil LinkedIn",
    footer_location: "Calcutta, Inde",
    footer_desc: "Développeur Flutter · Ingénieur IA · Consultant d'Entreprise"
  }
};

// Language Selector Logic
const langBtn = document.getElementById('langBtn');
const langSelector = document.querySelector('.lang-selector');
const langDropdown = document.getElementById('langDropdown');
const langCurrent = document.getElementById('langCurrent');
const langOpts = document.querySelectorAll('.lang-opt');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('active');
});

document.addEventListener('click', () => {
  langSelector.classList.remove('active');
});

langDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

langOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    const selectedLang = opt.getAttribute('data-lang');
    setLanguage(selectedLang);
    langSelector.classList.remove('active');
  });
});

function setLanguage(lang) {
  // Update state
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLang', lang);
  langCurrent.textContent = lang.toUpperCase();
  
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
      // Use innerHTML if key contains tags or HTML entities, otherwise textContent
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
// Apply hover animations to language switcher buttons
document.querySelectorAll('.lang-btn, .lang-opt').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform = 'scale(1.4)';
    ring.style.opacity = '0.7';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'scale(1)';
    ring.style.opacity = '0.4';
  });
});
