let currPlayer = 'X';
let combo = [ [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7] ];
let counter = 0;

$('span').text(currPlayer);

$('td').click(function(keyClick){
    if (currPlayer == 'X'){
        $(this).text('X');
        $(this).addClass('X');
        $(this).off(keyClick);
        check(currPlayer);
        counter++;
        $('span').text('O');
        currPlayer = 'O';
    } else if (currPlayer == 'O'){
        $(this).text('O');
        $(this).off(keyClick);
        $(this).addClass('O');
        check(currPlayer);
        counter++;
        $('span').text('X');
        currPlayer = 'X';
    }
    if (counter == 9){
        alert('Game Over!');
    }
});

function check(player){
    for( i = 0; i < combo.length; i++){
        if ($('#' + combo[i][0]).hasClass(player) &&
            $('#' + combo[i][1]).hasClass(player) &&
            $('#' + combo[i][2]).hasClass(player)){
            alert('Player ' + player + ' won!');
            break;
        }
    }
}