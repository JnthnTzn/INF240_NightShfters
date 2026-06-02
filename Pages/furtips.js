
            const tipGuides = {
    nutrition: {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/nutrition.png",
        title: "Nutrition & Feeding",
        intro: "Healthy meals and simple feeding habits help rescued pets build strength and feel safe.",
        reminders: [
            "Give clean, fresh water every day.",
            "Choose food that matches your pet’s age, size, and needs.",
            "Introduce new food slowly over several days.",
            "Avoid chocolate, grapes, onions, and other unsafe human foods.",
            "Use treats in small amounts and do not replace full meals with snacks."
        ],
        why: "Good nutrition supports energy, healing, growth, and a smoother adjustment into a new home."
    },

    health: {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/health.png",
        title: "Health & Vet Care",
        intro: "Regular care helps prevent small health problems from becoming serious.",
        reminders: [
            "Schedule a vet check after adoption or rescue.",
            "Keep vaccinations and deworming updated.",
            "Watch for changes in appetite, energy, breathing, or bathroom habits.",
            "Use tick, flea, and parasite prevention when recommended.",
            "Ask a vet before giving any medicine."
        ],
        why: "Pets cannot always show pain clearly, so early care helps keep them safe, comfortable, and protected."
    },

    grooming: {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/grooming.png",
        title: "Grooming & Hygiene",
        intro: "Gentle grooming keeps pets clean, comfortable, and easier to check for health concerns.",
        reminders: [
            "Brush your pet’s coat based on their fur type.",
            "Bathe only when needed using pet-safe shampoo.",
            "Trim nails carefully or ask a groomer or vet for help.",
            "Check ears, paws, and skin for dirt, redness, or wounds.",
            "Make grooming calm with treats and short sessions."
        ],
        why: "Grooming is not only for appearance. It also helps prevent discomfort, skin issues, and hidden injuries."
    },

    training: {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/training.png",
        title: "Training & Behavior",
        intro: "Positive training helps pets understand your home and feel more confident.",
        reminders: [
            "Use rewards, praise, and patience instead of punishment.",
            "Teach simple commands like sit, stay, and come.",
            "Keep training sessions short and calm.",
            "Give your pet a routine for meals, walks, play, and rest.",
            "Understand that fear or stress may appear as unwanted behavior."
        ],
        why: "Training builds trust. It helps pets feel secure while helping owners guide them safely and kindly."
    },

    "safe-home": {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/safe-home.png",
        title: "Safe Home Setup",
        intro: "A safe space helps your pet relax and prevents accidents inside the home.",
        reminders: [
            "Keep wires, cleaning products, and small objects out of reach.",
            "Prepare a quiet resting spot with bedding and water nearby.",
            "Use secure gates, screens, or doors to prevent escapes.",
            "Remove toxic plants and unsafe food from pet areas.",
            "Give your pet time to explore one area before opening the whole house."
        ],
        why: "New pets can be curious, nervous, or easily startled. A safe setup protects them while they adjust."
    },

    adjustment: {
        label: "Fur Tips Guide",
        icon: "Assets/collabassets/adoption-adjustment.png",
        title: "Adoption Adjustment",
        intro: "Adopted pets need time, patience, and gentle support while learning their new environment.",
        reminders: [
            "Let your pet approach you at their own pace.",
            "Avoid forcing cuddles, play, or introductions.",
            "Keep the first few days calm and simple.",
            "Use the same feeding, potty, and sleep routine daily.",
            "Celebrate small progress like eating, resting, or exploring."
        ],
        why: "Adjustment takes time. A gentle start helps your pet feel safe and slowly build trust with you."
    },

    "first-week": {
        label: "Featured Guide",
        icon: "Assets/collabassets/pet-guide.png",
        title: "First Week With an Adopted Pet",
        intro: "The first week is about helping your new pet feel safe, not perfect. Keep things simple, calm, and predictable.",
        reminders: [
            "Day 1: Give your pet a quiet space with food, water, and a cozy bed.",
            "Days 2–3: Let them explore slowly without too many visitors or loud activity.",
            "Days 3–5: Start a simple routine for meals, bathroom breaks, walks, and rest.",
            "Days 5–7: Introduce gentle play, short training, and positive bonding moments.",
            "Be patient with accidents, hiding, barking, or nervous behavior.",
            "Contact a vet if your pet refuses food, seems very weak, or shows signs of illness."
        ],
        why: "A calm first week helps your pet understand that your home is safe. This makes trust, training, and bonding easier later."
    }
};

const tipModal = document.getElementById("tipModal");
const closeTipModal = document.getElementById("closeTipModal");

const modalIcon = document.getElementById("modalIcon");
const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");
const modalIntro = document.getElementById("modalIntro");
const modalReminders = document.getElementById("modalReminders");
const modalWhy = document.getElementById("modalWhy");

const tipButtons = document.querySelectorAll("[data-tip]");

tipButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedTip = button.getAttribute("data-tip");
        const guide = tipGuides[selectedTip];

        modalIcon.src = guide.icon;
        modalIcon.alt = guide.title + " icon";
        modalLabel.textContent = guide.label;
        modalTitle.textContent = guide.title;
        modalIntro.textContent = guide.intro;
        modalWhy.textContent = guide.why;

        modalReminders.innerHTML = "";

        guide.reminders.forEach(function(reminder) {
            const listItem = document.createElement("li");
            listItem.textContent = reminder;
            modalReminders.appendChild(listItem);
        });

        tipModal.classList.add("show");
        document.body.classList.add("modal-open");
    });
});

function closeModal() {
    tipModal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

closeTipModal.addEventListener("click", closeModal);

tipModal.addEventListener("click", function(event) {
    if (event.target === tipModal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});