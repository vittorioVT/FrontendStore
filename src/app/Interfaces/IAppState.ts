import { ProductElements } from './productElements';

export interface IAppState {
  items: ProductElements[];
  myOrder: ProductElements[];
  showPopup: boolean;
  userId: number;
  orderPlaced: boolean;
}
