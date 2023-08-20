package com.yash.ecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddItemRequest {
    private Long productId;
    private String size;
    private Integer quantity;
    private Integer price;

}
