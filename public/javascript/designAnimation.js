const allDs = document.querySelectorAll(".ds");
const wfDsWrapper = document.querySelector(".wf-design-wrapper");
const desktopMockup = document.getElementById("desktop-mockup");
const mobileMockup = document.getElementById("mobile-mockup");

var addClasses = ["ds1", "ds2", "ds3", "ds4", "ds5", "ds6", "ds7"];
var chooseClasses = [".ds1", ".ds2", ".ds3", ".ds4", ".ds5", ".ds6", ".ds7"];
var delay;
var unobserve = false;

function toggleOpacity() {
    var randomIndexes = [ Math.floor(Math.random() * 7),  Math.floor(Math.random() * 7),  Math.floor(Math.random() * 7)];

    for (let i = 0; i < allDs.length - 4; i++) {
        const randomPart = allDs[randomIndexes[i]];
        
        if (randomPart.style.opacity == "0") {
            randomPart.style.opacity = 1;
        }
        else {
            randomPart.style.opacity = 0;
        }
    }
  }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
            delay = 0;
            for (let i = 0; i < allDs.length; i++) {
            const ds = allDs[i];
            ds.classList.add(addClasses[i]);

            if (i > 0) {
                delay += 200;
            }

            if (ds.classList.contains(addClasses[i])) {
                ds.style.animationPlayState = "running";
                setTimeout(() => {
                    ds.style.opacity = 1;
                }, 500 + delay);
            }

            if(i == allDs.length - 1) {
                observer.unobserve(wfDsWrapper);
            }
        }
        }, 1000);
      }
    });
  });

observer.observe(wfDsWrapper);

allDs[6].addEventListener("animationend", () => {
    if (allDs[6].style.opacity == 1) { 
        setInterval(toggleOpacity, 4000);
        desktopMockup.style.transform = "translateY(0)";
        desktopMockup.style.opacity = 1;
        mobileMockup.style.transform = "translateX(0)";
        mobileMockup.style.opacity = 1;
    }
});