const parseSocialCode = () => {
  let params = new URL(document.location.toString()).searchParams;
  let code = params.get("code");
  console.log(code);
  if (code) return code;
  return "";
};

export default parseSocialCode;
