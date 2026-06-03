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

const petDetails = [
  {
    name: 'Luchi',
    animal: 'Dog',
    breed: 'Aspin (Asong Pinoy)',
    age: '4 Years',
    gender: 'Female',
    size: 'Medium',
    status: 'Rescued',
    personality: 'Playful, Friendly, Affectionate',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Kids, Other Dogs',
    rescuedFrom: 'Barangay Streets',
    image: '../Assets/HomePage/luchi.png',
    quote: '"Every dog deserves a second chance at love."',
    story: 'Luchi was found wandering the streets alone, thin and frightened. A kind neighbor noticed her hiding behind a market stall and contacted Furry Tales. When our team arrived, she was curled up against a wall, tail tucked, too afraid to move.\n\nShe was brought in and given full veterinary care — vaccinations, deworming, and treatment for mild skin irritation. The first few days, she stayed in the corner of her kennel and watched quietly.\n\nBut Luchi had a warm heart that just needed time. By the end of her first week, she was already wagging her tail at the sound of footsteps. She discovered a love for playing fetch and cuddling on cool mornings.\n\nToday, Luchi is one of the most affectionate dogs at the shelter. She greets every visitor with a wagging tail and gentle eyes. She is ready for a home that will love her as much as she will love them.'
  },
  {
    name: 'Nash',
    animal: 'Dog',
    breed: 'Aspin (Asong Pinoy)',
    age: '7 Years',
    gender: 'Male',
    size: 'Large',
    status: 'Rescued',
    personality: 'Curious, Sweet, Gentle',
    health: 'Vaccinated, Neutered',
    goodWith: 'Calm Homes, Adults',
    rescuedFrom: 'Neglect Case',
    image: '../Assets/HomePage/nash.png',
    quote: '"Gentle souls make the most loyal companions."',
    story: 'Nash came to us through a neglect report. He was found tied outside an abandoned property with no food or water nearby. Despite everything, Nash showed no aggression — only a quiet, watchful sadness.\n\nOur team provided immediate care and gave him the space he needed to feel safe. Nash is not a dog who rushes. He observes, thinks, and chooses carefully who he trusts.\n\nOver the weeks, Nash slowly opened up. He started resting near volunteers, then leaning against them. He discovered he loved gentle ear scratches and sitting beside people on quiet afternoons.\n\nNash is a deeply sweet soul who has been through a lot. He deserves a patient, calm home where he can finally feel completely safe and loved for the rest of his life.'
  },
  {
    name: 'Sun sun',
    animal: 'Cat',
    breed: 'Puspin (Pusang Pinoy)',
    age: '1 Year',
    gender: 'Male',
    size: 'Small',
    status: 'Fostered',
    personality: 'Loyal, Smart, Protective',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Quiet Homes, Adults',
    rescuedFrom: 'Abandoned Litter',
    image: '../Assets/HomePage/sun.png',
    quote: '"Small but mighty — that is Sun sun."',
    story: 'Sun sun was the only survivor of a litter found abandoned in a box near a drainage canal. He was barely a few weeks old when our volunteer discovered him, cold and alone but fiercely determined to live.\n\nHe was placed with a foster caregiver who bottle-fed him around the clock. Sun sun was a fighter from the start — loud, curious, and full of personality even as a tiny kitten.\n\nAs he grew, his character became clear. He is sharp, observant, and surprisingly loyal for a cat. He follows his favorite people from room to room and chirps to get their attention.\n\nSun sun is ready for a home where he will be the center of someone\'s world — because that is exactly what he will make you feel like you are in his.'
  },
  {
    name: 'Chaw chaw',
    animal: 'Dog',
    breed: 'Chow Chow Mix',
    age: '8 Months',
    gender: 'Female',
    size: 'Medium',
    status: 'Rescued',
    personality: 'Calm, Independent, Loving',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Families, Calm Homes',
    rescuedFrom: 'Street Rescue',
    image: '../Assets/HomePage/chow.png',
    quote: '"She is calm waters and quiet love."',
    story: 'Chaw chaw was spotted by a passerby sitting alone on a busy roadside, looking lost and confused. She was brought to Furry Tales the same evening, tired but unharmed.\n\nFrom her very first night at the shelter, Chaw chaw was remarkably composed. She settled into her space quietly, ate well, and slept peacefully. The kind of dog who adapts with grace.\n\nShe is not loud or demanding. She expresses her love in subtle ways — sitting close, resting her head on your lap, watching you with soft, trusting eyes.\n\nChaw chaw would thrive in a home that appreciates quiet companionship. She will not ask for much, but she will give you everything in return — steady, gentle, unconditional love.'
  }
];

const overlay = document.getElementById('profileModalOverlay');
const closeBtn = document.getElementById('profileModalClose');
const storyOverlay = document.getElementById('storyModalOverlay');
const storyCloseBtn = document.getElementById('storyModalClose');
const openStoryBtn = document.getElementById('openStoryBtn');

let lastFocusedEl = null;
let currentPet = null;

function openModal(index){
  const data = petDetails[index];
  if(!data) return;
  currentPet = data;

  document.getElementById('profileLeftName').textContent = data.name;
  document.getElementById('profileModalTitle').textContent = data.name;
  document.getElementById('profileModalStatus').textContent = data.status;
  document.getElementById('profileModalImage').src = data.image;
  document.getElementById('profileModalImage').alt = data.name;
  document.getElementById('profileModalQuotePreview').textContent = data.quote;

  document.getElementById('profileModalGenderAge').innerHTML = `
    <span>${data.gender}</span>
    <span>${data.age}</span>
  `;

  document.getElementById('profileModalGrid').innerHTML = `
    <div class="pgrid-item"><strong>Personality</strong><span>${data.personality}</span></div>
    <div class="pgrid-item"><strong>Rescued From</strong><span>${data.rescuedFrom}</span></div>
    <div class="pgrid-item"><strong>Health</strong><span>${data.health}</span></div>
    <div class="pgrid-item"><strong>Breed</strong><span>${data.breed}</span></div>
    <div class="pgrid-item"><strong>Good With</strong><span>${data.goodWith}</span></div>
    <div class="pgrid-item"><strong>Size</strong><span>${data.size}</span></div>
  `;

  lastFocusedEl = document.activeElement;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if(lastFocusedEl) lastFocusedEl.focus();
}

function openStory(){
  if(!currentPet) return;
  document.getElementById('storyModalTitle').textContent = currentPet.name;
  document.getElementById('storyModalQuote').textContent = currentPet.quote;
  document.getElementById('storyModalText').innerHTML = currentPet.story.split('\n\n').map(p => `<p>${p}</p>`).join('');
  storyOverlay.classList.add('open');
}

function closeStory(){
  storyOverlay.classList.remove('open');
}

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(parseInt(btn.dataset.index)));
});

closeBtn.addEventListener('click', closeModal);
storyCloseBtn.addEventListener('click', closeStory);
openStoryBtn.addEventListener('click', openStory);

document.getElementById('shareStoryBtn').addEventListener('click', () => {
  if(!currentPet) return;
  const text = `Meet ${currentPet.name}! ${currentPet.quote} ${currentPet.story.substring(0, 100)}... Adopt them at Furry Tales! 🐾`;
  if(navigator.share){
    navigator.share({ title: `${currentPet.name}'s Story`, text });
  } else {
    navigator.clipboard.writeText(text);
    alert('Story copied to clipboard!');
  }
});

document.getElementById('btnMeetInPerson').addEventListener('click', () => {
  document.getElementById('meetModalOverlay').classList.add('open');
});

document.getElementById('meetModalClose').addEventListener('click', () => {
  document.getElementById('meetModalOverlay').classList.remove('open');
});

document.getElementById('meetModalCloseBtn').addEventListener('click', () => {
  document.getElementById('meetModalOverlay').classList.remove('open');
});

document.getElementById('meetModalOverlay').addEventListener('click', (e) => {
  if(e.target === document.getElementById('meetModalOverlay')){
    document.getElementById('meetModalOverlay').classList.remove('open');
  }
});

document.querySelector('.btn-adopt-modal').addEventListener('click', () => {
  const adoptOverlay = document.getElementById('adoptModalOverlay');
  adoptOverlay.classList.add('open');
});

document.getElementById('adoptModalClose').addEventListener('click', () => {
  document.getElementById('adoptModalOverlay').classList.remove('open');
});

document.getElementById('adoptModalCloseBtn').addEventListener('click', () => {
  document.getElementById('adoptModalOverlay').classList.remove('open');
});

document.getElementById('adoptModalOverlay').addEventListener('click', (e) => {
  if(e.target === document.getElementById('adoptModalOverlay')) {
    document.getElementById('adoptModalOverlay').classList.remove('open');
  }
});
storyOverlay.addEventListener('click', (e) => { if(e.target === storyOverlay) closeStory(); });

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    if(storyOverlay.classList.contains('open')) closeStory();
    else if(overlay.classList.contains('open')) closeModal();
  }
});

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
