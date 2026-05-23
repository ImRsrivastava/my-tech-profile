import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


const SkillSet = () => {
    const location = useLocation ();
    const [skillSet, setSkillSet] = useState([
        { name: "PHP", percent: "0%" },
        { name: "Laravel", percent: "0%" },
        { name: "Python", percent: "0%" },
        { name: "FastAPI", percent: "0%" },
        { name: "Node.Js", percent: "0%" },
        { name: "MySQL", percent: "0%" },
        { name: "PostgreSQL", percent: "0%" },
        { name: "AWS", percent: "0%" },
        { name: "Terraform", percent: "0%" },
        { name: "Docker", percent: "0%" },
        { name: "Ansible", percent: "0%" },
        { name: "CI/CD", percent: "0%" }
    ]);

    useEffect(() => {
        setSkillSet([
            { name: "PHP", percent: "80%" },
            { name: "Laravel", percent: "80%" },
            { name: "Python", percent: "80%" },
            { name: "FastAPI", percent: "70%" },
            { name: "Node.Js", percent: "50%" },
            { name: "MySQL", percent: "80%" },
            { name: "PostgreSQL", percent: "70%" },
            { name: "AWS", percent: "50%" },
            { name: "Terraform", percent: "90%" },
            { name: "Docker", percent: "70%" },
            { name: "Ansible", percent: "70%" },
            { name: "CI/CD", percent: "60%" }
        ]);
    }, []);


    return (
        <>
            <section id="skills" className="skills section fade-down-animate">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>I bring a strong combination of backend development and infrastructure engineering skills, enabling me to build scalable, secure, and production-ready applications. My expertise includes Python (FastAPI), PHP Laravel, and modern backend architectures, along with cloud and DevOps technologies such as AWS, Docker, Terraform, Ansible and CI/CD. I focus on writing clean, maintainable code and designing systems that are reliable, efficient, and scalable.</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row skills-content skills-animation">
                        
                        {(skillSet.length > 0) && skillSet.map((item, index) => (

                            <div className="col-lg-4" key={index}>
                                <div className="progress">
                                    <span className="skill"><span>{item.name}</span> <i className="val">{item.percent}</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100"  style={{ width: item.percent }}></div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillSet;