export default function debounce<T extends Function>(cb: T, wait = 1000) {
  let h: any;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return callable;
}
