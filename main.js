Webcam.set({

    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eb1be5NhH/model.json', modelLoaded);

function modelLoaded() {
    console.log("model is loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    var speakData1 = "The first Prediction is" + prediction1;
    var speakData2 = "And The second Prediction is" + prediction2;

    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}
