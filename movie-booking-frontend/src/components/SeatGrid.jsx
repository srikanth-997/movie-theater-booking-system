import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import Seat from './Seat';
import api from '../services/api';

const SeatGrid = ({ selectedSeats, onSeatSelect }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSeats();
  }, []);

  const loadSeats = async () => {
    try {
      const data = await api.getAllSeats();
      setSeats(data);
    } catch (error) {
      console.error('Error loading seats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Group seats by row
  const rows = [];
  for (let row = 1; row <= 6; row++) {
    const rowSeats = seats.filter(seat => seat.rowNumber === row);
    if (rowSeats.length > 0) {
      rows.push({
        rowNumber: row,
        seats: rowSeats.sort((a, b) => a.seatNumber - b.seatNumber)
      });
    }
  }

  const getRowTier = (rowNumber) => {
    if (rowNumber <= 2) return 'Silver';
    if (rowNumber <= 4) return 'Gold';
    return 'Platinum';
  };

  if (loading) {
    return (
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Loading seats...
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Theater Seats (6 rows × 10 seats = 60 total)
      </Typography>
      
      {/* Screen */}
      <Box sx={{
        width: '100%',
        height: '40px',
        bgcolor: 'grey.900',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        borderRadius: '4px',
        border: '2px solid gold'
      }}>
        <Typography variant="h6">SCREEN</Typography>
      </Box>
      
      {/* Seat rows */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {rows.map(row => (
          <Box key={row.rowNumber}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1 
            }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Row {row.rowNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {getRowTier(row.rowNumber)} Tier - 
                {row.rowNumber <= 2 ? ' $100' : 
                 row.rowNumber <= 4 ? ' $150' : ' $200'}
              </Typography>
            </Box>
            
            <Grid container spacing={1} justifyContent="center">
              {row.seats.map(seat => (
                <Grid item key={seat.id}>
                  <Seat
                    seat={seat}
                    isSelected={selectedSeats.includes(seat.id)}
                    onSelect={onSeatSelect}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      
      {/* Legend */}
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#f44336', borderRadius: '4px' }} />
          <Typography variant="body2">Available Silver</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#ff9800', borderRadius: '4px' }} />
          <Typography variant="body2">Available Gold</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#4caf50', borderRadius: '4px' }} />
          <Typography variant="body2">Available Platinum</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, bgcolor: '#888', borderRadius: '4px' }} />
          <Typography variant="body2">Booked</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 20, height: 20, border: '2px solid #2196f3', borderRadius: '4px' }} />
          <Typography variant="body2">Selected</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default SeatGrid;