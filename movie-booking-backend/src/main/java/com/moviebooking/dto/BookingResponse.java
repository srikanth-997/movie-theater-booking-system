package com.moviebooking.dto;

public class BookingResponse {
    private boolean success;
    private String message;
    private double totalPrice;

    public BookingResponse(boolean success, String message, double totalPrice) {
        this.success = success;
        this.message = message;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }
}