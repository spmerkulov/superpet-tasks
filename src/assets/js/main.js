if (typeof window !== 'undefined') {
  // Add your javascript here


  const stickyClasses = ["fixed", "h-14"];
  const unstickyClasses = ["absolute", "h-20"];
  const stickyClassesContainer = [
    "border-neutral-300/50",
    "bg-white/80",
    "dark:border-neutral-600/40",
    "dark:bg-neutral-900/60",
    "backdrop-blur-2xl",
  ];
  const unstickyClassesContainer = ["border-transparent"];
  let headerElement = null;

  document.addEventListener("DOMContentLoaded", () => {
    headerElement = document.getElementById("header");

    // Sticky header functionality
    if (headerElement) {
      stickyHeaderFuncionality();
      evaluateHeaderPosition();
    }

    // Menu items
    applyMenuItemClasses();

    // Mobile menu
    mobileMenuFunctionality();

    // Avatar modal
    avatarModalFunctionality();
  });

  window.stickyHeaderFuncionality = () => {
    window.addEventListener("scroll", () => {
      if (headerElement) {
        evaluateHeaderPosition();
      }
    });
  };

  window.evaluateHeaderPosition = () => {
    const menu = document.getElementById("menu");
    if (window.scrollY > 16) {
      headerElement.firstElementChild.classList.add(...stickyClassesContainer);
      headerElement.firstElementChild.classList.remove(
        ...unstickyClassesContainer,
      );
      headerElement.classList.add(...stickyClasses);
      headerElement.classList.remove(...unstickyClasses);
      if (menu) {
        menu.classList.add("top-[56px]");
        menu.classList.remove("top-[75px]");
      }
    } else {
      headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
      headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
      headerElement.classList.add(...unstickyClasses);
      headerElement.classList.remove(...stickyClasses);
      if (menu) {
        menu.classList.remove("top-[56px]");
        menu.classList.add("top-[75px]");
      }
    }
  };

  window.applyMenuItemClasses = () => {
    const menuItems = document.querySelectorAll("#menu a");
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].pathname === window.location.pathname) {
        menuItems[i].classList.add("text-neutral-900", "dark:text-white");
      }
    }
  };

  function mobileMenuFunctionality() {
    const openMenu = document.getElementById("openMenu");
    if (openMenu) {
      openMenu.addEventListener("click", () => {
        openMobileMenu();
      });
    }

    const closeMenu = document.getElementById("closeMenu");
    if (closeMenu) {
      closeMenu.addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  }

  function avatarModalFunctionality() {
    const avatarThumb = document.getElementById("avatarThumb");
    if (avatarThumb) {
      avatarThumb.addEventListener("click", () => {
        openAvatarModal();
      });
    }
  }

  window.openMobileMenu = () => {
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");
    const mobileMenuBackground = document.getElementById("mobileMenuBackground");

    if (openMenu) openMenu.classList.add("hidden");
    if (closeMenu) closeMenu.classList.remove("hidden");
    if (menu) menu.classList.remove("hidden");
    if (mobileMenuBackground) {
      mobileMenuBackground.classList.add("opacity-0");
      mobileMenuBackground.classList.remove("hidden");

      setTimeout(() => {
        mobileMenuBackground.classList.remove("opacity-0");
      }, 1);
    }
  };

  window.closeMobileMenu = () => {
    const closeMenu = document.getElementById("closeMenu");
    const openMenu = document.getElementById("openMenu");
    const menu = document.getElementById("menu");
    const mobileMenuBackground = document.getElementById("mobileMenuBackground");

    if (closeMenu) closeMenu.classList.add("hidden");
    if (openMenu) openMenu.classList.remove("hidden");
    if (menu) menu.classList.add("hidden");
    if (mobileMenuBackground) mobileMenuBackground.classList.add("hidden");
  };

  window.openAvatarModal = () => {
    const avatarModalBackground = document.getElementById("avatarModalBackground");
    if (avatarModalBackground) {
      avatarModalBackground.classList.remove("hidden");
    }
  };

  window.closeAvatarModal = () => {
    const avatarModalBackground = document.getElementById("avatarModalBackground");
    if (avatarModalBackground) {
      avatarModalBackground.classList.add("hidden");
    }
  };
}
