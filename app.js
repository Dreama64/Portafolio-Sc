// Configuración: Reemplaza con tu usuario exacto de GitHub si es distinto
const username = 'Dreama64'; 

async function getGitHubRepos() {
    const projectsContainer = document.getElementById('github-projects');
    
    try {
        // Consultamos la API pública de GitHub ordenada por los creados más recientemente
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=6`);
        
        if (!response.ok) {
            throw new Error('No se pudieron cargar los proyectos');
        }
        
        const repos = await response.json();
        
        // Limpiamos el mensaje de "Cargando..."
        projectsContainer.innerHTML = '';
        
        // Si no hay repositorios públicos
        if (repos.length === 0) {
            projectsContainer.innerHTML = '<p class="cargando">No se encontraron repositorios públicos.</p>';
            return;
        }

        // Iteramos sobre los repositorios devueltos y creamos sus tarjetas
        repos.forEach(repo => {
            // Ignoramos los forks para mostrar solo tus proyectos propios
            if (repo.fork) return;

            const card = document.createElement('article');
            card.className = 'proyecto__tarjeta';

            // Si el proyecto no tiene descripción, ponemos un texto amigable por defecto
            const descripcion = repo.description ? repo.description : 'Proyecto de desarrollo web sin descripción detallada aún.';
            
            // Si tiene un lenguaje principal (ej: React, JavaScript, HTML), lo mostramos
            const lenguajeTag = repo.language ? `<span class="proyecto__tag">${repo.language}</span>` : '';

            card.innerHTML = `
                <h3 class="proyecto__nombre">${repo.name}</h3>
                <p class="proyecto__descripcion">${descripcion}</p>
                <div class="proyecto__footer-card">
                    <div class="proyecto__tags">
                        ${lenguajeTag}
                    </div>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="proyecto__link-repo">
                        Ver Código &rarr;
                    </a>
                </div>
            `;
            
            projectsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error:', error);
        projectsContainer.innerHTML = '<p class="cargando">Hubo un error al conectar con GitHub. Inténtalo más tarde.</p>';
    }
}

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', getGitHubRepos);