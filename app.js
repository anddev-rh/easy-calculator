(function () {
  const numbers = document.querySelectorAll('.btn')
  const signals = document.querySelectorAll('btn-blue')
  const equal = document.querySelector('.btn-equal')
  const clear = document.querySelector('.btn-clear')
  let screen = document.querySelector('.screen')
  screen.disabled = true;

  numbers.forEach( (number) => {
    number.addEventListener('click', getNumber = (nmber) => {
    let newNumber = nmber.target.dataset.num
    if (screen.value === 'Please enter a value') {
      screen.value = newNumber
    } else {
    screen.value += newNumber}
  })

/*     screen.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        if(screen.value === '') {
          screen.value = 'Please enter a value'
        } else {
          let output = eval(screen.value)
          screen.value = output;
          screen.disabled = true;
        
        }
      }
    }) */

    equal.addEventListener('click', calculateTotal = () => {
      
    if(screen.value === '') {
      screen.value = 'Please enter a value'
    } else {
      let output = eval(screen.value)
      screen.value = output;
    }
  } ) 

})

  clear.addEventListener('click',clearScreen => {
    screen.value = ''
  })

})()