class Block{

  constructor([width, length, height]){
    this.width = width;
    this.length = length;
    this.height = height;
  }
  
  getWidth(){return this.width}
  getLength(){return this.length}
  getHeight(){return this.height}
  
  getVolume(){return this.width * this.length * this.height}
  
  getSurfaceArea(){return 2 * this.width * this.length + 2 * this.width * this.height + 2 * this.length * this.height}
  
}