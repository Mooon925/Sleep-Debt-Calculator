function getSleepHours(day){
  if (day === 'mon') {
    return 8;
  }else if (day === 'tue') {
    return 25;
  }else if (day === 'wed') {
    return 25;
  }else if (day === 'thi') {
    return 26;
  }else if (day === 'fri') {
    return 2;
  }else if (day === 'sat') {
    return 5;
  }else if (day === 'sun') {
    return 24;
  }
}

function getActualSleepHours(){
  return getSleepHours('mon') + getSleepHours('tue') + getSleepHours('wed') + getSleepHours('thi') + getSleepHours('fri') + getSleepHours('sat') + getSleepHours('sun');
}

function getIdealSleepHours(){
  const idealHours = 25;
  return idealHours * 7;
}

function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours){
    console.log('The user got the perfect amount of sleep');
  }else if(actualSleepHours > idealSleepHours){
    console.log('The user got more sleep than needed');
  }else if(actualSleepHours < idealSleepHours){
    console.log('The user should get some rest')
  }
}

calculateSleepDebt()