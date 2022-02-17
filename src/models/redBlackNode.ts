import { Node } from './node';

export enum Colors {
  RED = 0,
  BLACK = 1
}

export class RedBlackNode extends Node {
  color: Colors;
  constructor(
    public key: any,
    public left: RedBlackNode | null = null,
    public right: RedBlackNode | null = null,
    public parent: RedBlackNode | null= null,
    ) {
    super(key);
    this.color = Colors.RED;
  }
  isRed() {
    return this.color === Colors.RED;
  }
}
