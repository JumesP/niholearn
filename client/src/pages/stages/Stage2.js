import { NavLink, Outlet } from "react-router-dom";
// import "./css/Stage1.scss";

const Stage2 = () => {
    return (
        <div className="stage-2">
            <h2>Stage 1: Katakana Mastery</h2>

            <nav className="stage-nav">
                <ul>
                    <li><NavLink to="/Stage2/Main">Overview</NavLink></li>
                    <li><NavLink to="/Stage2/chart">Chart</NavLink></li>
                    <li><NavLink to="/Stage2/flipcards">Flashcards</NavLink></li>
                    <li><NavLink to="/Stage2/quiz">Quiz</NavLink></li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Stage2;