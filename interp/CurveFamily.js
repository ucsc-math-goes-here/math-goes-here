

class CurveFamily {
    constructor(name, evaluator, format) {
        this.name = name;
        this.evaluator = evaluator; 
        this.format = format
    }


    name = "None";
    evaluator = function(t, n) { return t; };
    format = "t";
} 

const curves = 
{
    linear: new CurveFamily("Linear", function(t,n) { return t; }, "t" ), 
    power: new CurveFamily("Power", function(t,n) { return t**n;}, "t<sup>_N_</sup>"  ),
    '-power': new CurveFamily("Reverse Power", function(t,n) { return 1 -(1- t)**n;}, "1 - (1-t)<sup>_N_</sup>"  ),
}




