function caffeineBuzz(n) {
    const divisibleBy3 = n % 3 === 0;
    const divisibleBy4 = n % 4 === 0;
    const isEven = n % 2 === 0;
    let name = '';
    if(divisibleBy3 && divisibleBy4){
      name += 'Coffee';
    }else if(divisibleBy3){
      name += 'Java';
    }
    if(name && isEven){
      name += 'Script';
    }
    if(!name){
      name += 'mocha_missing!';
    }
    return name;
}