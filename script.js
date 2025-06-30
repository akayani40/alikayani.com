// ==================== MODERN PORTFOLIO INTERACTIONS ====================
(() => {
    "use strict";
  
    // ==================== UTILITY FUNCTIONS ====================
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
    // ==================== LOADING SCREEN ====================
    class LoadingScreen {
      constructor() {
        this.loadingScreen = $("#loading-screen");
        this.nameGradient = $("#name-gradient");
        this.init();
      }
  
      init() {
        if (!this.loadingScreen) return;
        
        // Start name gradient animation
        window.addEventListener("load", () => {
          if (this.nameGradient) {
            this.nameGradient.classList.add("gradient-animate");
          }
          
          // Minimum loading time for effect
          setTimeout(() => this.hide(), 2500);
        });
      }
  
      hide() {
        if (!this.loadingScreen) return;
        
        this.loadingScreen.classList.add("loading-screen--hide");
        this.loadingScreen.addEventListener("transitionend", () => {
          if (this.loadingScreen.parentNode) {
            this.loadingScreen.parentNode.removeChild(this.loadingScreen);
          }
        }, { once: true });
      }
    }
  
    // ==================== NAVIGATION ====================
    class Navigation {
      constructor() {
        this.navbar = $(".navbar");
        this.menuToggle = $("#menu-toggle");
        this.mobileMenu = $("#mobile-menu");
        this.backdrop = $("#menu-backdrop");
        this.navLinks = $$(".nav-link, .mobile-nav-link");
        this.init();
      }
  
      init() {
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupScrollEffect();
        this.setupActiveStates();
      }
  
      setupSmoothScrolling() {
        this.navLinks.forEach(link => {
          link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
              e.preventDefault();
              const target = $(href);
              if (target) {
                this.scrollToElement(target);
                this.closeMobileMenu();
                
                // Update URL without triggering scroll
                history.pushState(null, "", href);
              }
            }
          });
        });
      }
  
      setupMobileMenu() {
        if (this.menuToggle) {
          this.menuToggle.addEventListener("click", () => {
            this.toggleMobileMenu();
          });
        }
  
        if (this.backdrop) {
          this.backdrop.addEventListener("click", () => {
            this.closeMobileMenu();
          });
        }
  
        // Close on escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            this.closeMobileMenu();
          }
        });
      }
  
      setupScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener("scroll", () => {
          const currentScrollY = window.scrollY;
          
          if (this.navbar) {
            if (currentScrollY > 100) {
              this.navbar.style.background = "rgba(15, 15, 35, 0.95)";
              this.navbar.style.backdropFilter = "blur(20px)";
            } else {
              this.navbar.style.background = "rgba(15, 15, 35, 0.8)";
              this.navbar.style.backdropFilter = "blur(20px)";
            }
          }
          
          lastScrollY = currentScrollY;
        });
      }
  
      setupActiveStates() {
        const sections = $$("section[id]");
        
        window.addEventListener("scroll", () => {
          const scrollY = window.scrollY;
          
          sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              // Remove active class from all links
              this.navLinks.forEach(link => {
                link.classList.remove("active");
              });
              
              // Add active class to current section link
              const activeLink = $(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`);
              if (activeLink) {
                activeLink.classList.add("active");
              }
            }
          });
        });
      }
  
      toggleMobileMenu() {
        if (this.mobileMenu && this.backdrop) {
          const isOpen = this.mobileMenu.classList.contains("is-open");
          
          if (isOpen) {
            this.closeMobileMenu();
          } else {
            this.openMobileMenu();
          }
        }
      }
  
      openMobileMenu() {
        if (this.mobileMenu && this.backdrop) {
          this.mobileMenu.classList.add("is-open");
          this.backdrop.classList.add("is-active");
          document.body.style.overflow = "hidden";
          
          if (this.menuToggle) {
            this.menuToggle.setAttribute("aria-expanded", "true");
          }
        }
      }
  
      closeMobileMenu() {
        if (this.mobileMenu && this.backdrop) {
          this.mobileMenu.classList.remove("is-open");
          this.backdrop.classList.remove("is-active");
          document.body.style.overflow = "";
          
          if (this.menuToggle) {
            this.menuToggle.setAttribute("aria-expanded", "false");
          }
        }
      }
  
      scrollToElement(element) {
        if (!element) return;
        
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        
        if (prefersReducedMotion) {
          window.scrollTo(0, offsetTop);
        } else {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    }
  
    // ==================== SCROLL ANIMATIONS ====================
    class ScrollAnimations {
      constructor() {
        this.animatedElements = $$(".animate-on-scroll");
        this.init();
      }
  
      init() {
        if ("IntersectionObserver" in window && !prefersReducedMotion) {
          this.setupIntersectionObserver();
        } else {
          // Fallback: show all elements
          this.animatedElements.forEach(el => {
            el.classList.add("animated");
          });
        }
      }
  
      setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const delay = parseInt(element.dataset.staggerDelay || "0", 10);
              
              setTimeout(() => {
                element.classList.add("animated");
              }, delay);
              
              observer.unobserve(element);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        });
  
        this.animatedElements.forEach(el => {
          observer.observe(el);
        });
      }
    }
  
    // ==================== HERO INTERACTIONS ====================
    class HeroSection {
      constructor() {
        this.heroButtons = $$(".hero-buttons .btn");
        this.init();
      }
  
      init() {
        this.setupScrollButtons();
        this.setupFloatingAnimation();
      }
  
      setupScrollButtons() {
        $$("[data-scroll-to]").forEach(button => {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = button.dataset.scrollTo;
            const target = $(`#${targetId}`);
            
            if (target) {
              const navigation = new Navigation();
              navigation.scrollToElement(target);
            }
          });
        });
      }
  
      setupFloatingAnimation() {
        const floatingCards = $$(".floating-card");
        
        floatingCards.forEach((card, index) => {
          if (!prefersReducedMotion) {
            card.style.animationDelay = `${index * 0.5}s`;
          }
        });
      }
    }
  
    // ==================== CONTACT FORM ====================
    class ContactForm {
      constructor() {
        this.form = $("#contact-form");
        this.statusElement = $("#form-status");
        this.init();
      }
  
      init() {
        if (this.form) {
          this.form.addEventListener("submit", (e) => this.handleSubmit(e));
          this.setupRealTimeValidation();
        }
      }
  
      setupRealTimeValidation() {
        const inputs = $$(".form-input, .form-textarea");
        
        inputs.forEach(input => {
          input.addEventListener("blur", () => this.validateField(input));
          input.addEventListener("input", () => this.clearFieldError(input));
        });
      }
  
      validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let message = "";
  
        switch (fieldName) {
          case "name":
            if (value.length < 2) {
              isValid = false;
              message = "Name must be at least 2 characters long";
            }
            break;
          case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              isValid = false;
              message = "Please enter a valid email address";
            }
            break;
          case "message":
            if (value.length < 10) {
              isValid = false;
              message = "Message must be at least 10 characters long";
            }
            break;
        }
  
        this.setFieldState(field, isValid, message);
        return isValid;
      }
  
      clearFieldError(field) {
        field.classList.remove("error");
        const errorElement = field.parentNode.querySelector(".field-error");
        if (errorElement) {
          errorElement.remove();
        }
      }
  
      setFieldState(field, isValid, message = "") {
        this.clearFieldError(field);
        
        if (!isValid) {
          field.classList.add("error");
          const errorElement = document.createElement("div");
          errorElement.className = "field-error";
          errorElement.textContent = message;
          errorElement.style.color = "var(--color-danger)";
          errorElement.style.fontSize = "var(--text-sm)";
          errorElement.style.marginTop = "var(--space-1)";
          field.parentNode.appendChild(errorElement);
        }
      }
  
      async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
          this.showStatus("Please fix the errors above", "error");
          return;
        }
  
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
  
        this.setLoadingState(true);
        this.showStatus("Sending your message...", "info");
  
        try {
          // Simulate form submission (replace with your actual endpoint)
          await this.simulateFormSubmission(data);
          
          this.form.reset();
          this.showStatus("Thank you! Your message has been sent successfully.", "success");
        } catch (error) {
          console.error("Form submission error:", error);
          this.showStatus("Sorry, there was an error sending your message. Please try again.", "error");
        } finally {
          this.setLoadingState(false);
        }
      }
  
      validateForm() {
        const inputs = $$(".form-input, .form-textarea");
        let isValid = true;
  
        inputs.forEach(input => {
          if (input.hasAttribute("required")) {
            if (!this.validateField(input)) {
              isValid = false;
            }
          }
        });
  
        return isValid;
      }
  
      setLoadingState(isLoading) {
        const submitButton = $(".form-submit");
        if (submitButton) {
          if (isLoading) {
            submitButton.classList.add("is-loading");
            submitButton.disabled = true;
          } else {
            submitButton.classList.remove("is-loading");
            submitButton.disabled = false;
          }
        }
      }
  
      showStatus(message, type) {
        if (this.statusElement) {
          this.statusElement.textContent = message;
          this.statusElement.className = `form-status ${type}`;
          
          // Auto-hide success messages
          if (type === "success") {
            setTimeout(() => {
              this.statusElement.textContent = "";
              this.statusElement.className = "form-status";
            }, 5000);
          }
        }
      }
  
      async simulateFormSubmission(data) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In a real application, you would send the data to your server
        console.log("Form data:", data);
        
        // For demo purposes, we'll just resolve successfully
        return { success: true };
      }
    }
  
    // ==================== PERFORMANCE OPTIMIZATIONS ====================
    class PerformanceOptimizer {
      constructor() {
        this.init();
      }
  
      init() {
        this.setupLazyLoading();
        this.setupDebouncing();
        this.preloadCriticalResources();
      }
  
      setupLazyLoading() {
        const images = $$("img[data-src]");
        
        if ("IntersectionObserver" in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
              }
            });
          });
  
          images.forEach(img => imageObserver.observe(img));
        } else {
          // Fallback: load all images immediately
          images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          });
        }
      }
  
      setupDebouncing() {
        // Debounce scroll events for better performance
        let scrollTimeout;
        const originalScrollHandlers = [];
        
        // Store original scroll handlers
        window.addEventListener("scroll", () => {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            originalScrollHandlers.forEach(handler => handler());
          }, 10);
        });
      }
  
      preloadCriticalResources() {
        // Preload important fonts and resources
        const fontPreloads = [
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
        ];
  
        fontPreloads.forEach(font => {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "style";
          link.href = font;
          document.head.appendChild(link);
        });
      }
    }
  
    // ==================== ACCESSIBILITY ENHANCEMENTS ====================
    class AccessibilityEnhancer {
      constructor() {
        this.init();
      }
  
      init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupAriaLiveRegions();
      }
  
      setupKeyboardNavigation() {
        // Improve keyboard navigation for custom elements
        const interactiveElements = $$(".btn, .nav-link, .mobile-nav-link, .contact-method");
        
        interactiveElements.forEach(element => {
          if (!element.hasAttribute("tabindex")) {
            element.setAttribute("tabindex", "0");
          }
          
          element.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              element.click();
            }
          });
        });
      }
  
      setupFocusManagement() {
        // Ensure focus is visible and properly managed
        document.addEventListener("keydown", (e) => {
          if (e.key === "Tab") {
            document.body.classList.add("using-keyboard");
          }
        });
  
        document.addEventListener("mousedown", () => {
          document.body.classList.remove("using-keyboard");
        });
      }
  
      setupAriaLiveRegions() {
        // Create live region for dynamic announcements
        const liveRegion = document.createElement("div");
        liveRegion.setAttribute("aria-live", "polite");
        liveRegion.setAttribute("aria-atomic", "true");
        liveRegion.className = "sr-only";
        liveRegion.id = "live-region";
        document.body.appendChild(liveRegion);
      }
    }
  
    // ==================== THEME MANAGER ====================
    class ThemeManager {
      constructor() {
        this.currentTheme = localStorage.getItem("theme") || "dark";
        this.init();
      }
  
      init() {
        this.applyTheme();
        this.setupThemeToggle();
      }
  
      applyTheme() {
        document.documentElement.setAttribute("data-theme", this.currentTheme);
      }
  
      setupThemeToggle() {
        const themeToggle = $("#theme-toggle");
        if (themeToggle) {
          themeToggle.addEventListener("click", () => {
            this.toggleTheme();
          });
        }
      }
  
      toggleTheme() {
        this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
        this.applyTheme();
        localStorage.setItem("theme", this.currentTheme);
        
        // Announce theme change
        const liveRegion = $("#live-region");
        if (liveRegion) {
          liveRegion.textContent = `Switched to ${this.currentTheme} theme`;
        }
      }
    }
  
    // ==================== INITIALIZATION ====================
    document.addEventListener("DOMContentLoaded", () => {
      // Initialize all components
      new LoadingScreen();
      new Navigation();
      new ScrollAnimations();
      new HeroSection();
      new ContactForm();
      new PerformanceOptimizer();
      new AccessibilityEnhancer();
      new ThemeManager();
  
      // Add reduced motion class if needed
      if (prefersReducedMotion) {
        document.documentElement.classList.add("reduced-motion");
      }
  
      // Console message for developers
      if (typeof console !== "undefined") {
        console.log(
          "%c👨‍💻 Ali Kayani's Portfolio", 
          "color: #007aff; font-size: 16px; font-weight: bold;"
        );
        console.log(
          "%cBuilt with vanilla HTML, CSS, and JavaScript\nInterested in the code? Check out the repository!",
          "color: #22d3ee; font-size: 12px;"
        );
      }
    });
  
    // ==================== ERROR HANDLING ====================
    window.addEventListener("error", (event) => {
      console.error("Portfolio error:", event.error);
      
      // Optional: Send error to analytics service
      // analytics.track('portfolio_error', { message: event.error.message });
    });
  
    // ==================== SERVICE WORKER REGISTRATION ====================
    if ("serviceWorker" in navigator && window.location.protocol === "https:") {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
          .then(registration => {
            console.log("SW registered: ", registration);
          })
          .catch(registrationError => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  
  })();