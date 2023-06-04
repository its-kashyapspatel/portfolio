import React, { Component } from 'react';
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
import '../css/Education.css';

export default class Education extends Component {
  render() {
    return (
      <div className='edu-root'>
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        >
            <div>
                <Typography variant="h4">
                    Education
                </Typography>
            </div>
            <div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    <Typography variant="body1">
                        2020-2024: Charusat University
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography variant="body1">
                        BTech in Computer Enginnering
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    <Typography variant="body1">
                        2019-2020: Kokilaben Dhirubhai Ambani Vidyamandir
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography variant="body1">
                        HSC
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    <Typography variant="body1">
                        2017-2018: Kokilaben Dhirubhai Ambani Vidyamandir
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Typography variant="body1">
                        SSC
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                {/* <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    9:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem> */}
            </Timeline>
            </div>
        </Stack>
      </div>
    )
  }
}
