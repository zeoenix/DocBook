export interface Hospital {
  id: number;
  name: string;
  type: 'government' | 'private' | 'clinic';
  description: string;
  image: string;
  features: string[];
  specialties: string[];
  address: string;
  rating: number;
  doctorsCount: number;
  emergencyNumber: string;
  establishedYear: number;
}

export const hospitals: Hospital[] = [
  // Government Hospitals
  {
    id: 1,
    name: "AIIMS Delhi",
    type: "government",
    description: "Premier government medical institute offering comprehensive healthcare services and medical education.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=2000",
    features: ["24/7 Emergency", "Advanced Research Center", "Teaching Hospital", "Trauma Center"],
    specialties: ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics"],
    address: "Ansari Nagar East, New Delhi",
    rating: 4.8,
    doctorsCount: 750,
    emergencyNumber: "011-26588500",
    establishedYear: 1956
  },
  {
    id: 2,
    name: "Safdarjung Hospital",
    type: "government",
    description: "One of the largest government hospitals providing affordable healthcare services.",
    image: "https://gbpant.delhi.gov.in/sites/default/files/config_hS-8kZM694_ypVMEQmZGcFeo_5xAmq_m2v1d-6UXQS9Hr5PZCnUELVCbTRRfkOWDm6P6-TTeMA/Gb%20Pant/image/gb_panth_hospital.jpg",
    features: ["Emergency Services", "Blood Bank", "Diagnostic Center", "Specialized OTs"],
    specialties: ["General Medicine", "Surgery", "Gynecology", "ENT"],
    address: "Ansari Nagar West, New Delhi",
    rating: 4.5,
    doctorsCount: 500,
    emergencyNumber: "011-26707000",
    establishedYear: 1942
  },
  {
    id: 3,
    name: "LNJP Hospital",
    type: "government",
    description: "Delhi's oldest and largest hospital under Delhi Government.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    features: ["COVID Center", "Trauma Services", "Teaching Facility"],
    specialties: ["Emergency Medicine", "Critical Care", "Pediatrics"],
    address: "Jawaharlal Nehru Marg, Delhi",
    rating: 4.3,
    doctorsCount: 400,
    emergencyNumber: "011-23232400",
    establishedYear: 1936
  },

  // Private Hospitals
  {
    id: 4,
    name: "Apollo Hospitals",
    type: "private",
    description: "State-of-the-art multi-specialty hospital with world-class healthcare services.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000",
    features: ["Robotic Surgery", "International Patients", "Luxury Rooms"],
    specialties: ["Cardiology", "Neurosurgery", "Orthopedics", "Oncology"],
    address: "Sarita Vihar, Delhi",
    rating: 4.9,
    doctorsCount: 300,
    emergencyNumber: "1066",
    establishedYear: 1996
  },
  {
    id: 5,
    name: "Max Super Speciality",
    type: "private",
    description: "Leading private healthcare provider with cutting-edge medical technology.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    features: ["Advanced Labs", "Rehabilitation Center", "Wellness Programs"],
    specialties: ["Cardiac Sciences", "Oncology", "Neurosciences"],
    address: "Patparganj, Delhi",
    rating: 4.7,
    doctorsCount: 250,
    emergencyNumber: "1800-200-1066",
    establishedYear: 2005
  },
  {
    id: 6,
    name: "Fortis Healthcare",
    type: "private",
    description: "Comprehensive healthcare services focusing on patient comfort.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    features: ["Emergency Care", "Digital Hospital", "Research Center"],
    specialties: ["Organ Transplant", "Neurosurgery", "Cardiac Care"],
    address: "Vasant Kunj, Delhi",
    rating: 4.8,
    doctorsCount: 280,
    emergencyNumber: "011-47134613",
    establishedYear: 2001
  },

  // Local Clinics
  {
    id: 7,
    name: "Delhi Family Clinic",
    type: "clinic",
    description: "Family-focused healthcare clinic providing personalized medical services.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=2000",
    features: ["Family Medicine", "Preventive Care", "Home Visits"],
    specialties: ["General Medicine", "Pediatrics", "Vaccination"],
    address: "Lajpat Nagar, Delhi",
    rating: 4.6,
    doctorsCount: 8,
    emergencyNumber: "011-29834567",
    establishedYear: 2010
  },
  {
    id: 8,
    name: "Green Park Medical",
    type: "clinic",
    description: "Modern clinic offering comprehensive outpatient services.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    features: ["Lab Services", "Pharmacy", "Specialist Consultation"],
    specialties: ["Internal Medicine", "Dermatology", "Diabetology"],
    address: "Green Park, Delhi",
    rating: 4.5,
    doctorsCount: 12,
    emergencyNumber: "011-26568974",
    establishedYear: 2015
  },
  {
    id: 9,
    name: "Rohini Health Plus",
    type: "clinic",
    description: "Neighborhood clinic providing quality healthcare services.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000",
    features: ["Digital Records", "Online Consultation", "Home Care"],
    specialties: ["Family Medicine", "Physiotherapy", "Mental Health"],
    address: "Rohini, Delhi",
    rating: 4.4,
    doctorsCount: 6,
    emergencyNumber: "011-27852369",
    establishedYear: 2018
  },
  {
    id: 10,
    name: "Medanta Hospital",
    type: "private",
    description: "World-class hospital known for exceptional medical care and research.",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=2000",
    features: ["Advanced Research", "International Wing", "Organ Bank"],
    specialties: ["Cardiology", "Neurosciences", "Cancer Care", "Transplants"],
    address: "Gurugram, Delhi NCR",
    rating: 4.9,
    doctorsCount: 450,
    emergencyNumber: "011-47444444",
    establishedYear: 2009
  },
  {
    id: 11,
    name: "GB Pant Hospital",
    type: "government",
    description: "Super-specialty government hospital focusing on cardiac and neurological care.",
    image: "https://images.unsplash.com/photo-1587351021355-a52b36ac8b8b?auto=format&fit=crop&q=80&w=2000",
    features: ["Advanced Cardiac Care", "Neurology Center", "Research Institute"],
    specialties: ["Cardiology", "Neurology", "Gastroenterology"],
    address: "Delhi Gate, New Delhi",
    rating: 4.4,
    doctorsCount: 300,
    emergencyNumber: "011-23234242",
    establishedYear: 1954
  },
  {
    id: 12,
    name: "BLK Super Speciality",
    type: "private",
    description: "Leading private hospital with state-of-the-art medical facilities.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    features: ["Robot-Assisted Surgery", "Cancer Center", "Advanced ICU"],
    specialties: ["Oncology", "Orthopedics", "Transplants", "Cardiology"],
    address: "Pusa Road, New Delhi",
    rating: 4.7,
    doctorsCount: 350,
    emergencyNumber: "011-30403040",
    establishedYear: 1959
  }
];