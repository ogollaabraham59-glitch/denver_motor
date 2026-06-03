import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const footerComponent = () => {
    return (
        <div>
            <p className="text-center">
                &copy; 2023 Car Dealership. All rights reserved.
            </p>
        </div>
    )
}

export default footerComponent
