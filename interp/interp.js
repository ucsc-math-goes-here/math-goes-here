




var c = document.getElementById("graph");
var context = c.getContext("2d");
context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();

function generateCurve(type, exponent)
{
    switch (type)
    {
        default: 
        case 'linear': 
            function linear(t) { return t; }
           return linear; 
        case 'power': 
           function power(t) { return t**exponent; }
           return power; 
        case '-power':
            function minuspower(t) { return 1 - (1 - t)**exponent; }
            return minuspower; 
        case 'ease': 
            function ease(t) { return exponent * (t**(exponent-1)) - (exponent - 1)*(t**exponent); }
            return ease; 
    }
}

var curveSelector = document.getElementById("curveFamily"); 
curveSelector.addEventListener("change", onCurveChanged); 

var powerSelector = document.getElementById("exponent"); 
powerSelector.addEventListener("change", onCurveChanged);


function onCurveChanged()
{
    context.fillStyle = '#ffffff'; 
    context.fillRect(0,0,256,256); 

    let curve = generateCurve(curveSelector.value, powerSelector.value); 

    context.beginPath(); 
    context.moveTo(0,0); 

    for (let i = 1; i <= 256; ++i)
    {
        let progress = curve(i/256.0); 
        context.lineTo(i, (1- progress) * 256.0); 
    }

    context.stroke(); 
}

onCurveChanged(); 



