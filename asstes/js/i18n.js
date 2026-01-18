let currentLang = localStorage.getItem("siteLang") || "ar";

async function loadLanguage(lang) {
    const response = await fetch(`/lang/${lang}.json`);
    return await response.json();
}

async function applyLanguage() {
    const translations = await loadLanguage(currentLang);

    // النصوص العادية
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    // alt للصور
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const key = el.getAttribute("data-i18n-alt");
        if (translations[key]) {
            el.setAttribute("alt", translations[key]);
        }
    });

    // اتجاه الصفحة
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("siteLang", lang);
    applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);
