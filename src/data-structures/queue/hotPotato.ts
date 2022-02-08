import Queue from './queue';

function hotPotato(elementsList: any[], num: number) {
  const queue = new Queue();
  elementsList.forEach(item => queue.enqueue(item));
  const elimitatedList = [];
  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }
  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}

export default hotPotato;