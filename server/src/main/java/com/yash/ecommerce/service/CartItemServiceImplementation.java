package com.yash.ecommerce.service;

import com.yash.ecommerce.exception.CartItemException;
import com.yash.ecommerce.exception.UserException;
import com.yash.ecommerce.model.Cart;
import com.yash.ecommerce.model.CartItem;
import com.yash.ecommerce.model.Product;
import com.yash.ecommerce.model.User;
import com.yash.ecommerce.repository.CartItemRepository;
import com.yash.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartRepository cartRepository;
    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice() * cartItem.getQuantity());

        CartItem createdCartItem = cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
        CartItem item = findCartItemById(id);
        User user = userService.findUserById(item.getUserId());

        if(user.getId().equals(userId)) {
            item.setQuantity(cartItem.getQuantity());
            item.setPrice(item.getQuantity() * item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice() * item.getQuantity());
        }
        return cartItemRepository.save(item);
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(cartItemId);
        User user = userService.findUserById(cartItem.getUserId());
        User reqUser = userService.findUserById(userId);

        if(user.getId().equals(reqUser.getId())) {
            cartItemRepository.deleteById(cartItemId);
        }
        else {
            throw new UserException("You can't remove another users Item.");
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
        if(cartItem.isPresent()) return cartItem.get();
        throw new CartItemException("Cart Item Not Found With Id : " + cartItemId);
    }
}
