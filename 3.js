const printSegitiga = (num) => {
  if (typeof num !== "number") {
    return console.log("Data harus number");
  }

  for (let i = num; i <= num && i > 0; i--) {
    //   console.log(i);
    let segitiga = "";
    for (let j = 1; j <= num; j++) {
      // console.log(j);
      if (j <= i) {
        segitiga += j;
      }
    }
    console.log(segitiga);
  }
};

printSegitiga(5);
