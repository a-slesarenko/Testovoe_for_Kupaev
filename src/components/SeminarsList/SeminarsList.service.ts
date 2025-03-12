import $api from '@/api/AxiosInstance';
import { ISeminar } from '../Seminar/Seminar.types';
import { AxiosResponse } from 'axios';

// Выбрал сервисы на классах потому что нравится что все сгруппированно единой сущностью, но можно и функциями отдельными сделать. Мне больше нравится на классах
export default class SeminarService {

  static async getSeminars(): Promise<AxiosResponse> {
    return $api.get('/seminars');
  }

  static async deleteSeminar(id: number): Promise<AxiosResponse> {
    return $api.delete(`/seminars/${id}`);
  }

  static async createSeminar(data: ISeminar): Promise<AxiosResponse> {
    return $api.post('/seminars', data);
  }

  static async updateSeminar(data: ISeminar): Promise<AxiosResponse> {
    return $api.put(`/seminars/${data.id}`, data);
  }
}