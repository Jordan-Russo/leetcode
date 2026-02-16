function meeting(x){
  const index = x.findIndex(meetingRoom => meetingRoom === 'O');
  return index === -1 ? 'None available!' : index;
}