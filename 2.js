const averageGrade = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
  //Validasi input
  if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
    return "Semua Input Harus Di Isi";
  }
  //Mencari rata-rata
  const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  let grade;
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average <= 89) {
    grade = "B";
  } else if (average >= 70 && average <= 79) {
    grade = "C";
  } else if (average >= 60 && average <= 69) {
    grade = "D";
  } else if (average >= 0 && average <= 59) {
    grade = "E";
  } else {
    grade = "tidak ada";
  }

  return `Rata - rata = ${average}\n Grade = ${grade}`;
};

console.log(averageGrade(50, 60, 90, 70));
