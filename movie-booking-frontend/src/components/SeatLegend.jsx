import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SeatLegend = () => {
  const legendItems = [
    { 
      color: '#f44336', 
      border: '1px solid #333',
      label: 'Available Silver', 
      price: '$100',
      rows: 'Rows 1-2' 
    },
    { 
      color: '#ff9800', 
      border: '1px solid #333',
      label: 'Available Gold', 
      price: '$150',
      rows: 'Rows 3-4' 
    },
    { 
      color: '#4caf50', 
      border: '1px solid #333',
      label: 'Available Platinum', 
      price: '$200',
      rows: 'Rows 5-6' 
    },
    { 
      color: '#888', 
      border: '1px solid #333',
      label: 'Booked', 
      price: 'Unavailable',
      rows: '' 
    },
    { 
      color: 'transparent', 
      border: '3px solid #2196f3',
      label: 'Selected', 
      price: 'In cart',
      rows: '' 
    }
  ];

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Seat Legend & Pricing
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3,
        justifyContent: { xs: 'center', md: 'flex-start' }
      }}>
        {legendItems.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              minWidth: { xs: '140px', sm: 'auto' }
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                bgcolor: item.color,
                border: item.border,
                borderRadius: '4px',
                flexShrink: 0
              }}
            />
            <Box>
              <Typography variant="body2" fontWeight="medium">
                {item.label}
              </Typography>
              {item.price && (
                <Typography variant="caption" color="text.secondary" display="block">
                  {item.price}
                </Typography>
              )}
              {item.rows && (
                <Typography variant="caption" color="text.secondary" display="block">
                  {item.rows}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      
      <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
        <Typography variant="caption" color="text.secondary">
          <strong>Note:</strong> Seats are numbered from 1 to 60 (Row 1: 1-10, Row 2: 11-20, etc.)
        </Typography>
      </Box>
    </Paper>
  );
};

export default SeatLegend;