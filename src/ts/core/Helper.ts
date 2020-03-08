export function getData<T extends { id: string }>(
  list: T[],
  id: string
): T | null {
  for (const v of list) {
    if (v.id === id) {
      return v;
    }
  }
  return null;
}

function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
export function uuid() {
  return [
    s4(),
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    "-",
    s4(),
    s4(),
    s4()
  ].join("");
}
