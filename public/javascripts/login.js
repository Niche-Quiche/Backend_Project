const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('/api/v1/users/login', {
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    })
        .then(res => {
            alert('logged in successfully')
            window.localStorage.setItem('user', JSON.stringify(res.data))
            window.location = '/index.html'
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error || 'something went wrong')
        })
})