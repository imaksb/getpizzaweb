import { Form, useActionData, useNavigation } from "react-router-dom";
import SubmitButton from "../../ui/SubmitButton";

// https://uibakery.io/regex-library/phone-number

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart as CartItem[];
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData() as CreateOrderError;
  console.log(cart);
  return (
    <div className="px-4 py-6">
      <h2 className="py-2 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>

          <div className="grow">
            <input type="text" name="customer" className="input w-full" required />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="rounded-lg p-1 px-2 font-mono text-red-500">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="sm:items-centers mb-5 flex flex-col gap-2 sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" className="input w-full" required />
          </div>
        </div>

        <div className="flex gap-2 py-2">
          <input
            type="checkbox"
            name="priority"
            className="h-6 w-6 accent-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-100"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-center font-mono font-medium">
            Get a call?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <SubmitButton isSubmitting={isSubmitting} type="primary">
            {isSubmitting ? "Submitting..." : "Order now"}
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
