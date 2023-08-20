package com.yash.ecommerce.service;

import com.yash.ecommerce.dto.RatingRequest;
import com.yash.ecommerce.exception.ProductException;
import com.yash.ecommerce.model.Rating;
import com.yash.ecommerce.model.User;

import java.util.List;

public interface RatingService {

    public Rating createRating(RatingRequest request, User user) throws ProductException;
    public List<Rating> getProductsRating(Long productId);


}
