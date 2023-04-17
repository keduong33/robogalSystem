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
import RetrieveList from "../utilities/RetrieveListFirebase";
import { useAuth } from "../../authentication/AuthContext";
import FullSessionInfoComp from "../CardComps/FullSessionInfoCard";

function SessionTemplateListComp() {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); //a flag to display more info on a session
  const [template, setTemplate] = useState();
  const [templateList, setTemplateList] = useState([""]);
  const [loading, setLoading] = useState(true);
  let count = 0;

  useEffect(() => {
    async function fetchTemplateList() {
      const templates = await RetrieveList("sessionTemplates", user);
      setTemplateList(templates);
      setLoading(false);
    }
    fetchTemplateList();
  }, [loading]);

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
                    setIsModalOpen(true);
                    setTemplate(templateObj);
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
        {isModalOpen && (
          <FullSessionInfoComp
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            template={template}
          />
        )}
      </div>
    </div>
  );
}

export default SessionTemplateListComp;
