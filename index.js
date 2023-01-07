function guardar(){

    let inputValue = document.getElementById('nametxt').value
    let inputValue2 = document.getElementById('aptxt').value
    let inputValue3 = document.getElementById('tit').value
    let inputValue4 = document.getElementById('sta').value
    let inputValue5 = document.getElementById('carg').value

    let name = JSON.parse(localStorage.getItem('nombre')) ? JSON.parse(localStorage.getItem('nombre')) : []
    let ap = JSON.parse(localStorage.getItem('apellido')) ? JSON.parse(localStorage.getItem('apellido')) : []
    let tit = JSON.parse(localStorage.getItem('titulo')) ? JSON.parse(localStorage.getItem('titulo')) : []
    let sta = JSON.parse(localStorage.getItem('status')) ? JSON.parse(localStorage.getItem('status')) : []
    let carg = JSON.parse(localStorage.getItem('cargo')) ? JSON.parse(localStorage.getItem('cargo')) : []

    console.log(inputValue)
    console.log(inputValue2)
    console.log(inputValue3)
    console.log(inputValue4)
    console.log(inputValue5)

    name.push(inputValue)
    ap.push(inputValue2)
    tit.push(inputValue3)
    sta.push(inputValue4)
    carg.push(inputValue5)

    console.log(name, ap, titulo, sta, carg)
    console.log(JSON.stringify(name + ap + titulo + sta + carg))

    localStorage.setItem('nombre' + 'apellido' + 'titulo' + 'status' + 'carg', JSON.stringify(name + ap + tit + sta + carg))
    document.getElementById('nametxt').value = ''
    document.getElementById('aptxt').value = ''
    document.getElementById('tit').value = ''
    document.getElementById('sta').value = ''
    document.getElementById('carg').value = ''
   
}

