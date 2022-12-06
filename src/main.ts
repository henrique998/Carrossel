import './styles/global.scss'
import './styles/main.scss'

const carouselContainer = document.querySelector<HTMLDivElement>('[data-element="carousel"]')
const nextImageButton = document.querySelector<HTMLButtonElement>('[data-button="next-image-button"]')
const previousImageButton = document.querySelector<HTMLButtonElement>('[data-button="previous-image-button"]')

let isDragging = false

function onDragStart() {
    isDragging = true
    carouselContainer!.style.cursor = 'grabbing'
}

function onDragStop() {
    isDragging = false
    carouselContainer!.style.cursor = 'grab'
}

function onDrag(e: MouseEvent) {
    e.preventDefault()

    if (isDragging) {
        carouselContainer!.scrollLeft -= e.movementX
    }
}

function goToNextImage() {
    carouselContainer!.scrollLeft += 278
}

function goToPreviousImage() {
    carouselContainer!.scrollLeft -= 278
}

carouselContainer!.addEventListener('mousedown', onDragStart)
carouselContainer!.addEventListener('mouseup', onDragStop)
carouselContainer!.addEventListener('mousemove', onDrag)

nextImageButton!.addEventListener('click', goToNextImage)
previousImageButton!.addEventListener('click', goToPreviousImage)