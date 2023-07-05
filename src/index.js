import './style.css'

const dropdownContainer = document.getElementById('dropdown-container')

document
  .getElementsByClassName('dropdown-btn')[0]
  .addEventListener('click', dropdownToggle)

function dropdownToggle() {
  dropdownContainer.classList.toggle('visible')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    if (dropdownContainer.classList.contains('visible')) {
      dropdownContainer.classList.toggle('visible')
    }
  }
}
