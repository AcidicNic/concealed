function resize() {
    const h = window.innerHeight;
    const w = window.innerWidth;
    if (w < h) {
        const all_aspect_ratio = document.getElementsByClassName('aspect_ratio');
        for (let i = 0; i < all_aspect_ratio.length; i++) {
            all_aspect_ratio[i].style.width = '100vw';
            all_aspect_ratio[i].style.height = 100 * (9/16) + 'vw';
        }
    } else {
        const all_aspect_ratio = document.getElementsByClassName('aspect_ratio');
        for (let i = 0; i < all_aspect_ratio.length; i++) {
            all_aspect_ratio[i].style.width = 100 * (16/9) + 'vh';
            all_aspect_ratio[i].style.height = '100vh';
        }
    }
}

function startNovel() {
    resize();
    let novel = document.getElementById("novelDiv");
    initNovel(novel.style.height, novel.style.width);
}

window.addEventListener("resize", resize);
