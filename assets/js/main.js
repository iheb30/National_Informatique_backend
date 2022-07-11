/**
* Template Name: Company - v4.7.0
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });



/****************************************************************
 * Header
 * **************************************************************
 */








/****************************************************************
 * Body
 * **************************************************************
 */

 
  // var exampleModal = document.getElementById('exampleModal')
  // exampleModal.addEventListener('show.bs.modal', function (event) {
  //   // Button that triggered the modal
  //   var button = event.relatedTarget
  //   // Extract info from data-bs-* attributes
  //   var recipient = button.getAttribute('data-bs-whatever')
  //   // If necessary, you could initiate an AJAX request here
  //   // and then do the updating in a callback.
  //   //


  //   // let bouton1 = document.getElementById('bouton1');
  //   // let h4 = document.querySelector('h4')
  //   // h4.after(show.bs.modal);
    
    
  //   // Update the modal's content.
  //   var modalTitle = exampleModal.querySelector('.modal-title')
  //   var modalBodyInput = exampleModal.querySelector('.modal-body input')

  //   modalTitle.textContent = 'Réparer mon PC'
  //   modalBodyInput.value = modalBodyInput.innerHTML;
  // });

  
  

  
  // let bouton10 = document.getElementById('bouton2');
  // bouton10.addEventListener('click', () => {
  //   window.location.href = `https://prestaplus.com/`;
  // }, false)



  // let lists = {
  //     computer: ['Diagnostic de votre appareil',
  //       'Changement d’écran', 
  //       'Changement du connecteur de charge',
  //       'Changement de clavier', 
  //       'Changement de disque dur',
  //       'Remplacement du disque par SSD',
  //       'Remplacement de ventilateur',
  //       'Remplacement de batterie',
  //       'Rajoue de la pâte thermique',
  //       'Rajoue de mémoire Vive',  
  //       'Installation d’Anti-Virus',
  //       'Installation du Système d’Exploitation', 
  //       'Sauvegarde de données'],
  //     tablette: ['Appareil photo arrière /avant', 
  //     'Batterie',
  //     'Bouton de Démarrage', 
  //     'Bouton de volume', 
  //     'Connecteur de charge',
  //     'Ecran',
  //     'Vitre Tactile'],
  // }

  // let parent = document.getElementById("parent");
  // let enfant = document.getElementById("enfant");

  // for(key in lists){
  //     parent.innerHTML = parent.innerHTML + '<option>' + key + '</option>'
  // }

  // parent.addEventListener('change', (e) => {
  //   enfant.innerHTML = ''
  //   item = e.target.value
  //     if(item in lists){
  //       for(i = 0; i < lists[item].length; i++) {
  //         enfant.innerHTML = enfant.innerHTML + '<option>'+ lists[item][i] + '</option>';
  //       }
  //     }
  // })










  // let bouton = document.getElementById('bouton')
  // let form = document.getElementById('myForm')
  // let formulaire = document.getElementById('formulaire')
  
  // bouton.addEventListener('click', () => {
    

  //   if(form.style.display === 'none'){
  //     form.style.display = 'block';
  //     if (window.matchMedia("(min-width: 1100px)").matches) {
  //       form.style.width = "350px";
  //       formulaire.style.width = "350px";
  //     } else {
  //       form.style.width = "250px";
  //       formulaire.style.width = "250px";
  //     }
  //   }else {
  //     form.style.display = 'none';
  //   }
  // });


  // let bouton2 = document.getElementById('bouton2')
  // let form2 = document.getElementById('popupForm2')
  // let formid = document.getElementById('formid') 
  // let formulaire2 = document.getElementById('formulaire2')


  // bouton2.addEventListener('click', () => {

  //   if(form2.style.display === 'none'){
  //     form2.style.display = 'block';
  //     if (window.matchMedia("(min-width: 1100px)").matches) {
  //       form2.style.width = "350px";
  //       formulaire2.style.width = "350px";
  //       formid.style.width = "350px";
  //     } else {
  //       form2.style.width = "250px";
  //       formulaire2.style.width = "250px";
  //       formid.style.width = "250px";
  //     }
  //   }else {
  //     form2.style.display = 'none';
  //   }
  // });




    /**
   * Testimonials slider
   */
     new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });






})()




