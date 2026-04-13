import { ApiResponse } from '../models/apiResponse';

export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);

    // Si el status NO es 2xx
    if (!response.ok) {
      return {
        data: null,
        status: response.status,
        error: `HTTP Error: ${response.status} - ${response.statusText}`
      };
    }

    const data: T = await response.json();

    return {
      data,
      status: response.status,
      error: null
    };

  } catch (error) {
    //  Error de red
    return {
      data: null,
      status: 500,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}