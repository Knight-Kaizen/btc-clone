import React, { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
    const [formData, setFormData] = useState({
        brand: "Dell",
        productGroup: "",
        modelNumber: "",
        caseId: "",
        issue: "",
    });

    const handleSubmit = (e, type) => {
        e.preventDefault();
        // Check for empty fields
        if (
            formData.brand.trim() === "" ||
            formData.productGroup.trim() === "" ||
            formData.modelNumber.trim() === "" ||
            formData.caseId.trim() === "" ||
            formData.issue.trim() === ""
        ) {
            window.alert("Please fill in all fields.");
            return;
        }
        console.log("Form submitted with type:", type, formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.topSection}>
                <div className={styles.headerText}>
                    <img src="path/to/your/image.jpg" alt="Logo Image" className={styles.headerImage} />
                    <h2>Geeks Tech Console</h2>
                    <h3>Focus Areas</h3>
                    <h3>Articles </h3>
                </div>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="brand">Brand Name:</label>
                        <select
                            className={styles.input}
                            name="brand"
                            id="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        >
                            <option value="Dell">Dell</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="productGroup">Product Group:</label>
                        <select
                            className={styles.input}
                            name="productGroup"
                            id="productGroup"
                            value={formData.productGroup}
                            onChange={handleChange}
                        >
                            <option value="">Select a Product Group</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                            <option value="Option 5">Option 5</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="modelNumber">Model Number:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="modelNumber"
                            value={formData.modelNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="caseId">Case ID:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="caseId"
                            value={formData.caseId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="issue">Issue:</label>
                        <select
                            className={styles.input}
                            name="issue"
                            id="issue"
                            value={formData.issue}
                            onChange={handleChange}
                        >
                            <option value="">Select an Issue</option>
                            <option value="Issue 1">Issue 1</option>
                            <option value="Issue 2">Issue 2</option>
                            <option value="Issue 3">Issue 3</option>
                            <option value="Issue 4">Issue 4</option>
                            <option value="Issue 5">Issue 5</option>
                            <option value="Issue 6">Issue 6</option>
                            <option value="Issue 7">Issue 7</option>
                            <option value="Issue 8">Issue 8</option>
                        </select>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.submitButton} onClick={(e) => handleSubmit(e, "Premium")}>Go with Premium Support</button>
                        <button className={styles.submitButton} onClick={(e) => handleSubmit(e, "Basic")}>Go with Basic Support</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
