/**
 * MIDHULA FARM HUT — Custom JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  initMobileMenu();
  
  // Smooth Scroll for Anchor Links
  initSmoothScroll();
  
  // Header Scroll Behavior
  initHeaderScroll();
  
  // Lifecycle Scroll Animations
  initLifecycleAnimations();
});

/**
 * Mobile Menu
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('.mobile-menu-close');
  const body = document.body;
  
  if (!menuToggle || !mobileMenu) return;
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  body.appendChild(overlay);
  
  function openMenu() {
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    menuToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }
  
  menuToggle.addEventListener('click', function() {
    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }
  
  overlay.addEventListener('click', closeMenu);
  
  // Close menu when clicking nav links
  const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty anchors
      if (href === '#' || href === '#!') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Header Scroll Behavior
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  let lastScroll = 0;
  let scrollTimeout;
  
  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
  }
  
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(handleScroll);
  });
}

/**
 * Lifecycle Scroll Animations
 */
function initLifecycleAnimations() {
  const stages = document.querySelectorAll('.lifecycle-stage');
  if (stages.length === 0) return;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  stages.forEach(stage => {
    observer.observe(stage);
  });
}

/**
 * WhatsApp Product Inquiry
 */
function createWhatsAppLink(productName, productUrl) {
  const whatsappNumber = document.documentElement.dataset.whatsappNumber || '918129120437';
  const message = `Hi Midhula Farm Hut! I'm interested in ${productName}. ${productUrl}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Expose for use in product cards
window.MidhulaFarmHut = {
  createWhatsAppLink: createWhatsAppLink
};
