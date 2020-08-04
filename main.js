// Медленный скролл с кнопкой//

window.onload = function () {
  //window.scrollTo(x,y)
  var scrolled;
  var timer;

  document.getElementById('obl').onclick = function () {
    scrolled = window.pageYOffset;
    //window.scrollTo(0,0);
    scrollToTop();
  }
  function scrollToTop() {
    if (scrolled>0) {

      window.scrollTo(0, scrolled);
      scrolled = scrolled - 20; //100 - скорость прокрутки - 
      //на сколько пикселей вверх будем прокручивать страницу
      //при каждом цикле, чем меньше число тем медленнее
    timer = setTimeout(scrollToTop, 15) //через 100 милисекунд запускаем 
    //функцию медленной прокрутки. То есть функция все время будет выполнятся 
    //так как это цикл и стремится дойти до нуляю. Чем больше число тем медленнее
    } else {
       clearTimeout(timer);
       window.scrollTo(0,0);
    }

  }
}

// СКРОЛ ВНИЗ //
var t; 
function scrolltop() { 
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop); 
  if (top>0) { window.scrollTo(0, Math.floor(top/20)); 
    t = setTimeout("scrolltop()",5); 
  } else { 
    clearTimeout(t); } return false; }

    //Переменная top равна текущему расстоянию 
    // прокрутки страницы в пикселях. Каждые 30 мс эта 
    //величина уменьшается в 1,5 раза, в итоге плавно достигает нуля. 
    //Это имитация свойства ease-out в CSS анимациях.//


// Функции параллакса //

var layer1 = document.getElementById('layer1')
        scroll = window.pageYOffset;
        document.addEventListener('scroll',
          function (e) {
            var offset = window.pageYOffset;
            scroll = offset;
            layer1.style.width = (80 + scroll) + '%';

          });


var layer2 = document.getElementById('layer2')
          scroll = window.pageYOffset;
          document.addEventListener('scroll',
            function (e) {
              var offset = window.pageYOffset;
              scroll = offset;
              layer2.style.width = (70 + scroll/5) + '%';
              layer2.style.left = scroll/50 + '%';
            });

var text = document.getElementById('text')
          scroll = window.pageYOffset;
          document.addEventListener('scroll',
            function (e) {
              var offset = window.pageYOffset;
              scroll = offset;
              layer2.style.width = (100 + scroll/5) + '%';
              text.style.top = - scroll/20 + '%';
            });

