import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

const Seat = ({ seat, isSelected, onSelect }) => {
  // Get seat color based on status
  const getSeatColor = () => {
    if (seat.booked) return '#888888'; // Gray for booked
    
    switch(seat.tier) {
      case 'Silver': return '#f44336'; // Red
      case 'Gold': return '#ff9800';   // Orange
      case 'Platinum': return '#4caf50'; // Green
      default: return '#ddd';
    }
  };

  const handleClick = () => {
    if (!seat.booked && onSelect) {
      onSelect(seat.id);
    }
  };

  const getTooltipTitle = () => {
    if (seat.booked) {
      return `Seat ${seat.id} - Booked (Row ${seat.rowNumber}, ${seat.tier})`;
    }
    return `Seat ${seat.id} - ${seat.tier} - $${seat.price} (Row ${seat.rowNumber})`;
  };

  return (
    <Tooltip title={getTooltipTitle()} arrow>
      <Box
        onClick={handleClick}
        sx={{
          width: 45,
          height: 45,
          bgcolor: getSeatColor(),
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: seat.booked ? 'not-allowed' : 'pointer',
          border: isSelected ? '3px solid #2196f3' : '1px solid #333',
          margin: '2px',
          position: 'relative',
          '&:hover': {
            opacity: seat.booked ? 1 : 0.8,
            transform: seat.booked ? 'none' : 'scale(1.05)',
            transition: 'transform 0.2s'
          }
        }}
      >
        {/* Seat number */}
        <Typography 
          variant="body2" 
          fontWeight="bold"
          sx={{ 
            color: seat.booked ? '#ccc' : '#fff',
            fontSize: '14px'
          }}
        >
          {seat.id}
        </Typography>
        
        {/* Selection indicator */}
        {isSelected && !seat.booked && (
          <Box
            sx={{
              position: 'absolute',
              top: -5,
              right: -5,
              width: 20,
              height: 20,
              bgcolor: '#2196f3',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white'
            }}
          >
            <Typography variant="caption" sx={{ color: 'white', fontSize: '10px' }}>
              ✓
            </Typography>
          </Box>
        )}
        
        {/* Booked indicator */}
        {seat.booked && (
          <Box
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: '#ff0000',
              border: '1px solid white'
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};

export default Seat;