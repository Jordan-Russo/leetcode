function killer(suspectInfo, dead) {
  for(const suspect in suspectInfo){
    if(dead.every(victim => suspectInfo[suspect].includes(victim))){
      return suspect;
    }
  }
}