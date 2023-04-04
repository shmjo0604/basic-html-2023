// $(document).ready(function() {
//     var slide = $('#slide > img');
//     console.log(slide.length);
//     var current = 0;

//     function showslide(n) {
//         $('#slide > img').each(function(index, element) {
//             $('#slide > img').css("display", "none");
//         })
//         this.css("display", "block"); 
//     }


//     function showslide(n) {
//         for (var i=0; i < slide.length; i++ ) {
//             slide[i].css("display", "none");
//         }
//         slide[n].css("display","block");
//     }

//     showslide(current);

//     $("#prev").click(function () {
//         if(current > 0) {
//             current -= 1;
//         }
//         else {
//             current = slide.length - 1;
//         }
//         console.log(current);
//         showslide(current);
//     });

//     $("#next").click(function () {
//         if(current < slide.length -1) {
//             current += 1;
//         }
//         else {
//             current = 0;
//         }
//         console.log(current);
//         showslide(current);
//     });
// });

var slide = document.querySelectorAll("#slide > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showslide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showslide(n) {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slide.length - 1;
    showslide(current);
}

function nextSlide() {
  if (current < slide.length - 1) current += 1;
  else
    current = 0;
    showslide(current);  
}