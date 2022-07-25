const arrows = Array.from(document.querySelectorAll('.slider__arrows div'));
const imgs = Array.from(document.querySelectorAll('.slider__items div'));
const dots = Array.from(document.querySelectorAll('.slider__dots div'));
let index = 0;
let prev = 0;


function changePic(pos, oldPos) {
    imgs[oldPos].classList.remove('slider__item_active');
    imgs[pos].classList.add('slider__item_active');
}

function changeDot(pos, oldPos) {
    dots[oldPos].classList.remove('slider__dot_active');
    dots[pos].classList.add('slider__dot_active');
}

arrows.forEach((arrow) => {
    arrow.onclick = () => {
        if (arrow.className.includes('slider__arrow_next')) {
            index++;
            if (index == imgs.length) {
                index = 0;
            };
            changePic(index, prev);
            changeDot(index, prev);
            prev = index;
        } else {
            index--;
            if (index < 0) {
                index = imgs.length - 1;
            };
            changePic(index, prev);
            changeDot(index, prev);
            prev = index;
        };
    };
});

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        changeDot(i, prev);
        changePic(i, prev);
        prev = i;
        index = i;
    };
};
