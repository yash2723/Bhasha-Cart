package com.yash.ecommerce.service;

import com.yash.ecommerce.dto.AddItemRequest;
import com.yash.ecommerce.exception.ProductException;
import com.yash.ecommerce.model.Cart;
import com.yash.ecommerce.model.User;

public interface CartService {
    public Cart createCart(User user);
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
    public Cart findUserCart(Long userId);

}
