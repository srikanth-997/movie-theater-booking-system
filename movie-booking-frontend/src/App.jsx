import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import SeatGrid from './components/SeatGrid';
import BookingSummary from './components/BookingSummary';
import TheaterControls from './pages/TheaterControls';
import api from './services/api';

function App() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    initializeTheater();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [selectedSeats, seats]);

  const initializeTheater = async () => {
    try {
      await api.initializeTheater();
      await loadSeats();
      setMessage({ type: 'success', text: 'Theater initialized successfully' });
    } catch (error) {
      console.error('Error initializing theater:', error);
      setMessage({ type: 'error', text: 'Failed to initialize theater' });
    } finally {
      setLoading(false);
    }
  };

  const loadSeats = async () => {
    try {
      const data = await api.getAllSeats();
      setSeats(data);
    } catch (error) {
      console.error('Error loading seats:', error);
      setMessage({ type: 'error', text: 'Failed to load seats' });
    }
  };

  const calculateTotal = () => {
    const total = selectedSeats.reduce((sum, seatId) => {
      const seat = seats.find(s => s.id === seatId);
      return sum + (seat ? seat.price : 0);
    }, 0);
    setTotalPrice(total);
  };

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length >= 6) {
        setMessage({ type: 'warning', text: 'Maximum 6 seats per booking' });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBook = async (seatIds, userName) => {
    try {
      const result = await api.bookSeats(seatIds, userName);
      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: `Booking successful! Total: $${result.totalPrice}` 
        });
        await loadSeats();
        setSelectedSeats([]);
      } else {
        setMessage({ type: 'error', text: result.message });
      }
      return result;
    } catch (error) {
      console.error('Booking error:', error);
      setMessage({ type: 'error', text: 'Booking failed. Please try again.' });
      return { success: false, message: 'Booking failed' };
    }
  };

  const handleResetTheater = async () => {
    try {
      await api.resetTheater();
      await loadSeats();
      setSelectedSeats([]);
      setMessage({ type: 'success', text: 'Theater reset successfully' });
    } catch (error) {
      console.error('Reset error:', error);
      setMessage({ type: 'error', text: 'Failed to reset theater' });
    }
  };

  const handleResetSelection = () => {
    setSelectedSeats([]);
    setMessage({ type: 'info', text: 'Selection cleared' });
    setTimeout(() => setMessage({ type: '', text: '' }), 2000);
  };

  const handleClearMessage = () => {
    setMessage({ type: '', text: '' });
  };

  const handleRefreshPage = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Container>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          {/* <Typography variant="h6">Loading theater...</Typography> */}
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <TheaterControls
        message={message}
        onResetTheater={handleResetTheater}
        onClearMessage={handleClearMessage}
        onRefreshPage={handleRefreshPage}
      />

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3 
      }}>
        <Box sx={{ flex: 2 }}>
          <SeatGrid
            seats={seats}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <BookingSummary
            selectedSeats={selectedSeats}
            seats={seats}
            totalPrice={totalPrice}
            onBook={handleBook}
            onReset={handleResetSelection}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;