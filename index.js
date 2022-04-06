var button = document.querySelectorAll(".number");
var hiddenContent = document.getElementById("end");
var isClickable = false;
var rating;

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", function(){
        for (let index = 0; index < button.length; index++){
            button[index].setAttribute("class", "number");
        }
        this.setAttribute("class", "number-select");
        isClickable = true;
        rating = this.textContent;
    });
}

document.querySelector("#start .submit").addEventListener("click", function(){
    if (isClickable) {
        document.getElementById("start").hidden = true;
        hiddenContent.hidden = false;
        hiddenContent.children[1].textContent = "You selected " + rating + " out of 5";
    }
});