//https://teachablemachine.withgoogle.com/models/v3TfDF_2B/

function startSound() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/v3TfDF_2B/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_resultsLabel").innerHTML = 'The sound is: ' + results[0].label;
        document.getElementById("confidence_results").innerHTML = 'Accuracy: ' + (results[0].confidence * 100).toFixed(2) + " %";

        document.getElementById("sound_resultsLabel").style.color = "rgb("+ r +","+ g +", "+ b +" )";
        document.getElementById("confidence_results").style.color = "rgb("+ r +","+ g +", "+ b +" )";

        img1 = document.getElementById("catImage.png");
        img2 = document.getElementById("dogImage.png");
        img3 = document.getElementById("cowImage.png");

        if(results[0].label == "cat"){
            img1.src = 'catGif.gif';
            console.log("img1");
            img3.src = 'dogImage.png';
            img2.src = 'cowImage.png';
            
        }
          else if(results[0].label == "cow"){
            img1.src = 'catImage.png';
            img3.src = 'dog.gif';
            console.log("img1");
            img2.src = 'cowImage.png';
            
        }
        else if(results[0].label == "dog"){
            img1.src = 'catImage.png';
            console.log("img1");
            img3.src = 'dogImage.png';
            img2.src = 'cow.gif';
            
        }
        else{
            console.log("background");
        }
    }
}