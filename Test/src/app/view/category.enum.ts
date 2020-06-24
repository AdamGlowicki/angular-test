export enum Category {
  Tv = 'Telewizor',
  Radio = 'Radio',
  Smartphone = 'Telefon',
  Fridge = 'Lodówka',
  Toaster = 'Toster',
  Washer = 'Pralka',
  Dryer = 'Suszarka',
  Notebook = 'Notebook',
  HeadPhones = 'Słuchawki',
  Speakers = 'Głośnik',
}

export const getCategories = () => {
  return Category;
};
