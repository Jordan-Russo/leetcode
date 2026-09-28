function Singleton(){
  return Singleton.amIUnique = Singleton.amIUnique ? Singleton.amIUnique : this;
}