const supportedLanguages = [
    {id: 'nb', title: 'Norsk (bokmål)', isDefault: true},
    {id: 'en', title: 'Engelsk', isDefault: true},
    {id: 'nn', title: 'Nynorsk', isDefault: true},
];

export default {
    name: 'localeText',
    type: 'object',
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: 'editor'
        }
    ))
}
