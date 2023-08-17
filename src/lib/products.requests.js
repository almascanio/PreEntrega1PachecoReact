const WOOD = [
    { 
        id: 1, 
        title: "Escritorio Moderno", 
        price: 15800,
        category: "escritorios",
        description: "Por su tamaño y estilo permite ubicarlo en cualquier ambiente de la casa, puede arrimarse a la pared o presentarse en un espacio libre",
        img: "https://i.pinimg.com/564x/bc/5f/bb/bc5fbb1fc1165fccbbd966bd1ca40948.jpg", 
        stock: 10,
    }, 
    { 
        id: 2, 
        title: "Silla Dakota", 
        price: 5350,
        category: "sillas",
        description: "El asiento y patas construidos en madera natural le proporcionan un aspecto orgánico que contrasta con su respaldo de polipropileno tapizado en crema. Un diseño bello y minimalista que combina a la perfección con todo tipo de mesas.",
        img: "https://i.pinimg.com/564x/e3/9d/36/e39d36640f81219ae7fad3148558b4ca.jpg",  
        stock: 8,
    },
    { 
        id: 3, 
        title: "Closet Confort", 
        price: 30500,
        category: "placars",
        description: "Eleva la organización y el diseño de tu espacio con nuestro exclusivo Closet Moderno de Alta Funcionalidad. Diseñado para satisfacer las necesidades contemporáneas de almacenamiento y estilo, este armario es la solución perfecta para mantener tus prendas y accesorios en orden mientras realza la estética de tu habitación.",
        img: "https://i.pinimg.com/564x/f8/9b/c3/f89bc3a7d438c42791234cc21599b9ad.jpg", 
        stock: 10,
    },
];

import { collection, getDocs, where, getDoc, query, doc, addDoc } from "firebase/firestore";
import { al } from "./config";

const woodReferencia = collection(al, "items");

export const productsMuebles = async (category) => {
    const q = category 
        ? query(woodReferencia, where("category", "==", category))
        : woodReferencia; 

    let woods = [];
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        woods = [...woods, { ...doc.data(), id: doc.id }];
    });

    return woods;
};

export const productsMueble = async (id) => {
    const document = doc(al, "items", id);
    const docSnap = await getDoc(document);
    
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

    return null; 
};

