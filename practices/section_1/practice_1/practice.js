function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(x => collection_b.indexOf(x) !== -1);
}

module.exports = collect_same_elements;