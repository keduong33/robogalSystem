import React, { useEffect, useState } from "react";
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

function GetDataListComp(requestedCollection, user) {
  let [dataList, setDataList] = useState([]);
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

export default GetDataListComp;
