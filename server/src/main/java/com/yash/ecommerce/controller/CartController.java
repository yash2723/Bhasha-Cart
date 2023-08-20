package com.yash.ecommerce.controller;

import com.yash.ecommerce.dto.AddItemRequest;
import com.yash.ecommerce.dto.ApiResponse;
import com.yash.ecommerce.exception.ProductException;
import com.yash.ecommerce.exception.UserException;
import com.yash.ecommerce.model.Cart;
import com.yash.ecommerce.model.User;
import com.yash.ecommerce.service.CartService;
import com.yash.ecommerce.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest request, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        cartService.addCartItem(user.getId(), request);

        ApiResponse response = new ApiResponse("Item added to Cart Successfully.", true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
}
