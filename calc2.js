document.getElementById("answer").readonly = true;
let screen =  document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenvalue = "";
for (item of buttons)
{
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if(buttonText == "X")
        {
            buttonText = "*";
            screenvalue+=buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText == "C")
        {
            screenvalue = "";
            screen.value=screenvalue;
        }
        else if(buttonText == "=")
        {
            checkForBracketMulti();
        }
        else
        {
            screenvalue += buttonText;
            screen.value=screenvalue;
        }
    });
}

document.addEventListener("keydown",function(event)
{
    console.log(event.which);
    if(event.shiftKey == 57)
    {
        event.key = "(";
    }
    else if(event.shiftKey == 48)
    {
        event.key = ")";
    }
    else if(event.shiftKey==53)
    {
        event.key = "%";
    }
    if(event.keyCode == 88)
    {
        screenvalue+= "*";
        screen.value = screenvalue;
    }
    if(
        event.key <=9 ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "." ||
        event.key == "/" ||
        event.key == "%" ||
        event.key == "(" ||
        event.key == ")"           )
        {
            screenvalue+=event.key;
            screen.value = screenvalue;
        }
        if(event.keyCode == 13 || event.keyCode == 187)
        {
            checkForBracketMulti();
        }
        else if(event.keyCode == 46)
        {
            screenvalue = "";
            screen.value=screenvalue;
            console.clear();
        }
        else if(event.keyCode == 8)
        {
            screenvalue=screenvalue.slice(0,-1);
            screen.value = screenvalue;
        }
        else if(event.keyCode == 67)
        {
            screenvalue="";
            screen.value = screenvalue;
            console.clear();
        }
        else if(event.keyCode == 82)
        {
            location.reload()
        }
});

window.onerror = function()
{
    alert("Please input valid expression");
    screenvalue = "";
    screen.value = screenvalue;
    console.clear();
};

window.onBracketMultiplication = function()
{
    screenvalue = addStr(screen.value,screen.value.indexOf("("), "*");
    screen.value = eval(screenvalue);

};

function addStr(str,index,stringToAdd)
{
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}

function checkForBracketMulti()
{
    if(screen.value.includes("(") && 
    !isNaN(screen.value.charAt(screen.value.indexOf("(") -1 ))
    )
{
    window.onBracketMultiplication();
    return;
} else
{
    screen.value = eval(screenvalue);
}

}