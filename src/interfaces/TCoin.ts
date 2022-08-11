export type TCoin = {
  id: string;
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
  Changepcthour: number;
};

export enum EStatus {
  WAITING = "waiting",
  LOADING = "loading",
  ERROR = "error",
}
