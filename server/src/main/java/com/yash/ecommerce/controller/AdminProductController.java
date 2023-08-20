package com.yash.ecommerce.controller;

import com.yash.ecommerce.dto.ApiResponse;
import com.yash.ecommerce.dto.CreateProductRequest;
import com.yash.ecommerce.exception.ProductException;
import com.yash.ecommerce.model.Product;
import com.yash.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest request) {
        Product product = productService.createProduct(request);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable("productId") Long productId) throws ProductException {
        productService.deleteProduct(productId);

        ApiResponse response = new ApiResponse("Product deleted Successfully.", true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProducts() {
        List<Product> products = productService.findAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PutMapping("/{productId}/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product req, @PathVariable Long productId) throws ProductException {
        Product product = productService.updateProduct(productId, req);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProducts(@RequestBody CreateProductRequest[] req) {
        for(CreateProductRequest productRequest : req) {
            productService.createProduct(productRequest);
        }
        ApiResponse response = new ApiResponse("All Products Created Successfully.", true);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
