import { Product, User } from "../interfaces/interfaces";

//  PRODUCTS
const product1: Product = {
  sku: 1,
  name: "Laptop Pro",
  brand: "TechBrand",
  quantity: 10,
  price: 1200,
  isActive: true,
  category: "Electronics",
  imageUrl: "https://msftstories.thesourcemediaassets.com/sites/41/2024/05/Surface-Laptop-and-Surface-Pro-Hero-1024x576-1-960x576.jpg",
  createdAt: new Date()
};

const product2: Product = {
  sku: 2,
  name: "Wireless Mouse",
  brand: "LogiTech",
  quantity: 50,
  price: 25,
  isActive: true,
  category: "Accessories",
  imageUrl: "https://exitocol.vtexassets.com/arquivos/ids/22846326/mouse-raton-inalambrico-rgb-bluetooth-recargable-receptr-usb.jpg?v=638515561158000000",
  createdAt: new Date()
};

const product3: Product = {
  sku: 3,
  name: "Mechanical Keyboard",
  brand: "KeyPro",
  quantity: 30,
  price: 80,
  isActive: true,
  category: "Accessories",
  imageUrl: "https://store.hp.com/app/assets/images/uploads/prod/are-mechanical-keyboards-better-gaming-hero1537748638452.jpg",
  createdAt: new Date()
};

const product4: Product = {
  sku: 4,
  name: "Monitor 24''",
  brand: "ViewTech",
  quantity: 20,
  price: 200,
  isActive: true,
  category: "Electronics",
  imageUrl: "https://http2.mlstatic.com/D_NQ_NP_879996-MLU79251642801_092024-O.webp",
  createdAt: new Date()
};

const product5: Product = {
  sku: 5,
  name: "USB-C Hub",
  brand: "Hubify",
  quantity: 40,
  price: 45,
  isActive: true,
  category: "Accessories",
  imageUrl: "https://media.falabella.com/falabellaCO/122242234_01/w=1500,h=1500,fit=cover",
  createdAt: new Date()
};

const product6: Product = {
  sku: 6,
  name: "Gaming Chair",
  brand: "ComfortSeat",
  quantity: 15,
  price: 300,
  isActive: true,
  category: "Furniture",
  imageUrl: "https://www.greensoul.online/cdn/shop/files/r1_650x.jpg?v=1756712404",
  createdAt: new Date()
};

const product7: Product = {
  sku: 7,
  name: "Desk Lamp",
  brand: "BrightLight",
  quantity: 25,
  price: 35,
  isActive: true,
  category: "Home",
  imageUrl: "https://www.ikea.com/ca/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg?f=s",
  createdAt: new Date()
};

const product8: Product = {
  sku: 8,
  name: "External Hard Drive",
  brand: "StorageX",
  quantity: 18,
  price: 90,
  isActive: true,
  category: "Electronics",
  imageUrl: "https://i.ebayimg.com/images/g/-zsAAOSwwypj2Ndu/s-l1200.jpg",
  createdAt: new Date()
};

const product9: Product = {
  sku: 9,
  name: "Smartphone",
  brand: "PhoneMax",
  quantity: 22,
  price: 800,
  isActive: true,
  category: "Electronics",
  imageUrl: "https://m.media-amazon.com/images/I/310LAs8L+uL._SL500_.jpg",
  createdAt: new Date()
};

const product10: Product = {
  sku: 10,
  name: "Tablet",
  brand: "TabWorld",
  quantity: 12,
  price: 400,
  isActive: true,
  category: "Electronics",
  imageUrl: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
  createdAt: new Date()
};

const product11: Product = {
  sku: 11,
  name: "Bluetooth Speaker",
  brand: "SoundBeat",
  quantity: 35,
  price: 60,
  isActive: true,
  category: "Audio",
  imageUrl: "https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_640%2Cc_limit/StormBox%25202%2520ryan%2520waniata.png",
  createdAt: new Date()
};

const product12: Product = {
  sku: 12,
  name: "Webcam HD",
  brand: "CamPro",
  quantity: 28,
  price: 70,
  isActive: true,
  category: "Accessories",
  imageUrl: "https://play-lh.googleusercontent.com/QxpQbQUOn2XuaGDhwqyPP7XLWDxAWlNBX5uYZkRPTX6HC-oUR2jpkJ57Ia4lZzy_TUu2",
  createdAt: new Date()
};

const product13: Product = {
  sku: 13,
  name: "Headphones",
  brand: "AudioMax",
  quantity: 45,
  price: 120,
  isActive: true,
  category: "Audio",
  imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2025/11/BEST-RUNNING-HEADPHONES-0016-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
  createdAt: new Date()
};

const product14: Product = {
  sku: 14,
  name: "Smart Watch",
  brand: "WatchX",
  quantity: 16,
  price: 250,
  isActive: true,
  category: "Wearables",
  imageUrl: "https://plazastore.com.co/cdn/shop/files/Disenosintitulo_20.png?v=1718499843",
  createdAt: new Date()
};

const product15: Product = {
  sku: 15,
  name: "Power Bank",
  brand: "ChargeIt",
  quantity: 60,
  price: 40,
  isActive: true,
  category: "Accessories",
  imageUrl: "https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como-elegir-un-cargador-portatil-power-bank.jpg",
  createdAt: new Date()
};

// Array Product
export const products: Product[] = [
  product1, product2, product3, product4, product5,
  product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15
];


// USERS
const user1: User = {
  id: 1,
  fullName: "Camila Lopez",
  email: "camila@example.com",
  isActive: true,
  role: "admin",
  address: {
    street: "Calle 10 #45-23",
    city: "Medellín",
    zip: "050001",
    country: "Colombia"
  },
  createdAt: new Date()
};

const user2: User = {
  id: 2,
  fullName: "Maribel Gomez",
  email: "maribel@example.com",
  isActive: true,
  role: "user",
  address: {
    street: "Carrera 15 #30-10",
    city: "Bogotá",
    zip: "110111",
    country: "Colombia"
  },
  createdAt: new Date()
};

const user3: User = {
  id: 3,
  fullName: "Juan Perez",
  email: "juan@example.com",
  isActive: false,
  role: "user",
  address: {
    street: "Calle 5 #20-40",
    city: "Cali",
    zip: "760001",
    country: "Colombia"
  },
  createdAt: new Date()
};

const user4: User = {
  id: 4,
  fullName: "Ana Torres",
  email: "ana@example.com",
  isActive: true,
  role: "user",
  address: {
    street: "Avenida San Martín #12-50",
    city: "Cartagena",
    zip: "130001",
    country: "Colombia"
  },
  createdAt: new Date()
};

const user5: User = {
  id: 5,
  fullName: "Carlos Ruiz",
  email: "carlos@example.com",
  isActive: true,
  role: "admin",
  address: {
    street: "Calle 30 #25-20",
    city: "Barranquilla",
    zip: "080001",
    country: "Colombia"
  },
  createdAt: new Date()
};

export const users: User[] = [user1, user2, user3, user4, user5];