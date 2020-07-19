export interface UserModel {
  id?: any;
  name?: string;
  phone?: number; // number is used because the phone cannot be type string, it will be always a number.
}
