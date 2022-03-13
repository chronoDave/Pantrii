export const cx = (...args: Array<string | undefined>) => args
  .filter(x => x)
  .join(' ');
