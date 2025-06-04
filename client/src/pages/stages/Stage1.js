import { NavLink, Outlet } from "react-router-dom";
// import "./css/Stage1.scss";

const Stage1 = () => {
    return (
        <div className="stage-1">
            <h2>Stage 1: Hiragana Mastery</h2>

            <nav className="stage-nav">
                <ul>
                    <li><NavLink to="/Stage1/Main">Overview</NavLink></li>
                    <li><NavLink to="/Stage1/chart">Chart</NavLink></li>
                    <li><NavLink to="/Stage1/flipcards">Flashcards</NavLink></li>
                    <li><NavLink to="/Stage1/quiz">Quiz</NavLink></li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Stage1;