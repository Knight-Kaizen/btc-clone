import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

export default function Login() {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userDetails.email.trim() !== "" && userDetails.password.trim() !== "") {
            navigate("/home");
        } else {
            window.alert("Empty credentials");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}>
                <h3>Welcome to Blitzpath Innovations</h3>
            </div>
            <div className={styles.right}>
                <img src="path/to/your/logo.png" alt="Logo" className={styles.logo} />
                <h2 className={styles.heading}>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                    />

                    <label className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                    />

                    <button className={styles.button} type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
}
