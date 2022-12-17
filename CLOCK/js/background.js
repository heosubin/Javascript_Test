const images = ["GenshinImpect1.png","GenshinImpect2.png","GenshinImpect3.png"];
const numberChk2 = images.length;
const number2 = Math.floor(Math.random() * numberChk2);
const genShinImpectImg = images[number2];

const bgImage = document.createElement("img");              // element 항목 생성

bgImage.src =`img/${genShinImpectImg}`;

document.body.appendChild(bgImage);

