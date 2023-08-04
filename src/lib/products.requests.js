const WOOD = [
    { 
        id: 1, 
        title: "Mueble 1", 
        price: 676,
        category: "Escritorios",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi possimus fugiat repellendus accusantium, ea tempora repudiandae beatae id exercitationem est recusandae. Soluta sed quas debitis iure officiis dicta non corporis?",
        img: "https://i.pinimg.com/564x/e4/9c/5b/e49c5b5e78d360735b279150676eeb9c.jpg", 
        stock: 10,
    }, 
    { 
        id: 2, 
        title: "Mueble 2", 
        price: 828,
        category: "Sillas",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi possimus fugiat repellendus accusantium, ea tempora repudiandae beatae id exercitationem est recusandae. Soluta sed quas debitis iure officiis dicta non corporis?",
        img: "https://i.pinimg.com/564x/e3/9d/36/e39d36640f81219ae7fad3148558b4ca.jpg",  
        stock: 8,
    },
    { 
        id: 3, 
        title: "Mueble 3", 
        price: 827,
        category: "Placars",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi possimus fugiat repellendus accusantium, ea tempora repudiandae beatae id exercitationem est recusandae. Soluta sed quas debitis iure officiis dicta non corporis?",
        img: "https://i.pinimg.com/564x/f8/9b/c3/f89bc3a7d438c42791234cc21599b9ad.jpg", 
        stock: 10,
    },
];

export const productsMuebles = (id) => {
    const cWood = id ? WOOD.filter((wood) => wood.category.toLowerCase() === id) : WOOD;
    return new Promise ((res) => {
        setTimeout(() => {
            res(cWood);
        }, 2000);
    });
};

export const productsMueble = (id) => {
    const wood = WOOD.filter((wood) => wood.id === id)[0];
    return new Promise ((res) => {
        setTimeout(() => {
            res(wood);
        }, 1000);
    });
};
