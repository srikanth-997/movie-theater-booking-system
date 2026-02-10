package com.moviebooking.controller;

import com.moviebooking.dto.BookingResponse;
import com.moviebooking.model.*;
import com.moviebooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5175")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/initialize")
    public String initializeTheater() {
        bookingService.initializeTheater();
        return "Theater initialized with 60 seats (6 rows x 10 columns)";
    }

    @GetMapping("/seats")
    public List<Seat> getAllSeats() {
        return bookingService.getAllSeats();
    }

    @PostMapping("/book")
    public BookingResponse bookSeats(@RequestBody BookingRequest request) {
        return bookingService.bookSeats(request.getSeatIds(), request.getUserName());
    }

    @PostMapping("/reset")
    public String resetTheater() {
        bookingService.resetTheater();
        return "Theater reset successfully";
    }
}