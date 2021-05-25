var array = [3, 4, 5, 6, 7, 8];
var average = (3+4+5+6+7+8)/array.length;
var element;

function main()
{
    element = document.getElementById("element");
    console.log(average);

    // Draw all Black
    element.innerHTML += "Draw all Black" + "<p><p>";

    for (i = 0; i < array.length; i++)
    {
        for (v = 0; v < array[i]; v++)
        {
            drawStar("black");
        }

        element.innerHTML += array[i] + "<p><p>";
    }



    // Draw Colors
    element.innerHTML += "Draw Colored" + "<p><p>";

    for (i = 0; i < array.length; i++)
    {
        for (v = 0; v < array[i]; v++)
        {
            if (v < Math.floor(average))
                drawStar("green");
            else
                drawStar("red");
        }

        element.innerHTML += array[i] + "<p><p>";
    }
}


function drawStar(color)
{
    if (color == "green")
        element.innerHTML += "*"
    if (color =="red")
        element.innerHTML += "#"
    if (color =="black")
    element.innerHTML += "."
}   