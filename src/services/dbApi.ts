import axios from 'axios';
import { IGoal } from '../Interfaces/index';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const dbApi = {
  async getGoals(): Promise<IGoal[]> {
    return (await api.get('/goals')).data;
  },
  async createGoal(goal: IGoal): Promise<IGoal[]> {
    return (await api.post('/goals', goal)).data;
  },
  async deleteGoal(id: string): Promise<IGoal[]> {
    return (await api.delete(`/goals/${id}`)).data;
  },
  async updateGoal(id: string, goal: IGoal): Promise<IGoal[]> {
    return (await api.put(`/goals/${id}`, goal)).data;
  },
};

export default dbApi;
