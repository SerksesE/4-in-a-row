import * as readline from 'readline'
​
async function main() {
​
  while (true) {
    const ans = await askQuestion("Which column number? ");
    console.log("Your answer:", ans)
  }
}
​
function askQuestion(query: string) {
​
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
​
  return new Promise<string>(resolve => rl.question(query, ans => {
    rl.close()
    resolve(ans)
  }))
}
​
main().catch(console.error)
