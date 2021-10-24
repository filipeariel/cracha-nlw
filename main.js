const linksSocialMedia = {
  github: 'filipeariel',
  youtube: 'channel/UCbHBAQTqzEOSUQVFXWt3aKA',
  facebook: 'filipe.ariel.1',
  instagram: 'filipe.arielp',
  twitter: 'filipeariel_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('id')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      titleName.textContent = `${data.name} - Do While 2021`
    })
}

getGitGitHubProfileInfos()
