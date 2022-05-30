function ghostBusters(building) {
  let newBuildings = building;
  if (newBuildings.split(' ').length > 1){
    return newBuildings.split(' ').join('')
  } else { return "You just wanted my autograph didn't you?"}
  
}