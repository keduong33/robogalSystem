import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

function GetDataListComp(requestedCollection, user) {
  let [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const querySnapshot = await getDocs(collection(db, requestedCollection));
  //     let tempList = [];
  //     querySnapshot.forEach((doc) => {
  //       tempList.push(doc.data());
  //     });
  //     setDataList(tempList);
  //   };
  //   return () => {
  //     getData();
  //   };
  // }, []);
  // console.log(dataList);

  return dataList;

  // async function getSessionList(user) {
  //   let role = null;
  //   try {
  //     const docRef = doc(db, "user", user.uid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       role = docSnap.get("role");
  //     }
  //     return role;
  //   } catch (error) {
  //     return role;
  //   }
  // }
}

export default GetDataListComp;
