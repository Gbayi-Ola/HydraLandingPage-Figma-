const boxes = document.querySelectorAll('.sliding')

window.addEventListener('scroll', checkBoxes)

checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 4

    for(const box of boxes){
        const boxTop = box.getBoundingClientRect().top

        const Result = (boxTop < triggerBottom)?box.classList.add('show'):box.classList.remove('show');
    }

}