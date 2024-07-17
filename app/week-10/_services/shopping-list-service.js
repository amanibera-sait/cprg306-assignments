import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsData = []
  const q = query(
        collection(db, "users", userId, "items"),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        itemsData.push(doc.data())
      });
  return itemsData;
};

export const addItem = async (userId, item) => {
    const collectionRef = collection(db, "users", userId, "items")
    const docRef = await addDoc(collectionRef, {
        name: `${item.name}`,
        quantity: item.quantity,
        category: `${item.category}`,
      });
      console.log("Item is created with ID: ", docRef.id);
      return docRef.id;
}