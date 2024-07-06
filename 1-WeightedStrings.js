function weightedStrings(str, queries) {
  const weights = [];
  let totalWeight = 0;

  for (let i = 0; i < str.length;) {
    const char = str[i];
    let count = 0;

    while (i < str.length && str[i] === char) {
      count++;
      i++;
    }

    for (let j = 1; j <= count; j++) {
      totalWeight += (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) * j;
      weights.push(totalWeight);
    }
  }

  return queries.map(query => weights.includes(query) ? "Ya" : "Tidak");
}

console.log(weightedStrings("abbcccd", [1, 3, 9, 8]))