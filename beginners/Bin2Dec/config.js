function justBinary(e) {
  var key = window.event ? e.key : e.which;
  if (key == 1 || key == 0) return true;
  else {
      window.alert("Digite apenas 0 ou 1")
    return false;
  }
}

function maxInput(e){
    var but = document.getElementById("bin");
    num = but.value
    if(num.length < 80){
        return true
    } else {
        window.alert("Digite até 8 números");
        return false;
    }
}

function convertToBinary(binary){
    console.log(binary)
    let pow2 = [] 
    let bin = []
    let decimal = 0
    for(var i = 0; i < 50; i++){
        pow2.push(Math.pow(2, i));
    }
    console.log(pow2)
    let size = binary.length
    for(var i = size; i > 0; i--){
        bin.push(binary.slice(i-1, i))
    }
    console.log(bin)
    bin.forEach((element, index) => {
        decimal = decimal + (element*pow2[index])
    });
    let text = document.getElementById("result")
    text.innerHTML = decimal;
}
