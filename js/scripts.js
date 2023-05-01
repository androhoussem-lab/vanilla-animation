const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const title = document.querySelector(".title");


onscroll = function(){
    let scroll = this.scrollY;
    console.log(scroll);
    stars.style.left = scroll + "px";
    moon.style.top = scroll * 4 + "px";
    mountains3.style.top = scroll * 2 + "px";
    mountains4.style.top = scroll * 1.5 + "px";
    river.style.top = scroll+ "px";
    boat.style.top = scroll + "px";
    boat.style.left = scroll * 3 + "px";
    
    if(scroll >=68){
        title.style.fontSize = 68 +'px';
        title.style.position = "fixed";
        if(scroll >= 390){
            title.style.display = "none";
        }else{
            title.style.display = "inline-block";
        }
        if(scroll >= 96){
            this.document.querySelector(".header-background").style.background = "linear-gradient(#00b6e7,transparent)"
        }else {
            this.document.querySelector(".header-background").style.background = "linear-gradient(#10001F,transparent)"
        }
    }else{
        title.style.fontSize = scroll +'px';
    }

}