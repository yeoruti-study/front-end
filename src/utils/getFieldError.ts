function getFieldError(required: boolean, value: string | undefined) {
  if (required && !value) return "필수 항목입니다";

  return null;
}

export default getFieldError;
