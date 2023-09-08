let index =0;
let audioelement= new Audio('son/1.mp3');
let play= document.getElementById('play');
let progressbar = document.getElementById('progressbar');
let songitems=Array.from(document.getElementsByClassName('song'));
let t= document.getElementById('time');
let prev=index;
play.addEventListener('click',()=>{
    let gif=document.getElementById(`gif${index}`);
    let s=document.getElementById(`${index}`);
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        gif.style.opacity=1;
        s.classList.remove('fa-play-circle');
        s.classList.add('fa-pause-circle');
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        gif.style.opacity=0;
        s.classList.remove('fa-pause-circle');
        s.classList.add('fa-play-circle');
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(parseInt(audioelement.currentTime));
    progressbar.value= progress;
    playtime();
    if(progressbar.value==100){
        //audioelement.pause();
        let s=document.getElementById(`${index}`);
        s.classList.remove('fa-pause-circle');
        s.classList.add('fa-play-circle');
        let gif=document.getElementById(`gif${index}`);
        gif.style.opacity=0;
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value* audioelement.duration/100;
})
function playtime(){
    let currentMinutes = Math.floor(audioelement.currentTime / 60);
    let currentSeconds = Math.floor(audioelement.currentTime - currentMinutes * 60);
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    t.textContent = currentMinutes + ":" + currentSeconds;  
}
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        let gif=document.getElementById(`gif${index}`);
        gif.style.opacity=0;
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);
        if(prev==index){
            let gif=document.getElementById(`gif${index}`);
            if(audioelement.paused){
                makeallplay();
                gif.style.opacity=1;
                audioelement.src=`son/${index+1}.mp3`;
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioelement.currentTime=0;
                audioelement.play();
                play.classList.remove('fa-play-circle');
                play.classList.add('fa-pause-circle');
            }
            else{
             audioelement.pause();
             gif.style.opacity=0;
             e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            play.classList.remove('fa-pause-circle');
            play.classList.add('fa-play-circle');
            }
        }
        else{
            let gif=document.getElementById(`gif${index}`);
            if(audioelement.paused){
                makeallplay();
                prev=index;
                gif.style.opacity=1;
                audioelement.src=`son/${index+1}.mp3`;
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioelement.currentTime=0;
                audioelement.play();
                play.classList.remove('fa-play-circle');
                play.classList.add('fa-pause-circle');
            }
            else{
             let ngif=document.getElementById(`gif${prev}`);
             let s=document.getElementById(`${prev}`);
             audioelement.pause();
             ngif.style.opacity=0;
            s.classList.remove('fa-pause-circle');
            s.classList.add('fa-play-circle');
            gif.style.opacity=1;
                audioelement.src=`son/${index+1}.mp3`;
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioelement.currentTime=0;
                audioelement.play();
                play.classList.remove('fa-play-circle');
                play.classList.add('fa-pause-circle');
              prev=index;
            }
        }
    })
})
document.getElementById('next').addEventListener('click',()=>{
    makeallplay();
    if(index>=7){
        index=0;
    }
    else{
        index+=1;
    }
    let ngif=document.getElementById(`gif${index}`);
    audioelement.src=`son/${index+1}.mp3`;
    let s=document.getElementById(`${index}`);
    s.classList.remove('fa-play-circle');
    s.classList.add('fa-pause-circle');
    audioelement.currentTime=0;
    ngif.style.opacity=1;
    audioelement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    makeallplay();
    if(index<=0){
        index=7;
    }
    else{
        index-=1;
    }
    let ngif=document.getElementById(`gif${index}`);
    audioelement.src=`son/${index+1}.mp3`;
    let s=document.getElementById(`${index}`);
    s.classList.remove('fa-play-circle');
    s.classList.add('fa-pause-circle');
    audioelement.currentTime=0;
    ngif.style.opacity=1;
    audioelement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
})