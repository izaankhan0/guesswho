function flipper(imageElement) {
    var cardImage = "./media/card.png";
    var originalImage = imageElement.getAttribute("data-original");
    // imageElement.classList.remove('flip-2')
    // imageElement.classList.remove('flip-1')
    if (imageElement.src.includes("card.png")) {
        imageElement.src = originalImage;
        imageElement.classList.remove('flip-1')
        imageElement.classList.add('flip-2')
    } else {
        imageElement.setAttribute("data-original", imageElement.src);
        imageElement.src = cardImage;
        imageElement.classList.remove('flip-2')
        imageElement.classList.add('flip-1')
    }
}