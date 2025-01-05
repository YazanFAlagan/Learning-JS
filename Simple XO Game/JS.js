    let title = document.querySelector('.header');
    let turn = 'x';    

        function game(id) 
        {
            let element = document.getElementById(id);
            if (turn === 'x' && element.innerHTML == '')
            {
                element.innerHTML = 'X';
                turn = 'O';
                title.innerHTML = 'O Player Turn';
            }
            else if (turn === 'O' && element.innerHTML == '')
            {
                element.innerHTML = 'O';
                turn = 'X';
                title.innerHTML = 'X Player Turn';
            }
        }