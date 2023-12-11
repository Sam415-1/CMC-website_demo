
const btnMappool = document.querySelectorAll('.btn-mappool');
const mappools = document.querySelectorAll('.mappool-qual , .mappool-quart, .mappool-semi , .mappool-finals');

console.log(mappools);
/*Select Ro*/
function active(x) {
    isHidden(x);
    mappools[x].classList.remove('hidden');
}
function isHidden(x) {
    for (i = 0; i < 4; i++) {
        if (x !== i) {
            mappools[i].classList.add('hidden');
        } else {
            continue;
        }
    }
}

function isHover(n) {
    btnMappool[n].classList.add('text-is-hover');
}

