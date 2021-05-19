let btnConvert = document.getElementById('convert')
let inputLink = document.getElementById('inputLink')
let info  = document.getElementById('info')
let download = document.getElementById('download')
let valid = document.getElementById('valid')
let tidakValid = document.getElementById('tidakvalid')
btnConvert.addEventListener('click',function(){
    let id = YouTubeGetID(inputLink.value)
    valid.style.display = 'block'
    valid.setAttribute('src',`https://www.yt-download.org/api/widget/mp3/${id}`)
})

function YouTubeGetID(url){
    let ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
      return ID;
  }
