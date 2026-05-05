
import { Project, Skill } from './types';

export const SCHEMATICS = [
  {
    id: 's1',
    title: {
      en: 'High-Voltage Inverter Stage',
      ko: '고전압 인버터 단계',
      fr: 'Étage d\'onduleur haute tension'
    },
    image: 'https://picsum.photos/seed/sch1/1000/800',
    description: {
      en: 'A robust power MOSFET bridge for DC-AC conversion.',
      ko: 'DC-AC 변환을 위한 견고한 전력 MOSFET 브리지입니다.',
      fr: 'Un pont MOSFET de puissance robuste pour la conversion CC-CA.'
    }
  },
  {
    id: 's2',
    title: {
      en: 'Precision Instrumentation Amp',
      ko: '정밀 계측 앰프',
      fr: 'Ampli d\'instrumentation de précision'
    },
    image: 'https://picsum.photos/seed/sch2/1000/800',
    description: {
      en: 'Low-noise signal conditioning for medical sensors.',
      ko: '의료용 센서를 위한 저잡음 신호 컨디셔닝 장치입니다.',
      fr: 'Conditionnement de signal à faible bruit pour capteurs médicaux.'
    }
  },
  {
    id: 's3',
    title: {
      en: 'Microcontroller Core Layout',
      ko: '마이크로컨트롤러 코어 레이아웃',
      fr: 'Disposition du cœur du microcontrôleur'
    },
    image: 'https://picsum.photos/seed/sch3/1000/800',
    description: {
      en: '32-bit ARM logic distribution and decoupling.',
      ko: '32비트 ARM 로직 분배 및 디커플링 설계입니다.',
      fr: 'Distribution et découplage logique ARM 32 bits.'
    }
  },
  {
    id: 's4',
    title: {
      en: 'Analog RF Filter Chain',
      ko: '아날로그 RF 필터 체인',
      fr: 'Chaîne de filtres RF analogiques'
    },
    image: 'https://picsum.photos/seed/sch4/1000/800',
    description: {
      en: 'Multi-stage bandpass filtering for UHF communication.',
      ko: 'UHF 통신을 위한 다단계 대역 통과 필터링입니다.',
      fr: 'Filtrage passe-bande à plusieurs étages pour la communication UHF.'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: {
      en: 'Precision Power Supply Repair',
      ko: '정밀 전원 공급 장치 수리',
      fr: 'Réparation d\'alimentation de précision'
    },
    category: 'hardware',
    description: {
      en: 'Full restoration of a high-precision laboratory power supply with intermittent voltage regulation issues.',
      ko: '전압 조절 문제가 반복적으로 발생하던 고정밀 실험용 전압 공급 장치를 완벽하게 복원했습니다.',
      fr: 'Restauration complète d\'une alimentation de laboratoire de haute précision présentant des problèmes intermittents de régulation de tension.'
    },
    longDescription: {
      en: `# Refurbishment Process\nThe unit arrived with an unstable output voltage that would drift under load. \n\n## Diagnostics\n- Initial inspection revealed bulging electrolytic capacitors in the primary smoothing stage.\n- Oscilloscope testing confirmed 120Hz ripple on the DC rail.\n\n## Repair Steps\n1. Replaced all filter capacitors with high-temp rated Nichicon alternatives.\n2. Reflowed cracked solder joints on the main transformer pins.\n3. Recalibrated the V-Ref circuit using the onboard trim-pots.\n\n## Outcome\nVoltage stability restored to <0.01% drift. Unit passed a 48-hour burn-in test.`,
      ko: `# 리퍼비시 과정\n이 장치는 부하 상태에서 출력 전압이 불안정하게 변동하는 상태로 입고되었습니다.\n\n## 진단\n- 초기 점검 결과 1차 평활 단계의 전해 정전 용량 소자가 부푼 것을 확인했습니다.\n- 오실로스코프 측정 결과 DC 레일에 120Hz 리플 노이즈가 확인되었습니다.\n\n## 수리 단계\n1. 모든 필터 캡을 내열성 Nichicon 제품으로 교체했습니다.\n2. 메인 변압기 핀의 균열된 납땜 부위를 재납땜했습니다.\n3. 온보드 트리머를 사용하여 V-Ref 회로를 재교정했습니다.\n\n## 결과\n전압 안정성이 0.01% 미만 편차로 복구되었습니다. 48시간 번인 테스트를 통과했습니다.`,
      fr: `# Processus de rénovation\nL'unité est arrivée avec une tension de sortie instable qui dérivait sous charge.\n\n## Diagnostic\n- L'inspection initiale a révélé des condensateurs électrolytiques gonflés dans l'étage de lissage primaire.\n- Les tests à l'oscilloscope ont confirmé une ondulation de 120 Hz sur le rail CC.\n\n## Étapes de réparation\n1. Remplacement de tous les condensateurs de filtrage par des alternatives Nichicon classées haute température.\n2. Refusion des joints de soudure fissurés sur les broches du transformateur principal.\n3. Recalibrage du circuit V-Ref à l'aide des potentiomètres d'appoint intégrés.\n\n## Résultat\nStabilité de la tension restaurée à une dérive <0,01 %. L'unité a passé un test de rodage de 48 heures.`
    },
    image: 'https://picsum.photos/seed/powersupply/800/600',
    schematicImage: 'https://picsum.photos/seed/schematic1/800/600',
    tags: ['Repair', 'Calibration', 'Soldering', 'Analog Circuitry'],
    links: {
      schematic: '#'
    }
  },
  {
    id: '2',
    title: {
      en: 'Smart Ag-Tech Dashboard',
      ko: '스마트 농업 기술 대시보드',
      fr: 'Tableau de bord Smart Ag-Tech'
    },
    category: 'web',
    description: {
      en: 'A full-stack React dashboard for monitoring IoT soil sensors in real-time.',
      ko: 'IoT 토양 센서를 실시간으로 모니터링하기 위한 풀스택 React 대시보드입니다.',
      fr: 'Un tableau de bord React full-stack pour surveiller les capteurs IoT au sol en temps réel.'
    },
    longDescription: {
      en: `# Web Platform Architecture\nDesigned to handle high-frequency data from field sensors using WebSockets for real-time updates.\n\n## Technical Stack\n- **Frontend**: React, Tailwind CSS, Recharts for data visualization.\n- **Backend**: Node.js, Express, PostgreSQL.\n- **IoT Integration**: MQTT protocol for sensor communication.\n\n## Featured Code\nBelow is the hook used for managing the live sensor stream.`,
      ko: `# 웹 플랫폼 아키텍처\nWebSocket을 사용하여 실시간 업데이트를 제공하며 현장 센서의 고주파 데이터를 처리하도록 설계되었습니다.\n\n## 기술 스택\n- **프론트엔드**: React, Tailwind CSS, Recharts (데이터 시각화).\n- **백엔드**: Node.js, Express, PostgreSQL.\n- **IoT 통합**: 센서 통신을 위한 MQTT 프로토콜.\n\n## 주요 코드\n아래는 실시간 센서 스트림을 관리하는 후크입니다.`,
      fr: `# Architecture de la plateforme Web\nConçue pour gérer les données haute fréquence des capteurs sur le terrain à l'aide de WebSockets pour des mises à jour en temps réel.\n\n## Pile technique\n- **Frontend** : React, Tailwind CSS, Recharts pour la visualisation des données.\n- **Backend** : Node.js, Express, PostgreSQL.\n- **Intégration IoT** : Protocole MQTT pour la communication des capteurs.\n\n## Code vedette\nVous trouverez ci-dessous le hook utilisé pour gérer le flux de capteurs en direct.`
    },
    image: 'https://picsum.photos/seed/agtech/800/600',
    tags: ['React', 'TypeScript', 'Node.js', 'MQTT', 'IoT'],
    codeSnippet: `
const useSensorStream = (sensorId: string) => {
  const [data, setData] = useState<SensorData[]>([]);

  useEffect(() => {
    const socket = new WebSocket(\`ws://api.example.com/stream/\${sensorId}\`);
    
    socket.onmessage = (event) => {
      const reading = JSON.parse(event.data);
      setData(prev => [...prev.slice(-49), reading]);
    };

    return () => socket.close();
  }, [sensorId]);

  return data;
};`,
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    id: '3',
    title: {
      en: 'Custom MIDI Controller',
      ko: '커스텀 MIDI 컨트롤러',
      fr: 'Contrôleur MIDI personnalisé'
    },
    category: 'electrical',
    description: {
      en: 'Diy USB-MIDI controller based on an Arduino Pro Micro with custom etched PCB.',
      ko: 'Arduino Pro Micro와 커스텀 PCB를 기반으로 제작된 자작 USB-MIDI 컨트롤러입니다.',
      fr: 'Contrôleur USB-MIDI DIY basé sur un Arduino Pro Micro avec PCB personnalisé.'
    },
    longDescription: {
      en: `# Hardware Design\nIntegrating 16 velocity-sensitive pads and 4 rotary encoders into a compact footprint.\n\n## Circuit Design\nThe design uses a multiplexing matrix to handle 16 inputs with minimal I/O pins.\n\n## Schematic Logic\nThe schematic highlights the debouncing circuit for the physical buttons to ensure no double-triggering.`,
      ko: `# 하드웨어 디자인\n16개의 벨로시티 민감 패드와 4개의 로터리 엔코더를 소형 폼팩터에 통합했습니다.\n\n## 회로 설계\n최소한의 I/O 핀으로 16개의 입력을 처리하기 위해 멀티플렉싱 매트릭스를 사용합니다.\n\n## 회로 논리\n회로도에는 중복 트리거링을 방지하기 위한 물리적 버튼용 디바운싱 회로가 강조되어 있습니다.`,
      fr: `# Conception matérielle\nIntégration de 16 pads sensibles à la vélocité et de 4 encodeurs rotatifs dans un format compact.\n\n## Conception de circuit\nLa conception utilise une matrice de multiplexage pour gérer 16 entrées avec un minimum de broches d'E/S.\n\n## Logique de schéma\nLe schéma met en évidence le circuit d'anti-rebond pour les boutons physiques afin d'éviter tout déclenchement accidentel.`
    },
    image: 'https://picsum.photos/seed/midi/800/600',
    schematicImage: 'https://picsum.photos/seed/schematic2/800/600',
    tags: ['Arduino', 'PCB Design', 'MIDI', 'C++'],
    codeSnippet: `
#include <MIDI.h>

void setup() {
  MIDI.begin();
}

void loop() {
  // Read button matrix and send MIDI Note On
  if (digitalRead(PAD_1) == LOW) {
    MIDI.sendNoteOn(60, 127, 1);
    delay(50); // Simple debounce
  }
}`,
    links: {
      github: '#',
      schematic: '#'
    }
  },
  {
    id: '4',
    title: {
      en: 'Enterprise Network & Security Audit',
      ko: '기업 네트워크 및 보안 감사',
      fr: 'Audit de réseau et de sécurité d\'entreprise'
    },
    category: 'web',
    description: {
      en: 'Design and implementation of a secure enterprise network infrastructure with automated security monitoring and data annotation for anomaly detection.',
      ko: '보안 변칙 탐지를 위한 자동 보안 모니터링 및 데이터 어노테이션이 포함된 보안 기업 네트워크 인프라 설계 및 구현입니다.',
      fr: 'Conception et mise en œuvre d\'une infrastructure réseau d\'entreprise sécurisée avec surveillance automatique de la sécurité et annotation des données pour la détection des anomalies.'
    },
    longDescription: {
      en: `# Network & Security Framework\nBuilding a zero-trust architecture for a medium-scale enterprise.\n\n## Implementation Details\n- **Networking**: Configured VPCs, Subnets, and Site-to-Site VPNs.\n- **Security**: Implemented WAF, DDoS protection, and periodic vulnerability scanning.\n- **Data Analysis**: Used custom data annotation tools to train models for network traffic anomaly detection.\n\n## Key Outcomes\n- Reduced unauthorized access attempts by 85%.\n- Real-time alerting for suspicious traffic patterns.`,
      ko: `# 네트워크 및 보안 프레임워크\n중소기업을 위한 제로 트러스트 아키텍처를 구축했습니다.\n\n## 구현 상세\n- **네트워크**: VPC, 서브넷 및 Site-to-Site VPN을 구성했습니다.\n- **보안**: WAF, DDoS 방어 및 정기적 취약점 점검을 구현했습니다.\n- **데이터 분석**: 네트워크 트래픽 이상 탐지를 위한 모델 학습용 커스텀 데이터 어노테이션 툴을 사용했습니다.\n\n## 주요 결과\n- 미승인 접근 시도를 85% 감소시켰습니다.\n- 의심스러운 트래픽 패턴에 대한 실시간 알림 시스템을 구축했습니다.`,
      fr: `# Cadre de réseau et de sécurité\nConstruction d'une architecture zero-trust pour une entreprise de taille moyenne.\n\n## Détails de mise en œuvre\n- **Réseautage** : Configuration des VPC, sous-réseaux et VPN de site à site.\n- **Sécurité** : Mise en œuvre du WAF, de la protection DDoS et d'analyses de vulnérabilité périodiques.\n- **Analyse des données** : Utilisation d'outils d'annotation de données personnalisés pour entraîner des modèles de détection d'anomalies du trafic réseau.\n\n## Résultats clés\n- Réduction des tentatives d'accès non autorisées de 85 %.\n- Alertes en temps réel pour les schémas de trafic suspects.`
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    tags: ['Networking', 'Security', 'Data Science', 'Cloud'],
    links: {
      github: '#'
    }
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript / React', category: 'Coding', proficiency: 95 },
  { name: 'Node.js / Express', category: 'Coding', proficiency: 90 },
  { name: 'Python (Embedded)', category: 'Coding', proficiency: 85 },
  { name: 'PCB Design (Altium/KiCad)', category: 'Electrical', proficiency: 90 },
  { name: 'Surface Mount Soldering', category: 'Electrical', proficiency: 95 },
  { name: 'Oscilloscope Diagnostics', category: 'Electrical', proficiency: 88 },
  { name: 'Git / CI-CD', category: 'Tools', proficiency: 80 },
  { name: 'Docker', category: 'Tools', proficiency: 75 },
  { name: 'Computer Networking', category: 'Tools', proficiency: 88 },
  { name: 'Network Security', category: 'Tools', proficiency: 85 },
  { name: 'Data Annotator', category: 'Tools', proficiency: 90 }
];
