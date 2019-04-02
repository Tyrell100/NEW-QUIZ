function check(){
  var score1=parseInt(document.getElementById('question1').value)
  var score2=parseInt(document.getElementById('question2').value)
  var score3=parseInt(document.getElementById('question3').value)
  var score4=parseInt(document.getElementById('question4').value)
  var score5=parseInt(document.getElementById('question5').value)
  var total=score1+score2+score3+score4+score5
  alert("You got" +total+"%"+"of the questions right!")
}
