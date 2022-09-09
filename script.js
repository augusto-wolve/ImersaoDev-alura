
function verificar() {
    var primeiroBimestre =document.getElementById('nota-primeiro')
    var segundoBimestre = document.getElementById('nota-segundo')
    var terceiroBimestre = document.getElementById('nota-terceiro')
    var quartoBimestre = document.getElementById('nota-quarta')
    var primeiro = Number(primeiroBimestre.value)
    var segundo = Number(segundoBimestre.value) 
    var terceiro = Number(terceiroBimestre.value) 
    var quarto = Number( quartoBimestre.value)
    var notaFinal = (primeiro + segundo + terceiro + quarto) / 4
    
    var res = document.getElementById('resposta')
    var media = 5

    res.innerHTML = `Sua Nota é ${notaFinal.toFixed(0)} sendo uma media de ${media} <br>`
   
      if (notaFinal >= media ) {
        res.innerHTML += `Você esta Aprovado`
      }else{
        res.innerHTML += 'Está Reprovado'
      }
  
  

}