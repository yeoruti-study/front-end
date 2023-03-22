function getFieldError(value: string | undefined) {
  if (!value) return "field is required";

  const valueIsLowerCase = value === value.toLowerCase();

  const valueIsShortEnough = value.length <= 20;

  if (!valueIsLowerCase) {
    return "value must be lower case";
  }
  return null;
}

export default getFieldError;
