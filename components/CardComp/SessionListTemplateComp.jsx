import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { MdLocationOn } from "react-icons/md";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FullSessionInfoComp from "./FullSessionInfoComp";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";

function SessionTemplateListComp() {
  const { user } = useAuth();
  const [moreInfo, setMoreInfo] = useState(false); //a flag to display more info on a session
  const [info, setInfo] = useState("");
  let count = 0;

  //const [templateList, setTemplateList] = useState([""]);
  // useEffect(() => {
  //   async function fetchSessionList() {
  //     const templates = await GetDataListComp("sessionTemplate", user);
  //     setTemplateList(templates);
  //   }
  //   fetchSessionList();
  // }, [user]);

  function createData(
    title,
    status,
    date,
    time,
    location,
    longDescription,
    imageUrl
  ) {
    return { title, status, date, time, location, longDescription, imageUrl };
  }

  const templateList = [
    createData(
      "Intro 1",
      "Confirmed",
      "1/1/2001",
      "1AM-2AM",
      "Your primary",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      "/images/test.jpg"
    ),
    createData(
      "Intro 2",
      "Pending",
      "2/2/2002",
      "1AM-2AM",
      "Location",
      "This is a long desc",
      "/images/test.jpg"
    ),
    createData(
      "Lego",
      "Declined",
      "3/3/2003",
      "1AM-2AM",
      "Location",
      "This is a long desc",
      "/images/test.jpg"
    ),
  ];

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {templateList.map((templateObj) => (
          <div className="max-w-full flex justify-center" key={count++}>
            <Card
              sx={{ borderRadius: "20px" }}
              className="w-80 sm:w-80 lg:w-96 xl:max-w-xl h-72"
            >
              {/* --------------------------Card Header-------------------------- */}
              <CardHeader
                title={
                  <Box className="font-bold h-full">{templateObj.title}</Box>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />

              {/* --------------------------Card Content-------------------------- */}
              <CardContent>
                <Typography
                  component={"div"}
                  variant="body1"
                  className="overflow-auto text-ellipsis px-1 max-w-xs sm:w-64 lg:w-72 xl:w-full h-20 xl:h-24"
                >
                  {templateObj.shortDescription}
                </Typography>
                <Typography component={"div"} variant="body1" className="pt-3">
                  <Box className="flex">
                    <MdLocationOn />
                    {templateObj.location}
                  </Box>
                </Typography>
              </CardContent>

              {/* --------------------------Button-------------------------- */}
              <CardActions className="w-fit h-fit mx-auto">
                <button
                  className="greenButton w-fit h-fit"
                  onClick={() => {
                    setMoreInfo(true);
                    setInfo(templateObj);
                  }}
                >
                  Select This Session
                </button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>

      {/* Overlay/Popup for more Info on the session */}
      <div>
        {moreInfo && (
          <FullSessionInfoComp
            moreInfo={moreInfo}
            setMoreInfo={setMoreInfo}
            info={info}
          />
        )}
      </div>
    </div>
  );
}

export default SessionTemplateListComp;
