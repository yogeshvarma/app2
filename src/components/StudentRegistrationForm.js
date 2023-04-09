import React, { useState } from 'react';
import '../assets/styles/StudentRegistrationForm.css';

function StudentRegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://nodebackendpro1-production.up.railway.app/insertUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, age: age })
            });
            if (response.ok) {
                alert("Student registration successful!")
                console.log('Student registration successful!');
                // TODO: handle success
            } else {
                alert('Error registering student:', response.statusText);
                console.error('Error registering student:', response.statusText);
                // TODO: handle error
            }
        } catch (error) {
            alert("Caught: "+error);
            console.log(error);
        }
    };

    return (
        <div>
            <h2 className='form-heading'>Student Registration Form</h2>

            <form className="registration-form">
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />


                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}

export default StudentRegistrationForm;
