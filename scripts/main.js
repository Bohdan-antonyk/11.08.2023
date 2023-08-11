const changeBackroundEl = document.querySelector('.change-backround');
const changeContentEl = document.querySelector('.change-content');
const changeBlockEl = document.querySelector('.change-block');
const contentEl = document.querySelector('.content-block');


//  Код нижче виводить рандомне число в блок в html;
changeContentEl.addEventListener('click', () => {
    contentEl.innerHTML = Math.floor(Math.random() * 100);
})

// Функція яка генерує рандомне число в межах від min до max включно
// Ця функція використовується для генерації RGB кольорів!
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Код нижче міняє background color в центральним div в html
changeBackroundEl.addEventListener('click', () => {
    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);
    contentEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

changeBlockEl.addEventListener('click', () => {
    const activeBlock = document.querySelector('.content-block.active-block');
    const notActiveBlock = document.querySelector('.content-block:not(.active-block)');
    if (activeBlock) {
        activeBlock.classList.remove('active-block');
        notActiveBlock.innerHTML = Math.floor(Math.random() * 100);
        const red = getRandomInt(0, 255);
        const green = getRandomInt(0, 255);
        const blue = getRandomInt(0, 255);
        notActiveBlock.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      
    }
    if (notActiveBlock) {
        notActiveBlock.classList.add('active-block');
        notActiveBlock.innerHTML = Math.floor(Math.random() * 100);
        const red = getRandomInt(0, 255);
        const green = getRandomInt(0, 255);
        const blue = getRandomInt(0, 255);
        notActiveBlock.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
})

