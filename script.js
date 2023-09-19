const featuresLink = document.querySelector(".features a");
const companyLink = document.querySelector(".company a");
const companyActiveIcon = document.querySelector(".company-active");
const featuresActiveIcon = document.querySelector(".features-active");
const companyArrowDownIcon = document.querySelector(".company.arrow-down");
const featuresArrowDownIcon = document.querySelector(".features.arrow-down");
const menu = document.querySelector(".nav");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const overlay = document.getElementById("overlay");
const featuresList = document.querySelector(".features");
const companyList = document.querySelector(".company");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
  menu.style.visibility = "visible";
  menu.style.height = "100%";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
  menu.style.visibility = "hidden";
  menu.style.height = "0";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const toggleActive = (link, arrowDownIcon, arrowUpIcon, list, menu) => {
  link.addEventListener("click", () => {
    if (list.classList.contains("active")) {
      list.classList.remove("active");
      menu.style.display = "none";
      arrowDownIcon.style.display = "inline";
      arrowUpIcon.style.display = "none";
    } else {
      list.classList.add("active");
      menu.style.display = "block";
      arrowDownIcon.style.display = "none";
      arrowUpIcon.style.display = "inline";
    }
  });

  featuresArrowDownIcon.addEventListener("click", () => {
    if (list.classList.contains("active")) {
      list.classList.remove("active");
      menu.style.display = "none";
      arrowDownIcon.style.display = "inline";
      arrowUpIcon.style.display = "none";
    } else {
      list.classList.add("active");
      menu.style.display = "block";
      arrowDownIcon.style.display = "none";
      arrowUpIcon.style.display = "inline";
    }
  });

  companyArrowDownIcon.addEventListener("click", () => {
    if (list.classList.contains("active")) {
      list.classList.remove("active");
      menu.style.display = "none";
      arrowDownIcon.style.display = "inline";
      arrowUpIcon.style.display = "none";
    } else {
      list.classList.add("active");
      menu.style.display = "block";
      arrowDownIcon.style.display = "none";
      arrowUpIcon.style.display = "inline";
    }
  });
};

toggleActive(
  companyLink,
  companyArrowDownIcon,
  companyActiveIcon,
  companyList,
  companyMenu
);
toggleActive(
  featuresLink,
  featuresArrowDownIcon,
  featuresActiveIcon,
  featuresList,
  featuresMenu
);
