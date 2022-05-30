let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");
let info = [];
let arr = [];
let imageSelector = document.getElementById("camera");

function preview() {
  if (info.length >= 7) {
    alert("더 이상 사진을 업로드 할 수 없어요.");
    return;
  }
  imageContainer.innerHTML = "";
  console.log(fileInput);
  for (i of fileInput.files) {
    info = [...info, i];
  }
  if (info.length >= 7) {
    alert("사진 갯수를 확인해주세요.");
    info = [];
    return;
  }
  numOfFiles.textContent = `${info.length}/7`;
  imageContainer.appendChild(imageSelector);
  for (i of info) {
    let reader = new FileReader();
    let figure = document.createElement("figure");
    let figCap = document.createElement("figcaption");
    // figCap.innerText = i.name;
    figure.appendChild(figCap);

    reader.onload = () => {
      let img = document.createElement("img");
      arr = [...arr, reader.result];
      console.log(arr);
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, figCap);
    };
    console.log(figure);
    imageContainer.appendChild(figure);
    reader.readAsDataURL(i);
  }
}
