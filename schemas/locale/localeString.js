const supportedLanguages = [
    {id: 'nb', title: 'Norsk Bokmål', isDefault: true},
    {id: 'en', title: 'Engelsk', isDefault: true},
    {id: 'nn', title: 'Nynorsk', isDefault: true},
];

export default {
    name: 'localeString',
    type: 'object',
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: 'string',
        }
    ))
}
