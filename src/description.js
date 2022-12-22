export default function skills(id, array) {
  const { special } = array;
  let result = {};
  // eslint "ругается" на "for..in" поэтому использовал forEach
  special.forEach((element) => {
    if (element.id === id) {
      result = { id: element.id, name: element.name, icon: element.icon };
      if (Object.getOwnPropertyDescriptor(element, 'description')) {
        if (Object.getOwnPropertyDescriptor(element, 'description').enumerable) {
          result.description = element.description;
        } else {
          result.description = 'Описание недоступно';
        }
      } else {
        result.description = 'Описание недоступно';
      }
    }
  });
  return result;
}
