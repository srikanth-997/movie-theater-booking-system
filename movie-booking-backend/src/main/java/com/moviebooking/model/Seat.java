package com.moviebooking.model;

public class Seat {
    private int id;
    private int rowNumber;
    private int seatNumber;
    private boolean isBooked;
    private String tier;
    private double price;
    private String bookedBy;

    public Seat() {}

    public Seat(int id, int rowNumber, int seatNumber) {
        this.id = id;
        this.rowNumber = rowNumber;
        this.seatNumber = seatNumber;
        this.isBooked = false;
        this.bookedBy = null;

        if (rowNumber <= 2) {
            this.tier = "Silver";
            this.price = 100.0;
        } else if (rowNumber <= 4) {
            this.tier = "Gold";
            this.price = 150.0;
        } else {
            this.tier = "Platinum";
            this.price = 200.0;
        }
    }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getRowNumber() { return rowNumber; }
    public void setRowNumber(int rowNumber) { this.rowNumber = rowNumber; }

    public int getSeatNumber() { return seatNumber; }
    public void setSeatNumber(int seatNumber) { this.seatNumber = seatNumber; }

    public boolean isBooked() { return isBooked; }
    public void setBooked(boolean booked) { isBooked = booked; }

    public String getTier() { return tier; }
    public void setTier(String tier) { this.tier = tier; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getBookedBy() { return bookedBy; }
    public void setBookedBy(String bookedBy) { this.bookedBy = bookedBy; }
}