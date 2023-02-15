import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

async function GetDataListComp(requestedCollection, user) {
  let ownedSessionList = await getOwnedSessionList(user);

  const role = await getRole(user);

  let dataList = await getInfoList(ownedSessionList, role);

  return dataList;
}

async function getInfoList(ownedSessionList, role) {
  let infoList = [];
  if (role != "admin") {
    for (let i = 0; i < ownedSessionList.length; i++) {
      let docRef = doc(db, "session", ownedSessionList[i]);
      let docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        infoList.push(docSnap.data());
      }
    }
    return infoList;
  } else {
    if (role == "admin") {
      const querySnapshot = await getDocs(collection(db, "session"));
      querySnapshot.forEach((doc) => {
        console.log("test");
      });
    }
  }
}

async function getRole(user) {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  let role = "user";

  if (docSnap.exists()) {
    role = docSnap.get("role");
  }
  return role;
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
      "Something wrong with the function that gets owned session list"
    );
  }
}

export default GetDataListComp;
