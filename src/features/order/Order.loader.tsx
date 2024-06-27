import { ActionFunctionArgs } from "react-router";
import { getOrder } from "../../services/apiRestaurant";

interface orderLoaderProps extends ActionFunctionArgs {
  params: {
    orderId: string;
  };
}

export async function loader({ params }: orderLoaderProps) {
  const order = await getOrder(params.orderId);
  return order;
}
