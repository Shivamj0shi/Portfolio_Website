
//for theme changer

let themeButtons=document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color =>{
    color.addEventListener('click',()=>{
let dataColor=color.getAttribute('data-color');
document.querySelector(":root").style.setProperty('--main-color',dataColor);

    })
})

//for navbar
const linkItems = document.querySelectorAll(".link-item");
const windowPathname=window.location.pathname;
linkItems.forEach(navLink =>{
 const navLinkPathname=new URL(navLink.href).pathname;
    if((windowPathname===navLinkPathname) || (windowPathname==='/index.html' && navLinkPathname ==='/')){
        navLink.classList.add("active");
    }
}

)




