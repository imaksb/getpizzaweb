import { ActionFunctionArgs, redirect } from "react-router";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: OrderData = {
    phone: data.phone as string,
    customer: data.customer as string,
    address: data.address as string,
    cart: JSON.parse(data.cart as string) as CartItem[],
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(order);
  const errors = {} as CreateOrderError;

  if (!isValidPhone(order.phone))
    errors.phone = "Please enter a valid phone number.";

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  return redirect(`/order/${newOrder.id}`);
}
