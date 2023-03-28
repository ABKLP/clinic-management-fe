export interface PaginatedResponse<T> {
  data: T[];
  limit: number;
  page: number;
  nextPage: number;
  prevPage: number;
}
