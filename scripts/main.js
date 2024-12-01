const cards = document.querySelector('.row')
async function fetchUsers() {
    cards.innerHTML = ""
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            let nombre = element.name
            let nombreDeUS = element.username
            let correo = element.email
            let empresa = element.company.name
            let card = `
        <div class="card">
              <h3>Nombre: ${nombre}</h3>
              <p>Usuario: ${nombreDeUS}</p>
              <p>Email: ${correo}</p>
              <p>Empresa: ${empresa}</p>
            </div>
        `
            cards.innerHTML += card
        }
    } catch (error) {
        alert("Error al cargar los usuarios. Inténtalo de nuevo más tarde " + error)
    }
}
fetchUsers()