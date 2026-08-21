function last(){
  if(arguments.length > 1){return arguments[arguments.length - 1]}
  const target = arguments[0];
  if(typeof target === "number"){
    return target;
  }
  return target[target.length - 1];
}