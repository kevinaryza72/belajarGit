function segi(bentuk) {
  let hasil = "";
  for (let i = 0; i < bentuk; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segi(5));
