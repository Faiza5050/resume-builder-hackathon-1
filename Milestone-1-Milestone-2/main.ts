const toggle = document.getElementById("toggle") as HTMLButtonElement;
const skils1 = document.getElementById("skils1") as HTMLElement;

toggle.addEventListener('click', () => {
    if(skils1.style.display === 'none') {
        skils1.style.display = 'block'
    } else {
        skils1.style.display = 'none'
    };
});
