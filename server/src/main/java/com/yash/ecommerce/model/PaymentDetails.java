package com.yash.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetails {

    private String paymentMethod;
    private String paymentStatus;
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentReferenceId;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentId;

}
