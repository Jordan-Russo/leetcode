function sortList(sortBy, list) {
  // assign a copy for the list
  list = [...list];
  // use a descending sort on the copied list
  list.sort((x, y) => y[sortBy] - x[sortBy]);
    // sortBy is the property key
  // return the sorted copied list
  return list;
}