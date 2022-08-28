let move = 0;

function AI() {
    let ai = 0;
    ai = (Math.floor(Math.random() * n));

    if(pole[ai].tabIndex == 0)
    {
        pole[ai].innerText = "O";
        pole[ai].tabIndex = o;
        move++;
    }
    else 
    {
        move++;
        if(move < 2*n)
        {
            AI();
            
        }
    }
    console.log(move);
}