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
    photo: 'data:image/jpeg;base64,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'
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
    photo: 'https://cdn.pixabay.com/photo/2017/04/04/18/14/video-game-console-2202632__340.jpg'
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
