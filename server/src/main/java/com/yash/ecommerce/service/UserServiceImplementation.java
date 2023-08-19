package com.yash.ecommerce.service;

import com.yash.ecommerce.config.JwtProvider;
import com.yash.ecommerce.exception.UserException;
import com.yash.ecommerce.model.User;
import com.yash.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) return user.get();
        throw new UserException("User Not Found With User ID - " + userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtProvider.getEmailFromToken(jwt);
        User user = userRepository.findByEmail(email);
        if(user == null) throw new UserException("User Not Found With Email : " + email);
        return user;
    }
}
