{
    $(".num").each(function(index,val){
    $(this).click(function(){
        $(".inner").animate({"marginLeft":`${-1203*index}px`});
    })
})
    const c4l=document.querySelector(".c4l");
    const c42=document.querySelector(".c42");
    const inner=document.querySelector(".inner");
    let n=0;
    c42.onclick=function(){
        n++;
        c42.classList.remove("disable");
        if(n===4){
            this.classList.add("disable");
        }
        if(n===5){
            n=4;
            return;
        }
        inner.style.marginLeft=-1203*n+"px";
    };
    c4l.onclick=function(){
        n--;
        c42.classList.remove("disable");
        if(n===0){
            c4l.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1203*n+"px";
        console.log(n);
    };
}