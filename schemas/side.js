export default {
    name: 'forside',
    type: 'document',
    title: 'Forside',
    fields: [
        {
            title: 'Seksjon', 
            name: 'seksjon',
            type: 'array', 
            of: [{type: 'avsnitt'}]
        },
        {
            title: '"Vi stoler på deg"-boks',
            name: 'disclaimer',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}