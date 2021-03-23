import { useState } from "react";
import { createContext, useContext } from "react";
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
})

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {

  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])
  const [checkout, setCheckout] = useState({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   if(localStorage.checkout_id) {
  //     fetchCheckout(localStorage.checkout_id)
  //   } else {
  //     createCheckout()
  //   }
  // }, [])

  const createCheckout = async () => {
    try {
      let checkout = await client.checkout.create()
      console.log('checkout', checkout)
      localStorage.setItem("checkout-id", checkout.id)
      setCheckout(checkout)
    } catch(err) {
      console.log('erreur checkout', err)
    }
  }

  const fetchCheckout = async (checkoutId) => {
    let res = await client.checkout.fetch(checkoutId)
    setCheckout(res)
  }

  const addItemToCheckout = async (variantId, quantity) => {
    console.log(checkout.id, variantId, quantity)
    let lineItemsToAdd = await [
      {
        variantId,
        quantity: +quantity
      }
    ]
    try{
      let res = await client.checkout.addLineItems(checkout.id, lineItemsToAdd)
      console.log('res', variantId, quantity, res)
      setCheckout(res)
      openCart()
    } catch(err) {
      console.log('err', err)
    }
  }

  const removeLineItem = async (lineItemIdsToRemove) => {
    let res = await client.checkout.removeLineItems(checkout.id, lineItemIdsToRemove)
    setCheckout(res)
  }

  const fetchAllProducts = async () => {
    let resp = await client.product.fetchAll()
    setProducts(resp)
  }

  const fetchProductWithHandle = async (handle) => {
    let resp = await client.product.fetchByHandle(handle)
    setProduct(resp)
  }

  const closeCart = () => setIsCartOpen(false)

  const openCart = () => setIsCartOpen(true)

  const closeMenu = () => setIsMenuOpen(false)

  const openMenu = () => setIsMenuOpen(true)

  return (
    <ShopContext.Provider
      value={{
        addItemToCheckout,
        createCheckout,
        closeCart,
        closeMenu,
        fetchAllProducts,
        fetchCheckout,
        fetchProductWithHandle,
        removeLineItem,
        setIsCartOpen,
        setIsMenuOpen,
        checkout,
        isCartOpen,
        isMenuOpen,
        openCart,
        openMenu,
        product,
        products
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const shop = useContext(ShopContext);
  return shop;
};
