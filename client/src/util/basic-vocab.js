const vocabularyData = {
    nouns: [
        { japanese: 'やさい', english: 'vegetable', example: 'やさいを たべます' },
        { japanese: 'みず', english: 'water', example: 'みずを のみます' },
        { japanese: 'ともだち', english: 'friend', example: 'ともだちが います' },
        { japanese: 'がっこう', english: 'school', example: 'がっこうに いきます' },
        { japanese: 'ほん', english: 'book', example: 'ほんを よみます' },
        { japanese: 'いぬ', english: 'dog', example: 'いぬが います' },
        { japanese: 'ねこ', english: 'cat', example: 'ねこが すき です' },
        { japanese: 'でんわ', english: 'telephone', example: 'でんわを つかいます' }
    ],
    verbs: [
        { japanese: 'たべる', english: 'to eat', example: 'ごはんを たべます' },
        { japanese: 'のむ', english: 'to drink', example: 'おちゃを のみます' },
        { japanese: 'いく', english: 'to go', example: 'うちに いきます' },
        { japanese: 'する', english: 'to do', example: 'べんきょうを します' },
        { japanese: 'みる', english: 'to see/watch', example: 'えいがを みます' },
        { japanese: 'よむ', english: 'to read', example: 'ほんを よみます' },
        { japanese: 'かく', english: 'to write', example: 'てがみを かきます' }
    ],
    adjectives: [
        { japanese: 'おおきい', english: 'big', example: 'おおきい いえ です' },
        { japanese: 'ちいさい', english: 'small', example: 'ちいさい いぬ です' },
        { japanese: 'おいしい', english: 'delicious', example: 'おいしい たべもの です' },
        { japanese: 'たのしい', english: 'fun', example: 'たのしい パーティー です' },
        { japanese: 'むずかしい', english: 'difficult', example: 'むずかしい しけん です' },
        { japanese: 'やさしい', english: 'easy/kind', example: 'やさしい せんせい です' }
    ]
};

const greetingsData = [
    {
        japanese: 'こんにちは',
        english: 'Hello (daytime)',
        context: 'General daytime greeting',
        audioUrl: null // TODO: Add audio files
    },
    {
        japanese: 'おはようございます',
        english: 'Good morning (polite)',
        context: 'Morning greeting, formal',
        audioUrl: null
    },
    {
        japanese: 'こんばんは',
        english: 'Good evening',
        context: 'Evening greeting',
        audioUrl: null
    },
    {
        japanese: 'さようなら',
        english: 'Goodbye',
        context: 'When parting for a long time',
        audioUrl: null
    },
    {
        japanese: 'はじめまして',
        english: 'Nice to meet you',
        context: 'First-time meetings',
        audioUrl: null
    },
    {
        japanese: 'おやすみなさい',
        english: 'Good night',
        context: 'When going to bed',
        audioUrl: null
    },
    {
        japanese: 'ありがとうございます',
        english: 'Thank you (polite)',
        context: 'Expressing gratitude formally',
        audioUrl: null
    },
    {
        japanese: 'すみません',
        english: 'Excuse me/Sorry',
        context: 'Apologies or getting attention',
        audioUrl: null
    }
];

const introductionData = [
    {
        japanese: 'わたしは [Name] です',
        english: 'I am [Name]',
        template: true,
        context: 'Basic self-introduction'
    },
    {
        japanese: '[Country] からきました',
        english: 'I am from [Country]',
        template: true,
        context: 'Stating your origin'
    },
    {
        japanese: 'よろしくおねがいします',
        english: 'Nice to meet you (please treat me well)',
        context: 'Used after self-introduction'
    }
];

const sentencePatterns = [
    {
        id: 1,
        type: 'fill-blank',
        template: 'わたし_____がくせいです。',
        answer: 'は',
        english: 'I am a student.',
        hint: 'Use は for the topic marker'
    },
    {
        id: 2,
        type: 'word-bank',
        english: 'This is a book',
        words: ['ほん', 'これ', 'は', 'です'],
        correct: ['これ', 'は', 'ほん', 'です'],
        hint: 'Start with これ (this)'
    },
    {
        id: 3,
        type: 'fill-blank',
        template: 'わたし_____にほんご_____べんきょうします。',
        answer: ['は', 'を'],
        english: 'I study Japanese.',
        hint: 'Use は for topic and を for the object'
    },
    {
        id: 4,
        type: 'word-bank',
        english: 'I am from America',
        words: ['アメリカ', 'から', 'です', 'わたし', 'は'],
        correct: ['わたし', 'は', 'アメリカ', 'から', 'です'],
        hint: 'Use から to show origin'
    }
];

export { vocabularyData, greetingsData, introductionData, sentencePatterns };