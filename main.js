// 1. select slide btn
let list = document.querySelector('.slider .slides')
let items = document.querySelectorAll('.slider .slides .slide')
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0
let lengthItems = items.length - 1

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0
    } else {
        active += 1
    }
    reloadSlider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems
    } else {
        active -= 1
    }
    reloadSlider()
}

let refreshSlider = setInterval(() => {next.click()}, 3000)

function reloadSlider() {
    let checkLeft =  items[active].offsetLeft
    list.style.left = -checkLeft + 'px'

    let lastActiveDot = document.querySelector('.slider .dots li.active')
    lastActiveDot.classList.remove('active')
    dots[active].classList.add('active')
    clearInterval(refreshSlider)
    refreshSlider = setInterval(() => {next.click()}, 3000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key
        reloadSlider()
    })
})

// 2. search bar
const openMenu = document.querySelector('.search-js')
const modal = document.querySelector('.js-search-bar')
const modalClose = document.querySelector('.js-container-search')

/// show
function showSearchBar() {
    modal.classList.add('open')
}

openMenu.addEventListener('click',showSearchBar)

/// hide
function hideSearchBar() {
    modal.classList.remove('open')
}
modal.addEventListener('click',hideSearchBar)

modalClose.addEventListener('click', function(event) {
    event.stopPropagation()
})

// 3. change sale list style
    $("li").click(function() {
        $("li").css("background-color", "white");
        $(this).css("background-color", "red");
    })
    // this.addEventListener('click', function showColor(event) {
    //     event.target.style.backgroundColor = 'salmon';
    //     event.target.style.borderLeft = '5px solid red';
    //     event.target.style.transition = '0.2s';