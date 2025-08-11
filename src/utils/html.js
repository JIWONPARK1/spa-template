export const html = (strings, ...exprs) =>
  String.raw({ raw: strings }, ...exprs);
