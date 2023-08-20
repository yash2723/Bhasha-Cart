package com.yash.ecommerce.service;

import com.yash.ecommerce.exception.OrderException;
import com.yash.ecommerce.model.Address;
import com.yash.ecommerce.model.Order;
import com.yash.ecommerce.model.User;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {

    public Order createOrder(User user, Address shippingAddress);
    public Order findOrderById(Long orderId) throws OrderException;
    public List<Order> userOrderHistory(Long userId);
    public Order placedOrder(Long orderId) throws OrderException;
    public Order confirmedOrder(Long orderId) throws OrderException;
    public Order shippingOrder(Long orderId) throws OrderException;
    public Order deliveredOrder(Long orderId) throws OrderException;
    public Order canceledOrder(Long orderId) throws OrderException;
    public List<Order> getAllOrders();
    public void deleteOrder(Long orderId) throws OrderException;

}
