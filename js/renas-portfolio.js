// Language state - check localStorage for saved preference, default to Japanese
let isJapanese = localStorage.getItem('language') !== 'en';

// Apply language on page load
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage();
});

// Toggle language
function toggleLanguage() {
    isJapanese = !isJapanese;
    localStorage.setItem('language', isJapanese ? 'ja' : 'en');
    applyLanguage();
}

// Apply current language setting
function applyLanguage() {
    const jpElements = document.querySelectorAll('.jp');
    const enElements = document.querySelectorAll('.en');

    jpElements.forEach(el => {
        el.style.display = isJapanese ? '' : 'none';
    });

    enElements.forEach(el => {
        el.style.display = isJapanese ? 'none' : '';
    });

    document.documentElement.lang = isJapanese ? 'ja' : 'en';
}

// Floating language button visibility
let scrollTimeout;
const floatingLang = document.querySelector('.floating-lang');

window.addEventListener('scroll', () => {
    floatingLang.classList.remove('visible');
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 200) {
            floatingLang.classList.add('visible');
        }
    }, 150);
});

// Show floating button after initial load if page is scrolled
if (window.scrollY > 200) {
    floatingLang.classList.add('visible');
}
