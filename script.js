function searchEvents() {
  const input = document.getElementById("searchEvent");

  if (!input) return;

  const filter = input.value.trim().toLowerCase();

  const cards = document.querySelectorAll(".events .event-container .card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();

    if (filter === "" || text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

const searchInput = document.getElementById("searchEvent");

if (searchInput) {
  searchInput.addEventListener("input", searchEvents);

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchEvents();
  });
}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (menuBtn.innerHTML.includes("bars")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
  } else {
    header.style.background = "rgba(255,255,255,.95)";
    header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

const eventDate = new Date("December 31, 2026 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);

    document.querySelector(".timer").innerHTML = "<h2>Event Started!</h2>";
  }
}, 1000);
const revealElements = document.querySelectorAll(
  ".card, .about-text, .about-image, .testimonial-card",
);

window.addEventListener("scroll", reveal);

function reveal() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

reveal();

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    });

}

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((item) => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }

    });

});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target"));
        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment > target
                ? target
                : current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
