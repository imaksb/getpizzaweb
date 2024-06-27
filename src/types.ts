interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

interface MenuItemProps {
  pizza: Pizza;
}

interface CartItem {
  addIngredients: string[];
  removeIngredients: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface Order {
  id: number;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
  customer: string;
  status: string;
  priority: boolean;
  cart: CartItem[];
}

interface OrderResponse {
  status: string;
  data: Order;
}

interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
interface OrderData {
  phone: string;
  customer: string;
  address: string;
  cart: CartItem[];
  priority: boolean;
}

interface CreateOrderError {
  phone: string;
}
