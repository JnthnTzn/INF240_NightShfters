
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


const petDetails = [
  {
    name: 'Milo',
    animal: 'Dog',
    breed: 'Aspin (Asong Pinoy)',
    age: '6 Months',
    gender: 'Male',
    size: 'Medium',
    status: 'Rescued',
    personality: 'Playful, Friendly, Affectionate',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Kids, Other Dogs',
    rescuedFrom: 'Barangay Streets',
    image: '../Assets/AdoptionPage/askal.jpg',
    traits: ['Playful', 'Friendly', 'Affectionate'],
    quote: '"Every dog deserves a second chance at love."',
    story: 'Milo was found wandering the streets of a barangay, malnourished and scared. A kind neighbor spotted him rummaging through garbage for scraps and reached out to Furry Tales. When our rescue team arrived, Milo was hiding under a parked vehicle, trembling and too weak to stand properly. His ribs were visible, his fur was matted, and his eyes were filled with a quiet sadness that broke everyone\'s heart.\n\nAfter being brought to our shelter, Milo received immediate veterinary care — treatment for skin infections, deworming, vaccinations, and a carefully managed feeding plan. In the first few days, he was hesitant and withdrawn, unsure whether to trust the people around him.\n\nBut Milo\'s spirit was never truly broken. Within two weeks, the real Milo began to emerge. He started wagging his tail when volunteers walked in. He discovered his love for fetch and could play for hours without tiring. He learned to sleep without flinching at every sound.\n\nToday, Milo is one of the most affectionate dogs at the shelter. He loves belly rubs, cuddles on rainy afternoons, and greeting every new face with an enthusiastic tail wag. He is proof that with patience and love, even the most broken hearts can heal. Milo is ready to write the next — and best — chapter of his story. With you.'
  },
  {
    name: 'Luna',
    animal: 'Cat',
    breed: 'Puspin (Pusang Pinoy)',
    age: '4 Months',
    gender: 'Female',
    size: 'Small',
    status: 'Fostered',
    personality: 'Curious, Sweet, Gentle',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Quiet Homes, Adults',
    rescuedFrom: 'Abandoned Litter',
    image: '../Assets/AdoptionPage/puspin.jpg',
    traits: ['Curious', 'Sweet', 'Gentle'],
    quote: '"Small paws, big heart."',
    story: 'Luna was part of a litter of four kittens discovered abandoned in a soggy cardboard box left outside a wet market on a rainy Tuesday morning. She was the smallest — so tiny she fit in the palm of a hand — and the most fragile of the group. When our volunteer found her, she was barely breathing, her body cold and barely moving.\n\nThe next 72 hours were critical. Luna was placed with one of our most experienced foster caregivers, who fed her with a tiny bottle every two hours, day and night, without fail. There were moments when it felt uncertain whether she would make it. But Luna had a fierce will to live.\n\nShe opened her eyes for the first time on a quiet Sunday morning. From that moment, her personality bloomed. She became the most curious creature — batting at dust particles in sunlight, investigating every corner, and chirping softly whenever she wanted company.\n\nNow Luna is a gentle, sweet-natured young cat who purrs like a tiny engine the moment you pick her up. She loves warm laps, watching birds through windows, and slow mornings. She has known hardship from her very first breath — and she deserves nothing less than a lifetime of softness and love.'
  },
  {
    name: 'Rocky',
    animal: 'Dog',
    breed: 'German Shepherd',
    age: '1 Year',
    gender: 'Male',
    size: 'Large',
    status: 'Rescued',
    personality: 'Loyal, Smart, Protective',
    health: 'Vaccinated, Neutered',
    goodWith: 'Experienced Owners',
    rescuedFrom: 'Neglect Case',
    image: '../Assets/AdoptionPage/german.jpg',
    traits: ['Loyal', 'Smart', 'Protective'],
    quote: '"Loyalty is not just a word — it\'s a promise."',
    story: 'Rocky arrived at Furry Tales on a cold evening, surrendered by an owner who admitted they could no longer manage him. He stepped out with guarded eyes and a stiff posture — the body language of a dog who had learned that trust could be taken away without warning.\n\nIn his first weeks, Rocky kept mostly to himself. He was not aggressive, but he was distant — watching, waiting, calculating whether the kindness being offered was real. Our team gave him space, let him set the pace. A slow hand extended. A quiet voice. Treats left near his kennel without expectation.\n\nAnd then one morning, Rocky walked up to one of our volunteers and sat beside her. Just sat there, leaning slightly against her leg. It was a small moment — but everyone who saw it knew it meant everything.\n\nFrom that point, Rocky\'s transformation was steady and remarkable. He mastered commands quickly, took pride in doing things right, and discovered a love for morning runs. Rocky is loyal in the deepest sense of the word. He will give everything to the person who earns his trust.'
  },
  {
    name: 'Coco',
    animal: 'Cat',
    breed: 'Persian',
    age: '8 Months',
    gender: 'Female',
    size: 'Small',
    status: 'Fostered',
    personality: 'Calm, Independent, Loving',
    health: 'Vaccinated, Spayed',
    goodWith: 'Calm Homes, Singles',
    rescuedFrom: 'Shelter Transfer',
    image: '../Assets/AdoptionPage/persian.jpg',
    traits: ['Calm', 'Independent', 'Loving'],
    quote: '"Elegance is not just for royalty — it\'s for every cat."',
    story: 'Coco arrived through a transfer from an overcrowded city shelter that had run out of space. When the carrier door was opened, she did not rush out. She simply looked around with calm amber eyes — unhurried, unbothered, as though the world could wait.\n\nThat composure never left her. Even in the busy shelter environment, Coco moved through it all with quiet dignity. She found her favorite windowsill within the first day and claimed it without fuss.\n\nCoco is not the kind of cat who demands attention. She expresses herself in softer ways — a slow blink from across the room, a gentle press of her head against your hand, a soft purr that starts almost imperceptibly and grows the longer you stay.\n\nShe loves being brushed, sitting near people more than being held, and watching the world through glass. Coco is perfect for someone who understands that affection does not always announce itself loudly. She will enrich your life quietly, consistently, and beautifully.'
  },
  {
    name: 'Buddy',
    animal: 'Dog',
    breed: 'Golden Retriever',
    age: '7 Months',
    gender: 'Male',
    size: 'Medium',
    status: 'Rescued',
    personality: 'Friendly, Energetic, Loyal',
    health: 'Vaccinated, Dewormed',
    goodWith: 'Families, Kids, Other Pets',
    rescuedFrom: 'Street Rescue',
    image: '../Assets/AdoptionPage/golden.png',
    traits: ['Friendly', 'Energetic', 'Loyal'],
    quote: '"Happiness is a warm puppy."',
    story: 'Buddy was found tied to a post outside a convenience store on a busy street corner. Whoever left him there never came back. He waited for hours — tail still wagging, tongue lolling, eyes bright and trusting — as the day stretched into evening and the crowd thinned.\n\nWhen our rescue team arrived, Buddy greeted them as though they were long-lost friends. No fear. No hesitation. Just pure, uncomplicated joy at the presence of people.\n\nThat is Buddy\'s defining quality: an unshakeable, inexhaustible love for the world and everyone in it. Abandonment did not teach him to be cautious. Uncertainty did not dim his light.\n\nAt the shelter, Buddy quickly became everyone\'s favorite. He gets along beautifully with other dogs, plays gently with children, and has never met a stranger he did not immediately want to befriend. He loves morning walks, splashing in puddles, and falling asleep stretched across the largest available surface.\n\nBuddy just needs someone to come home to. And whoever that person is — they will be the luckiest person in the world.'
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

  document.getElementById('profileModalTitle').textContent = data.name;
  document.getElementById('profileModalStatus').textContent = data.status;
  document.getElementById('profileModalImage').src = data.image;
  document.getElementById('profileModalImage').alt = data.name;
  document.getElementById('profileModalQuotePreview').textContent = data.quote;

  document.getElementById('profileModalGenderAge').innerHTML = `
    <span>🛁 ${data.gender}</span>
    <span>🐾 ${data.age}</span>
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

overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });
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
