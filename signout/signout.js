let signout = document.querySelector('.signout');

const logout = () =>{
    window.location.replace('../index.html');
}

signout.addEventListener('click',logout);