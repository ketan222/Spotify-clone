'use strict'
const notification = document.querySelector(".notification-real");
const whatNew = document.querySelector(".whats-new");
const nav2 = document.querySelector('.nav2');
const boxRight = document.querySelector('.box-right');
const playlistN = document.querySelector('.playlist-n');
const openedPlaylist = document.querySelector('.my-playlist-opened');
const openedPlaylist2 = document.querySelector('.my-playlist-opened2');
const home = document.querySelector('.content');
const homeIcon = document.querySelector('.home');
notification.addEventListener('mouseover',function(){
    whatNew.classList.toggle('display-none');
})
notification.addEventListener('mouseout',function(){
    whatNew.classList.toggle('display-none');
})

boxRight.addEventListener('scroll',function(){
    if(boxRight.scrollTop >320){
        nav2.style.backgroundColor = '#1d1e1f';
        
    }
})
boxRight.addEventListener('scroll',function(){
    if(boxRight.scrollTop<320){
        nav2.style.backgroundColor = 'transparent';
    }
})

homeIcon.addEventListener('click',function(){
    // playlistN.style.backgroundColor = 'transparent';
    openedPlaylist.classList.add('display-none');
    home.classList.remove('display-none');
    homeIcon.classList.remove('not-selected-icon');
    homeIcon.classList.add('selected-icon');
    for(let i = 1; i<=7; i++){
        let playlist = document.querySelector(`.playlist${i}`);
        playlist.style.backgroundColor = 'transparent'
    }
})
for(let i =1; i<=7; i++){
    let playlist = document.querySelector(`.playlist${i}`);
    playlist.addEventListener('click',function(){
        playlist.style.backgroundColor ='#1a1a1a';
        openedPlaylist.classList.remove('display-none');
        home.classList.add('display-none');
        homeIcon.classList.add('not-selected-icon');
        homeIcon.classList.remove('selected-icon');
        
    })
}