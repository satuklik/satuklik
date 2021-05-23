$('.alert-linkedin').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">LinkedIn</h1>',
    imageUrl: '../@original/assets/logo-linkedin.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://www.linkedin.com/in/sageriramadhan/">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-facebook').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">Facebook</h1>',
    imageUrl: '../@original/assets/logo-facebook.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://web.facebook.com/sag.ramadhan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-twitter').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">Twitter</h1>',
    imageUrl: '../@original/assets/logo-twitter.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://twitter.com/sagerrii">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-instagram').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">Instagram</h1>',
    imageUrl: '../@original/assets/logo-instagram.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="http://instagram.com/sagerrii">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-github').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">GitHub</h1>',
    imageUrl: '../@original/assets/logo-github.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://github.com/sageriramadhan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-gitlab').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">GitLab</h1>',
    imageUrl: '../@original/assets/logo-gitlab.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://gitlab.com/sageriramadhan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

$('.alert-quora').click(function () {
  Swal.fire({
    title: '<h1 style="font-size: 100%; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)">Quora</h1>',
    imageUrl: '../@original/assets/logo-quora.svg',
    customClass: {
      popup: 'popup-noproject',
      confirmButton: 'confirm-button-noproject',
      cancelButton: 'cancel-button-noproject',
    },
    backdrop: `rgba(13, 13, 13, 0.92)`,
    confirmButtonText: '<a href="https://id.quora.com/profile/Sageri-Ramadhan">Visit</a>',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  });
});

// 🎨THEME ANIMATE DOT🎨

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 25;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.zIndex = -10;
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 25)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [{
        transform: "translate(0, 0)"
      },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`
      }
    ], {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});