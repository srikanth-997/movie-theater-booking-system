import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Alert,
  Box
} from '@mui/material';

const BookingSummary = ({ 
  selectedSeats, 
  seats, 
  totalPrice, 
  onBook, 
  onReset 
}) => {
  const [userName, setUserName] = React.useState('');
  const [message, setMessage] = React.useState({ type: '', text: '' });

  const getSelectedSeatDetails = () => {
    return seats.filter(seat => selectedSeats.includes(seat.id));
  };

  const handleBook = async () => {
    if (selectedSeats.length === 0) {
      setMessage({ type: 'error', text: 'Please select at least one seat' });
      return;
    }
    
    if (!userName.trim()) {
      setMessage({ type: 'error', text: 'Please enter your name' });
      return;
    }

    try {
      const result = await onBook(selectedSeats, userName);
      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: `Booking successful! Total: $${result.totalPrice}` 
        });
        setUserName('');
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Booking failed. Please try again.' });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Booking Summary
      </Typography>
      
      {message.text && (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}
      
      <Typography variant="body1" gutterBottom>
        Selected Seats: {selectedSeats.length} / 6
      </Typography>
      
      <List dense>
        {getSelectedSeatDetails().map(seat => (
          <ListItem key={seat.id}>
            <ListItemText
              primary={`Seat ${seat.id} (Row ${seat.rowNumber}, ${seat.tier})`}
              secondary={`$${seat.price}`}
            />
          </ListItem>
        ))}
      </List>
      
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Total: ${totalPrice}
      </Typography>
      
      <TextField
        fullWidth
        label="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        sx={{ mb: 2 }}
      />
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBook}
          disabled={selectedSeats.length === 0 || !userName.trim()}
          fullWidth
        >
          Buy Tickets
        </Button>
        
        <Button
          variant="outlined"
          color="secondary"
          onClick={onReset}
          fullWidth
        >
          Reset Selection
        </Button>
      </Box>
    </Paper>
  );
};

export default BookingSummary;