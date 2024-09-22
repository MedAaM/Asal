import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5b61e5',   
      border: '#c4c4c4'  
    },
    secondary: {
      main: '#c4c4c4'    
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiInputLabel-root': {
            color: theme.palette.secondary.main, 
            '&.MuiInputLabel-shrink': {
              color: theme.palette.primary.main, 
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#c4c4c4', 
              borderRadius: '8px', // Set the border radius here
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main, 
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main, 
            },
            borderRadius: '50px', 
          },
        }),
      },
    },
  },
});
