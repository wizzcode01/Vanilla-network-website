
  const ticker = document.querySelector('.ticker');
  ticker.addEventListener('mouseover', () => ticker.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseout', () => ticker.style.animationPlayState = 'running');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('zoomed-in');
        }else {
            entry.target.classList.remove('zoomed-in')
        }
    });
}, {
    threshold: 0.3
});

const zoomElement = document.querySelector('.learn-img')
observer.observe(zoomElement);

// document.querySelectorAll('*').forEach(el => {
//   if (el.scrollWidth > el.clientWidth) {
//     el.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // Light red
//     console.log('Overflowing:', el);
//   }
// });

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const sidebar = document.querySelector(".mobile-sidebar");

    toggler.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });

    // Optional: close sidebar when clicking a link
    document.querySelectorAll(".mobile-sidebar .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("show");
      });
    });

    // Optional: close when clicking outside
    document.addEventListener("click", function (e) {
      if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
        sidebar.classList.remove("show");
      }
    });
  });


