package com.moviebooking.service;

import com.moviebooking.dto.BookingResponse;
import com.moviebooking.model.*;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class BookingService {
    private Map<Integer, Seat> theater = new ConcurrentHashMap<>();
    private boolean initialized = false;

    public synchronized void initializeTheater() {
        if (initialized) return;

        theater.clear(); // Clear existing seats

        int seatId = 1;
        for (int row = 1; row <= 6; row++) {
            for (int seatNum = 1; seatNum <= 10; seatNum++) {
                theater.put(seatId, new Seat(seatId, row, seatNum));
                seatId++;
            }
        }
        initialized = true;
    }
    public BookingResponse bookSeats(List<Integer> seatIds, String userName) {

        if (seatIds == null || seatIds.isEmpty()) {
            return new BookingResponse(false, "No seats selected", 0);
        }

        if (seatIds.size() > 6) {
            return new BookingResponse(false, "Maximum 6 seats per booking", 0);
        }

        for (int seatId : seatIds) {
            Seat seat = theater.get(seatId);
            if (seat == null) {
                return new BookingResponse(false, "Seat " + seatId + " does not exist", 0);
            }
            if (seat.isBooked()) {
                return new BookingResponse(false, "Seat " + seatId + " is already booked", 0);
            }
        }


        double total = 0;
        for (int seatId : seatIds) {
            Seat seat = theater.get(seatId);
            seat.setBooked(true);
            seat.setBookedBy(userName);
            total += seat.getPrice();
        }

        return new BookingResponse(true, "Booking successful", total);
    }

    public void resetTheater() {
        theater.clear();
        initialized = false;
        initializeTheater();
    }
    // ADD THIS METHOD
    public List<Seat> getAllSeats() {
        List<Seat> seatList = new ArrayList<>(theater.values());
        // Sort by seat ID
        seatList.sort(Comparator.comparingInt(Seat::getId));
        return seatList;
    }
}