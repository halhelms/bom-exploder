isEmpty = function(obj) {
  if ( (obj === null) || (obj === undefined) || (typeof obj !== 'object') ) {
    return true;
  }
  return Object.keys(obj).length === 0;
}