// Used for Stage 1 and 2

const HiraganaCharacters = [
        // Vowels
        { kana: 'あ', romaji: 'a' },
        { kana: 'い', romaji: 'i' },
        { kana: 'う', romaji: 'u' },
        { kana: 'え', romaji: 'e' },
        { kana: 'お', romaji: 'o' },
        // K-group
        { kana: 'か', romaji: 'ka' },
        { kana: 'き', romaji: 'ki' },
        { kana: 'く', romaji: 'ku' },
        { kana: 'け', romaji: 'ke' },
        { kana: 'こ', romaji: 'ko' },
        // S-group
        { kana: 'さ', romaji: 'sa' },
        { kana: 'し', romaji: 'shi' },
        { kana: 'す', romaji: 'su' },
        { kana: 'せ', romaji: 'se' },
        { kana: 'そ', romaji: 'so' },
        // T-group
        { kana: 'た', romaji: 'ta' },
        { kana: 'ち', romaji: 'chi' },
        { kana: 'つ', romaji: 'tsu' },
        { kana: 'て', romaji: 'te' },
        { kana: 'と', romaji: 'to' },
        // N-group
        { kana: 'な', romaji: 'na' },
        { kana: 'に', romaji: 'ni' },
        { kana: 'ぬ', romaji: 'nu' },
        { kana: 'ね', romaji: 'ne' },
        { kana: 'の', romaji: 'no' },
        // H-group
        { kana: 'は', romaji: 'ha' },
        { kana: 'ひ', romaji: 'hi' },
        { kana: 'ふ', romaji: 'fu' },
        { kana: 'へ', romaji: 'he' },
        { kana: 'ほ', romaji: 'ho' },
        // M-group
        { kana: 'ま', romaji: 'ma' },
        { kana: 'み', romaji: 'mi' },
        { kana: 'む', romaji: 'mu' },
        { kana: 'め', romaji: 'me' },
        { kana: 'も', romaji: 'mo' },
        // Y-group
        { kana: 'や', romaji: 'ya' },
    ];

const KatakanaCharacters = [
    // Vowels
    { kana: 'ア', romaji: 'a' },
    { kana: 'イ', romaji: 'i' },
    { kana: 'ウ', romaji: 'u' },
    { kana: 'エ', romaji: 'e' },
    { kana: 'オ', romaji: 'o' },
    // K-group
    { kana: 'カ', romaji: 'ka' },
    { kana: 'キ', romaji: 'ki' },
    { kana: 'ク', romaji: 'ku' },
    { kana: 'ケ', romaji: 'ke' },
    { kana: 'コ', romaji: 'ko' },
    // S-group
    { kana: 'サ', romaji: 'sa' },
    { kana: 'シ', romaji: 'shi' },
    { kana: 'ス', romaji: 'su' },
    { kana: 'セ', romaji: 'se' },
    { kana: 'ソ', romaji: 'so' },
    // T-group
    { kana: 'タ', romaji: 'ta' },
    { kana: 'チ', romaji: 'chi' },
    { kana: 'ツ', romaji: 'tsu' },
    { kana: 'テ', romaji: 'te' },
    { kana: 'ト', romaji: 'to' },
    // N-group
    { kana: 'ナ', romaji: 'na' },
    { kana: 'ニ', romaji: 'ni' },
    { kana: 'ヌ', romaji: 'nu' },
    { kana: 'ネ', romaji: 'ne' },
    { kana: 'ノ', romaji: 'no' },
    // H-group
    { kana: 'ハ', romaji: 'ha' },
    { kana: 'ヒ', romaji: 'hi' },
    { kana: 'フ', romaji: 'fu' },
    { kana: 'ヘ', romaji: 'he' },
    { kana: 'ホ', romaji: 'ho' },
    // M-group
    { kana: 'マ', romaji: 'ma' },
    { kana: 'ミ', romaji: 'mi' },
    { kana: 'ム', romaji: 'mu' },
    { kana: 'メ', romaji: 'me' },
    { kana: 'モ', romaji: 'mo' },
    // Y-group
    { kana: 'ヤ', romaji: 'ya' },
    { kana: 'ユ', romaji: 'yu' },
    { kana: 'ヨ', romaji: 'yo' },
    // R-group
    { kana: 'ラ', romaji: 'ra' },
    { kana: 'リ', romaji: 'ri' },
    { kana: 'ル', romaji: 'ru' },
    { kana: 'レ', romaji: 're' },
    { kana: 'ロ', romaji: 'ro' },
    // W-group
    { kana: 'ワ', romaji: 'wa' },
    { kana: 'ヲ', romaji: 'wo' },
    // N
    { kana: 'ン', romaji: 'n' }
];

export { HiraganaCharacters, KatakanaCharacters };