class Cuboid {
  constructor(l,w,h){
    this.length = l;
    this.width = w;
    this.height = h;
  // TODO: Program Me
  }
  get surfaceArea(){
    return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.width * this.height;
  }
  get volume(){
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(l){
    super(l,l,l);
  }
}