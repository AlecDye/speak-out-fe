import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import CourseStructure from "./components/CourseStructure";
import Courses from "./components/CourseOfferings";
import Contact from "./components/ContactUs";

import "./marketing.scss";

function MarketingMobile({page}) {

    let componentToRender;

    switch(page) {

        case "home":
            // componentToRender = Home;
            componentToRender = About;
            break;
        case "course_structure":
            componentToRender = CourseStructure;
            break;
        case "courses":
            componentToRender = Courses;
            break;
        case "registration":
            // componentToRender = Registration;
            break;
        case "about":
            componentToRender = About;
            break;
        case "contact":
            componentToRender = Contact;
            break;
        default:
            componentToRender = About;
            // componentToRender = Home;
            break;
    }

    return (
        <div>
            <Header />
            <div className="content">
                {componentToRender()}
            </div>
            <Footer />
        </div>
    )
}

export default MarketingMobile;