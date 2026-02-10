package com.moviebooking.model;

import java.util.List;

public class BookingRequest {
    private List<Integer> seatIds;
    private String userName;

    public List<Integer> getSeatIds() {
        return seatIds;
    }

    public void setSeatIds(List<Integer> seatIds) {
        this.seatIds = seatIds;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}