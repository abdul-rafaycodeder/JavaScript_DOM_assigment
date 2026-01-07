var paragraph = false;

function expent() {
    var fulltext = "This is a long paragraph that can be expanded to show more content when clicked. Here is the additional text that provides more information and details about the topic discussed in the paragraph.";

    if (paragraph === false) {
        document.getElementById("para").innerHTML = fulltext + '<a href="#" onclick="expent()"><em> Click to show less </em></a>';
        paragraph = true;
    } else {
        document.getElementById("para").innerHTML = "This is a short parag.... <a href=\"#\" onclick=\"expent()\"><em>Click for more</em></a>";
        paragraph = false;
    }
}

var images = false;
var imagess = false;


function Click() {

    var img1 = '<img src="./images/bike_image_1.webp" width="200px" alt="">';


    var img2 = '<img src="./images/bike_image_2.webp" width="200px"  alt="">';


    var img3 = '<img src="./images/car_image_1.jpg" width="200px" alt="">';


    if (images === false) {
        document.getElementById("image").innerHTML = img1 + ' <br> <em> Bike Image 1 </em>';
        images = true;
        document.getElementById("btn").innerHTML = " First Image Loaded, click again ";

    } else if (imagess === false) {
        document.getElementById("image").innerHTML = img2 + ' <br> <em> Bike Image 2 </em>';
        imagess = true;
        document.getElementById("btn").innerHTML = " Second Image Loaded ";

    } else {
        document.getElementById("image").innerHTML = img3 + ' <br> <em> Car Image 1 </em>';
        imagess = false;
        document.getElementById("btn").innerHTML = " Third Image Loaded ";
    }


}

var currentImage = 0;

function Click() {

    var images = [
        '<img src="../images/car_image_1.jpg" width="200px"><br><em>Bike Image 1</em>',
        '<img src="../images/bike_image_1.webp" width="200px"><br><em>Bike Image 2</em>',
        '<img src="../images/bike_image_2.webp" width="200px"><br><em>Car Image 1</em>'
    ];

    document.getElementById("image").innerHTML = images[currentImage];

    currentImage++;

    if (currentImage === images.length) {
        currentImage = 0; // repeat from start
    }
}