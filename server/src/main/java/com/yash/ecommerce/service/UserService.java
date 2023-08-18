package com.yash.ecommerce.service;

import com.yash.ecommerce.exception.UserException;
import com.yash.ecommerce.model.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
}
