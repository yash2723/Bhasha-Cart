package com.yash.ecommerce.service;

import com.yash.ecommerce.dto.ReviewRequest;
import com.yash.ecommerce.exception.ProductException;
import com.yash.ecommerce.model.Review;
import com.yash.ecommerce.model.User;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest request, User user) throws ProductException;
    public List<Review> getAllReview(Long productId);

}
