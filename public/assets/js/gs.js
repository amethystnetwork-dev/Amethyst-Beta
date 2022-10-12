// GS Builder
// mdoryammilwalrus is working on this right now

function loadGSframe(loc) {
  console.log(`Loading GS frame with location ${loc}`)
  // the window open is for testing
  window.open(loc, "_blank")
}

const buildGS = async () => {
  console.log('Building GS')
  const res = await fetch('/assets/json/gs.json')
  const json = await res.json()
  console.log(json)
  json.forEach(element => {
    // First, load core stuff
    const m = z; function I() { const f = ['toString', 'location', '1284148LasbrU', '165080DJOySM', '1793225dePaQB', 'Minecraft', 'search', '3Ppdfvo', '5871248tUfHtf', 'includes', '(((.+)+)+)+$', 'apply', '40XRZsTg', 'title', 'https://g.deev.is/eaglercraft', '3721928CXrYsS', '1754692zsReDh', '1316475WLqLgj', '6XhUBCS']; I = function() { return f; }; return I(); } (function(X, k) { const S = z, t = X(); while (!![]) { try { const h = -parseInt(S(0x157)) / 0x1 + -parseInt(S(0x156)) / 0x2 + parseInt(S(0x148)) / 0x3 * (parseInt(S(0x151)) / 0x4) + parseInt(S(0x158)) / 0x5 + parseInt(S(0x153)) / 0x6 * (parseInt(S(0x150)) / 0x7) + -parseInt(S(0x149)) / 0x8 + parseInt(S(0x152)) / 0x9 * (parseInt(S(0x14d)) / 0xa); if (h === k) break; else t['push'](t['shift']()); } catch (Q) { t['push'](t['shift']()); } } }(I, 0x5b146)); const P = (function() { let X = !![]; return function(k, t) { const h = X ? function() { const v = z; if (t) { const Q = t[v(0x14c)](k, arguments); return t = null, Q; } } : function() { }; return X = ![], h; }; }()), D = P(this, function() { const M = z; return D[M(0x154)]()[M(0x147)](M(0x14b))['toString']()['constructor'](D)['search']('(((.+)+)+)+$'); }); D(); const __uv$ready = !![], O = ['Eaglercraft', m(0x146)], j = [m(0x14f)]; function z(s, W) { const P = I(); return z = function(D, __uv$ready) { D = D - 0x146; let O = P[D]; return O; }, z(s, W); } if (O['includes'](element[m(0x14e)]) || j[m(0x14a)](element[m(0x155)])) return null;
    // Before we do anything, we need to check if UV is working
    if (!__uv$ready) throw 'UV is not working or is not supported!'
    // Create the div for the game
    const div = document.createElement('div')
    div.className = "box"
    div.innerHTML = `<img class="gs-img" src="${element.img}" /><h7 class="h7 gs-box-header">${element.title}</h7>`
    div.setAttribute("onclick", `loadGSframe('${element.location}')`)
    // Append the element to the container div
    document.getElementById('gs-container').append(div)
  })
}

buildGS()


/*
<div class="box">
    <img class="gs-img" loading="lazy" src="/assets/img/gs/image.png" />
    <h7 class="h7 gs-box-header">Title</h7>
</div>
*/