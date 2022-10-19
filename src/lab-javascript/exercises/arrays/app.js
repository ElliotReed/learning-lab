
function forLoop(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + value;
  }
  return array;
}

function forLoopBreak(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) break;
    array[i] = array[i] + value;
  }

  return array;
}

function whileLoop(array) {
  let i = 0;
  while (i < 3) {
    array[i] = '*';
    i++
  }
  return array
}

function doWhileLoop(array) {
  let i = 0;
  do {
    array[i] = "*";
    i++;
  } while (i < 3);

  return array;
}



module.exports = {
  forLoop,
  forLoopBreak,
  whileLoop,
  doWhileLoop,
}