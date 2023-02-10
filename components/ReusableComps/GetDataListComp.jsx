import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

function GetDataListComp(requestedCollection, user) {
  let [dataList, setDataList] = useState([]);
  let role = getUserRole(user);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, requestedCollection));
      let tempList = [];
      querySnapshot.forEach((doc) => {
        tempList.push(doc.data());
      });
      setDataList(tempList);
    };
    return () => {
      getData();
    };
  }, []);

  return dataList;
}

async function getUserRole(user) {
  console.log(user);
  const docRef = doc(db, "user", user.uid);
  const docSnap = await getDoc(docRef);
  let role = null;
  if (docSnap.exists()) {
    role = docSnap.get("role");
  }
  return role;
}

export default GetDataListComp;
