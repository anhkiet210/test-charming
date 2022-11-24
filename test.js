document.addEventListener("DOMContentLoaded", function () {
  var text = document.querySelector("h1 b");
  var small = document.querySelector("h1 small");
  // charming(text, {
  //     classPrefix:'text'
  // })
  charming(text);
  charming(small);

  var x = anime({
    targets: "h1 b span",
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 2000,
    delay: function (el, i) {
      return i * 50;
    },
    loop: true,
    direction: "linear",
  });
  // var y = anime({
  //     targets: 'h1 small',
  //     // rotate: 360,
  //     opacity: [0, 1],
  //     translateX: [-300, 0],
  //     duration: 2000,

  // })

  small.addEventListener("mouseenter", function () {
    anime.remove(small);
    var y = anime({
      targets: "h1 small span",
      translateY: [-10, 0],
      opacity: [0, 1],
      duration: 500,
      color: "#1f11db",
      delay: function (el, i) {
        return i * 10;
      },
    });
  });

  small.addEventListener("mouseleave", function () {
    anime.remove(small);
    var z = anime({
      targets: "h1 small span",
      translateY: [-10, 0],
      color: "#000000",
      opacity: [0, 1],
      duration: 500,
      delay: function (el, i) {
        return i * 10;
      },
    });
  });
});
