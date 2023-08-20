package com.yash.ecommerce.service;

import com.yash.ecommerce.exception.CartItemException;
import com.yash.ecommerce.exception.UserException;
import com.yash.ecommerce.model.Cart;
import com.yash.ecommerce.model.CartItem;
import com.yash.ecommerce.model.Product;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
    public CartItem findCartItemById(Long cartItemId) throws CartItemException;

}
