import { collection, getDocs, where, getDoc, query, doc, writeBatch, increment} from "firebase/firestore";
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

// Actualizacion 

export const updateManyWood = async ( items ) => {
    const batch = writeBatch(al);
    
    items.forEach(({id, cantidad})=>{ 
        batch.update(doc(al, "items", id), {
        stock: increment(-cantidad)
})
})
    batch.commit();
}

