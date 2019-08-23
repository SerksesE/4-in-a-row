import * as readline from 'readline'

async function main() {

  while (true) {
    const ans = await askQuestion("Which column number? ");

    if (parseInt(ans) > 0 && parseInt(ans) < 8) {
      console.log("Your answer:", ans)
    } else {
      console.log("Invalid column! Choose a number between 1 - 7")
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
