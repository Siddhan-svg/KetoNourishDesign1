gsap.from('.logo', { duration: 1, opacity: 0, delay:1 })
gsap.from('.title', { duration: 2, opacity: 0, delay:2 })
gsap.from('.tagline', { duration: 3, opacity: 0, delay:3 })
gsap.from('#model', { duration: 4, opacity: 0, delay:4 })
gsap.from('#desc', { duration: 5, x:'-400%', delay:5, ease:'power2.out'})

// const timeline = gsap.timeline({defaults: {duration:1}})
// timeline
// .from('.logo', { opacity: 0, delay:1 })
// .from('.title', {  opacity: 0, delay:1 })
// .from('.tagline', {  opacity: 0, delay:1 })
// .from('#model', {  opacity: 0, delay:1 })
// .from('#desc', {  x:'-200%', delay:1, ease:'power2.out'})

var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
  })


  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close");
    const emailForm = document.getElementById("emailForm");

    // Show the modal
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Submit the form
    emailForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        // You can add further processing here, like sending the email using AJAX.
        console.log("Email submitted:", email);
        modal.style.display = "none";
    });
});





