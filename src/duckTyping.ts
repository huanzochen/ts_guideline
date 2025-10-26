type User = { id: string };

type Order = { id: string };

function getOrderId({ order }: { order: Order }) {
  return order.id;
}

const user1: User = { id: "user_123" };
const order1: Order = { id: "order_456" };
getOrderId({ order: order1 }); // Valid

getOrderId({ order: user1 });
