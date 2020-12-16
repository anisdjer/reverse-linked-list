interface INode {
  value: number;
  next?: INode;
}

export const reverseList = (head: INode, next?: INode): INode => {
  const cNext = head.next;
  head.next = next;

  if (!cNext) {
    return head;
  }

  return reverseList(cNext, head);
};
