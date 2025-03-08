TweenLite.set("#petals", {perspective: 600})
TweenLite.set("img", {xPercent:"-50%", yPercent:"-50%"})

var total = 100;
var warp = document.getElementById("petals")
w = window.innerWidth,
h = window.innerHeight;

for(i = 0; i < total; i++){
    var Div = document.createElement('div');
    TweenLite.set(Div, {attr: {class:'dot'}, x:R(0,w), y:R(-200, -150), z:R(-200,200)});
    warp.appendChild(Div);
    anim(Div);
}

function anim(el){
    TweenMax.to(el, R(6,15), {y:h+100, ease:Linear.easeNone, repeat: -1, delay:-15});
    TweenMax.to(el,R(4,8), {x:'+=100', rotationZ:R(0,180), repeat:-1,yoyo:true, ease:SVGLineElement.easeInOut, delay:-5});
    TweenMax.to(el,R(2,8), {rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:SVGLineElement.easeInOut, delayL:-5});
};

function R(min, max){
    return min+Math.random() * (max-min)
};

var typed = new Typed('#text',{
    string: ['Полинка, поздравляю тебя с 8 марта и желаю чтобы в этот ахуенный день солнце светило только для тебя, рости , учись , становись красивее и более женственее, люблю тебя очень сильно '],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var end = document.getElementById("end");
        end.style.opacity = 1;
    }
});