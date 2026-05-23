import React, { useEffect, useState } from "react";


const Resume = () => {
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => { 
        setContact('+91-6306557731');
        setAddress('Indore, Madhya Pradesh, India');
        setEmail('rishabh.srivastava0205@gmail.com');
    },[]);


    return (
        <>
            <section id="resume" class="resume section">
                <div class="container section-title">
                    <h2>Resume</h2>
                    {/* <p>I'm Rishabh Srivastava, a Software developer with4+ years of experience. My journey started in the world of technology with </p> */}
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 fade-lr">
                            <h3 class="resume-title">Professional Summary</h3>
                            <div class="resume-item pb-0">
                                <h4>Rishabh Srivastava</h4>
                                <p><em>Experienced web application developer with 4+ years in PHP, Laravel, MySql, MongoDB, jQuery, React.js, Node.js and GitHub. Proficient in building scalable web application and APIs, with a focus on delivering robust solutions. I also have practical experience with DevOps tools such as Jenkins, Ansible, Docker and Kubernetes. A strong problem solver and collaborative team player committed to efficiently achieving project objectives.</em></p>
                                <ul>
                                    <li><a href={"tel:"+contact}>{ contact }</a></li>
                                    <li>{ address }</li>
                                    <li><a href={"mailto:"+email}>{ email }</a></li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education & Certification</h3>
                            <div class="resume-item">
                                <h4>High School (10th)</h4>
                                <h5>2010</h5>
                                <p><em>Guru Nanak Inter College, Mirzapur (UP)</em></p>
                                <p>Completed High School from Guru Nanak Inter College, Mirzapur in 2010 with 51%.</p>
                            </div>
                            <div class="resume-item">
                                <h4>Intermediate (12th)</h4>
                                <h5>2012</h5>
                                <p><em>Basant Vidyalaya Intermediate College, Mirzapur (UP)</em></p>
                                <p>Completed 12th from Basant Vidyalaya Intermediate College, Mirzapur in 2012 with 54%.</p>
                            </div>
                            <div class="resume-item">
                                <h4>Bachelor of Commerce (B.com)</h4>
                                <h5>2015</h5>
                                <p><em>Vindhyawasini Mahavidyalaya, Mirzapur (UP)</em></p>
                                <p>Completed graduation in B.Com from Vidhyawasini Mahavidyalaya, Mirzapur in 2015 with 41.72%.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 fade-rl">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Software Developer</h4>
                                <h5>September 2021 - Present</h5>
                                <p><em>Cyber Infrastructure Pvt. Ltd, Indore (MP)</em></p>
                                <ul>    {/* NEED TO UPDATE WITH RESPONSIBILITIES */}
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>

                            <div class="resume-item">
                                <h4>Web Application Developer</h4>
                                <h5>January 2021 - August 2021</h5>
                                <p><em>Codemeg Soft Solutions Pvt. Ltd, Indore (MP)</em></p>
                                <ul>    {/* NEED TO UPDATE WITH RESPONSIBILITIES */}
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>
                            
                            <div class="resume-item">
                                <h4>Web Application Developer</h4>
                                <h5>October 2018 - April 2020</h5>
                                <p><em>The Technomind IT Solutions, Varanasi (UP) </em></p>
                                <ul>    {/* NEED TO UPDATE WITH RESPONSIBILITIES */}
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Resume;