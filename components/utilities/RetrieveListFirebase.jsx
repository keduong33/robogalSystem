import { doc, getDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

async function GetDataListComp(requestedCollection, user) {
  let data = [""];
  if (requestedCollection === "sessions") {
    const ownedSessionList = await getOwnedSessionList(user);
    data = getInfoList(ownedSessionList, user.role);
  } else {
    data = getTemplateList();
  }
  return data;
}

async function getTemplateList() {
  let infoList = [];
  const querySnapshot = await getDocs(collection(db, "sessionTemplates"));
  querySnapshot.forEach((doc) => {
    infoList.push(doc.data());
  });
  return infoList;
}

async function getInfoList(ownedSessionList, role) {
  let infoList = [];
  if (role != "admin") {
    for (let i = 0; i < ownedSessionList.length; i++) {
      let docRef = doc(db, "sessions", ownedSessionList[i]);
      let docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        infoList.push(docSnap.data());
      }
    }
    return infoList;
  } else {
    if (role == "admin") {
      const querySnapshot = await getDocs(collection(db, "sessions"));
      querySnapshot.forEach((doc) => {
        infoList.push(doc.data());
      });
    }
  }
}

async function getOwnedSessionList(user) {
  try {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.get("ownedSessionList");
    }
  } catch (error) {
    console.log(
      "Something wrong with the 'Getting owned session list' function"
    );
  }
}

export default GetDataListComp;
