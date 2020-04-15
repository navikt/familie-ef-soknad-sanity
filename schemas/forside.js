export default {
    name: 'forside',
    type: 'document',
    title: 'Forside',
    fields: [
        {
            title: 'Avsnitt', 
            name: 'avsnitt',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
}