let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/GabrieleeCris')
        const profile = await dataProfile.json()

        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>Who am I?</h1>
                <p>
                Profissional com formação em Gestão de Segurança Privada 
                e uma boa trajetória nessa área. Atualmente, estou em busca de novos
                 desafios e oportunidades na área da Tecnologia, formada no bootcamp da Generatio; Dev FullStack onde encontrei um 
                 crescente interesse e entusiasmo por diversas vertentes, como
                 front-end,segurança cibernética, inteligência artificial,
                   entre outras. Estou determinada a expandir meu conhecimento 
                   em tecnologia e colaborar com profissionais talentosos
                    em um ambiente dinâmico.
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()