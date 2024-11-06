

var c = document.getElementById("graph");
var context = c.getContext("2d");
context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();

var curveSelector = document.getElementById("curveFamily"); 
curveSelector.addEventListener("change", onCurveChanged); 

// Populate from our existing curves 
for (var key in curves) {
    let name = curves[key].name; 

    let option = document.createElement('option'); 
    option.value = key; 
    option.text = name; 
    curveSelector.appendChild(option); 
}

var powerSelector = document.getElementById("exponent"); 
powerSelector.addEventListener("change", onCurveChanged);

var expression = document.getElementById('expression'); 

function onCurveChanged()
{
    context.fillStyle = '#ffffff'; 
    context.fillRect(0,0,256,256); 

    let power = powerSelector.value; 
    let curve = curves[curveSelector.value]; 


    expression.innerHTML = curve.format.replace('_N_', power);

    context.beginPath(); 
    context.moveTo(0,0); 

    for (let i = 1; i <= 256; ++i)
    {
        let progress = curve.evaluator(i/256.0, power); 
        context.lineTo(i, (1- progress) * 256.0); 
    }

    context.stroke(); 
}


onCurveChanged(); 



