export class PageRequest<T> {
  pageIndex ?: number;
  pageSize ?: number;
  sortField ?: string;
  sortOrder ?: string;
  excludedIdsList ?: number[];
  criteria ?: T;

  constructor(pageIndex ?: number, pageSize ?: number, sortField ?: string, sortOrder ?: string,
              excludedIdsList ?: number[], criteria ?: T) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.sortField = sortField;
    this.sortOrder = sortOrder;
    this.excludedIdsList = excludedIdsList;
    this.criteria = criteria;
  }
}
