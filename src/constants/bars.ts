const getScaleYValue = (index: number) => {
  if(index <= 7) {
    return index % 2 == 0 ? 0.5 : 1
  }
  if(index > 6 && index <= 11) {
    return 1 - (index * 0.04)
  }

  if(index > 11 && index <= 20) {
    const isModulo2 = index % 2 == 0 ;

    return isModulo2 ? 1 - (index * 0.015) : 1 - (index * 0.025) 
  }

  if(index > 20 && index <= 25) {
    return 0.2 + (index * 0.02)
  }

  if(index > 27 && index <= 35) {
    return 0.01 + ((index - 20) * 0.055)
  }

  if(index > 36 && index <= 48) {
    return 1 - ((index - 30) * 0.030)
  }

  if(index > 49 && index <= 54) {
    return index % 2 == 0 ? 0.7 : 1
  }

  if(index > 57 && index <= 64) {
    const modulo = index % 4 ;

    return 1 - (index * modulo * 0.01) 
  }
  
  if(index > 65) {
    return 0.2 + ((index - 60) * 0.06)
  }

  return 1
}

export const bars = Array(70).fill(0).map((_, index) => ({ scaleY: getScaleYValue(index) })) ;