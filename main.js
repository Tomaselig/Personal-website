const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section");
const home = document.getElementById("home");
const projects = document.getElementById("Projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

let currentPage = home;

let isMenuShowing = false;

handleRefresh();

function handleRefresh(){
    const prevPageID = sessionStorage.getItem("pageID");

    if (prevPageID){
        [home, projects, about, contact].forEach(section =>{
            if (section.id === prevPageID)
                changepage(section);       
        });
    }
}

function toggleMenu(){

    if (isMenuShowing)
        closeMenu();
    else
        openMenu();
}

function closeMenu(){
    menuButton.classList = "fa fa-bars fa-4x";
    
    menu.style.display = "none";

    mainSection.style.opacity = "1";
    
    isMenuShowing = false;
}

function openMenu(){
    menuButton.classList = "fa fa-times fa-4x";

    menu.style.display = "flex";

    mainSection.style.opacity = "0.3";
    
    isMenuShowing = true;
}

function showHomePage(){
    changepage(home);
}
function showProjectsPage(){
    changepage(projects);
}
function showAboutPage(){
    changepage(about);
}
function showContactPage(){
    changepage(contact);
}

function changepage(newpage){
    if (currentPage !== newpage){
        currentPage.style.display = "none";
        newpage.style.display = "block";
        currentPage = newpage;
    }
    closeMenu();

    sessionStorage.setItem("pageID", currentPage.id);
}