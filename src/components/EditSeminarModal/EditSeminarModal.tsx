import React, { useState } from "react";
import * as cls from "./EditSeminarModal.style.module.scss";
import SeminarService from "../SeminarsList/SeminarsList.service";
import { ISeminar } from "../Seminar";

interface EditSeminarModalProps extends ISeminar {
  onClose: () => void;
}

const EditSeminarModal = (props: EditSeminarModalProps) => {
  const { title, date, time, id, photo, description, onClose } = props;
  const [titleEdit, setTitleEdit] = useState(title);
  const [dateEdit, setDateEdit] = useState(date);
  const [timeEdit, setTimeEdit] = useState(time);
  const [descriptionEdit, setDescriptionEdit] = useState(description);

  const handleSave = async () => {
    try {
      await SeminarService.updateSeminar({
        title: titleEdit,
        date: dateEdit,
        description: descriptionEdit,
        time: timeEdit,
        id,
        photo,
      });
      onClose();
    } catch (error) {
      console.error("Ошибка при обновлении семинара", error);
    }
  };

  return (
    <div
      className={cls.overlay}
      onClick={(event) => {
        event.currentTarget === event.target && onClose();
      }}
    >
      <div className={cls.modal}>
        <form className={cls.edit_block}>
          <h2>Редактирование семинара</h2>
          <input
            value={titleEdit}
            onChange={(e) => setTitleEdit(e.target.value)}
            placeholder="Введите название"
          />
          <input
            value={dateEdit}
            onChange={(e) => setDateEdit(e.target.value)}
            placeholder="Введите дату"
          />
          <input
            value={timeEdit}
            onChange={(e) => setTimeEdit(e.target.value)}
            placeholder="Введите время"
          />
          <textarea
            value={descriptionEdit}
            onChange={(e) => setDescriptionEdit(e.target.value)}
          />
          <div className={cls.buttons}>
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSeminarModal;
