const search = document.getElementById('search')

document.getElementById("searchform").addEventListener("submit", function(e) {
  e.preventDefault()
  go(search.value)
});

function pxyopen(url) {
  window.open(getproxy(url), "_blank")
  // window.location.replace(getproxy(url));
}

function getproxy(url) {
  switch (localStorage.getItem("amethyst||px")) {
    case 'Ultraviolet':
      return __uv$config.prefix + __uv$config.encodeUrl(url)
    case 'Corrosion':
      return "/corrosion/gateway?url=" + url
    default:
      return __uv$config.prefix + __uv$config.encodeUrl(url)
  }
}

function searchurl(url) {
  switch (localStorage.getItem("amethyst||search")) {
    case 'DuckDuckGo':
      pxyopen(`https://duckduckgo.com/?q=${url}`)
      break;
    case 'Brave':
      pxyopen(`https://search.brave.com/search?q=${url}`)
      break;
    case 'Google':
      pxyopen(`https://www.google.com/search?q=${url}`)
      break;
    default:
      localStorage.setItem("amethyst||search", "DuckDuckGo")
      pxyopen(`https://duckduckgo.com/?q=${url}`)
  }
}

function go(url) {
  console.log(`Going to ${url}`)
  if (!isUrl(url)) {
    searchurl(url)
  } else {
    if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url
    pxyopen(url)
  }
}

// This is the best URL detector I have found (its from incog)
function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
}