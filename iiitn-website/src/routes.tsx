import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/page";
import About from "./About/page";
import Departments from "./Departments/page";
import Academics from "./Academics/page";
import Admissions from "./Admissions/page";
import Placements from "./Placements/page";
import Research from "./Research/page";
import Students from "./Students/page";
import Alumni from "./Alumni/page";
import Events from "./Events/page";
import Recruitments from "./Recruitments/page";
import ELibrary from "./ELibrary/page";
import Login from "./Login/page";
import Initiatives from "./Initiatives/page";
import NotFound from "./NotFound/page"; // 404 Pa/pagege

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/research" element={<Research />} />
                <Route path="/students" element={<Students />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/events" element={<Events />} />
                <Route path="/recruitments" element={<Recruitments />} />
                <Route path="/e-library" element={<ELibrary />} />
                <Route path="/login" element={<Login />} />
                <Route path="/initiatives" element={<Initiatives />} />
                <Route path="*" element={<NotFound />} /> {/* 404 page */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
