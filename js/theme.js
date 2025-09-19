const html = document.documentElement;
export let theme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'

const btn = document.querySelector('.button-theme')

btn.addEventListener('click', () => {
  let newTheme = theme === 'dark' ? 'light' : 'dark'
  setTheme(newTheme)
  theme = newTheme
})

export function setTheme(newTheme){
  html.setAttribute('data-theme', newTheme)
}

setTheme(theme)