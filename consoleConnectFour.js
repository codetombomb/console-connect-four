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
        this.gameOver = false;
    }


    //takes in a column and returns the updated board 
    playTurn(column){
        if(this.gameOver) return "Game is over. " + this.currentPlayer + " wins"
        // if the last space in the column is empty
            // just mark the last one
        if(!this.board[5][column] && this.validateMove(column)){
            this.board[5][column] = this.currentPlayer
        } else {
            // iterate through the rows and find the first space that is taken
            // in the passed in column and set the previous space to currentPlayer
            for (let i = 0; i < 5; i++){
                if(!!this.board[0][column]){
                    console.log("cannot move here")
                    break
                } else if (this.board[i + 1][column] && this.validateMove(column)){
                    this.board[i][column] = this.currentPlayer
                    break
                }
            }
        }

         //only check for win after 8 moves
        if(this.numberOfMoves >= 6){
            console.log(this.checkWin())
            if (this.gameOver) return
        }

//         //Set currentPlayer
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        this.numberOfMoves ++;

        
        return this.board
    }

    /* WILL NOT NEED THIS IN THE REACT APP CAUSE USERS CAN ONLY
        PICK A HIGHLIGHTED COLUMN TO DROP A PIECE.
    */
    validateMove(column){
        if(column < 0 || column > 7){
            throw new Error("Cannot move there. Please try again")
            return false
        } else {
            return true
        }
    }

    checkHorizontalWin(){
        for(let r = 5; r > 0; r--){
            for(let c = 0; c < 4; c++){
                if (
                    this.currentPlayer === this.board[r][c] &&
                    this.currentPlayer === this.board[r][c + 1] &&
                    this.currentPlayer === this.board[r][c + 2] &&
                    this.currentPlayer === this.board[r][c + 3]
                ) {
                    this.gameOver = true;
                    return `Player ${this.currentPlayer} wins! Horizontal win`
                }
            }

        }
    }

    checkVerticalWin(){
        for(let r = 0; r < 4; r++){
            for(let c = 0; c < 6; c++){
                console.log(
                    this.board[r][c],
                    this.board[r+1][c],
                    this.board[r+2][c],
                    this.board[r+3][c]
                )
                if (
                    this.currentPlayer === this.board[r][c] &&
                    this.currentPlayer === this.board[r + 1][c] &&
                    this.currentPlayer === this.board[r + 2][c] &&
                    this.currentPlayer === this.board[r + 3][c]
                ) {
                    this.gameOver = true;
                    return `Player ${this.currentPlayer} wins! Vertical win`
                }
            }

        }

//         debugger
    }

    checkWin(){
        return this.checkHorizontalWin() || this.checkVerticalWin()
    }

}
const g = new Game(board)

// horizontal win
// g.playTurn(0) //o
// g.playTurn(6)
// g.playTurn(1) //o
// g.playTurn(5)
// g.playTurn(2) //o
// g.playTurn(4)
// g.playTurn(3) //o
//===============
// g.playTurn(0)
// g.playTurn(0) //o
// g.playTurn(0)
// g.playTurn(0) //o
// g.playTurn(0)
// g.playTurn(0) // should be o
// g.playTurn(0)
// g.playTurn(1)//o
// g.playTurn(1)
// g.playTurn(1)//o


//vertical win 
g.playTurn(5) //o
g.playTurn(6)
g.playTurn(5) //o
g.playTurn(6)
g.playTurn(5) //o
g.playTurn(6)
// g.playTurn(5) //o



