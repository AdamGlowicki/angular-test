import {Products} from './products';
import {Category} from './category.enum';

export const products: Products[] = [
  {
    id: 1,
    name: 'Telewizor',
    price: 1000,
    price2: 1500,
    price3: 2000,
    describe: 'Opis telewizora.',
    category: Category.Tv,
    photo: 'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964__340.jpg'
  },
  {
    id: 2,
    name: 'Radio',
    price: 100,
    price2: 150,
    price3: 200,
    describe: 'Opis radia.',
    category: Category.Radio,
    photo: 'https://cdn.pixabay.com/photo/2020/02/04/15/12/radio-4818424__340.jpg'
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 1000,
    price2: 1500,
    price3: 2000,
    describe: 'Opis telefonu.',
    category: Category.Smartphone,
    photo: 'https://cdn.pixabay.com/photo/2014/10/23/16/58/phone-499991__340.jpg'
  },
  {
    id: 4,
    name: 'Lodoówka',
    price: 1200,
    price2: 2500,
    price3: 2300,
    describe: 'Opis lodówki',
    category: Category.Fridge,
    photo: 'https://cdn.pixabay.com/photo/2017/04/23/07/52/elephant-2253227__340.png'
  },
  {
    id: 5,
    name: 'Toster',
    price: 80,
    describe: 'Opis tostera.',
    category: Category.Toaster,
    photo: 'https://media.istockphoto.com/photos/stylish-red-toster-for-bread-isolated-on-white-background-picture-id1189300529?b=1&k=6&m=1189300529&s=170667a&w=0&h=8OnrOEcPRog-MPhUN2_ddpqRPndvQWDghyPD9kBBUtI='
  },
  {
    id: 6,
    name: 'Pralka',
    price: 1200,
    price2: 1500,
    price3: 1800,
    describe: 'Opis pralki.',
    category: Category.Washer,
    photo: 'https://cdn.pixabay.com/photo/2020/01/14/20/38/cheese-grater-4766273__340.png'
  },
  {
    id: 7,
    name: 'Suszarka',
    price: 2000,
    price3: 10000,
    describe: 'Opsi suszarki.',
    category: Category.Dryer,
    photo: 'https://cdn.pixabay.com/photo/2020/06/19/09/51/hair-salon-5316584__340.png'
  },
  {
    id: 8,
    name: 'Notebook',
    price: 2500,
    price2: 3000,
    price3: 6000,
    describe: 'Opis laptopa.',
    category: Category.Notebook,
    photo: 'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964__340.jpg'
  },
  {
    id: 9,
    name: 'Słuchawki',
    price: 1000,
    price2: 1500,
    price3: 2000,
    describe: 'Opis słuchawek.',
    category: Category.HeadPhones,
    photo: 'https://cdn.pixabay.com/photo/2016/06/16/08/42/monster-1460885__340.png'
  },
  {
    id: 1,
    name: 'Głośniki',
    price: 1900,
    price2: 3400,
    describe: 'Opis głośnika.',
    category: Category.Speakers,
    photo: 'https://cdn.pixabay.com/photo/2016/01/09/10/02/nostalgia-1130021__340.png'
  },
];
