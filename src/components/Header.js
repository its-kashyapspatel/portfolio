import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// css
import '../css/Header.css';

// profile pic
import profile from '../static/images/avatar/1.jpeg';

export default class Header extends Component {
  render() {
    return (
      <div className='header-root'>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Avatar src={profile} sx={{ width: 200, height: 200 }}/>
                <Typography color='#283593'>
                    Kashyap Sureshchandra Patel
                </Typography>
            </Stack>

            <Typography>
                A passionate web developer with a keen interest in the exciting world of machine learning.
            </Typography>

        </Stack>
      </div>
    )
  }
}
