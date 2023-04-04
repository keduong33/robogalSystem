import React, { useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

function SaveNewSession(newSession, user) {
  const template = JSON.parse(sessionStorage.getItem("currentTemplate"));

  const sessionRecord = {
    date: newSession.date,
    location: newSession.location,
    longDescription: template.longDescription,
    owner: user.uid,
    shortDescription: template.shortDescription,
    status: "Pending",
    time: newSession.startTime.concat("-", newSession.endTime),
    title: template.title,
  };

  const addNewRecord = async () => {
    let res = await addDoc(collection(db, "sessions"), sessionRecord);
    const sessionsList = (await getDoc(doc(db, "users", user.uid))).get(
      "ownedSessionList"
    );
    sessionsList.push(res.id);
    res = await updateDoc(doc(db, "users", user.uid), {
      ownedSessionList: sessionsList,
    });
  };
  addNewRecord();
}

export default SaveNewSession;
