import React from "react";
import * as cls from "./DeleteConfirmationModal.style.module.scss";

interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal = ({
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) => {
  return (
    <div
      className={cls.overlay}
      onClick={(event) => {
        event.currentTarget === event.target && onCancel();
      }}
    >
      <div className={cls.modal}>
        <h2>Вы уверены, что хотите удалить семинар?</h2>
        <div className={cls.buttons}>
          <button onClick={onConfirm}>Да</button>
          <button onClick={onCancel}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
