// const MAIL_ADDRESS_REGEX =
//   /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+){0,})@([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)$/;
const repeatedCharacterClass = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+";
const optionalDottedParts = `(?:\\.${repeatedCharacterClass})*`;
const MAIL_ADDRESS_REGEX = new RegExp(
  `^(${repeatedCharacterClass}${optionalDottedParts})@(${repeatedCharacterClass}${optionalDottedParts})$`
);
const LOCAL_MAX_LENGTH = 64;
const WHOLE_MAX_LENGTH = 254;

function isEmailAddress(target: string): boolean {
  const result = MAIL_ADDRESS_REGEX.exec(target);
  if (result?.[0] == null) {
    return false;
  }
  if (LOCAL_MAX_LENGTH < result[1].length) {
    return false;
  }
  if (WHOLE_MAX_LENGTH < result[0].length) {
    return false;
  }
  return true;
}

export { isEmailAddress };
