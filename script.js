document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        const projectsContainer = document.getElementById('projects');
        data.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');
  
          projectCard.innerHTML = `
            <img src="${project.image}.jpg" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            <div class="links">
              <a href="${project.links.view}" target="_blank">View</a>
              <a href="${project.links.code}" target="_blank">Code</a>
            </div>
          `;
  
          projectsContainer.appendChild(projectCard);
        });
      })
      .catch(error => console.error('Error fetching the projects:', error));
  });
  