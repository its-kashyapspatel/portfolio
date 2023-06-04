import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import '../css/Skills.css';

export default class Skills extends Component {
  render() {
    let body = 'body1';
    return (
      <div className='s-root'>
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
            <Typography variant='h4'>
                Technical Skills
            </Typography>

            <Typography variant='h6'>
                Programming Languages
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    C
                </Typography>
                <Typography variant={body}>
                    C++
                </Typography>
                <Typography variant={body}>
                    Java
                </Typography>
                <Typography variant={body}>
                    Python
                </Typography>
                <Typography variant={body}>
                    JavaScript
                </Typography>
                <Typography variant={body}>
                    TypeScript
                </Typography>
                <Typography variant={body}>
                    LATEX
                </Typography>
                <Typography variant={body}>
                    Solidity
                </Typography>
            </Stack>

            <Typography variant='h6'>
                Database
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    PostgreSQL
                </Typography>
                <Typography variant={body}>
                    MongoDB
                </Typography>
            </Stack>

            <Typography variant='h6'>
                Frontend
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    Angular
                </Typography>
                <Typography variant={body}>
                    React
                </Typography>
            </Stack>

            <Typography variant='h6'>
                Backend
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    Django
                </Typography>
                <Typography variant={body}>
                    NodeJS
                </Typography>
                <Typography variant={body}>
                    Express
                </Typography>
                <Typography variant={body}>
                    RestAPI
                </Typography>
            </Stack>


            <Typography variant='h4'>
                Additional/Soft Skills
            </Typography>

            <Typography variant='h6'>
                Communication
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    Gujarati
                </Typography>
                <Typography variant={body}>
                    Hindi
                </Typography>
                <Typography variant={body}>
                    English
                </Typography>
            </Stack>

            <Typography variant='h6'>
                Project Management
            </Typography>
            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                <Typography variant={body}>
                    Teamwork
                </Typography>
                <Typography variant={body}>
                    Leadership
                </Typography>
            </Stack>

        </Stack>
      </div>
    )
  }
}
