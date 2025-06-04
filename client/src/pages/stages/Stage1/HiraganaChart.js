import ReferenceChart from "../../../components/molecules/ReferenceChart";
import { HiraganaCharacters } from "../../../util/characters";

import "./css/HiraganaChart.scss"

const HiraganaChart = () => {
    return (
        <div className="HiraganaChart">
            <h1 className="title">Hiragana Chart</h1>
            <p className="description">This chart displays all the Hiragana characters along with their Romaji equivalents.</p>
            <div className="hiragana-chart">
                <table className="hiragana-table">
                    <thead>
                        <tr>
                            <th>Hiragana</th>
                            <th>Romaji</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hiraganaSet.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.kana}</td>
                                <td>{item.romaji}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ReferenceChart hiraganaorkatakanaData={hiraganaSet} />
            </div>
        </div>
    );
}

export default HiraganaChart;