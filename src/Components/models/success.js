import React, { useContext } from "react";
import { Alert, Button, Typography } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MainContext } from "../../Contexts/MainContext";

export default function Example() {
  let { open, setOpen, alertMessage } = useContext(MainContext)
  return (
    <React.Fragment>
      {
        open ? <Alert
          color="green"
          className={`max-w-screen-md fixed z-50 left-[50%] translate-x-[-50%] top-2 ${alertMessage.color ? 'bg-green-400' : 'bg-red-400'}`}
          icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
          onClose={() => setOpen(false)}
        >
          <Typography variant="h5" color="white">
            {alertMessage.color ? 'Success' : 'oops!'}
          </Typography>
          <Typography color="white" className="mt-2 font-normal">
            <h1>{alertMessage.msg}</h1>
          </Typography>
        </Alert> : ''


      }

    </React.Fragment>
  );
}