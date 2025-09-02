document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active-nav');
        });
        this.classList.add('active-nav');
        
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-nav');
                }
            });
        }
    });
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

observer.observe(skillsSection);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            const inner = this.querySelector('.project-inner');
            const currentTransform = inner.style.transform;
            inner.style.transform = currentTransform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
        }
    });
});

const sectionsToAnimate = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
        }
        else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.1
});

sectionsToAnimate.forEach(section => {
    section.classList.add('animate-on-scroll');
    sectionObserver.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollSpy();
  initSkillsAnimation();
  initProjects();
  initSectionAnimations();
  initTypingEffect();
  initCanvas();
  initSkillTabs();
  initAchievements();
  initForm();
});

/* -----------------------------
   NAVBAR (menu toggle + smooth scroll)
-------------------------------- */
function initNavbar() {
  // Mobile menu toggle
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

  // Smooth scrolling and active link
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active-nav");
      });
      this.classList.add("active-nav");

      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });
}

/* -----------------------------
   SCROLL SPY (highlight nav links on scroll)
-------------------------------- */
function initScrollSpy() {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active-nav");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  });
}

/* -----------------------------
   SKILLS ANIMATION (progress bars)
-------------------------------- */
function initSkillsAnimation() {
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  const skillsSection = document.getElementById("skills");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(skillsSection);
}

/* -----------------------------
   PROJECT CARDS (flip on mobile)
-------------------------------- */
function initProjects() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        const inner = this.querySelector(".project-inner");
        const currentTransform = inner.style.transform;
        inner.style.transform =
          currentTransform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
      }
    });
  });
}

/* -----------------------------
   SECTION ANIMATIONS (scroll reveal)
-------------------------------- */
function initSectionAnimations() {
  const sectionsToAnimate = document.querySelectorAll("section");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sectionsToAnimate.forEach((section) => {
    section.classList.add("animate-on-scroll");
    sectionObserver.observe(section);
  });
}

/* -----------------------------
   TYPING EFFECT (hero section)
-------------------------------- */
function initTypingEffect() {
  const nameElement = document.getElementById("typed-name");
  const cursorElement = document.getElementById("cursor");
  const nameText = "Muhammad Ahmed Rayyan";
  let charIndex = 0;
  const typingSpeed = 100;
  const pauseAfterTyping = 1000;

  function type() {
    if (charIndex < nameText.length) {
      nameElement.textContent += nameText.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        cursorElement.classList.remove("show");
        cursorElement.style.animation = "none";
      }, pauseAfterTyping);
    }
  }

  setTimeout(type, 500);
}

/* -----------------------------
   CANVAS BACKGROUND (neural network)
-------------------------------- */
function initCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "neural-network-canvas";
  document.getElementById("neural-network-bg").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const nodeCount = 30;
  const connectionDistance = 150;
  const nodeSpeed = 0.3;
  const nodeRadius = 2.5;
  const nodeColor = "rgba(148, 163, 184, 0.8)";
  const lineColor = "rgba(139, 92, 246, 0.2)";

  class Node {
    constructor(x, y, vx, vy) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
    }

    update(width, height) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= nodeRadius) {
        this.x = nodeRadius;
        this.vx = Math.abs(this.vx);
      } else if (this.x >= width - nodeRadius) {
        this.x = width - nodeRadius;
        this.vx = -Math.abs(this.vx);
      }

      if (this.y <= nodeRadius) {
        this.y = nodeRadius;
        this.vy = Math.abs(this.vy);
      } else if (this.y >= height - nodeRadius) {
        this.y = height - nodeRadius;
        this.vy = -Math.abs(this.vy);
      }
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    }
  }

  let nodes = [];
  function initNodes() {
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = (Math.random() - 0.5) * nodeSpeed * 2;
      const vy = (Math.random() - 0.5) * nodeSpeed * 2;
      nodes.push(new Node(x, y, vx, vy));
    }
  }
  initNodes();

  function animate() {
    ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    nodes.forEach((node) => {
      node.update(canvas.width, canvas.height);
      node.draw(ctx);
    });

    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const alpha = 1 - distance / connectionDistance;
          ctx.globalAlpha = alpha * 0.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
        }
      }
    }
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    requestAnimationFrame(animate);
  }

  animate();

  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      resizeCanvas();
      initNodes();
    }, 100);
  });
}

/* -----------------------------
   SKILL TABS (categories switching)
-------------------------------- */
function initSkillTabs() {
  const categoryTabs = document.querySelectorAll(".category-tab");
  const skillCategories = document.querySelectorAll(".skills-category");

  function switchSkillCategory(targetCategoryId) {
    categoryTabs.forEach((tab) => tab.classList.remove("active"));
    skillCategories.forEach((cat) => cat.classList.remove("active"));

    const activeTab = document.querySelector(
      `.category-tab[data-category="${targetCategoryId}"]`
    );
    if (activeTab) {
      activeTab.classList.add("active");
    }

    const targetCategoryContent = document.getElementById(
      `skills-${targetCategoryId}`
    );
    if (targetCategoryContent) {
      targetCategoryContent.classList.add("active");
    }
  }

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-category");
      switchSkillCategory(targetCategory);
    });
  });
}

/* -----------------------------
   ACHIEVEMENTS (icon delay animation)
-------------------------------- */
function initAchievements() {
  const boxes = document.querySelectorAll(".achievement-box");

  boxes.forEach((box) => {
    const icon = box.querySelector(".achievement-icon");
    const randomDelay = Math.random() * 2;
    icon.style.animationDelay = `${randomDelay}s`;
  });
}

/* -----------------------------
   FORM (mailto link)
-------------------------------- */
function initForm() {
  function sendMail(event) {
    event.preventDefault();

    const message = document.getElementById("message").value;
    const subject = document.getElementById("subject").value || "No Subject";

    const mailtoLink = `mailto:ahmedrayyanfamily@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }

  document.querySelector("form").addEventListener("submit", sendMail);
}