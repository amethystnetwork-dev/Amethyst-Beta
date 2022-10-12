// Bugging people because this is licensed under GPLv3
console.log(`Amethyst
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`)

var navlayout = localStorage.getItem('amethyst||navLayout')

window.addEventListener('load', () => {
  document.body.setAttribute('data-navbar', navlayout || 'topbar')
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv.sw-handler.js', { scope: __uv$config.prefix })
}