import React, { Component } from 'react'
import Stack from '@mui/material/Stack';

// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// css
import '../css/SocialMedia.css';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='sm-root'>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <div>
                <a href='https://www.linkedin.com/in/kashyap-patel-118a35243/'>
                    <LinkedInIcon/>
                </a>
            </div>
            <div>
                <a href='https://github.com/patelkashyap369'>
                    <GitHubIcon/>
                </a>
            </div>
            <div>
                <a href='https://twitter.com/itskp086'>
                    <TwitterIcon/>
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/its.patelkashyap/'>
                    <InstagramIcon/>
                </a>
            </div>
        </Stack>
      </div>
    )
  }
}
