const grammarExercises = [
    {
        type: 'fill-blank',
        japanese: 'わたし__学生です。',
        options: ['は', 'が', 'を', 'に'],
        correct: 'は',
        english: 'I am a student.',
        pattern: 'Topic は Noun です',
        explanation: 'Use は to mark the topic of the sentence.'
    },
    {
        type: 'pattern',
        template: '[Subject] は [Location] に [Verb]',
        japanese: '友だち__図書館__行きます。',
        options: ['は...に', 'が...を', 'を...に', 'に...は'],
        correct: 'は...に',
        english: 'My friend goes to the library.',
        explanation: 'Use は to mark the subject and に for the destination.'
    },
    {
        type: 'error-fix',
        japanese: 'わたしがペンをかきます。',
        correct: 'わたしはペンでかきます。',
        english: 'I write with a pen.',
        explanation: 'Use は for the topic and で for the tool/means.'
    },
    {
        type: 'fill-blank',
        japanese: 'りんご__食べます。',
        options: ['は', 'が', 'を', 'に'],
        correct: 'を',
        english: 'I eat an apple.',
        pattern: 'Object を Verb',
        explanation: 'Use を to mark the direct object of the action.'
    }
];

const particleQuestions = [
    {
        sentence: "わたし_____がくせいです。",
        options: ["は", "を", "が", "に"],
        correct: "は",
        english: "I am a student.",
        explanation: "は (wa) is used to mark the topic of the sentence."
    },
    {
        sentence: "ほん_____よみます。",
        options: ["は", "を", "が", "に"],
        correct: "を",
        english: "I read a book.",
        explanation: "を (wo) marks the direct object (what is being read)."
    },
    {
        sentence: "がっこう_____いきます。",
        options: ["は", "を", "が", "に"],
        correct: "に",
        english: "I go to school.",
        explanation: "に (ni) marks the destination."
    },
    {
        sentence: "わたし_____いぬ_____います。",
        options: ["は...が", "が...を", "を...に", "に...は"],
        correct: "は...が",
        english: "I have a dog.",
        explanation: "は marks the topic, が marks the subject in existence sentences."
    },
    {
        sentence: "せんせい_____えんぴつ_____あります。",
        options: ["は...が", "が...を", "を...に", "に...は"],
        correct: "は...が",
        english: "The teacher has a pencil.",
        explanation: "は marks the topic, が marks the subject in existence sentences."
    }
];

const sentenceExercises = [
    {
        id: 1,
        english: "I eat sushi",
        parts: ["わたし", "は", "すし", "を", "たべます"],
        correctOrder: ["わたし", "は", "すし", "を", "たべます"],
    },
    {
        id: 2,
        english: "The student studies Japanese",
        parts: ["がくせい", "は", "にほんご", "を", "べんきょうします"],
        correctOrder: ["がくせい", "は", "にほんご", "を", "べんきょうします"],
    },
    {
        id: 3,
        english: "I go to school",
        parts: ["わたし", "は", "がっこう", "に", "いきます"],
        correctOrder: ["わたし", "は", "がっこう", "に", "いきます"],
    },
    {
        id: 4,
        english: "The teacher reads a book",
        parts: ["せんせい", "は", "ほん", "を", "よみます"],
        correctOrder: ["せんせい", "は", "ほん", "を", "よみます"],
    }
];