export const convertObjectToArray = (obj: any) => {
  if (obj) {
    let result: Object = Object.keys(obj).map((key) => {
      return obj[key];
    });

    return result;
  }
};
