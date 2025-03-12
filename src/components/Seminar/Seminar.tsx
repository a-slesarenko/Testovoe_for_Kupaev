import { useState } from "react";
import * as cls from "./Seminar.style.module.scss";
import { ISeminar } from "./Seminar.types";
import EditSeminarModal from "../EditSeminarModal/EditSeminarModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

interface SeminarProps extends ISeminar {
  onDelete: (id: number) => void;
}

const Seminar = (props: SeminarProps) => {
  const { id, title, description, date, time, photo, onDelete } = props;
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  return (
    <li className={cls.seminar_card}>
      <div className={cls.container}>
        <div className={cls.title_block}>
          <h2>{title}</h2>
        </div>
        <div className={cls.photo}>
          <img src={photo} alt="Seminar_photo" />
        </div>
        <div className={cls.info}>
          <p>{description}</p>
          <p className={cls.seminar_date}>Дата: {date}</p>
          <p className={cls.seminar_date}>Время: {time}</p>
        </div>
        <div className={cls.actions}>
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
        </div>
        {isEditModalOpen && (
          <EditSeminarModal
            {...props}
            onClose={() => setEditModalOpen(false)}
          />
        )}

        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            onConfirm={() => {
              onDelete(id);
              setDeleteModalOpen(false);
            }}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </div>
    </li>
  );
};

export default Seminar;
