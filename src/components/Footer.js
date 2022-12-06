import React from "react"

import { Layout } from "../layout";


const Footer = () => (
    <Layout>
        <h1>Contact Me</h1>
        <form>
            <div>
                <label>Name:</label>
                <input type='text' />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' />
            </div>
            <div>
                <label>Message:</label>
                <textarea></textarea>
            </div>
        </form>
        <h1>Find Me Here</h1>
        <ul>
            <li><a href="https://github.com/sm0526">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="https://twitter.com/HollandShanon_">Twitter</a></li>
        </ul>
    </Layout>
    //needed for footer: links to github, linkedin, and profile on a third platform(like stack overflow) 
);

export default Footer