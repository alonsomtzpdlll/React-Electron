import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modalsty({state,Hand,Modalcontent}) {
  return (
    <div>
      <Dialog
        fullScreen
        open={state}
        onClose={() => Hand(false)}
        TransitionComponent={Transition}
      >
       {Modalcontent}
      </Dialog>
    </div>
  );
}