/**
 * Created by jaWeber on 11/13/16.
 */

var app = angular.module("MowApp",[]);

var $ = function(id)
{
    return document.getElementById(id);
};

function calculate_cost() {
    var fyl = parseFloat($("fylength").value);
    var fyw = parseFloat($("fywidth").value);
    var rsyl = parseFloat($("rsylength").value);
    var rsyw = parseFloat($("rsywidth").value);
    var lsyl = parseFloat($("lsylength").value);
    var lsyw = parseFloat($("lsywidth").value);
    var byl = parseFloat($("bylength").value);
    var byw = parseFloat($("bywidth").value);

    if(isNaN(fyl) || isNaN(fyw) || isNaN(rsyl) || isNaN(rsyw) ||
        isNaN(lsyl) || isNaN(lsyw) || isNaN(byl) || isNaN(byw))
    {
        alert("Invalid value. Please, correct and click 'Estimate Cost'");
    }
    else
    {
        var area = ((fyl * fyw) + (rsyl * rsyw) + (lsyl * lsyw) + (byl * byw)) ;
        $("area").innerHTML = area;
        var cost = area * .1 ;//10 cents per square foot
        cost = cost.toFixed(2);
        $("mowingcost").innerHTML = "$ " + cost;
    }
}
