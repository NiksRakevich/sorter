class Sorter {
  constructor() {
    this.elements= [];
    this.sortFunc = function(first, second){
      return first - second;
    }
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    indices.sort((a,b) => a-b);
    for (let i = 0; i<indices.length-1; i++){
      for (let i2 = i+1; i2<indices.length; i2++){
        if (this.sortFunc(this.elements[indices[i]], this.elements[indices[i2]]) > 0){
          let temp = this.elements[indices[i]];
          this.elements[indices[i]] = this.elements[indices[i2]];
          this.elements[indices[i2]] = temp;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.sortFunc = compareFunction;
  }
}

module.exports = Sorter;