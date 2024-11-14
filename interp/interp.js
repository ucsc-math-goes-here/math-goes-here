const curves = 
{
    linear: { name: "Linear", evaluator:  function(t,n) { return t; }, format:  "{{ F(t) = t }}", defaultPower: 1  }, 
    power: { name: "Power", evaluator:  function(t,n) { return t**n;}, format:  "{{ F(t) = t^{_N_} }}", defaultPower: 2   },
    minus_power: { name: "Reverse Power", evaluator: function(t,n) { return 1 -(1- t)**n;}, format: "{{ F(t) = 1 - (1-t)^{_N_} }}", defaultPower: 2  },
    binom_ease: { name: "Binomial Ease", evaluator: function(t,n) { return n * t ** (n-1) - (n -1)*t**n;}, format: "{{ F(t) = _N_t^{_N-1_} - _N-1_t^{_N_} }}", defaultPower: 3  },
    sine: { name: "Sine Wave", evaluator: function(t,n) { return (0.5 - 0.5 * Math.cos(Math.PI * t));   }, format: "{{F(t) = \\frac{1-cos(\\pi t)}{2} }}", defaultPower: 1}
   
}


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

var lastCurve = null; 

function onCurveChanged()
{
    context.fillStyle = '#ffffff'; 
    context.fillRect(0,0,256,256); 

    let curve = curves[curveSelector.value]; 

    // If the curve changed, reset to default power. 
    if (curve !== lastCurve) { 
        powerSelector.value = curve.defaultPower; 
    }
    lastCurve = curve; 

    let power = powerSelector.value; 
   

    expression.innerHTML = curve.format.replaceAll('_N_', power).replaceAll('_N-1_', power -1);

    if (typeof MathJax.typeset !== "undefined") {
        MathJax.typeset(); 
    }

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



