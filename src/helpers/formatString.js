export function formatString(string, values) {
  return Object.keys(values).reduce(
    (current, key) => current.replace(`{${key}}`, values[key]),
    string,
  );
}
