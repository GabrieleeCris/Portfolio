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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
                    inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
                    deleniti modi sit laudantium totam!
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