// React Imports
import { useState } from 'react';

const OpenDialogOnElementClick = (props) => {
  // Props
  const { element: Element, dialog: Dialog, elementProps = {}, dialogProps = {} } = props;

  // States
  const [open, setOpen] = useState(false);

  // Extract onClick from elementProps
  const { onClick: elementOnClick, ...restElementProps } = elementProps;

  // Handle onClick event
  const handleOnClick = (e) => {
    if (elementOnClick) elementOnClick(e); // If elementOnClick exists, call it
    setOpen(true); // Open the dialog
  };

  return (
    <>
      {/* Render the passed element and attach the onClick event handler */}
      <Element onClick={handleOnClick} {...restElementProps} />

      {/* Render the dialog and pass the necessary props to control its visibility */}
      <Dialog open={open} setOpen={setOpen} {...dialogProps} />
    </>
  );
};

export default OpenDialogOnElementClick;
