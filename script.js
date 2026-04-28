import { contentData } from './content.js';

function showContent(section) {
    const mainView = document.getElementById('main-view');

    // Safety check: make sure the section actually exists in your data
    if (!contentData[section]) {
        console.error(`Section "${section}" not found in contentData!`);
        return;
    }
    // Smoothly update the content
    mainView.style.opacity = 0; // Quick fade out
    
       setTimeout(() => {
        mainView.innerHTML = contentData[section]; 
        mainView.style.opacity = 1;
        // If user clicks projects, trigger the GitHub fetch we built earlier
        if (section === 'projects' && typeof fetchRepos === 'function') {
            fetchRepos(); 
        }
       }, 150);
}
// CRITICAL: Attach it to window so HTML onclicks work
//window.showContent = showContent;
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
