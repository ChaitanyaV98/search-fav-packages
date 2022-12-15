import React from "react";
import Modal from "react-modal";
import Button from "./Button";
function MyModal({ className, isOpen, onCancel, onDelete, bodyText, onClose }) {
  console.log("we are in my modallll--------------");
  //   const [isOpen, setIsOpen] =useState(false);

  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (!modalRef.current.contains(e.target)) {
  //       // Close the modal here
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none px-10"
      >
        <div className="justify-center align-center border-2 border-gray-500 px-20 ">
          <p className="relative w-auto m-6 mx-auto max-w-3xl">{bodyText}</p>
          <div className="flex flex-row gap-4 justify-center mt-20 mb-10">
            <Button
              onClick={onCancel}
              label="cancel"
              classNames={
                "bg-green-500 px-5 py-2 rounded text-white w-40 cursor-pointer"
              }
            />
            <Button
              onClick={onDelete}
              label="delete"
              classNames={
                "bg-red-500 px-5 py-2 rounded text-white w-40 cursor-pointer"
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default MyModal;
