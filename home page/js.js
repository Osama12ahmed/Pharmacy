let btn = document.getElementById('btn')

window.onscroll = function(){
    if(scrollY >= 100){
        btn.style.display = "block"
    }
    if(scrollY <= 100){
        btn.style.display = "none"
    }
}

function up(){
    scroll(0,0)
}