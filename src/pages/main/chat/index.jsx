import { Button, IconButton } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state || {};

  console.log(id);

  const pattern = /\/coachs\/\d+/;

  const clickHandler = () => {
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="flex-1/12 border-b-1 border-gray-300 flex justify-between items-center bg-[#0097a0] max-h-[10dvh]">
        <div className="flex flex-1 items-center justify-start h-full gap-3">
          <IconButton
            className="align-middle"
            sx={{ color: "white" }}
            onClick={() => clickHandler()}
          >
            <KeyboardBackspaceIcon
              sx={{ rotate: "180deg", fontSize: "35px", color: "while" }}
            />
          </IconButton>
        </div>
        <div className="flex-1 flex justify-end ">
          <h1 className="text-3xl text-white">fitLine</h1>
        </div>
      </header>
      <main className="flex-8/12 overflow-auto bg-[url(/background.jpg)] bg-repeat-y bg-cover"></main>
      {/* <main className="flex-8/12 overflow-auto bg-sky-200"></main> */}
      <nav className="bg-transparent w-full flex-1/12 flex max-h-[10dvh] border-t-1 border-gray-300 items-center">
        {/* <textarea className="outline-0 flex-10/12 p-2 text-lg flex justify-center items-center bg-amber-200" /> */}
        <div className="flex items-center flex-1 h-full">
          <textarea
            //   value={message}
            //   onChange={(e) => setMessage(e.target.value)}
            placeholder="پیامت رو بنویس..."
            rows={1}
            className="px-2 py-2 focus:outline-none text-lg resize-none overflow-hidden h-[60%] w-full"
            //   onKeyDown={(e) => {
            //     if (e.key === "Enter" && !e.shiftKey) {
            //       e.preventDefault();
            //       handleSend();
            //     }
            //   }}
          />
        </div>
        <Button
          component="label"
          role={undefined}
          variant=""
          sx={{
            width: "40px",
            height: "40px",
            my: "auto",
            borderRadius: "100%",
          }}
        >
          <AttachFileIcon />
        </Button>
        <IconButton aria-label="delete" size="large" sx={{ rotate: "180deg" }}>
          <SendIcon color="success" fontSize="inherit" />
        </IconButton>
      </nav>
    </div>
  );
};

export default Chat;
