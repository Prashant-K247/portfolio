const projects = [
    {
      name: "To-Do App",
      description: "A simple to-do list using localStorage.",
      github: "https://github.com/Prashant-K247/Todo-List.git",
      demo: "https://Prashant-K247.github.io/Todo-List"
    },
    {
      name: "Expense tracker",
      description: "This is a simple and efficient Expense Tracker built using javascript.",
      github: "https://github.com/Prashant-K247/Expense-tracker.git",
      demo: "https://Prashant-K247.github.io/Expense-tracker"
    },
    
  ];
  
  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
  
    card.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">GitHub</a> |
      <a href="${project.demo}" target="_blank">Live Demo</a>
    `;
  
    projectList.appendChild(card);
  });
  