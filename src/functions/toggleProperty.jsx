export function toggleProperty(arr, id, propName) {
  const idx = arr.findIndex((item) => item.id === id);
  const oldItem = arr[idx];
  const value = !oldItem[propName];
  const item = { ...arr[idx], [propName]: value };

  return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
}
