export const parseValidNumericId = (param: string): number | null => {
  const num = Number(param)
  if (num > 0 && !isNaN(num)) {
    return num
  }
  return null
}


