"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalPosition = document.querySelector("[data-modal-position]"); // Changed to querySelector
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Testimonial data
const testimonialData = {
  "Alemu Tadesse": {
    position: "Founder, AddisTech Solutions",
    avatar: "./assets/images/avatar-1.png",
  },
  "Sara Mekonnen": {
    position: "Marketing Director, GreenLeaf Organics",
    avatar: "./assets/images/avatar-2.png",
  },
  "Liya Abebe": {
    position: "CEO, Horizon Financial Services",
    avatar: "./assets/images/avatar-3.png",
  },
  "Daniel Kebede": {
    position: "Creative Director, Visionary Media",
    avatar: "./assets/images/avatar-4.png",
  },
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const item = this;
    const name = item.querySelector("[data-testimonials-title]").textContent;
    const data = testimonialData[name];

    // Set modal content
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = name;
    modalTitle.textContent = name;
    modalPosition.textContent = data.position;
    modalText.innerHTML = item.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Client Projects Modal
const clientItems = document.querySelectorAll(".clients-item");
const clientModalContainer = document.querySelector(
  "[data-client-modal-container]"
);
const clientOverlay = document.querySelector("[data-client-overlay]");
const clientCloseBtn = document.querySelector("[data-client-close-btn]");
const clientTitle = document.querySelector("[data-client-title]");
const clientProjects = document.querySelector("[data-client-projects]");

const toggleClientModal = function () {
  clientModalContainer.classList.toggle("active");
};

// Add click event to all client items
clientItems.forEach((item) => {
  const link = item.querySelector("a");
  const details = item.querySelector(".client-details");

  // Only add click handler if there are details to show
  if (details) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      clientTitle.textContent =
        link.querySelector("img").alt || "Client Project";
      clientProjects.innerHTML = details.innerHTML;
      toggleClientModal();
    });
  }
});

// Close modal events
clientCloseBtn.addEventListener("click", toggleClientModal);
clientOverlay.addEventListener("click", toggleClientModal);

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
