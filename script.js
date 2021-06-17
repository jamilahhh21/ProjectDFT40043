//FUNCTION TO CALCULATE ITEMS
function calc() {
    document.getElementById('borang').style.display = "none";
    document.getElementById('output').style.display = "block";
    name = document.getElementById("name").value;
    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;
    var num1 = parseFloat(document.getElementById("unitPrice").value);
    var num2 = parseInt(document.getElementById("Quantity").value);
    var num3 = document.getElementById("unitPrice2").value;
    var num4 = document.getElementById("Quantity2").value;
    unit1 = document.getElementById("unitPrice").value;
    unit2 = document.getElementById("Quantity").value;
    unit3 = document.getElementById("unitPrice2").value;
    unit4 = document.getElementById("Quantity2").value;
    document.getElementById("name2").innerHTML = name;
    document.getElementById("items1").innerHTML = item1;
    document.getElementById("items2").innerHTML = item2;
    document.getElementById("unitPrice3").innerHTML = unit1;
    document.getElementById("Quantity3").innerHTML = unit2;
    document.getElementById("unitPrice4").innerHTML = unit3;
    document.getElementById("Quantity4").innerHTML = unit4;

    if (num1 && num2 && num3 && num4) {

        var totalprice1 = Math.round(num1 * num2);
        document.getElementById("result").innerHTML = totalprice1;


        var totalprice2 = Math.round(num3 * num4);
        document.getElementById("result2").innerHTML = totalprice2;


        var grandtotal = Math.round(totalprice1 + totalprice2);
        document.getElementById("grandTotal").innerHTML = grandtotal;


        if (document.getElementById("yes").checked) {
            document.getElementById("Yes1").innerHTML = "Has Membership Card";
            discount = Math.round(grandtotal * 0.05);
            document.getElementById("discount").innerHTML = "5%";
            document.getElementById("finalPrice").innerHTML = grandtotal - discount;
        }
        if (document.getElementById("no").checked) {
            document.getElementById("No1").innerHTML = "Doesn't has Membership Card";
            document.getElementById("discount").innerHTML = 0;
            document.getElementById("finalPrice").innerHTML = grandtotal;
        }
        alert("Calculation successful! Press OK to see result");
    }
    else {
        alert("Complete Your Form");
    }
    return false;
}