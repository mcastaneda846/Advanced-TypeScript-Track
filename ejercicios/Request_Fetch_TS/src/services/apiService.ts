import { fetchData } from './fetchData';
import { ApiResponse } from '../models/apiResponse';

export class ApiService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(): Promise<ApiResponse<T>> {
    return fetchData<T>(this.endpoint);
  }

  async getOne(id: number): Promise<ApiResponse<T>> {
    const url = `${this.endpoint}/${id}`;
    return fetchData<T>(url);
  }
}