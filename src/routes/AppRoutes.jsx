import { Routes, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Index from "../components/Index";
import About from "../components/About";
import SkillSet from "../components/SkillSet";
import Resume from "../components/Resume";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="skill-set" element={<SkillSet />} />
                <Route path="resume" element={<Resume />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
