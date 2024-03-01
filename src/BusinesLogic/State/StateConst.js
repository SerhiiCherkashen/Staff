import { stateImage } from "./StateImage";

export const stateConst = {
  image: stateImage,
  header: {
    man: [
      {
        name: "Staff Basic",
        path: "/sBasic",
      },
      {
        name: "Staff Tactical",
        path: "/sTactical",
      },
      {
        name: "Одяг",
        path: "/cloth",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
        ],
      },
      {
        name: "Взуття",
        path: "/shoes",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
        ],
      },
      {
        name: "Рюкзаки та сумки",
        path: "/bags",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
        ],
      },
      {
        name: "Аксесуари",
        path: "/accessories",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
        ],
      },
    ],
    woman: [
      {
        name: "Одяг",
        path: "/cloth",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
        ],
      },
      {
        name: "Взуття",
        path: "/shoes",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
        ],
      },
      {
        name: "Рюкзаки та сумки",
        path: "/bags",
        popUp: true,
        miniMenu: [
          {
            name: "Верхнiй одяг",
          },
          {
            name: "Анораки",
          },
          {
            name: "Куртки",
          },
          {
            name: "Штани",
          },
        ],
      },
    ],
  },
  products: {
    man: {
      main: {
        asd: "awed",
        bigImage:
          "https://static.staff-clothes.com/uploads/media/default/0003/36/86aa080f5cae4fe294c605545251a2fa.jpeg",
        sections: [
          "https://static.staff-clothes.com/uploads/media/default/0003/36/e819f730f2154fab9c64daf0326416ab.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/4faf2b4eda644fd7b570af18a1fc7119.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/7a10e01527894f3f922cb082b467a283.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/7757b9bd99754f3f9db40971d6257cd7.jpeg",
        ],
        collection: [
          "https://static.staff-clothes.com/uploads/media/default/0003/37/f1adc97f584d4fc4b8f31271df9455c0.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/37/bc9d402b93574fed82204f049d075289.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/37/000abd39fa3c4fd494914d18bb89ae00.jpeg",
        ],
      },
      cloth: {
        outerwear: {
          anorak: {},
          jackets: {},
          autumnSpringParka: {},
          winterParka: {},
          winterJacket: {},
        },
        sweatshirt: {},
        shirt: {},
        trousers: {
          jeans: [
            {
              id: "manClothTrousersJeans0",
              discount: 10,
              image:
                "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0003/34/81c07101b24f4f5e90374334701cd5de.jpeg",
              name: "Джинси Staff blue regular mom",
              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              oldPrice: 930,
              newPrice: 830,
            },
            {
              id: "manClothTrousersJeans1",
              discount: 15,
              image:
                "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0003/36/6d9aa419da704ffc927ce36ac1f8289b.jpeg",
              name: "Джинси Staff blue mom high waist",
              sizes: ["XS", "S", "M", "L", "XL", "XXL"],

              oldPrice: 9130,
              newPrice: 530,
            },
            {
              id: "manClothTrousersJeans2",
              discount: 0,
              image:
                "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0003/36/f0827806ea9c4f86818bbd848ad9150e.jpeg",
              name: "Джинси Staff blue regular baggy",
              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              oldPrice: 0,
              newPrice: 130,
            },
            {
              id: "manClothTrousersJeans2",
              image:
                "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0003/36/f0827806ea9c4f86818bbd848ad9150e.jpeg",

              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              price: 1190,
            },
            {
              id: "manClothTrousersJeans2",
              image:
                "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0003/36/f0827806ea9c4f86818bbd848ad9150e.jpeg",

              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              price: 1190,
            },
          ],
          sportTrousers: {},
          kargo: {},
        },
        sportSuit: {},
        tShirtPolo: {},
        shorts: {},
        underwear: {},
      },
      shoes: {
        winterShoes: {},
        sneakers: {},
      },
      bags: {
        backpack: {},
        beltBag: {},
        shoulderBag: {},
      },
      accessories: {
        capPanama: {},
        winterHat: {},
        scarfMitten: {},
        socks: {},
        beltWallet: {},
      },
    },
    woman: {
      main: {
        bigImage:
          "https://static.staff-clothes.com/uploads/media/default/0003/36/af7a57c1a7334ff7ba6f1d8386d0c794.jpeg",
        sections: [
          "https://static.staff-clothes.com/uploads/media/default/0003/36/0d45df75c1664fc5a2440d1c4c2a2ea1.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/534272ee03e74f828794ba2e407b9d82.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/c80ba3a0b9ae4fefb95c4ce2c052dd62.jpeg",
          "https://static.staff-clothes.com/uploads/media/default/0003/36/6a9f4fababfc4f17b44521128ae6feab.jpeg",
        ],
        podborka: [""],
      },
      cloth: {
        outerwear: {
          anorak: {},
          jackets: {},
          autumnSpringParka: {},
          winterParka: {},
          winterJacket: {},
        },
        sweatshirt: {},
        shirt: {},
        trousers: {
          jeans: {},
          sportTrousers: {},
          kargo: {},
        },
        sportSuit: {},
        tShirtPolo: {},
        shorts: {},
        underwear: {},
      },
      shoes: {
        winterShoes: {},
        sneakers: {},
      },
      accessories: {
        bags: {
          backpack: {},
          beltBag: {},
          shoulderBag: {},
        },
        capPanama: {},
        winterHat: {},
        scarfMitten: {},
        socks: {},
        beltWallet: {},
      },
    },
  },
};
