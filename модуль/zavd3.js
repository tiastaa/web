document.getElementById("calc-total").onclick = () => {
    let numberofbox = parseInt(document.getElementById("numberofbox").value);
 let smallUa=[260,280,320,380]
 let smallVillage=[330,350,390,450]
 let bidUa=[491,544,650,809]
 let bigVillage=[660,713,819,978]
    let size = "";
    for (let radio of document.getElementsByName("size")) {
        if (radio.checked)
            size = radio.value;
    }
    let zone = "";
    for (let radio of document.getElementsByName("zone")) {
        if (radio.checked)
            zone = radio.value;
    }
    let settlement = "";
    for (let radio of document.getElementsByName("settlement")) {
        if (radio.checked)
            settlement = radio.value;
    }

    if (size == "sbox" ) {
        if(settlement=="city")
        {
            currency=smallUa[parseInt(zone)-1];

        }
        if(settlement=="village")
        {
            currency=smallVillage[parseInt(zone)-1];

        }

        
        }
        if (size == "bbox" ) {
            if(settlement=="city")
            {
                currency=bigUa[parseInt(zone)-1];
    
            }
            if(settlement=="village")
            {
                currency=bigVillage[parseInt(zone)-1];
    
            }
    
            
            }






    document.getElementById("total").value = currency*numberofbox;
}   