let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #BA55D3;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #BA55D3;">Soy estudiante y diseño paginas web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
