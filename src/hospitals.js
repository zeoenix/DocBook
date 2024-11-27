export function renderHospitals(hospitals) {
  const hospitalsGrid = document.getElementById('hospitals-grid');
  
  hospitals.forEach(hospital => {
    const card = document.createElement('div');
    card.className = 'hospital-card';
    
    card.innerHTML = `
      <div class="relative">
        <img 
          src="${hospital.image}" 
          alt="${hospital.name}" 
          class="hospital-image"
        />
        <span class="hospital-type ${hospital.type}">
          ${hospital.type.charAt(0).toUpperCase() + hospital.type.slice(1)}
        </span>
      </div>
      <div class="hospital-content">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-semibold">${hospital.name}</h3>
          <div class="flex items-center">
            ⭐ ${hospital.rating}
          </div>
        </div>
        <p class="mt-2 text-gray-300">${hospital.description}</p>
        <div class="mt-4">
          📍 ${hospital.address}
        </div>
        <div class="mt-2">
          👨‍⚕️ ${hospital.doctorsCount} Doctors
        </div>
        <div class="mt-2">
          📞 ${hospital.emergencyNumber}
        </div>
        <div class="mt-2">
          📅 Est. ${hospital.establishedYear}
        </div>
        <div class="mt-4">
          <h4 class="font-semibold mb-2">Specialties</h4>
          <div class="flex flex-wrap gap-2">
            ${hospital.specialties.map(specialty => `
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">
                ${specialty}
              </span>
            `).join('')}
          </div>
        </div>
        <a
          href="/book.html"
          class="mt-6 block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center"
        >
          🏥 View Doctors
        </a>
      </div>
    `;
    
    hospitalsGrid.appendChild(card);
  });
}