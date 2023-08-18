import { addDoc, collection } from 'firebase/firestore';
import { al } from './config';

const ordersRef = collection(al, 'orders');

export const addOrder = async (order) => {
    const orderDoc = await addDoc(ordersRef, order);

    return orderDoc.id;
}