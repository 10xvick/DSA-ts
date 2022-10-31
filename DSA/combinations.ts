function comb(str, carry, out) {
  if (str.length == 1) {
    out.push(carry + str);
  } else
    for (let i = 0; i < str.length; i++) {
      let car = str[i];
      let s = '';
      for (let j = 0; j < str.length; j++) {
        if (i != j) {
          s += str[j];
        }
      }
      comb(s, carry + car, out);
    }
  return out;
}

console.log(comb('abcd', '', []));
