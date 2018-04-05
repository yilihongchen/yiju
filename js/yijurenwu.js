{
    const darenwu = document.querySelectorAll(".darenwu .renwu");
    const xiaoren = document.querySelectorAll(".ren .xiaoren");


    xiaoren.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < xiaoren.length; i++) {
                darenwu[i].classList.remove("active");
                xiaoren[i].classList.remove("active");
            }
            this.classList.add("active");
            darenwu[index].classList.add("active");
            n = index;
        }

    });
}