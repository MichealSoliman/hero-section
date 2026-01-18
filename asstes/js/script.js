
  // const langSelector = document.getElementById("langSelector");

  // if (langSelector) {
  //   langSelector.value = localStorage.getItem("siteLang") || "ar";

  //   langSelector.addEventListener("change", (e) => {
  //     changeLanguage(e.target.value);
  //     closeProjectsMobileMenu(); // يقفل المينيو بعد التغيير
  //   });
  // }
const langSelectors = document.querySelectorAll(".langSelector");

langSelectors.forEach(selector => {
  selector.value = localStorage.getItem("siteLang") || "ar";

  selector.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
    closeProjectsMobileMenu(); // يقفل منيو الموبايل
  });
});
