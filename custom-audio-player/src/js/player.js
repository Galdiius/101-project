document.addEventListener('DOMContentLoaded',()=>{startplayer()})
let player;
let durasi;
let volume = document.getElementById('volume')
let jumlahBaris=1;
let textLirik;
let nameFile;
let textarea;

var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
};
function startplayer(){
    player = document.getElementById('music_player')
    nameFile = player.src.split('/').pop().split('.')
    nameFile.pop()
    nameFile=decodeURIComponent(nameFile.join('.'))+'.lrc';
    durasi = document.getElementById('duration')
    volume.value = player.volume * 100
    durasi.min = 0
    durasi.value = 0
    durasi.max = player.duration
    player.onplaying = function(e){
        setInterval(function(){
            if(!e.srcElement.paused){
                textarea = document.querySelectorAll('textarea');
                textare = Array.from(textarea).reverse();
                textarea.forEach((v,k)=>{
                    let v2 = typeof textarea[k+1]!='undefined'?textarea[k+1].dataset.time:parseFloat(player.currentTime)+1;
                    if(parseFloat(v.dataset.time)<parseFloat(player.currentTime)&&v2>=player.currentTime){
                        v.classList.add('border')
                        v.classList.add('border-danger')
                    }else{
                        v.classList.remove('border')
                        v.classList.remove('border-danger')
                    }
                })
            }
            durasi.value = player.currentTime
        },1000)
    }
    player.controls = false
}
function play(){
    document.querySelectorAll('.pause').forEach(node=>{
        node.style.display = "block"
    })
    document.querySelectorAll('.play').forEach(node=>{
        node.style.display = "none"
    })
    player.play()
}
function pause(){
    document.querySelectorAll('.play').forEach(node=>{
        node.style.display = "block"
    })
    document.querySelectorAll('.pause').forEach(node=>{
        node.style.display = "none"
    })
    player.pause()
}
function stop(){
    document.querySelectorAll('.play').forEach(node=>{
        node.style.display = "block"
    })
    document.querySelectorAll('.pause').forEach(node=>{
        node.style.display = "none"
    })
    player.pause()
    player.currentTime = 0
}
function go(){
    player.pause;
    player.currentTime = durasi.value
    play();
}
function volumeChange(){
    let normalized = volume.value / 100
    player.volume = normalized
}
function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}
function addlirik() {
    let ctime = player.currentTime
    let time = parseInt(ctime)
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    let sisa = ctime.toString().split('.')[1].substr(0,3)
    finalTime+='.'+sisa;
    let form = document.createElement('div')
    form.innerHTML = `
    <input type="hidden" value="${finalTime}" class="minutes">
    <div class="form-floating bg-transparent mb-3">
        <textarea class="form-control bg-transparent text-light lirik" data-time="${ctime}" id="floatingInput_${jumlahBaris}" style="height: 90px"></textarea>
        <label for="floatingInput_${jumlahBaris}" class="bg-transparent">${finalTime}</label>
    </div>`;
    jumlahBaris++;
    document.querySelector('.card-body').appendChild(form);
}
function simpan(){
    pause()
    let minutes = document.querySelectorAll('.minutes');
    let lirik=document.querySelectorAll('.lirik')
    textLirik = '';
    minutes.forEach((v,k)=>{
        textLirik+=`[${minutes[k].value}]${lirik[k].value}\r\n`;
    })
    document.getElementById('preview-div').style.display = "block"
    document.getElementById('preview-lirik').innerHTML = textLirik.replace(/\r\n/g, '<br>');
}

function download_lirik(){
    var link = document.createElement('a');
    link.setAttribute('download', nameFile);
    link.href = makeTextFile(textLirik);
    document.body.appendChild(link);
    
    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
}