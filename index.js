// Code your solutions in this file

function printBadges(employeeprintBadges) {
  for(let i = 0; i < employeeprintBadges.length; i++) {
    console.log(`Welcome ${employeeprintBadges[i]}! You are employee #${i + 1}.`)
  }
  return employeeprintBadges
}

function tailsNeverFails() {
  let counter = 0
  while(Math.random() >= 0.5) {
    counter ++
  }
   return `You got ${counter} tails in a row!`
}
