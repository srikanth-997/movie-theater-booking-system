import React from 'react';
import { Box, Button, Alert, Typography } from '@mui/material';

const TheaterControls = ({ 
  message, 
  onResetTheater, 
  onClearMessage,
  onRefreshPage 
}) => {
  return (
    <>
      {message.text && (
        <Alert 
          severity={message.type} 
          sx={{ mb: 2 }}
          onClose={onClearMessage}
        >
          {message.text}
        </Alert>
      )}

      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Movie Theater Seat Booking System
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Select up to 6 seats and book your tickets
        </Typography>
      </Box>

      <Box sx={{ mb: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          onClick={onResetTheater}
        >
          Reset Theater
        </Button>
        <Button
          variant="outlined"
          onClick={onRefreshPage}
        >
          Refresh Page
        </Button>
      </Box>
    </>
  );
};

export default TheaterControls;