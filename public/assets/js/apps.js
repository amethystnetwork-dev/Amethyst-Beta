// Apps Builder
// mdoryammilwalrus is working on this right now

function loadAppFrame(loc) {
  console.log(`Loading App frame with location ${loc}`)
  // the window open is for testing
  window.open(loc, "_blank")
}

const buildApps = async () => {
  console.log('Building Apps')
  const res = await fetch('/assets/json/apps.json')
  const json = await res.json()
  console.log(json)
  json.forEach(element => {
    // Create the div for the app
    const div = document.createElement('div')
    div.className = "box"
    div.innerHTML = `<img class="gs-img" src="${element.img}" /><h7 class="h7 gs-box-header">${element.title}</h7>`
    div.setAttribute("onclick", `loadAppFrame('${element.location}')`)
    // Append the element to the container div
    document.getElementById('apps-container').append(div)
  })
}

buildApps()