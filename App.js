import * as React from 'react';
import '../src/App.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, ButtonGroup, Divider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const theme = createTheme({
  //  components:{
  //   IconButtons:{
  //     styleOverrides: (themeParam)
  //   }
  //  }
});

const CssTextField = styled (TextField)({
  ' .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#0800f5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0800f5',
    },
  }, 
  '& label.Mui-focused': {
    color: '#0800f5',
  },
});

const IconButtons = styled (Button)({
  ' .MuiButton-outlined': {
      borderRadius: 50,
      margin: 10,
      color: 'blue',
      borderColor: '#0800f5'
  },
})

const iconData = [
  { 
    width: '36',
    img: 'https://accounttest.documentolog.kz/asset/812daf79a14aa0b2291201dc4f5fb0bb.svg',
    title: 'Doculite'
  }, 
  {
    width: '36',
    img: 'https://accounttest.documentolog.kz/asset/332fd20a33818a62e4a8f67fa963d500.svg',
    title: 'CV-hub'

  },
  {
    width: '45',
    img: 'https://accounttest.documentolog.kz/asset/5a572979717f1e54886373ef28b38634.svg',
    title: 'Documentolog'
  },
];


export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container  component="main" >
        <CssBaseline />
        <Grid
          item
          xs={4}
          sm={3}
          md={6.5}
         
        >
          <Box sx={{
            my: 36.5,
            mx: 13
          }}
          
          >
            <Typography color="text.secondary">All accounts in one place</Typography>
            <Typography component="h1" variant="h4" my={2}>Documentolog Authorization Center</Typography>

            <Stack direction="row" spacing={4}>
              {iconData.map((item) =>(
                <img src={item.img} height={item.width} alt={item.title} loading="lazy" />
              ))
              }
              
            </Stack>
          </Box>
          <Box sx={{mx: 13, my:-2}}>
            <Typography variant='caption' color="text.secondary">
            © 2007 - 2023 Documentolog
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={5} sm={8} md={5} component={Paper} sx={{
           height: '90vh',
           my:6
           }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <Typography component="h1" variant="h4">
            Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1,
            px:4}}>
              <CssTextField
                margin="normal"
                fullWidth
                className="custom-css-outlined-input"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  py:-1
                }}
              />
              <CssTextField
                margin="small"
                fullWidth
                className="custom-css-outlined-input"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="#" variant="caption" underline="none">
                    {"Forgot your password?"}
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#0800f5'}}
                >
                Log in
              </Button>
              <Divider sx={{ my:2}} />
              
              <Typography color="text.secondary" align='center'>Sign in with</Typography>
              <Box   sx={{
                py:2
              }}>
                
                  <IconButtons variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <GoogleIcon sx={{color:'red'}}/>
                  </Avatar>
                  </IconButtons>
                  <IconButtons variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <img src='https://accounttest.documentolog.kz/asset/c32daeeccb161c111685368c237eb54a.svg'/>
                  </Avatar>
                  </IconButtons>
                  
                  <IconButtons variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <AppleIcon/>
                  </Avatar>
                  </IconButtons>
                  

                  <IconButtons variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <Typography>EDS</Typography>
                  </Avatar>
                  </IconButtons>

                  <Button variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <img width='15' src='https://accounttest.documentolog.kz/asset/45db8a225c2215dbcbe85ec088bc50be.png' />
                  </Avatar>
                  </Button>

                  <Button variant='outlined' sx={{
                    width: 48,
                    height: 48
                  }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#000'}}>
                    <img width='30' src='https://accounttest.documentolog.kz/asset/81ce3f24f95e97740b1d9daaab103f8c.svg' />
                  </Avatar>
                  </Button>
                
              </Box>

              <Typography sx={{
                py:1
              }} align='center'>
                <Link href='#' variant='caption' underline='none' align='center'>Instructions for sign up in Documentolog Business</Link>
                <br/>
                <Typography variant='caption'>Don't have an account? </Typography> <Link href="#" variant='caption' underline='none'>Sign up</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
      
    </ThemeProvider>
  );
}
