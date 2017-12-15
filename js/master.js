
const btnConvert = $('#btnConvert');
const txtnumber = $('#number');
const txtbase = $('#base');
const txtconvertedBase = $('#convertBase');
const lblanswer = $("#converted");


btnConvert.click(function() {
    if(txtnumber.val() !== "" && txtbase.val() !== "" && txtconvertedBase.val() !== "") {

       checkTheNumber(txtnumber.val(), txtbase.val(), txtconvertedBase.val());
       
    } else {
        alert("may Kulang pa!")
    }
})

// check if what number base to be convert
function checkTheNumber(num, base, toBase) {

    if(base === toBase) {
        // display it
        lblanswer.text(num);
        lblanswer.show();
        console.log("base === toBase is executed")
        return true;
        
    } else if(base === "10") {

        toNbased(num);
        
    } else if(toBase === "10") {

        lblanswer.text(toDecimal(num, base, toBase));
        lblanswer.show();

    } else if(base !== "10" && toBase !== "10") {

        anyToAny();

    }
}
// convertion of decimal to Nbased
function toNbased(num) {
    alert('toNbased');
}

// convertion of Nbased to decimal
function toDecimal(num, base) {

    let pw = num.length-1;
    let int, converted = 0;
    for(let i = 0; i < num.length; i++ ) {
        int = toInteger(num[i]);
        converted += int * (Math.pow(base, pw));

        pw--;
    }
    console.log("toDecimal");

    return converted;
}

// convertion of Nbased to Nbased number
function anyToAny(num) {
    alert("anyToAny");
}

// check if txtbase if empty
txtbase.change(function() {

    if (txtbase.val() !== "") {

        txtnumber.prop("disabled", false);

    } else {

     txtnumber.prop("disabled", true);
     lblanswer.hide();

    }
 })
 
//convertNumber to Int(parseInt)
function toInteger(str) {
    return parseInt(str);
    
}