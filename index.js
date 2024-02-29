//Aria-expanded set to false when page opens because menu closed.

//Show menu on.click - toggle show-menu class on .hamburger-menu lement
//when open aria-expanded set to true on button.hamburger-btn
//
//clicking outside of .hamburger-menu closes
//clicking hamburger button closes
//clicking inside does not close
//e.key = escape key should close and focus button.hamburger-btn
//
//

var hamburgerMenu = document.querySelector("ul")
var main = document.querySelector('main')
var foot = document.querySelector('footer')
var hamburgerBtn = document.querySelector ("button.hamburger-btn")
var banner = document.querySelector ("div.banner")


function openMenu(){
    console.log("wtf!")
     hamburgerMenu.classList.remove('hamburger-menu')
     hamburgerMenu.classList.add("hamburger-menu.show-menu")
     hamburgerBtn.setAttribute('aria-expanded', true)
     
}

        
function closeMenu() {
        console.log ("ftw!")
        hamburgerMenu.classList.remove('hamburger-menu.show-menu')    
        hamburgerMenu.classList.add("hamburger-menu")
        hamburgerBtn.setAttribute('aria-expanded', false) 
}

function keyPress (e) {
    if(e.key === "H") {
        console.log ("pretty pretty pretty good")
}
}

document.onkeyup = keyPress

hamburgerBtn.onclick = openMenu


main.onclick = closeMenu

foot.onclick = closeMenu

banner.onclick = closeMenu

document.onkeyup = function(e) {
    if (e.key === '4')
     closeMenu
}

//document.onkeyup = function(e) {
//    if (e.key === 'Escape')
//        closeMenu
//}

//Closeing
//aria expanded = false
//