document.getElementById("botao").addEventListener("click",function(){
    document.getElementById("text").select()
    document.execCommand('copy')
})
