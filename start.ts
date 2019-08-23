import * as readline from 'readline'

async function main() {
  const board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
  ]

  let turn = 0

  while (true) {
    const ans = parseInt(await askQuestion("Which column number? "));
    const player = turn % 2 === 0 ? 'o' : 'x'

    if (ans > 0 && ans < 8) {
      console.log("Your answer:", ans)
      const x = ans - 1

      const freeSpot = getFreeIndex(board, x)
      console.log(freeSpot)
      if(freeSpot === -1) {
        // full
        console.log("Full!")
      } else {
        board[freeSpot][x] = player
      }

      turn++
      console.log(board)
    } else {
      console.log("Invalid column number! Choose a number between 1 - 7")
    }
  }
}

function getFreeIndex(board: string[][], x: number){

  for (let i = 0; i < board.length; i++) {
    if (board[i][x] !== '-') {
      return i - 1
    }
  }

  return board.length - 1
}

function askQuestion(query: string) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise<string>(resolve => rl.question(query, ans => {
    rl.close()
    resolve(ans)
  }))
}

main().catch(console.error)
