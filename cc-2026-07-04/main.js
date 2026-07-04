function movie(card, ticket, perc) {
    let linear = ticket;
    let count = 1;
    let discounted = card + ticket * perc;
    while(Math.ceil(discounted) >= linear){
      if(Math.ceil(discounted) < linear){return count}
      count++;
      linear += ticket;
      discounted += ticket * perc ** count;
    }
    return count;
};