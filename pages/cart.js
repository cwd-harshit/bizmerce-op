import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const cart = () => {
  const { cartValue } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  const quantity = cartValue;
  const plus = () => {};
  const minus = () => {};
  return (
    <div>
      <main>
        <div className="cart">
          <div className="cart__head">
            <h1>My Cart({cartValue})</h1>
          </div>
          <div className="cart__products">
            {cart &&
              cart.map((product) => (
                <div className="cart__product_card" key={product._id}>
                  <div className="cart__product_card__left">
                    <img src={product.images[0].url} />
                  </div>
                  <div className="cart__product_card__right">
                    <h2>{product.name}</h2>
                    <div className="product__quantity">
                      <AiOutlineMinus className="icon cc" onClick={minus} />
                      <span>{quantity}</span>
                      <AiOutlinePlus className="icon cc" onClick={plus} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default cart;
