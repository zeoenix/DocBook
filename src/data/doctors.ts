export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  location: string;
  hospitalId: number;
  price: number;
  rating: number;
  image: string;
  availability: string[];
  qualifications: string[];
  languages: string[];
}

export const doctors: Doctor[] = [
  // AIIMS Delhi (ID: 1)
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: 15,
    location: "AIIMS Delhi",
    hospitalId: 1,
    price: 1500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MD", "DM Cardiology"],
    languages: ["English", "Hindi"]
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Neurologist",
    experience: 20,
    location: "AIIMS Delhi",
    hospitalId: 1,
    price: 2000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD", "DM Neurology"],
    languages: ["English", "Hindi", "Bengali"]
  },
  {
    id: 3,
    name: "Dr. Anjali Gupta",
    specialization: "Pediatrician",
    experience: 12,
    location: "AIIMS Delhi",
    hospitalId: 1,
    price: 1200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD Pediatrics"],
    languages: ["English", "Hindi"]
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    specialization: "Orthopedic",
    experience: 18,
    location: "AIIMS Delhi",
    hospitalId: 1,
    price: 1800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MS Orthopedics"],
    languages: ["English", "Hindi", "Punjabi"]
  },
  {
    id: 5,
    name: "Dr. Meera Reddy",
    specialization: "Oncologist",
    experience: 16,
    location: "AIIMS Delhi",
    hospitalId: 1,
    price: 2500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD", "DM Oncology"],
    languages: ["English", "Hindi", "Telugu"]
  },

  // Safdarjung Hospital (ID: 2)
  {
    id: 6,
    name: "Dr. Amit Verma",
    specialization: "General Surgeon",
    experience: 14,
    location: "Safdarjung Hospital",
    hospitalId: 2,
    price: 1000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Tue", "Wed", "Fri"],
    qualifications: ["MBBS", "MS Surgery"],
    languages: ["English", "Hindi"]
  },
  {
    id: 7,
    name: "Dr. Shalini Kapoor",
    specialization: "Gynecologist",
    experience: 10,
    location: "Safdarjung Hospital",
    hospitalId: 2,
    price: 1200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Thu", "Sat"],
    qualifications: ["MBBS", "MD Gynecology"],
    languages: ["English", "Hindi"]
  },
  {
    id: 8,
    name: "Dr. Rahul Mehta",
    specialization: "ENT Specialist",
    experience: 8,
    location: "Safdarjung Hospital",
    hospitalId: 2,
    price: 800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MS ENT"],
    languages: ["English", "Hindi", "Gujarati"]
  },

  // LNJP Hospital (ID: 3)
  {
    id: 9,
    name: "Dr. Arjun Mathur",
    specialization: "Emergency Medicine",
    experience: 12,
    location: "LNJP Hospital",
    hospitalId: 3,
    price: 1000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri", "Sun"],
    qualifications: ["MBBS", "MD Emergency Medicine"],
    languages: ["English", "Hindi"]
  },
  {
    id: 10,
    name: "Dr. Neha Singh",
    specialization: "Critical Care",
    experience: 15,
    location: "LNJP Hospital",
    hospitalId: 3,
    price: 1500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD Anesthesia", "Critical Care"],
    languages: ["English", "Hindi"]
  },

  // Apollo Hospitals (ID: 4)
  {
    id: 11,
    name: "Dr. Arun Patel",
    specialization: "Cardiologist",
    experience: 20,
    location: "Apollo Hospitals",
    hospitalId: 4,
    price: 2500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MD", "DM Cardiology"],
    languages: ["English", "Hindi", "Gujarati"]
  },
  {
    id: 12,
    name: "Dr. Kavita Desai",
    specialization: "Neurosurgeon",
    experience: 18,
    location: "Apollo Hospitals",
    hospitalId: 4,
    price: 3000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MS", "MCh Neurosurgery"],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    id: 13,
    name: "Dr. Sunil Mehta",
    specialization: "Orthopedic",
    experience: 15,
    location: "Apollo Hospitals",
    hospitalId: 4,
    price: 2000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MS Orthopedics"],
    languages: ["English", "Hindi"]
  },

  // Max Super Speciality (ID: 5)
  {
    id: 14,
    name: "Dr. Rohit Sharma",
    specialization: "Oncologist",
    experience: 16,
    location: "Max Super Speciality",
    hospitalId: 5,
    price: 2500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MD", "DM Oncology"],
    languages: ["English", "Hindi"]
  },
  {
    id: 15,
    name: "Dr. Priyanka Joshi",
    specialization: "Neurologist",
    experience: 12,
    location: "Max Super Speciality",
    hospitalId: 5,
    price: 2000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD", "DM Neurology"],
    languages: ["English", "Hindi"]
  },

  // Delhi Family Clinic (ID: 7)
  {
    id: 16,
    name: "Dr. Ravi Kumar",
    specialization: "Family Physician",
    experience: 10,
    location: "Delhi Family Clinic",
    hospitalId: 7,
    price: 800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    qualifications: ["MBBS", "MD Family Medicine"],
    languages: ["English", "Hindi"]
  },
  {
    id: 17,
    name: "Dr. Sunita Gupta",
    specialization: "Pediatrician",
    experience: 8,
    location: "Delhi Family Clinic",
    hospitalId: 7,
    price: 1000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MD Pediatrics"],
    languages: ["English", "Hindi"]
  },

  // Green Park Medical (ID: 8)
  {
    id: 18,
    name: "Dr. Deepak Verma",
    specialization: "Dermatologist",
    experience: 12,
    location: "Green Park Medical",
    hospitalId: 8,
    price: 1500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Mon", "Wed", "Fri"],
    qualifications: ["MBBS", "MD Dermatology"],
    languages: ["English", "Hindi"]
  },
  {
    id: 19,
    name: "Dr. Anita Shah",
    specialization: "Diabetologist",
    experience: 14,
    location: "Green Park Medical",
    hospitalId: 8,
    price: 1200,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tue", "Thu", "Sat"],
    qualifications: ["MBBS", "MD Internal Medicine"],
    languages: ["English", "Hindi", "Gujarati"]
  }
];