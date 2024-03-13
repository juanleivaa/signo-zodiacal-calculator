function buscarUsuariosConFetch() {
    fetch('https://reqres.in/api/users')
    .then(respuesta => respuesta.json())
    .then(res => {
        console.log(res.data)
        let users = res.data
        let usersHTML = document.getElementById('users')
        users.forEach( user => {
            let userHTML = document.createElement('div')
            userHTML.innerHTML = `<img src="${user.avatar}">
                                    <div>${user.first_name} ${user.last_name}</div>`
            usersHTML.appendChild(userHTML)
        })
    })
}


