function upDate(previewPic){
    //large image is updated with alt text
    var src = previewPic.getAttribute("src");
    document.getElementById("image").style.backgroundImage = "url('" + src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}
   
function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function focus(previewPic){
    upDate(previewPic);
}

function blur(){
    unDo();
}

function listener(){
    options = ['dog.jpg','mini_tulip.jpg','octopus.jpg','penguin.jpg','rabbit.jpg','whale.jpg']
    current = document.querySelectorAll('.preview img')
    for (var i = 0 ; i < current.length ; i++){
        console.log('event triggered');
        //random = "images/" + options[Math.floor(Math.random() * options.length)];
        //current[i].src = random;
        current[i].setAttribute('tabindex','0');
    }
}