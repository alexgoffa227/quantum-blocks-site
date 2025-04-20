// Function to update text content based on language
function updateLanguage(lang) {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Update each element's text content
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update the language switcher button
    const languageButton = document.getElementById('language-switch');
    if (languageButton) {
        const span = languageButton.querySelector('span');
        if (span) {
            span.textContent = lang === 'en' ? 'ภาษาไทย' : 'English';
        }
    }

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Function to initialize language
function initLanguage() {
    // Get saved language preference or default to English
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(savedLang);
}

// Add event listener for language switch button
document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-switch');
    if (languageButton) {
        languageButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            const newLang = currentLang === 'en' ? 'th' : 'en';
            updateLanguage(newLang);
        });
    }
    initLanguage();
}); 