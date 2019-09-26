const supportedLanguages = [
    {id: 'nb', title: 'Norsk bokmål', isDefault: true},
    {id: 'en', title: 'English'},
];

export default {
    name: 'localeFile',
    type: 'object',
    fieldsets: [
        {
            title: 'Andre språk',
            name: 'andresprak',
            options: {collapsible: true}
        }
    ],
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: 'file',
            fieldset: lang.isDefault ? null : 'andresprak'
        }
    ))
}
