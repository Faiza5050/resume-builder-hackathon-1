var toggle = document.getElementById("toggle");
var skils1 = document.getElementById("skils1");
toggle.addEventListener('click', function () {
    if (skils1.style.display === 'none') {
        skils1.style.display = 'block';
    }
    else {
        skils1.style.display = 'none';
    }
    ;
});
