//let project1 = document.getElementById("project1");
//project1.onmouseover = function() {
//project1.classList.toggle('hidden');
//};

const menu = document.querySelector(".projects")
menu.addEventListener("click", function (evt) {
    const item = evt.target.closest(".project-overlay")
    if (item) { 
        menu.querySelector(".project-overlay.hidden").classList.remove("hidden")
        item.classList.add("hidden")
    }
})