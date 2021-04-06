function wordSizes(sentence) {
  let counts = {};
  sentence.split(' ').forEach((word) => {
    let key = word.length;
    if (key === 0) return;
    counts[key] = counts[key] + 1 || 1;
  });

  return counts;
}

