document.getElementById("year")?.remove();

const resources = {
  es: {
    translation: {
      nav: {
        services: "Servicios",
        tech: "Tecnologías",
        contact: "Contacto",
      },

      hero: {
        title: "Software a medida para negocios que quieren crecer.",
        description:
          "Desarrollamos APIs, automatizaciones, integraciones y herramientas internas para reducir tareas manuales, conectar sistemas y mejorar procesos.",
        contact: "Contactanos",
        services: "Ver servicios",
      },

      services: {
        title: "Qué hacemos en Urano",

        custom: {
          title: "Desarrollo a medida",
          description:
            "Sistemas, módulos y soluciones pensadas para procesos concretos de tu negocio.",
        },

        automation: {
          title: "Automatización",
          description:
            "Reducimos tareas repetitivas, carga manual de datos y procesos lentos.",
        },

        api: {
          title: "Integraciones y APIs",
          description:
            "Conectamos sistemas, bases de datos, servicios externos y plataformas internas.",
        },

        scalable: {
          title: "Soluciones escalables",
          description:
            "Arquitectura backend preparada para crecer, auditar, monitorear y evolucionar.",
        },

        scada: {
          title: "Soluciones SCADA",
          description: "Nos especializamos en dashboards y desarrollo SCADA.",
        },
      },

      contact: {
        title: "¿Querés mejorar tus procesos?",
        description:
          "Si tu negocio trabaja con tareas manuales, sistemas desconectados o procesos difíciles de seguir, podemos ayudarte a crear una solución clara, simple y escalable.",
        email: "Envial email",
      },

      footer: `© ${new Date().getFullYear()} Urano Software — Automatización, APIs e integración de sistemas.`,
    },
  },

  en: {
    translation: {
      nav: {
        services: "Services",
        tech: "Technologies",
        contact: "Contact",
      },

      hero: {
        title: "Custom software for businesses that want to grow.",
        description:
          "We build APIs, automations, integrations and internal tools to reduce manual tasks and improve processes.",
        contact: "Contact us",
        services: "View services",
      },

      services: {
        title: "What we do at Urano",

        custom: {
          title: "Custom Development",
          description:
            "Systems and solutions tailored to your business processes.",
        },

        automation: {
          title: "Automation",
          description: "We reduce repetitive tasks and manual workflows.",
        },

        api: {
          title: "APIs & Integrations",
          description: "We connect systems, databases and external services.",
        },

        scalable: {
          title: "Scalable Solutions",
          description: "Backend architectures ready to grow and evolve.",
        },

        scada: {
          title: "SCADA Solutions",
          description: "We specialize in SCADA dashboards and development.",
        },
      },

      contact: {
        title: "Want to improve your processes?",
        description:
          "If your business works with disconnected systems or manual processes, we can help.",
        email: "Send email",
      },

      footer: `© ${new Date().getFullYear()} Urano Software — Automation, APIs and systems integration.`,
    },
  },
};

i18next.init(
  {
    lng: "es",
    resources,
  },
  function () {
    updateContent();
  },
);

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    element.textContent = i18next.t(key);
  });
}

document.getElementById("changeLang").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";

  i18next.changeLanguage(newLang, () => {
    updateContent();

    document.getElementById("changeLang").textContent =
      newLang === "es" ? "EN" : "ES";
  });
});

new Swiper(".servicios-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const scrollBar = document.getElementById("scroll-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollBar.style.width = progress + "%";
});

const revealElements = document.querySelectorAll(
  "section, .hero, .card, .tech, .contact, footer",
);

revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

revealElements.forEach((el) => observer.observe(el));
