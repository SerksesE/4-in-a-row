import * as readline from 'readline'

async function main() {
  let board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
  ]


  while (true) {
    const ans = await askQuestion("Which column number? ");

    if (parseInt(ans) > 0 && parseInt(ans) < 8) {
      console.log("Your answer:", ans)

      for (let i = 0; i < board[0].length - 1; i++) {
        if (board[i][parseInt(ans) - 1] !== '-') {
          board[i - 1][parseInt(ans) - 1] = 'o'
        }
        if (i === board.length - 1) {
          if (board[i][parseInt(ans) - 1] !== '-') {
            board[i - 1][parseInt(ans) - 1] = 'o'
          } else {
            board[i][parseInt(ans) - 1] = 'o'
          }
        }
      }
      console.log(board)
    } else {
      console.log("Invalid column number! Choose a number between 1 - 7")
    }
  }
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
