class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = undefined;
    // your implementation
  }

  add(element) {
    this.array.push(element);
    // your implementation
  }

  at(index) {
    return this.array[index];
    // your implementation
  }

  get length() {
    return this.array.length;
    // your implementation
  }

  toArray() {
    return this.array;
    // your implementation
  }

  sort(indices) {
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    let sortMass = [];

    this.array.forEach((value,index) => {
      for(let i = 0; i < indices.length; i++){
        if(indices[i] === index) sortMass.push(value);
      }
    })

    if(this.compareFunction){
      sortMass.sort(this.compareFunction);
    }else{
      sortMass.sort(compareNumeric);
    }
    

    this.array.forEach((value,index) => {
      for(let i = 0; i < indices.length; i++){
        if(indices[i] === index) this.array[index] = sortMass.shift();
      }
    })


  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
    // your implementation
  }
}

module.exports = Sorter;