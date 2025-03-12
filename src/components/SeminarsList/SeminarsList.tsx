import { useEffect, useState } from "react";
import * as cls from "./SeminarsList.style.module.scss";
import SeminarService from "./SeminarsList.service";
import { ISeminar } from "../Seminar/Seminar.types";
import Seminar from "../Seminar/Seminar";
import { AxiosError } from "axios";

interface SeminarsProps {}

const SeminarsList = (props: SeminarsProps) => {
  const {} = props;

  const [seminars, setSeminars] = useState<ISeminar[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //Получаю семинары с сервера, если успешно заношу в стейт если нет рендерю див с ошибкой, и finally загрузку в false
  useEffect(() => {
    setLoading(true);
    SeminarService.getSeminars()
      .then((response) => {
        setSeminars(response.data);
      })
      .catch((error: AxiosError<JsonServerError>) => {
        console.error("Ошибка при загрузке данных:", error);

        if (error.response) {
          const { status, data } = error.response;
          switch (status) {
            case 404:
              setError("Семинары не найдены");
              break;
            case 500:
              setError("Ошибка на сервере");
              break;
            default:
              setError(`Ошибка: ${data.error || "Неизвестная ошибка"}`);
          }
        } else if (error.request) {
          setError("Ошибка сети: сервер недоступен");
        } else {
          setError(`Ошибка: ${error.message}`);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // Отправляю delete запрос не сервер, далее локально тоже убираю семинар по id при помощи метода filter
  const handleDelete = async (id: number) => {
    try {
      await SeminarService.deleteSeminar(id);
      setSeminars(seminars.filter((seminar) => seminar.id !== id));
    } catch (error) {
      setError("Ошибка при удалении семинара");
    }
  };

  // Можно добавить красивый компонент загрузки и например страницу ошибки если нужно
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={cls.error_message}>{error}</div>;

  return (
    <div>
      <h1 className={cls.title}>Семинары</h1>
      <ul className={cls.list}>
        {seminars.map((seminar) => {
          return (
            <Seminar key={seminar.id} {...seminar} onDelete={handleDelete} />
          );
        })}
      </ul>
    </div>
  );
};

export default SeminarsList;
