export const localStorageUtil = {
  set(key, value){
    const data = typeof value === "object" ? JSON.stringfy(value) : value;
    window.localStorage.setItem(key,data);
  },

  get(key){
    const data = window.localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  },
};