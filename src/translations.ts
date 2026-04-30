import { Language } from './types';

export const TRANSLATIONS: Record<string, Record<Language, string>> = {
  // Nav
  nav_projects: { en: 'Projects', ko: '프로젝트', fr: 'Projets' },
  nav_gallery: { en: 'Gallery', ko: '갤러리', fr: 'Galerie' },
  nav_skills: { en: 'Skills', ko: '기술', fr: 'Compétences' },
  nav_connect: { en: 'Connect', ko: '연락하기', fr: 'Connecter' },
  nav_hire_me: { en: 'Hire Me', ko: '채용 문의', fr: 'Contactez-moi' },
  
  // Hero
  hero_status: { en: 'Available for Projects', ko: '프로젝트 협업 가능', fr: 'Disponible pour projets' },
  hero_title_1: { en: 'ENGINEERING', ko: '엔지니어링', fr: 'INGÉNIERIE' },
  hero_title_2: { en: 'DIGITAL', ko: '디지털', fr: 'NUMÉRIQUE' },
  hero_title_3: { en: 'PHYSICAL', ko: '물리적', fr: 'PHYSIQUE' },
  hero_title_4: { en: 'SYSTEMS.', ko: '시스템.', fr: 'SYSTÈMES.' },
  hero_desc: { 
    en: "I'm Frederick Aboagye, an Electrical Engineer and Coder specializing in full-stack development and high-end hardware refurbishment. Designing circuits and shipping code.",
    ko: "저는 전기 기술자이자 코더인 프레데릭 아보아제입니다. 풀스택 개발과 고급 하드웨어 수리를 전문으로 하며, 회로 설계부터 코드 배포까지 담당하고 있습니다.",
    fr: "Je suis Frederick Aboagye, ingénieur électricien et codeur spécialisé dans le développement full-stack et la rénovation de matériel haut de gamme. Conception de circuits et déploiement de code."
  },
  hero_view_work: { en: 'View Work', ko: '포트폴리오 보기', fr: 'Voir mes travaux' },
  hero_get_touch: { en: 'Get in Touch', ko: '문의하기', fr: 'Me contacter' },
  hero_focus_title: { en: '// Focus Area', ko: '// 중점 분야', fr: '// Domaine de concentration' },
  hero_focus_desc: { en: 'Industrial IoT & Full-Stack Hardware Repair', ko: '산업용 IoT 및 풀스택 하드웨어 수리', fr: 'IoT industriel et réparation de matériel' },
  
  // Projects
  projects_badge: { en: 'Case Studies', ko: '케이스 스터디', fr: 'Études de cas' },
  projects_title: { en: 'FEATURED WORK', ko: '주요 작업물', fr: 'TRAVAUX RÉCENTS' },
  filter_all: { en: 'All', ko: '전체', fr: 'Tous' },
  filter_web: { en: 'Web', ko: '웹', fr: 'Web' },
  filter_hardware: { en: 'Hardware', ko: '하드웨어', fr: 'Matériel' },
  
  // Gallery
  gallery_badge: { en: 'Visual Documentation', ko: '시각적 문서', fr: 'Documentation visuelle' },
  gallery_title: { en: 'SCHEMATIC GALLERY', ko: '회로도 갤러리', fr: 'GALERIE DE SCHÉMAS' },
  gallery_desc: { en: 'Detailed technical blueprints from major refurbishment and design projects.', ko: '대규모 수리 및 설계 프로젝트의 상세 기술 도면입니다.', fr: 'Plans techniques détaillés de projets majeurs de rénovation et de conception.' },
  
  // Skills
  skills_badge: { en: 'Core Competencies', ko: '주요 역량', fr: 'Compétences clés' },
  skills_title: { en: 'MY TOOLKIT.', ko: '보유 기술.', fr: 'MON OUTILLAGE.' },
  skills_desc: { en: 'Bridging the gap between software and hardware requires a diverse stack. I specialize in full-stack web development and high-precision electronic repair.', ko: '소프트웨어와 하드웨어 사이의 가교 역할을 하려면 다양한 스택이 필요합니다. 저는 풀스택 웹 개발과 고정밀 전자 장치 수리를 전문으로 합니다.', fr: 'Combler le fossé entre le logiciel et le matériel nécessite une pile diversifiée. Je me spécialise dans le développement web full-stack et la réparation électronique de haute précision.' },
  skills_stats_repairs: { en: 'Repairs Completed', ko: '수리 완료 건수', fr: 'Réparations terminées' },
  skills_stats_pcbs: { en: 'Custom PCBs', ko: '맞춤형 PCB', fr: 'PCBs personnalisées' },
  skills_stats_web: { en: 'Web Projects Launched', ko: '웹 프로젝트 출시', fr: 'Projets Web lancés' },
  
  // Contact
  contact_title_1: { en: "LET'S BUILD", ko: '함께', fr: 'CONSTRUISONS' },
  contact_title_2: { en: "SOMETHING", ko: '대단한 것을', fr: 'QUELQUE CHOSE DE' },
  contact_title_3: { en: "GREAT.", ko: '만들어봐요.', fr: 'GRANDIOSE.' },
  contact_desc: { en: "Whether you need a custom web app or a high-end hardware diagnostic, I'm ready to help.", ko: '맞춤형 웹 앱 개발이나 고급 하드웨어 진단이 필요하시다면 언제든 도와드릴 준비가 되어 있습니다.', fr: "Que vous ayez besoin d'une application web personnalisée ou d'un diagnostic matériel haut de gamme, je suis prêt à vous aider." },
  contact_form_name: { en: 'Name', ko: '이름', fr: 'Nom' },
  contact_form_email: { en: 'Email', ko: '이메일', fr: 'E-mail' },
  contact_form_whatsapp: { en: 'WhatsApp Number', ko: 'WhatsApp 번호', fr: 'Numéro WhatsApp' },
  contact_form_message: { en: 'Message', ko: '메시지', fr: 'Message' },
  contact_form_submit: { en: 'Send Message', ko: '메시지 보내기', fr: 'Envoyer le message' },
  contact_footer_rights: { en: '© 2026 FREDERICK ABOAGYE PORTFOLIO. BUILT WITH PRECISION.', ko: '© 2026 프레데릭 아보아제 포트폴리오. 정밀하게 제작되었습니다.', fr: '© 2026 PORTFOLIO DE FREDERICK ABOAGYE. CONSTRUIT AVEC PRÉCISION.' },
  
  // Modal
  modal_resources: { en: 'Resources', ko: '리소스', fr: 'Ressources' },
  modal_circuit: { en: 'Circuit Overview', ko: '회로 개요', fr: 'Aperçu du circuit' },
  modal_snippet: { en: 'Logic Snippet', ko: '로직 스니펫', fr: 'Extrait de logique' }
};
