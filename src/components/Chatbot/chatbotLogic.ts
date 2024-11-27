const responses = {
  greetings: [
    "Hello! How can I assist you today?",
    "Hi there! What can I help you with?",
    "Welcome! How may I help you?"
  ],
  hospitals: [
    "We have partnerships with many leading hospitals in Delhi. Would you like to know more about any specific hospital?",
    "I can help you find the best hospital for your needs. What type of medical care are you looking for?"
  ],
  doctors: [
    "We have many experienced doctors across various specialties. What type of specialist would you like to consult?",
    "I can help you book an appointment with our qualified doctors. Which specialty are you interested in?"
  ],
  appointments: [
    "I can help you book an appointment. Would you like to search by doctor or by hospital?",
    "Booking an appointment is easy! Do you have a specific doctor or hospital in mind?"
  ],
  default: [
    "I'm here to help you with any healthcare-related questions. Could you please provide more details?",
    "I'd be happy to assist you. Could you please elaborate on your query?"
  ]
};

function findResponseCategory(input: string): keyof typeof responses {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.match(/hi|hello|hey|greetings/)) {
    return 'greetings';
  }
  if (lowercaseInput.match(/hospital|clinic|medical center/)) {
    return 'hospitals';
  }
  if (lowercaseInput.match(/doctor|specialist|physician/)) {
    return 'doctors';
  }
  if (lowercaseInput.match(/appointment|book|schedule|visit/)) {
    return 'appointments';
  }
  return 'default';
}

export function getResponse(input: string): string {
  const category = findResponseCategory(input);
  const categoryResponses = responses[category];
  const randomIndex = Math.floor(Math.random() * categoryResponses.length);
  return categoryResponses[randomIndex];
}