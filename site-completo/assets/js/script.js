let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.classList = 'alert alert-danger'
        txtNome.innerHTML = '<button type="button" class="close" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>'
        
            
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.classList = 'alert alert-success'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.classList = 'alert alert-danger'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.classList = 'alert alert-success'
        emailOk =  true 
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Testo é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true || assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}