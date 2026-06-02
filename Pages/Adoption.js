// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// Floating background paws & hearts
const bgFloats = document.getElementById('bgFloats');
const floatSymbols = ['🐾','🐾','🐾','❤️','🐾','💛','🐾','❤️'];

function createFloat(){
  const span = document.createElement('span');
  span.textContent = floatSymbols[Math.floor(Math.random() * floatSymbols.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = (22 + Math.random() * 24) + 'px';
  const duration = 6 + Math.random() * 8;
  span.style.animationDuration = duration + 's';
  span.style.animationDelay = '0s';
  bgFloats.appendChild(span);
  setTimeout(() => span.remove(), (duration + 1) * 1000);
}

setInterval(createFloat, 600);

// Favorite Heart Toggle
const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if(heart.innerHTML === '♡'){
      heart.innerHTML = '♥';
      heart.style.color = '#d66';
    }else{
      heart.innerHTML = '♡';
      heart.style.color = '#8d6a4b';
    }
  });
});

// Pet Data
const petDetails = [
  {
    name: 'Milo',
    animal: 'Dog',
    breed: 'Aspin (Asong Pinoy)',
    age: '6 Months',
    gender: 'Male',
    size: 'Medium',
    meta: 'Male • 6 Months • Medium',
    image: '../Assets/AdoptionPage/askal.jpg',
    traits: ['Playful', 'Friendly', 'Affectionate'],
    description: 'Milo is a sweet and energetic Aspin who loves to play fetch and cuddle. He gets along well with children and other pets.'
  },
  {
    name: 'Luna',
    animal: 'Cat',
    breed: 'Puspin (Pusang Pinoy)',
    age: '4 Months',
    gender: 'Female',
    size: 'Small',
    meta: 'Female • 4 Months • Small',
    image: '../Assets/AdoptionPage/puspin.jpg',
    traits: ['Curious', 'Sweet', 'Gentle'],
    description: 'Luna is a curious little kitten who loves exploring and playing with toys. She\'s gentle and perfect for families.'
  },
  {
    name: 'Rocky',
    animal: 'Dog',
    breed: 'German Shepherd',
    age: '1 Year',
    gender: 'Male',
    size: 'Large',
    meta: 'Male • 1 Year • Large',
    image: '../Assets/AdoptionPage/german.jpg',
    traits: ['Loyal', 'Smart', 'Protective'],
    description: 'Rocky is an intelligent and loyal German Shepherd. He\'s well-trained and makes an excellent guard dog and companion.'
  },
  {
    name: 'Coco',
    animal: 'Cat',
    breed: 'Persian',
    age: '8 Months',
    gender: 'Female',
    size: 'Small',
    meta: 'Female • 8 Months • Small',
    image: '../Assets/AdoptionPage/persian.jpg',
    traits: ['Calm', 'Independent', 'Loving'],
    description: 'Coco is a calm and elegant Persian cat who enjoys quiet environments. She loves being pampered and groomed.'
  },
  {
    name: 'Buddy',
    animal: 'Dog',
    breed: 'Golden Retriever',
    age: '7 Months',
    gender: 'Male',
    size: 'Medium',
    meta: 'Male • 7 Months • Medium',
    image: '../Assets/AdoptionPage/golden.png',
    traits: ['Friendly', 'Energetic', 'Loyal'],
    description: 'Buddy is a friendly Golden Retriever who loves everyone he meets. He\'s energetic and perfect for active families.'
  }
];

// Profile Modal
const overlay = document.getElementById('profileModalOverlay');
const closeBtn = document.getElementById('profileModalClose');
const modalTitle = document.getElementById('profileModalTitle');
const modalMeta = document.getElementById('profileModalMeta');
const modalImage = document.getElementById('profileModalImage');
const modalInfo = document.getElementById('profileModalInfo');
const modalDescription = document.getElementById('profileModalDescription');
const modalTraits = document.getElementById('profileModalTraits');

let lastFocusedEl = null;

function openModal(index){
  const data = petDetails[index];
  if(!data) return;

  modalTitle.textContent = data.name;
  modalMeta.textContent = data.meta;
  modalImage.src = data.image;
  modalImage.alt = data.name;

  modalInfo.innerHTML = `
    <div><strong>Animal</strong><span>${data.animal}</span></div>
    <div><strong>Breed</strong><span>${data.breed}</span></div>
    <div><strong>Age</strong><span>${data.age}</span></div>
    <div><strong>Gender</strong><span>${data.gender}</span></div>
  `;

  modalDescription.textContent = data.description;

  modalTraits.innerHTML = '';
  data.traits.forEach(t => {
    const pill = document.createElement('div');
    pill.className = 'trait-pill';
    pill.textContent = t;
    modalTraits.appendChild(pill);
  });

  lastFocusedEl = document.activeElement;
  overlay.classList.add('open');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if(lastFocusedEl && typeof lastFocusedEl.focus === 'function'){
    lastFocusedEl.focus();
  }
}

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(parseInt(btn.dataset.index)));
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if(e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if(!overlay.classList.contains('open')) return;
  if(e.key === 'Escape') closeModal();
});

// Filters
let currentFilters = { animal: '', breed: '', age: '' };

function filterPets(){
  const cards = document.querySelectorAll('.pet-card');
  const search = document.getElementById('searchInput').value.toLowerCase().trim();

  cards.forEach((card, index) => {
    const pet = petDetails[index];
    let show = true;

    if(currentFilters.animal && pet.animal.toLowerCase() !== currentFilters.animal) show = false;
    if(currentFilters.breed && pet.breed !== currentFilters.breed) show = false;
    if(currentFilters.age){
      if(currentFilters.age === '0+ Months'){
        if(!pet.age.includes('Month')) show = false;
      } else {
        if(pet.age !== currentFilters.age) show = false;
      }
    }
    if(search && !pet.name.toLowerCase().includes(search) && !pet.breed.toLowerCase().includes(search)) show = false;

    card.style.display = show ? 'block' : 'none';
  });
}

function searchPets(){
  filterPets();
}

// Breed lists
const dogBreeds = [
  'Aspin (Asong Pinoy)','Bantam','Ilocos Dog','Cordillera Dog',
  'Labrador Retriever','Golden Retriever','Shih Tzu','Poodle',
  'Beagle','Dachshund','Pomeranian','Chihuahua','Bulldog',
  'German Shepherd','Siberian Husky','Maltese','Chow Chow'
];

const catBreeds = [
  'Puspin (Pusang Pinoy)','Philippine Forest Cat',
  'Persian','Siamese','Maine Coon','Ragdoll','Bengal',
  'British Shorthair','Scottish Fold','Abyssinian',
  'Birman','Sphynx','Russian Blue','American Shorthair'
];

// Custom Dropdowns
const animalTrigger = document.getElementById('animalTrigger');
const animalDropdown = document.getElementById('animalDropdown');
const breedTrigger = document.getElementById('breedTrigger');
const breedDropdown = document.getElementById('breedDropdown');
const ageTrigger = document.getElementById('ageTrigger');
const ageDropdown = document.getElementById('ageDropdown');
const sortTrigger = document.getElementById('sortTrigger');
const sortDropdown = document.getElementById('sortDropdown');

animalTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  animalDropdown.classList.toggle('open');
  breedDropdown.classList.remove('open');
  ageDropdown.classList.remove('open');
  sortDropdown.classList.remove('open');
});

animalDropdown.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', (e) => {
    e.stopPropagation();
    animalTrigger.textContent = div.textContent + ' ▾';
    animalDropdown.classList.remove('open');
    currentFilters.animal = div.dataset.value;
    currentFilters.breed = '';
    updateBreeds(div.dataset.value);
    filterPets();
  });
});

breedTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  breedDropdown.classList.toggle('open');
  animalDropdown.classList.remove('open');
  ageDropdown.classList.remove('open');
  sortDropdown.classList.remove('open');
});

ageTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  ageDropdown.classList.toggle('open');
  animalDropdown.classList.remove('open');
  breedDropdown.classList.remove('open');
  sortDropdown.classList.remove('open');
});

ageDropdown.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', (e) => {
    e.stopPropagation();
    ageTrigger.textContent = div.textContent + ' ▾';
    ageDropdown.classList.remove('open');
    currentFilters.age = div.dataset.value || '';
    filterPets();
  });
});

sortTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  sortDropdown.classList.toggle('open');
  animalDropdown.classList.remove('open');
  breedDropdown.classList.remove('open');
  ageDropdown.classList.remove('open');
});

sortDropdown.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', (e) => {
    e.stopPropagation();
    sortTrigger.textContent = div.textContent + ' ▾';
    sortDropdown.classList.remove('open');
    sortPets(div.dataset.value);
  });
});

document.addEventListener('click', () => {
  animalDropdown.classList.remove('open');
  breedDropdown.classList.remove('open');
  ageDropdown.classList.remove('open');
  sortDropdown.classList.remove('open');
});

function updateBreeds(animal){
  const list = animal === 'dog' ? dogBreeds : animal === 'cat' ? catBreeds : [];
  breedDropdown.innerHTML = '<div data-value="">All Breeds</div>';

  list.forEach(b => {
    const div = document.createElement('div');
    div.textContent = b;
    div.dataset.value = b;
    div.addEventListener('click', (e) => {
      e.stopPropagation();
      breedTrigger.textContent = b + ' ▾';
      breedDropdown.classList.remove('open');
      currentFilters.breed = b;
      filterPets();
    });
    breedDropdown.appendChild(div);
  });

  breedDropdown.querySelector('[data-value=""]').addEventListener('click', (e) => {
    e.stopPropagation();
    breedTrigger.textContent = 'All Breeds ▾';
    breedDropdown.classList.remove('open');
    currentFilters.breed = '';
    filterPets();
  });

  breedTrigger.textContent = 'All Breeds ▾';
}

function sortPets(order){
  const grid = document.querySelector('.pets-grid');
  const cards = [...grid.querySelectorAll('.pet-card')];

  cards.sort((a, b) => {
    const ai = [...grid.children].indexOf(a);
    const bi = [...grid.children].indexOf(b);
    const pa = petDetails[ai];
    const pb = petDetails[bi];

    if(order === 'a-z') return pa.name.localeCompare(pb.name);
    if(order === 'z-a') return pb.name.localeCompare(pa.name);
    if(order === 'oldest') return ai - bi;
    return bi - ai;
  });

  cards.forEach(card => grid.appendChild(card));
  filterPets();
}
