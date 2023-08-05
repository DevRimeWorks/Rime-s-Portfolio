const projects = [
    {
        title: "Ariel Neville's Blog",
        tech1: '<img class="html" src="assets/html.svg" alt="HTML Icon">',
        tech2: '<img class="figma" src="assets/figma.svg" alt="Figma Icon">',
        tech3: '<img class="css" src="assets/css.svg" alt="CSS Icon">',
        tech4: '<img class="js" src="assets/js.svg" alt="JS Icon">',
        topExplanation: 'This is a Personal Blog website that is created for a fictional character named Ariel Neville. It is a completely finished functional project and, of course, responsive, which means mobile-friendly. Here are some properties of this website:',
        eg1: "A slider for Editor's Picked section.",
        eg2: 'Article filtering according to selected categories.',
        eg3: 'Redirecting selected articles to the blog page with their content.',
        eg4: 'Articles You May Like section that brings two articles to the blog page so that users can pick and start to read immediately.',
        viewPorject: '<a href="https://devrimeworks.github.io/Ariel-Neville-s-Blog/" class="button" target="_blank"><span></span>View The Project</a>',
        viewrepo: '<a href="https://github.com/DevRimeWorks/Ariel-Neville-s-Blog" class="repo-btn" target="_blank">Github Repository</a>',
        mockup: '<img src="assets/mockup.png" alt="Project Mockup">'
    }
];

const portfolioContainer = document.querySelector(".portfolio-container");

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        var project = projects[i];

        var projectHTML = `
        <h2>${project.title}</h2>
        <div class="flexbox portfolio-flexbox">
            <div class="project-explanation-and-buttons">
                <div class="used-technologies">
                    ${project.tech1}
                    ${project.tech2}
                    ${project.tech3}
                    ${project.tech4}
                </div>
                <div class="project-explanation">
                    <p class="top-explanation">${project.topExplanation}</p> <br><br>
                    <span>--</span> <p class="eg1">${project.eg1}</p> <br>
                    <span>--</span> <p class="eg2">${project.eg2}</p> <br>
                    <span>--</span> <p class="eg3">${project.eg3}</p> <br>
                    <span>--</span> <p class="eg4">${project.eg4}</p>
                </div>
                <div class="project-buttons">
                    ${project.viewPorject}
                    ${project.viewrepo}
                </div>
            </div>
            <div class="mockup">${project.mockup}</div>
        </div>
        `;

        portfolioContainer.innerHTML += projectHTML;
    }
}

displayProjects();