const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let number = 1
    let output = 0
    let poids = 0

    while (number <= input[0])
    {
      if (poids < 100)
      {
        poids += input[number]
        number++
        console.log('boucle1')
      }
      else if (poids > 100)
      {
        number--
        poids = 0
        output ++
        console.log('boucle2')
      }
      else if (poids == 100)
      {
        output++
        poids = 0
        console.log('boucle3')
        console.log(number)
      }
      if (number == input[0] + 1)
      {
        output++
        console.log('boucle4')
      }
    }
    

    console.log(output)
    console.log(number)
    return output
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}
