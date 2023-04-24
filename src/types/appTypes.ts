export type IContacts = {
  id: string;
  name: string;
  number: string;
}[];

export interface IContactsItem{
    name: string,
    number: string,
    onClick:React.MouseEventHandler<HTMLButtonElement>
}

export type IStoreGetContact = {

  createdAt: string;
  name: string;
  number: string;
  id: string;

}
export type IStoreContacts = IStoreGetContact[] | [];