import { AddUnderscorePipe } from './add-underscore.pipe';
import { OrderPipe } from './order-by.pipe';
import { RemoveSelectedItemsPipe } from './remove-selected-items.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';

export const pipes: any[] = [
  AddUnderscorePipe,
  OrderPipe,
  RemoveSelectedItemsPipe,
  FilterByNamePipe
];
