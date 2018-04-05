{
    const imgages=document.querySelectorAll(".imgbox img");
    const shuzi=document.querySelectorAll(".shuzi h1");
    const banners=document.querySelector("#banner");

    shuzi.forEach(function(ele,index){
        ele.onclick=function(){
            for(let i=0;i<shuzi.length;i++){
                imgages[i].classList.remove("active");
                shuzi[i].classList.remove("active");
            }
            this.classList.add("active");
            imgages[index].classList.add("active");
            n=index;

        }

    });
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgages.length){
            n=0;
        }
        if(n<0){
            n=imgages.length-1;
        }
        for(let i=0;i<shuzi.length;i++){
            imgages[i].classList.remove("active");
            shuzi[i].classList.remove("active");
        }
        imgages[n].classList.add("active");
        shuzi[n].classList.add("active");
    }
    banners.onmouseenter=function(){
        clearInterval(t)
    }
    banners.onmouseleave=function(){
        t=setInterval(move,3000);
    }

}