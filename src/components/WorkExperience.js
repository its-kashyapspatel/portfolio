import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// css
import '../css/WorkExperience.css'

export default class WorkExperience extends Component {
  render() {
    return (
      <div className='we-root'>
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        >
            <Typography variant='h4'>
                Work Experience
            </Typography>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    <Typography variant="body1">
                        May 2022 - July 2022: Intern at Motorola Solutions
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography variant="body1">
                        Web Development: MEAN and PEAN Stack
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Stack>
      </div>
    )
  }
}
