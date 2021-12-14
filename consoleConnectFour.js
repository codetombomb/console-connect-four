let board = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
]


class Game {

    constructor(board, numPlayers = 1){
        this.numPlayers = numPlayers;
        this.board = board;
        this.currentPlayer = 'o';
        this.numberOfMoves = 0;
    }


    //takes in a column and returns the updated board 
    playTurn(column){
        // if the last space in the column is empty
            // just mark the last one
        if(!this.board[5][column] && this.validateMove()){
            this.board[5][column] = this.currentPlayer
        } else {
            // iterate through the rows and find the first space that is taken
            // in the passed in column and set the previous space to currentPlayer
            for (let i = 0; i < 5; i++){
                if(!!this.board[0][column]){
                    console.log("cannot move here")
                    break
                } else if (this.board[i + 1][column] && this.validateMove()){
                    this.board[i][column] = this.currentPlayer
                    break
                }
            }
        }

                //only check for win after 8 moves
        if(this.numberOfMoves >= 8){
            console.log(this.checkWin())
        }

//         //Set currentPlayer
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        this.numberOfMoves ++;

        
        return this.board
    }

    /* WILL LIKELY NOT NEED THIS IN THE REACT APP CAUSE USERS CAN ONLY
        PICK A HIGHLIGHTED COLUMN TO DROP A PIECE.
    */
    validateMove(column){
        if(column < 0 || column > 6){
            throw new Error("Cannot move there. Please try again")
            return false
        } else {
            return true
        }
    }

    checkHorizontalWin(){
//         debugger
        console.log("turn" + this.numberOfMoves)
        for(let r = 5; r > 0; r--){
            for(let c = 0; c < 4; c++){
//             console.log(
//                 `this is row: ${r} at pos: 0`, this.board[r][c],
//                 `this is row: ${r} at pos: 1`,this.board[r][c + 1],
//                 `this is row: ${r} at pos: 2`, this.board[r][c + 2],
//                 `this is row: ${r} at pos: 3`,this.board[r][c + 3]
//                 )
debugger
                if (
                    this.currentPlayer === this.board[r][c] &&
                    this.currentPlayer === this.board[r][c + 1] &&
                    this.currentPlayer === this.board[r][c + 2] &&
                    this.currentPlayer === this.board[r][c + 3]
                ) {
                    return `Player ${this.currentPlayer} wins!`
                }
            }

        }
    }

    checkWin(column, row){
        return this.checkHorizontalWin(column, row)
    }

}
const g = new Game(board)

g.playTurn(0) //o
g.playTurn(6)
g.playTurn(1) //o
g.playTurn(5)
g.playTurn(2) //o
g.playTurn(4)
g.playTurn(3) //o
g.playTurn(0)
g.playTurn(0) //o
g.playTurn(0)
g.playTurn(0) //o
g.playTurn(0)
g.playTurn(0) // should be o
g.playTurn(0)
g.playTurn(1)//o
g.playTurn(1)
g.playTurn(1)//o



