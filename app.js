'use strict';
const container = document.getElementById('github-projects');
const statusMessage = document.getElementById('project-status');
const retryButton = document.getElementById('retry-projects');

function createProject(repo) {
    const card = document.createElement('article');
    card.className = 'project';
    if (repo.language) {
        const language = document.createElement('span');
        language.className = 'project-language';
        language.textContent = repo.language;
        card.append(language);
    }
    const title = document.createElement('h3');
    title.textContent = repo.name;
    const description = document.createElement('p');
    description.textContent = repo.description || 'Explora el código y la documentación en GitHub.';
    const link = document.createElement('a');
    link.className = 'text-link';
    link.href = `https://github.com/Dreama64/${encodeURIComponent(repo.name)}`;
    link.textContent = `Ver repositorio: ${repo.name} ↗`;
    card.append(title, description, link);
    return card;
}

async function loadProjects() {
    if (!container) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    container.setAttribute('aria-busy', 'true');
    retryButton.hidden = true;
    statusMessage.textContent = 'Consultando los últimos repositorios de GitHub…';
    try {
        const response = await fetch('https://api.github.com/users/Dreama64/repos?sort=updated&per_page=100&type=owner', {signal: controller.signal});
        if (!response.ok) throw new Error('GitHub no disponible');
        const repos = await response.json();
        if (!Array.isArray(repos)) throw new Error('Respuesta inválida');
        const projects = repos.filter(repo => !repo.fork && typeof repo.name === 'string').slice(0, 6);
        if (projects.length) {
            container.replaceChildren(...projects.map(createProject));
            statusMessage.textContent = `${projects.length} repositorios públicos de Dreama64. Descripciones y lenguajes obtenidos de GitHub.`;
        } else {
            statusMessage.textContent = 'GitHub no devolvió repositorios propios. Puedes revisar el código de este portafolio aquí.';
        }
    } catch {
        statusMessage.textContent = 'No fue posible actualizar la lista. Conservamos los proyectos disponibles; también puedes ver todos los repositorios en GitHub.';
        retryButton.hidden = false;
    } finally {
        clearTimeout(timeout);
        container.setAttribute('aria-busy', 'false');
    }
}
if (container) {
    retryButton.addEventListener('click', loadProjects);
    loadProjects();
}
