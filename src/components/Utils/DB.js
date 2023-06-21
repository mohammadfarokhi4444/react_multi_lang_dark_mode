export function storeData(key, data) {
  const strData = JSON.stringify(data);
  localStorage.setItem(key, strData);
  return;
}

export function getData(key) {
  const strData = localStorage.getItem(key);
  const jsonData = JSON.parse(strData);
  return jsonData || null;
}

export function removeData(key) {
  localStorage.removeItem(key);
}

export function clearAllData() {
  localStorage.clear();
}
