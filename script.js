function flipper(imageElement) {
    var cardImage = "./media/card.png";
    var originalImage = imageElement.getAttribute("data-original");
    
    if (imageElement.src.includes("card.png")) {
        imageElement.src = originalImage;
    } else {
        imageElement.setAttribute("data-original", imageElement.src);
        imageElement.src = cardImage;
    }
}