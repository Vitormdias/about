function translateText(lang) {
    hideAllLang()
    const langElement = document.querySelector(`.${lang}`)

    langElement.hidden = false
}

function hideAllLang() {
    var langs = document.querySelectorAll('.lang')

    langs.forEach(x => x.hidden = true)
}
