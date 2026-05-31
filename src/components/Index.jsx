import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import bgImage from "../../assets/images/background-img.png";


const Index = () => {
    const el = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: el.current.getAttribute('data-typed-items').split(','),
            loop: true,
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1500,
        });
    
        return () => { typed.destroy();  };
    }, []);


    return (
        <>
            <section id="hero" className="hero section light-background">
                <img src={bgImage} alt="" />     {/* BACKGROUND IMAGE */}
                <div className="container zoom-in-animate">
                    <div className="row justify-content-center">
                        <div className="offset-3 col-lg-8">
                            <h2><i> Rishabh Srivastava ( ImRsrivastava ) </i></h2>
                            <p>I&apos;m a &nbsp;
                                <span ref={el} className="typed" data-typed-items="AWS Cloud and DevOps Engineer, AWS Infra Engineer, Senior Backend Engineer, Cloud and Infrastructure Engineer"></span>
                                <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                            </p>
                            <div className="social-links">
                                <Link target="_blank" to="https://www.linkedin.com/in/rishabh-srivastava0205/"><FaLinkedin/></Link>
                                <Link target="_blank" to="https://github.com/ImRsrivastava/"><FaSquareGithub/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;