import ReferenceChart from "../../../components/molecules/ReferenceChart";
import { KatakanaCharacters } from "../../../util/data/characters";

import "./css/KatakanaChart.scss"

const KatakanaChart = () => {
    return (
        <div className="KatakanaChart">
            <h1 className="title">Hiragana Chart</h1>
            <p className="description">This chart displays all the Hiragana characters along with their Romaji equivalents.</p>
            <div className="katakana-chart">
                {/*<table className="hiragana-table">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th>Hiragana</th>*/}
                {/*        <th>Romaji</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {KatakanaCharacters.map((item, idx) => (*/}
                {/*        <tr key={idx}>*/}
                {/*            <td>{item.kana}</td>*/}
                {/*            <td>{item.romaji}</td>*/}
                {/*        </tr>*/}
                {/*    ))}*/}
                {/*    </tbody>*/}
                {/*</table>*/}
                <ReferenceChart hiraganaorkatakanaData={KatakanaCharacters} />
            </div>
        </div>
    );
}

export default KatakanaChart;