function findWin(obj) {
    return obj.result === 'W'
  }
  
  function superbowlWin(arr){
    if(arr.find(findWin) === undefined){
      return undefined
    }else {
    return arr.find(findWin)['year']
    }
  }