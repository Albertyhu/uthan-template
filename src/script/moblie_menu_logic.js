    console.log("mobile menu logic")
    const MobileToggler = document.getElementById("mobile-nav-toggler")
    const CloseBtn= document.getElementById("close-btn")
    const MobileMenu = document.getElementById("mobile-menu")
    const BackDrop = document.getElementById('backdrop')

    const OpenMenu = () =>{
        if(MobileMenu?.classList.contains("mobile-menu-close")){
            MobileMenu?.classList.remove("mobile-menu-close")
            Backdrop?.classList.add("backdrop-visible")
        }
        else{
            MobileMenu?.classList.add("mobile-menu-close")
            Backdrop?.classList.remove("backdrop-visible")
        }
    }

    MobileToggler?.addEventListener('mousedown', OpenMenu)

    const CloseMenu = () =>{
        console.log("close menu")
        if(!MobileMenu?.classList.contains("mobile-menu-close")){
            MobileMenu?.classList.add("mobile-menu-close")
            BackDrop?.classList.remove("backdrop-visible")
        }
    }
    CloseBtn?.addEventListener('mousedown', CloseMenu)
    const CheckIfClickedOutside = (event) =>{
        if(!MobileMenu?.classList.contains("mobile-menu-close") 
            && !MobileToggler?.contains(event.target)
            && !MobileMenu?.contains(event.target)
        ){
            MobileMenu?.classList.add("mobile-menu-close")
            Backdrop?.classList.remove("backdrop-visible")
        }
    }
    window.addEventListener("mousedown", CheckIfClickedOutside)