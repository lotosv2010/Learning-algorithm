export class Node {
  public next: any;
  constructor(public element: any) {
    this.next = undefined;
  }
}

export class DoublyNode extends Node {
  public prev: any;
  constructor(public element: any) {
    super(element);
    this.prev = undefined;
  }
}