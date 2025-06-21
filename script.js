let colgenBtn = document.querySelector("#colgen");

colgenBtn.addEventListener("click", () => {
  let myStr = "0123456789ABCDEF";
  let color = ""
  for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * myStr.length);
    let value = myStr.charAt(randomNum);
    color += value
  }
  



  let colorBox = document.querySelector("#color-box");
  colorBox.style.backgroundColor = `#${color}`;
  document.querySelector('#color').innerHTML =` #${color}`
});