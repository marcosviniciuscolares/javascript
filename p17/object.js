let amigo = {nome:'josé', sexo:'M', Peso: 85.5, 
engordar(P=0){
    console.log('Engordou')
    this.Peso += P
}}

amigo.engordar(2)
console.log(`${amigo.nome} engordou ${amigo.Peso}`)