export default {
    title: 'Editor',
    name: 'editor',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [],
            marks: {
                decorators: [],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        blockEditor: {
                            icon: () => 'Lenke'
                        },
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                description: 'Legg inn en fullstendig url, f.eks https://www.nav.no',
                                type: 'url',
                                validation: Rule => Rule.uri({allowRelative: false, scheme: ['https', 'http', 'mailto', 'tel']})
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
