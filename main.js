prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 95
});

camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version : ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NOQY5t9mR/model.json', modelLoaded);

function modelLoaded() {
    console.log('model loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}



function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
 function gotResult(error, results) {
        if (error) {
            console.error();
        } else {
            console.log(results);
            document.getElementById("result_sign_name").innerHTML = results[0].label;
            prediction_1 = results[0].label;
            speak();

            if (results[0].label == "amazing") {
                document.getElementById("update_emoji").innerHTML = "&#128522;";
            }
            if (results[0].label == "amazing") {
                document.getElementById("update_emoji").innerHTML = "&#128532;";
            }
            if (results[0].label == "victory") {
                document.getElementById("update_emoji").innerHTML = "&#128548;";
            }


        }
    }