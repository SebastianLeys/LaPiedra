window.onload=DocumentoCargado;

function DocumentoCargado(){
    let checkboxP1 = document.getElementById("P1");
    let checkboxP2 = document.getElementById("P2");
    let checkboxP3 = document.getElementById("P3");
    let cantpersonasP1 = document.getElementById("cantP1");
    let cantpersonasP2 = document.getElementById("cantP2");
    let cantpersonasP3 = document.getElementById("cantP3");
    cantpersonasP1.onchange = selectp1personas;
    cantpersonasP2.onchange = selectp2personas;
    cantpersonasP3.onchange = selectp3personas;
    checkboxP1.onclick = checkboxP1Apretado;
    checkboxP2.onclick = checkboxP2Apretado;
    checkboxP3.onclick = checkboxP3Apretado;

    MostrarPrecioTotal();
}


function selectp1personas()

    {
        MostrarPrecioTotal();
    }

function selectp2personas()

    {
        MostrarPrecioTotal();
    }

function selectp3personas()

    {
        MostrarPrecioTotal();
    }

function checkboxP1Apretado()
    {
        if(document.getElementById("P1").checked==true)
        {
            document.getElementById("MostrarP1").style.display 
            ="block";
        }
        else
        {
            document.getElementById("MostrarP1").style.display = "none";
        }
    MostrarPrecioTotal();
    }
    function checkboxP2Apretado()
    {
        if(document.getElementById("P2").checked==true)
        {
            document.getElementById("MostrarP2").style.display 
            ="block";
        }
        else
        {
            document.getElementById("MostrarP2").style.display = "none";
        }
    MostrarPrecioTotal();
    }

    function checkboxP3Apretado()
    {
        if(document.getElementById("P3").checked==true)
        {
            document.getElementById("MostrarP3").style.display 
            ="block";
        }
        else
        {
            document.getElementById("MostrarP3").style.display = "none";
        }
    MostrarPrecioTotal();
    }

function MostrarPrecioTotal()
    {
    let precio = 0;

    if (document.getElementById("P1").checked == true)
    {
        precio +=5000 *
document.getElementById("cantP1").value;    
    }   

    if (document.getElementById("P2").checked == true)
    {
    precio += 7000 *
document.getElementById("cantP2").value;
    }
    if (document.getElementById("P3").checked == true)
    {
        precio += 9000*
    
document.getElementById("cantP3").value;
    }
    document.getElementById("preciototal").innerHTML= "Precio: $" + precio;
    }