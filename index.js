export const checkHtmlCodes = (str = '') => {
    const el = document.createElement('div')
    el.innerHTML = str
    return el.innerText
}
