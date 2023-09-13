package com.yash.ecommerce.controller;

import com.yash.ecommerce.dto.PaymentLinkResponse;
import com.yash.ecommerce.exception.OrderException;
import com.yash.ecommerce.model.Order;
import com.yash.ecommerce.repository.OrderRepository;
import com.yash.ecommerce.service.OrderService;
import com.yash.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Value("{razorpay.api.key}")
    String apiKey;
    @Value("{razorpay.api.secret}")
    String apiSecret;
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException {
        Order order = orderService.findOrderById(orderId);


        return null;
    }

}
