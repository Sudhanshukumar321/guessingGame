let profileIcon = document.querySelector('.profile');
let profile = document.querySelector('.profileHidden');

const showProfile = () =>{
    profile.classList.toggle('profileHidden');
} 

profileIcon.addEventListener('click',showProfile);