export default {
    name: 'forside_arbeidssoker',
    type: 'document',
    title: 'Forside (Arbeidssøker)',
    fields: [
        {
            title: 'Seksjon (bokmål)', 
            name: 'seksjon_nb',
            type: 'array', 
            of: [{type: 'avsnitt'}]
        },
        {
            title: 'Seksjon (nynorsk)', 
            name: 'seksjon_nn',
            type: 'array', 
            of: [{type: 'avsnitt'}]
        },
        {
            title: 'Seksjon (engelsk)', 
            name: 'seksjon_en',
            type: 'array', 
            of: [{type: 'avsnitt'}]
        },
        {
            title: '"Vi stoler på deg"-boks (bokmål)',
            name: 'disclaimer_nb',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: '"Vi stoler på deg"-boks (nynorsk)',
            name: 'disclaimer_nn',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: '"Vi stoler på deg"-boks (engelsk)',
            name: 'disclaimer_en',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}