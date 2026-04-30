
import { Project, Skill } from './types';

export const SCHEMATICS = [
  {
    id: 's1',
    title: 'High-Voltage Inverter Stage',
    image: 'https://picsum.photos/seed/sch1/1000/800',
    description: 'A robust power MOSFET bridge for DC-AC conversion.'
  },
  {
    id: 's2',
    title: 'Precision Instrumentation Amp',
    image: 'https://picsum.photos/seed/sch2/1000/800',
    description: 'Low-noise signal conditioning for medical sensors.'
  },
  {
    id: 's3',
    title: 'Microcontroller Core Layout',
    image: 'https://picsum.photos/seed/sch3/1000/800',
    description: '32-bit ARM logic distribution and decoupling.'
  },
  {
    id: 's4',
    title: 'Analog RF Filter Chain',
    image: 'https://picsum.photos/seed/sch4/1000/800',
    description: 'Multi-stage bandpass filtering for UHF communication.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Precision Power Supply Repair',
    category: 'hardware',
    description: 'Full restoration of a high-precision laboratory power supply with intermittent voltage regulation issues.',
    longDescription: `# Refurbishment Process
The unit arrived with an unstable output voltage that would drift under load. 

## Diagnostics
- Initial inspection revealed bulging electrolytic capacitors in the primary smoothing stage.
- Oscilloscope testing confirmed 120Hz ripple on the DC rail.

## Repair Steps
1. Replaced all filter capacitors with high-temp rated Nichicon alternatives.
2. Reflowed cracked solder joints on the main transformer pins.
3. Recalibrated the V-Ref circuit using the onboard trim-pots.

## Outcome
Voltage stability restored to <0.01% drift. Unit passed a 48-hour burn-in test.`,
    image: 'https://picsum.photos/seed/powersupply/800/600',
    schematicImage: 'https://picsum.photos/seed/schematic1/800/600',
    tags: ['Repair', 'Calibration', 'Soldering', 'Analog Circuitry'],
    links: {
      schematic: '#'
    }
  },
  {
    id: '2',
    title: 'Smart Ag-Tech Dashboard',
    category: 'web',
    description: 'A full-stack React dashboard for monitoring IoT soil sensors in real-time.',
    longDescription: `# Web Platform Architecture
Designed to handle high-frequency data from field sensors using WebSockets for real-time updates.

## Technical Stack
- **Frontend**: React, Tailwind CSS, Recharts for data visualization.
- **Backend**: Node.js, Express, PostgreSQL.
- **IoT Integration**: MQTT protocol for sensor communication.

## Featured Code
Below is the hook used for managing the live sensor stream.`,
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
    title: 'Custom MIDI Controller',
    category: 'electrical',
    description: 'Diy USB-MIDI controller based on an Arduino Pro Micro with custom etched PCB.',
    longDescription: `# Hardware Design
Integrating 16 velocity-sensitive pads and 4 rotary encoders into a compact footprint.

## Circuit Design
The design uses a multiplexing matrix to handle 16 inputs with minimal I/O pins.

## Schematic Logic
The schematic highlights the debouncing circuit for the physical buttons to ensure no double-triggering.`,
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
  { name: 'Docker', category: 'Tools', proficiency: 75 }
];
