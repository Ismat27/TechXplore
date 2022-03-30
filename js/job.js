const profileSwitch = document.querySelector('.profile-switch');
const profileItems = document.querySelector('.profile-items');

profileSwitch.addEventListener('click', ()=>{
    profileItems.classList.toggle("show-profile-items")
})