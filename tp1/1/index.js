const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let pos = input[0]
    let win

    for (let i = 1; i < input.length; i++)
    {
      let number = input[i].split(' ');
      pos = pos + parseInt(number[0]) - parseInt(number[1]) 
    }
    
    if (pos <= 100)
    {
      win = 1000
    }
    else if (pos > 100 && pos <= 10000)
    {
      win = 100
    }
    else if (pos > 10000)
    {
      win = 'KO'
    }

    return win
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
