const changeSearch = (target) => {
  switch (target.value) {
    case 'DuckDuckGo':
      localStorage.setItem('amethyst||search', 'DuckDuckGo')
      break;
    case 'Brave':
      localStorage.setItem('amethyst||search', 'Brave');
      break;
    case 'Google':
      localStorage.setItem('amethyst||search', 'Google');
      break;
    default: 
      localStorage.setItem('amethyst||search', 'DuckDuckGo')
  }
}

// completely forgot about switching

const setPx = (item) => {
  switch (item) {
    case 'Ultraviolet':
      localStorage.setItem('amethyst||px', 'Ultraviolet')
      console.log(localStorage.getItem('amethyst||px'));
      break;
    case 'Corrosion':
      localStorage.setItem('amethyst||px', 'Corrosion')
      console.log(localStorage.getItem('amethyst||px'));
      break;
    default:
      localStorage.setItem('amethyst||px', 'Ultraviolet')
      console.log(localStorage.getItem('amethyst||px'));
  }
}

const setNavLayout = (item) => {
  switch (item) {
    case 'topbar':
      localStorage.setItem('amethyst||navLayout', 'topbar') // topbar
      break;
    case 'sidebar':
      localStorage.setItem('amethyst||navLayout', 'sidebar') // sidebar
  }
  alert('This is kinda finished')
}