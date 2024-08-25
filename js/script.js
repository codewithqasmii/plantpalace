const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarCloser = document.querySelector(".sidebarCloser");

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }   

    // js code for toggle dark and light mode
    modeToggle.addEventListener("click", () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep the selected settings 
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }
        else{
            localStorage.setItem("mode", "dark-mode");
        }
    });

    // js code for toggle search box
    searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");
    });

    // js code for toggle sidebar 
    sidebarOpen.addEventListener("click", () =>{
        nav.classList.add("active");
    });
    body.addEventListener("click", e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
    });


// for active link
const currentUrl = window.location.href;
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});