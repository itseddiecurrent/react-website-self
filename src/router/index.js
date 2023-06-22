import React from "react"
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home";
import BlogPage from '../pages/blog';
import JourneyPage from "../pages/journey";
import MusicPage from "../pages/music";
import PassionPage from "../pages/passion";
import ProfessionPage from "../pages/profession";

const RouteConfig = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/journey" element={<JourneyPage />} />
            <Route exact path="/music" element={<MusicPage />} />
            <Route exact path="/passion" element={<PassionPage />} />
            <Route exact path="/profession" element={<ProfessionPage />} />
        </Routes>
    </Router>
);

export default RouteConfig; 