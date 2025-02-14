import { 
  ref,
  set,
  get,
  update,
  remove,
  push,
  query,
  orderByChild,
  equalTo
} from 'firebase/database';
import { rtdb } from './firebase';

// Write data to realtime database
export const writeToRTDB = async (path: string, data: any) => {
  try {
    await set(ref(rtdb, path), data);
    return true;
  } catch (error) {
    console.error('Error writing to RTDB:', error);
    throw error;
  }
};

// Read data from realtime database
export const readFromRTDB = async (path: string) => {
  try {
    const snapshot = await get(ref(rtdb, path));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error('Error reading from RTDB:', error);
    throw error;
  }
};

// Update data in realtime database
export const updateInRTDB = async (path: string, data: any) => {
  try {
    await update(ref(rtdb, path), data);
    return true;
  } catch (error) {
    console.error('Error updating in RTDB:', error);
    throw error;
  }
};

// Delete data from realtime database
export const deleteFromRTDB = async (path: string) => {
  try {
    await remove(ref(rtdb, path));
    return true;
  } catch (error) {
    console.error('Error deleting from RTDB:', error);
    throw error;
  }
};

// Push new data with auto-generated key
export const pushToRTDB = async (path: string, data: any) => {
  try {
    const newRef = push(ref(rtdb, path));
    await set(newRef, data);
    return newRef.key;
  } catch (error) {
    console.error('Error pushing to RTDB:', error);
    throw error;
  }
};

// Query data by child value
export const queryRTDB = async (path: string, child: string, value: any) => {
  try {
    const queryRef = query(ref(rtdb, path), orderByChild(child), equalTo(value));
    const snapshot = await get(queryRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error('Error querying RTDB:', error);
    throw error;
  }
};