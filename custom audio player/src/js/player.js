document.addEventListener('DOMContentLoaded',()=>{startplayer()})
let player;
let durasi;
let volume = document.getElementById('volume')

function startplayer(){
    
    player = document.getElementById('music_player')
    durasi = document.getElementById('duration')
    volume.value = player.volume * 100
    durasi.min = 0
    durasi.value = 0
    durasi.max = player.duration
    player.onplaying = function(){
        setInterval(function(){
            durasi.value = player.currentTime
        },1000)
    }
    player.controls = false
}
function play(){
    document.getElementById('pause').style.display = "block"
    document.getElementById('play').style.display = "none"
    player.play()
}
function pause(){
    document.getElementById('play').style.display = "block"
    document.getElementById('pause').style.display = "none"
    player.pause()
}
function stop(){
    document.getElementById('play').style.display = "block"
    document.getElementById('pause').style.display = "none"
    player.pause()
    player.currentTime = 0
}
function go(){
    player.currentTime = durasi.value
    player.play()
}
function volumeChange(){
    let normalized = volume.value / 100
    player.volume = normalized
}