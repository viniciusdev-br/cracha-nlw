function changeSocialMediaLinks() {
    //document.getElementById('userName').textContent = "Chaves"
    //userName.textContent = "OK";
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${links[social]}`
    }
}

function getGithubProfile() {
    const url = `https://api.github.com/users/${links.github}`
    //fetch vai até a url e guarda o seu conteudo em uma resposta e guarda em uma promise

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        bio.textContent = data.bio
        nickNameGithub.textContent = data.login 
        userLink.href = data.html_url
        userImage.src = data.avatar_url
    })
}

const links = {
    github: "viniciusdev-br",
    youtube: "canaltechbr",
    instagram: "vinicius.bre",
    facebook: "vinicius.bre"
}
changeSocialMediaLinks()
getGithubProfile()


/*ARROW FUNCTION 
function nomeDaFuncao (argumentos) {
    //code
}

/*(argumento1, argumento2, ou sem argumentos) => {

}
*/