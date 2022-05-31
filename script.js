let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");

let numOfFiles = document.getElementById("num-of-files");
let info = [];
let arr = [];
let imageSelector = document.getElementById("camera");

let firstImageContainer = document.createElement("div");
firstImageContainer.setAttribute("id", "images");
let labelll = document.createElement("label");
labelll.setAttribute("id", "camera");
labelll.setAttribute("class", "cameraLabel");
labelll.setAttribute("for", "file-input");
console.log(labelll);

let imggg = document.createElement("img");
imggg.setAttribute("class", "cameraImage");
imggg.setAttribute("src", "camera.png");

let ppp = document.createElement("p");
ppp.setAttribute("id", "num-of-files");
ppp.innerHTML = "0/7";

labelll.appendChild(imggg);
labelll.appendChild(ppp);

firstImageContainer.appendChild(labelll);
console.log(firstImageContainer);

function preview() {
  //   console.log("ddd");
  //모든 자식 노드를 삭제

  if (info.length >= 7) {
    alert("더 이상 사진을 업로드 할 수 없어요.");
    return;
  }
  imageContainer.innerHTML = "";
  //   console.log(fileInput);

  // 파일 업로드한 이미지를 info 배열에 넣습니다.
  for (i of fileInput.files) {
    info = [...info, i];
  }
  if (info.length > 7) {
    alert("사진 갯수를 확인해주세요.");
    // console.log(firstImageContainer);
    // imageContainer = firstImageContainer;
    // info = [];
    location.reload();
    return;
  }
  numOfFiles.textContent = `${info.length}/7`;
  imageContainer.appendChild(imageSelector);
  //   for (i of info) {
  info.forEach((i, index) => {
    let reader = new FileReader();

    let figure = document.createElement("figure");
    let figCap = document.createElement("figcaption");
    let deleteImage = document.createElement("div");
    deleteImage.setAttribute("id", "deleteImage");
    let ImageWrapper = document.createElement("div");
    deleteImage.innerHTML = "✕";
    deleteImage.onclick = function (e) {
      //   console.log(ImageWrapper);
      //   console.log(index);
      //   console.log(info);
      info = [...info.slice(0, index), ...info.slice(index + 1)];
      console.log(info);
      console.log(ImageWrapper);
      review();
      return;
      //   while (ImageWrapper.hasChildNodes()) {
      //     console.log(ImageWrapper.firstChild);
      //     ImageWrapper.removeChild(ImageWrapper.firstChild);
      //   }
      //   console.log(ImageWrapper);
    };

    ImageWrapper.setAttribute("id", "ImageWrapper");
    // figCap.innerText = i.name;
    figure.appendChild(figCap);

    reader.onload = () => {
      let img = document.createElement("img");
      arr = [...arr, reader.result];
      //   console.log(arr);
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, figCap);
    };
    // console.log(figure);
    ImageWrapper.appendChild(figure);
    ImageWrapper.appendChild(deleteImage);
    // imageContainer.appendChild(figure);
    // imageContainer.appendChild(deleteImage);
    imageContainer.appendChild(ImageWrapper);
    reader.readAsDataURL(i);
  });
  console.log(info);
  //   }
  //   console.log(imageContainer);
}

// preview 에서
// for (i of fileInput.files) {
//     info = [...info, i];
//   }
// 때문에 delete를 해도 원래 배열에서 delete을 하고난 배열이 추가되는 에러가
// 발생하여 위 코드를 제거한 review 함수를 따로 만들어주었다.
function review() {
  //   console.log("ddd");
  //모든 자식 노드를 삭제

  if (info.length >= 7) {
    alert("더 이상 사진을 업로드 할 수 없어요.");
    return;
  }
  imageContainer.innerHTML = "";
  //   console.log(fileInput);

  // 파일 업로드한 이미지를 info 배열에 넣습니다.

  if (info.length > 7) {
    alert("사진 갯수를 확인해주세요.");
    // console.log(firstImageContainer);
    // imageContainer = firstImageContainer;
    // info = [];
    location.reload();
    return;
  }
  numOfFiles.textContent = `${info.length}/7`;
  imageContainer.appendChild(imageSelector);
  //   for (i of info) {
  info.forEach((i, index) => {
    let reader = new FileReader();

    let figure = document.createElement("figure");
    let figCap = document.createElement("figcaption");
    let deleteImage = document.createElement("div");
    deleteImage.setAttribute("id", "deleteImage");
    let ImageWrapper = document.createElement("div");
    deleteImage.innerHTML = "✕";
    deleteImage.onclick = function (e) {
      //   console.log(ImageWrapper);
      //   console.log(index);
      //   console.log(info);
      info = [...info.slice(0, index), ...info.slice(index + 1)];
      console.log(info);
      console.log(ImageWrapper);
      review();
      return;
      //   while (ImageWrapper.hasChildNodes()) {
      //     console.log(ImageWrapper.firstChild);
      //     ImageWrapper.removeChild(ImageWrapper.firstChild);
      //   }
      //   console.log(ImageWrapper);
    };

    ImageWrapper.setAttribute("id", "ImageWrapper");
    // figCap.innerText = i.name;
    figure.appendChild(figCap);

    reader.onload = () => {
      let img = document.createElement("img");
      arr = [...arr, reader.result];
      //   console.log(arr);
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, figCap);
    };
    // console.log(figure);
    ImageWrapper.appendChild(figure);
    ImageWrapper.appendChild(deleteImage);
    // imageContainer.appendChild(figure);
    // imageContainer.appendChild(deleteImage);
    imageContainer.appendChild(ImageWrapper);
    reader.readAsDataURL(i);
  });
  console.log(info);
  //   }
  //   console.log(imageContainer);
}
