function stringChop(str, size) {
  if (typeof str !== 'string') str = '';
 size = parseInt(size, 10);
      // if (isNaN(size) || size <= 0) {
      //   return [];
      // }
   const res = [];
  // Walk through the string in steps of `size`
  for (let i = 0; i < str.length; i += size) {
    // Take the substring of up to `size` characters
    res.push(str.substr(i, size));
  }
  return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
