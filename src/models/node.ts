export class Node {
  constructor(
    public key: any,    // 节点值
    public left: Node | null = null, // 左侧节点引用
    public right: Node | null = null // 右侧节点引用
  ) {}
}