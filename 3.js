const printSegitiga = 7;

if (typeof printSegitiga !== "number") {
  return console.log("Data harus number");
}

for (let i = printSegitiga; i <= printSegitiga && i > 0; i--) {
  //   console.log(i);
  let segitiga = "";
  for (let j = 1; j <= printSegitiga; j++) {
    // console.log(j);
    if (j <= i) {
      segitiga += j;
    }
  }
  console.log(segitiga);
}
