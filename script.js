const contentData = {
    summary: `<section id="summary">
                    <h1>Hi, I am Saranya Prabhu</h1>
                    <h3>Software Engineer | Python Developer | ML/AI Engineer | Automation Test Engineer</h3>
                    <br>
                    <p>Self-driven, quick starter, passionate programmer with curious mind
                    who enjoys solving a complex and challenging real-world problems.</p>
                    <p>
                    AI/ML Engineer focused on building robust infrastructure and automated workflows for machine learning. 
                    Expert in MLOps practices, including CI/CD for ML, model monitoring, and hands-on expertise in pandas, scikit-learn, 
                    tensorflow and matplotlib. Highly skilled in optimizing specific models, e.g., LLMs or CNNs for high-throughput production 
                    environments and ensuring seamless model lifecycle management. 
                    </p>
                    <div class="social-icons">
                    <a href="https://www.linkedin.com/in/saranya-prabhu-9066404a/" target="_blank">
                        <img src="logos/linkedin.png" alt="LinkedIn">
                    </a>
                    <a href="https://github.com/saraprabs" target="_blank">
                        <img src="logos/github.png" alt="GitHub">
                    </a>
                    </div>  
                    `,
    about: `<h1>About Me</h1><p>I am a Software Engineering graduate buiding a carreer in Python, Machine Learning and AI. 
                        Holding a Master's degree in Software Engineering has provided me with a deep foundation in core computer
                         science—specifically in Operating systems, Software Design, Software Testing, OOPS concepts, DBMS, C++, Java, 
                         Data Structures, Software Metrics and Software Process Improvement .
                         </p>
                         <p>
                         Currently, I leverage my expertise in Python to build scalable web applications using Django and integrate 
                         Machine Learning models to drive data-driven decision making. I am passionate about bridging the gap between 
                         complex backend architecture and intelligent predictive analytics to solve real-world buisness challenges.
                        </p>
                        <p>Detail-oriented and proactive QA professional with hands-on experience in manual testing, including designing 
                        and executing test cases, maintaining test logs, and managing defect reports. Demonstrated ability to collaborate 
                        with cross-functional teams to ensure software quality and deliver reliable, bug-free products. Eager to leverage 
                        both manual and automated testing skills in dynamic software development environments.
                        </p>`,
    projects: `<h1>Projects</h1>
    <div><h1>Machine Learning and Django Project</h1>
    <p>Machine learning and DJango project that uses ML trained model to predict survival of passengers in historical TITANIC Dataset. 
    Uses Django framework that uses forms to get passenger details from user and predicts survival using ML model and shows results to user. 
    Prediction details and passenger results are saved in the database.</p>
    <h2>Techstack</h2>
    <p> Python, Django, Scikit-learn, Pandas, Pickle, SQL, Pytest, Miniconda, Github </p>
    </div>
    <div class="social-icons">
                    <a href="https://github.com/saraprabs/Machine_Learning_Django_project" target="_blank">
                        <img src="logos/github.png" alt="GitHub">
                    </a>
                    </div> 
    <div><h1>Deep Learning- Object Detection Using YOLO</h1>
    <p>A custom Deep Learning-based Object Detection System trained to identify and localize three everyday objects: Red Cups, Blue Bottles, and Mobile Phones.

The system utilizes the YOLO (You Only Look Once) architecture, specifically optimized for real-time inference on edge devices and standard CPUs. By training on 
a custom-curated dataset, the model achieves high precision in varied indoor environments, making it suitable for IoT integration, inventory tracking, or smart 
home applications.</p>
    <h2>Techstack</h2>
    <p> Python, Roboflow, ultralytics, Computer Vision cv2, matplotlib, Miniconda, Github </p>
    </div>
    <div class="social-icons">
                    <a href="https://github.com/saraprabs/Object-Detection-System-using-YOLO/" target="_blank">
                        <img src="logos/github.png" alt="GitHub">
                    </a>
                    </div>
                    `,
    skills: `<h1>Skills</h1>
                <h2>Languages and Databases</h2>
                <ul>
                <li>Python</li>
                <li>C#</li>
                <li>MySQL</li>
                <li>HTML</li>
                <li>CSS</li>
                </ul>
                <h2>Libraries</h2>
                <ul>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>PyTest</li>
                <li>OpenCV</li>
                <li>Scikit-learn</li>
                <li>matplot-lib</li>
                </ul>
                <h2>Frameworks</h2>
                <ul>
                <li>Django</li>
                <li>Playwright</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                </ul>
                <h2>Others</h2>
                <ul>
                <li>GitHub</li>
                <li>AWS</li>
                </ul>
                `,
    education: `<h1>Education</h1>
    <h2>University </h2>
    <p>Masters in Software Engineering (2004-2009)
    <br><i><small>Vellore Institute of technology, Vellore, India.</i></small> </p>
    <h2>Courses and Study Programmes </h2>
    <p>Python and AI (Dec 2025 - May 2026)
    <br><i><small>Lexicon utbildning by arbetsförmedlingen</i></small> </p>
    <h2>Certifications </h2>
    <p>ISTQB Certification ctfl4.0
    <br><i><small>Swedish Software Testing Board, 2025</i></small> </p>
    <p>Programming in Python
    <br><i><small>META Coursera, 2025</i></small> </p>
    `,
    experience: `<h1>Experience</h1>
    <p>I bring in three years of professional experience as a QA specialist,
     with hands-on experience in functional, integration and system testing across 
     various projects.This background allows me to write inherently testable, high-quality 
     code and implement streamlined processes from the start of the development lifecycle. 
     <br><i><small>QA Engineer, Cognizant Technology Solutions, Chennai</i></small>
    </p>`,
    contact: `<h1>Contact</h1><div class="social-icons">
                    <a href="mailto: vsaranya04@gmail.com" title="mailto: vsaranya04@gmail.com")>
                    
                        <img src="logos/email_icon.png" alt="Email me">
                    </a>
                    </div>`
};

function showContent(section) {
    const mainView = document.getElementById('main-view');
    // Smoothly update the content
    mainView.style.opacity = 0; // Quick fade out
    
    
        mainView.innerHTML = contentData[section];
        mainView.style.opacity = 1; // Fade back in
        // If user clicks projects, trigger the GitHub fetch we built earlier
        if (section === 'projects') {
            fetchRepos(); 
        }
}
// THIS IS THE KEY: Load the index (summary) content as soon as the page opens
window.onload = () => {
    showContent('summary');
};

/*async function fetchRepos() {
    const username = 'saraprabs'; // <--- CHANGE THIS
    const repoGrid = document.getElementById('repo-grid');

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await response.json();

        // Clear the "Loading" text
        repoGrid.innerHTML = '';

        // Loop through the first 6 repositories
        repos.slice(0, 6).forEach(repo => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description provided.'}</p>
                <div class="repo-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                </div>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            repoGrid.appendChild(card);
        });
    } catch (error) {
        repoGrid.innerHTML = '<p>Failed to load projects. Check your username!</p>';
        console.error(error);
    }
}
*/