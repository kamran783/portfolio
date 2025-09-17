// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const themeText = document.getElementById("theme-text")
const body = document.body

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)
updateThemeButton(currentTheme)

console.log("[v0] Theme initialized:", currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeButton(newTheme)

  console.log("[v0] Theme changed to:", newTheme)
})

function updateThemeButton(theme) {
  if (theme === "dark") {
    themeIcon.className = "fas fa-moon"
    themeText.textContent = "Dark"
  } else {
    themeIcon.className = "fas fa-sun"
    themeText.textContent = "Light"
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const navMenu = document.getElementById("nav-menu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  console.log("[v0] Mobile menu toggled:", navMenu.classList.contains("active"))

  // Toggle hamburger icon
  const icon = mobileMenuBtn.querySelector("i")
  if (navMenu.classList.contains("active")) {
    icon.className = "fas fa-times"
  } else {
    icon.className = "fas fa-bars"
  }
})

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.className = "fas fa-bars"
  })
})

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.className = "fas fa-bars"
  }
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Handling
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("[v0] Contact form submitted")

    // Get form data
    const name = this.querySelector('input[type="text"]').value.trim()
    const email = this.querySelector('input[type="email"]').value.trim()
    const message = this.querySelector("textarea").value.trim()

    // Enhanced validation
    if (!name || !email || !message) {
      alert("Please fill in all fields")
      console.log("[v0] Form validation failed: missing fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      console.log("[v0] Form validation failed: invalid email")
      return
    }

    // Simulate form submission
    console.log("[v0] Form data:", { name, email, message })
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
  })
} else {
  console.error("[v0] Contact form not found")
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  const currentTheme = body.getAttribute("data-theme")

  if (window.scrollY > 100) {
    if (currentTheme === "dark") {
      navbar.style.background = "rgba(17, 24, 39, 0.95)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
    }
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "var(--bg-primary)"
    navbar.style.backdropFilter = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections for animations
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})

console.log("[v0] Portfolio script loaded successfully")
