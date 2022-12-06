import React from "react"

import { Layout } from "../layout";


const Contact = () => (
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
    </Layout>
    //needed for footer: links to github, linkedin, and profile on a third platform(like stack overflow) 
);

export default Contact