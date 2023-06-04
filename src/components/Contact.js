import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// css
import '../css/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqra6lj', 'template_aw874xm', form.current, 'hBmH1aoCeJo6PYyFR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='c-root'>
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
            <Typography variant='h4'>
                Connect
            </Typography>

                <form ref={form} onSubmit={sendEmail}>
                    <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    >
                        <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        >
                            <label>Name</label> &nbsp; &nbsp;
                            <input type="text" name="user_name" />
                        </Stack>

                        <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        >
                            <label>Email</label> &nbsp; &nbsp;
                            <input type="email" name="user_email" />
                        </Stack>

                        <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        >
                            <label>Message</label> &nbsp; &nbsp;
                            <textarea name="message" />
                        </Stack>

                        <div>
                        <input type="submit" value="Send" />
                        </div>
                    </Stack>
                </form>
            </Stack>
        
    </div>
  );
};

export default Contact;
