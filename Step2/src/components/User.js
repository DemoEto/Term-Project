import React from 'react';
import axios from 'axios';

const User = ({ gender, name, location, email, picture, login ,dob}) => {
    // Function to handle saving user data to the database
    const handleSave = () => {
        const userData = { gender, name, location, email, picture, login ,dob};
        // Assuming you have a function to save user data to the database
        saveUserData(userData);
    };

    const saveUserData = (userData) => {
        axios.post('/saveuser', userData) // ส่งข้อมูลผู้ใช้ไปยังเซิร์ฟเวอร์ Express
            .then(response => {
                console.log(response.data); // แสดงข้อมูลการตอบกลับจากเซิร์ฟเวอร์
            })
            .catch(error => {
                console.error('Error saving user data:', error); // จัดการข้อผิดพลาด
            });
    };

    return (
        <div className="random-user">
            <div className="user-image">
                <img src={picture.medium} alt={name.first} />
            </div>
            <div><strong>Country:</strong> {location.country}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Login:</strong> {login.username}</div>
            <div><strong>Password:</strong> {login.password}</div>
            <div><strong>Name:</strong> {name.first} {name.last}</div>
            
            {/* Button to trigger saving user data */}
            <button onClick={handleSave}>INSERT</button>
        </div>
    );
};

export default User;