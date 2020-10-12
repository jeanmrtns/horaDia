function carregar(){
    let now = new Date()
    let hour = now.getHours()
    let body = document.body
    let boxHour = document.getElementById('hora')

    boxHour.innerHTML += `${hour} horas.`

    let img = document.querySelector('#img')
    
    if (hour >= 0 && hour < 12 ){
        body.style.background = '#e2cd9f'
        boxHour.innerHTML += '<p>Tenha um bom dia!</p>'
        img.src = "images/morning.png"
    }
    
    else if (hour >= 12 && hour <= 18){
        body.style.background = '#ff6100'
        boxHour.innerHTML += '<p>Tenha uma ótima tarde!</p>'
        img.src = "images/afternoon.png"
    }
    
    else {
        img.src = "images/night.png"
        boxHour.innerHTML += '<p>Tenha uma ótima noite!</p'
        body.style.background = '#2e2e31'
    }
}
