const contentData = {
    summary: `<h1>General Summary</h1><p>Hi! I'm a passionate builder. This is my main landing page.</p>`,
    about: `<h1>About Me</h1><p>Details about your background and interests go here.</p>`,
    projects: `<h1>Projects</h1><div id="repo-grid">Loading GitHub projects...</div>`, // We can call fetchRepos() here
    skills: `<h1>Skills</h1><ul><li>Python</li><li>JavaScript</li><li>HTML/CSS</li></ul>`,
    education: `<h1>Education</h1><p>University Name - Degree (2022-2026)</p>`,
    experience: `<h1>Experience</h1><p>Intern at TechCorp - 2025</p>`,
    contact: `<h1>Contact</h1><p>Email: you@example.com</p>`
};

function showContent(section) {
    const mainView = document.getElementById('main-view');
    mainView.innerHTML = contentData[section];
    
    // If user clicks projects, trigger the GitHub fetch we built earlier
    if (section === 'projects') {
        fetchRepos(); 
    }
}