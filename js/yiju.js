{
    const imgs=document.querySelectorAll(".trem_left img");
    const trem_left=document.querySelector(".trem_left");
    const next=document.querySelector(".jbox");
    const prev=document.querySelector(".rbox");
    console.dir(imgs);
    let n=0;
    let t=setInterval(move,5000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");

        }
        imgs[n].classList.add("active");

    }
    trem_left.onmouseenter=function(){
        clearInterval(t)
    }
    trem_left.onmouseleave=function(){
        t=setInterval(move,5000);
    }
    next.onclick=function(){
        move();
    };
    prev.onclick=function(){
        n-=2;
        move();
    }
}
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
    let t=setInterval(move,5000);
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
        t=setInterval(move,5000);
    }

}