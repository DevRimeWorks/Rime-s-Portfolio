document.addEventListener('DOMContentLoaded', function() {
    var portfolioLinks = document.querySelectorAll('.portfolio-navigate');
    var heroButton = document.querySelector('.hero-button');
    var portfolioSection = document.querySelector('#portfolio');
    

    var processLinks = document.querySelectorAll('.process-navigate');
    var processSection = document.querySelector('#process');

    var homeLink = document.querySelector('.logo');
    var goTopLink = document.querySelector(".go-top");
    var heroSection = document.querySelector('#hero');

    var contactLinks = document.querySelectorAll('.contact-navigate');
    var contactSection = document.querySelector('#about-contact');

    var offset = 90;
    
    portfolioLinks.forEach(portfolioLink => {
      portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
        var targetPosition = portfolioSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });

    heroButton.addEventListener('click', function(event) {
      event.preventDefault();
      var targetPosition = portfolioSection.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });

    processLinks.forEach(processLink => {
      processLink.addEventListener('click', function(event) {
        event.preventDefault();
        var targetPosition = processSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        var offset = 170;
        var targetPosition = heroSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
    });

    goTopLink.addEventListener('click', function(event){
        event.preventDefault();
        var offset = 170;
        var targetPosition = heroSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
    });

    contactLinks.forEach(contactLink => {
      contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        var targetPosition = contactSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });