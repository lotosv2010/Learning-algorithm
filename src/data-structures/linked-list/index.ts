export interface ILink {
  data: string;
  next?: ILink;
}
export const a: ILink = { data: 'a' };
export const b: ILink = { data: 'b' };
export const c: ILink = { data: 'c' };
export const d: ILink = { data: 'd' };

a.next = b;
b.next = c;
c.next = d;

export default a;