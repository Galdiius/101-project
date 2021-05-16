let img = document.getElementsByClassName('img')
let modalImg = document.getElementById("img01")
let modal = document.getElementById("myModal")
let tutup = document.getElementsByClassName('close')[0]
for(let i=0; i<img.length;i++){
    img[i].addEventListener('click',function(e){
        modalImg.setAttribute('src',e.target.src)
        modal.style.display = "block"
        
    })
}
tutup.addEventListener('click',function(){
    modal.style.display = "none"
})