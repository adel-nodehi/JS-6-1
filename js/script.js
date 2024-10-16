"use strict";

function vaporcode(string) {
  const lowerWord = string.trim().split(" ");
  // ['Lets', ...]

  console.log(lowerWord);

  const result = lowerWord.map((word) => {
    // 'Lets' => 'LETS' => ['L' , 'E' , ..] => 'L  E  T  S'
    return word.toUpperCase().split("").join("  ");
  });
  // ['L  E  T  S', ..]

  return result.join("  ");
}

// L  E  T  S

console.log(
  vaporcode("Lets go to the movies "),
  "\n",
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
// console.log(
//   vaporcode("Why isnt my code working"),
//   "\n",
//   "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
// );
