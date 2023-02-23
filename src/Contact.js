import React,{ useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        send(
            'service_ptdplns',
            'template_7y6rfog',
            toSend,
            'SUT8gp32iKROKvhg2'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        alert("Your email has been sent successfully");
    }

    function handleChange(e) {
        setToSend({...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3>Keep in Touch!</h3>
            <form onSubmit={handleSubmit}>
                <label>Your Name:</label>
                <input
                    type='text'
                    name='from_name'
                    placeholder='From Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <label>Your Email:</label>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <label>My Name:</label>
                <input
                    type='text'
                    name='to_name'
                    placeholder='To Name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <label>Your Message:</label>
                <input
                    type='text'
                    name='message'
                    placeholder='Your Message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}