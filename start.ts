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

    if (ans > 9000) {
      console.log(`"Winner, winner, chicken diner player: ${player}!"`)
      return
    }

    if (ans > 0 && ans < 8) {
      console.log("Your answer:", ans)
      const x = ans - 1
      const freeSpot = getFreeIndex(board, x)

      if (freeSpot === - 1) {
        console.log("Full!")
      } else {
        board[freeSpot][x] = player
      }

      const win = winConditions(board, player)

      if (win) {
        console.log(`"Winner, winner, chicken diner player: ${player}!"`)
      }

      turn++
      console.log(board)
    } else {
      console.log("Invalid column number! Choose a number between 1 - 7")
    }
  }
}

function getFreeIndex(board: string[][], x: number) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][x] !== '-') {
      return i - 1
    }
  }

  return board.length - 1
}

function winConditions(board: string[][], player: string) {
  let winVertical = 0
  let winHorizontal = 0

  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === player) {
        winVertical++
        if (winVertical === 4) {
          return true
        }
      } else {
        winVertical = 0
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === player) {
        winHorizontal++
        if (winHorizontal === 4) {
          return true
        }
      } else {
        winHorizontal = 0
      }
    }
  }

  return false
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
