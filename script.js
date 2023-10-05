var submit = document.querySelector("#sub");
var popup = document.querySelector(".popup");
var btn = document.querySelector("#btn");


submit.addEventListener("click", function () {
    popup.style.visibility = "visible"
    popup.style.transform = "scale(1)";
    popup.style.top = "30%";

});

btn.addEventListener("click",function(){
    popup.style.visibility = "hidden"
    popup.style.transform = "scale(0.1)";
    popup.style.top = "0%";

})