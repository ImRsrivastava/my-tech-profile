import React, { useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";


const About = () => {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [age, setAge] = useState(null);
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState(null);
    const [degree, setDegree] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => { 
        setDateOfBirth('02 May 1994');
        setAge(0);
        setContact('+91-6306557731');
        setAddress('Indore, Madhya Pradesh, India');
        setDegree('Graduation (B.com)');
        setEmail('rishabh.srivastava0205@gmail.com');

        setTimeout(() => {
            calculateAge();
        },500);
    },[dateOfBirth]);

    const calculateAge = () => {
        const today = new Date();
        if(dateOfBirth !== null) {
            const birthDate = new Date(dateOfBirth.split('-').reverse().join('-')); 

            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
        
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) { age--; }
            setAge(age);
        }
    };


    return (
        <>
            <section id="about" className="about section fade-up-animate">
                <div className="container section-title">
                    <h2>About</h2>
                    <p className="mb-3">I am a <b>Senior Backend Engineer with over 5 years of experience</b> in designing, developing, and deploying secure, scalable, and high-performance backend applications. My primary focus is building robust backend systems using <b>Python (FastAPI), Laravel, and Node.js</b>, with an emphasis on clean architecture, performance optimization, and maintainable code.</p> 
                    
                    <p className="mb-3">Throughout my professional journey, I have worked extensively on building <b>production-ready RESTful APIs</b>, implementing secure authentication systems, and designing backend architectures that support scalable applications. I have strong experience in implementing <b>JWT-based authentication, Role-Based Access Control (RBAC), middleware-based request handling, and secure API design</b>, ensuring systems are reliable and aligned with modern backend development standards.</p>
                    
                    <p className="mb-3">I have hands-on experience with <b>database design and optimization</b>, primarily using <b>MySQL and PostgreSQL</b>. My approach focuses on writing efficient queries, designing normalized database schemas, and ensuring high performance in data-driven applications.</p>
                </div>

                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="./assets/images/user-profile.png" className="img-fluid" alt="user-profile.png" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Senior Backend Engineer</h2>
                            <div className="row py-3">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>Birthday:</strong> <span>{ dateOfBirth }</span>
                                        </li>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>Phone:</strong> <a href={'tel:'+contact}><span>{contact}</span></a>
                                        </li>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>City:</strong> <span>{address}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>Age:</strong> <span>{age} yrs</span>
                                        </li>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>Email:</strong> <a href={'mailto:'+email}><span>{email}</span></a>
                                        </li>
                                        <li>
                                            <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                            <strong>Degree:</strong> <span>{degree}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="pt-3 mb-3">Along with backend development, I bring solid experience in <b>cloud infrastructure and DevOps practices</b>. I have practical experience working with <b>AWS cloud services</b>, including EC2, S3, IAM, VPC, ECS, and ECR, to deploy and manage scalable cloud-native applications.</p>

                            <p className=" mb-3">I also work extensively with <b>containerization and infrastructure automation</b>, using tools such as <b>Docker</b> and <b>Terraform</b> to ensure consistent, reproducible deployments. Additionally, I have experience implementing <b>CI/CD pipelines</b>, enabling automated testing, building, and deployment workflows that improve development efficiency and reliability.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-12 content">
                            <div className="pt-3 mb-3">
                                <strong> My technical strengths include: </strong>
                                <ul className="ul-about-content mt-2">
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        Backend Development using <b>Python (FastAPI), Laravel, and Node.js</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        Designing <b>scalable RESTful APIs and backend architectures</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        Authentication systems including <b>JWT and RBAC</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        Database design, optimization, and performance tuning with <b>MySQL and PostgreSQL</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        <b>AWS cloud infrastructure</b> and cloud-native application deployment.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        <b>Docker-based containerized environments</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        Infrastructure as Code using <b>Terraform</b>.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        <b>CI/CD pipeline implementation</b> for automated deployments.
                                    </li>
                                    <li className="ps-4 pb-1">
                                        <BsChevronDoubleRight className="text-theme fs-7" />&nbsp;
                                        <b>Linux server management and production environment optimization</b>.
                                    </li>
                                </ul>
                            </div>

                            <p className=" mb-3">I am passionate about solving complex backend problems, improving application performance, and building systems that are reliable, scalable, and maintainable. I enjoy working on projects that involve <b>modern backend architecture, cloud infrastructure, and scalable system design</b>.</p>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
};

export default About;
