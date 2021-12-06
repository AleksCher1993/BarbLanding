function configWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    configWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
// ----------------для footer-------------------
let dateNow = document.querySelector(".dateNow");
let now = new Date();
dateNow.innerHTML = now.getFullYear();
;
// ----------------кнопка вверх начало блока-------------------
const btnToUp = document.getElementById("btnToUp");
const canvas = btnToUp.firstElementChild;
const ctx = canvas.getContext("2d");
obj = {
  w: "110",
  h: "110",
  linew: 6,
  bgnorm: "rgba(0, 0, 0, 0)",
  bghover: "#DFC195",
  bgline: "#C59554",
  bghov: "#F8F9F9",
};
btnToUp.hidden = true;
canvas.width = obj.w;
canvas.height = obj.h;

ctx.moveTo(0, 0);
ctx.save();

ctx.beginPath();
ctx.arc(
  canvas.width / 2,
  canvas.height / 2,
  canvas.width / 2,
  0,
  (Math.PI / 180) * 360
);
ctx.lineWidth = obj.linew;
ctx.fillStyle = obj.bgnorm;
ctx.fill();
ctx.restore();

ctx.moveTo(canvas.width / 4.5, canvas.height / 2.2);
ctx.lineTo(canvas.width / 2, canvas.height / 5);
ctx.lineTo(canvas.width / 1.3, canvas.height / 2.2);
ctx.lineWidth = obj.linew;
ctx.strokeStyle = obj.bghover;
ctx.stroke();

ctx.restore();
ctx.moveTo(canvas.width / 4.5, canvas.height / 1.4);
ctx.lineTo(canvas.width / 2, canvas.height / 2.2);
ctx.lineTo(canvas.width / 1.3, canvas.height / 1.4);
ctx.lineWidth = obj.linew;
ctx.stroke();

canvas.addEventListener("mouseenter", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.moveTo(0, 0);
  ctx.save();

  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    0,
    (Math.PI / 180) * 360
  );
  ctx.fillStyle = obj.bghov;
  ctx.fill();
  ctx.restore();

  ctx.moveTo(canvas.width / 4.5, canvas.height / 2.2);
  ctx.lineTo(canvas.width / 2, canvas.height / 5);
  ctx.lineTo(canvas.width / 1.3, canvas.height / 2.2);
  ctx.strokeStyle = obj.bgline;
  ctx.lineWidth = obj.linew;
  ctx.stroke();

  ctx.restore();
  ctx.moveTo(canvas.width / 4.5, canvas.height / 1.4);
  ctx.lineTo(canvas.width / 2, canvas.height / 2.2);
  ctx.lineTo(canvas.width / 1.3, canvas.height / 1.4);
  ctx.fillStyle = obj.bgline;
  ctx.lineWidth = obj.linew;
  ctx.stroke();
});
canvas.addEventListener("mouseleave", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(0, 0);
  ctx.save();

  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    0,
    (Math.PI / 180) * 360
  );
  ctx.fillStyle = obj.bgnorm;
  ctx.fill();
  ctx.restore();

  ctx.moveTo(canvas.width / 4.5, canvas.height / 2.2);
  ctx.lineTo(canvas.width / 2, canvas.height / 5);
  ctx.lineTo(canvas.width / 1.3, canvas.height / 2.2);
  ctx.lineWidth = obj.linew;
  ctx.strokeStyle = obj.bghover;
  ctx.stroke();

  ctx.restore();
  ctx.moveTo(canvas.width / 4.5, canvas.height / 1.4);
  ctx.lineTo(canvas.width / 2, canvas.height / 2.2);
  ctx.lineTo(canvas.width / 1.3, canvas.height / 1.4);
  ctx.lineWidth = obj.linew;
  ctx.strokeStyle = obj.bghover;
  ctx.stroke();
});
btnToUp.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener("scroll", function () {
  btnToUp.hidden = pageYOffset < document.documentElement.clientHeight;
});
// ------------------кнопка вверх конец блока--------------
;

// ----------------------активная кнопка навигации---------------
const activeBtnOfMenu=document.getElementById('selectNavMenu')
activeBtnOfMenu.addEventListener('click',function (e) {
    const t=e.target;
    const a=this.querySelectorAll('a')
    a.forEach((elem)=>{
        elem.classList.remove('active')
    })

    if (t.closest('a')) {
        t.classList.toggle('active')
    }
})

