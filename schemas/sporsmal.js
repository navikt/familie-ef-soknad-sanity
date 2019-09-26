export default {
    name: 'sporsmal',
    title: 'Spørsmål',
    type: 'document',
    fields: [
        {
            name: 'tittel',
            title: 'Tittel',
            type: 'localeString',
        },
        {
            name: 'sporsmal_id',
            title: 'Spørsmåls-ID',
            type: 'number',
        }
    ],
    orderings: [
        {
            title: "ID",
            name: "ID-Asc",
            by: [{ field: "sporsmal_id", direction: "asc" }]
        },
        {
            title: "Title",
            name: "titleAsc",
            by: [{ field: "tittel", direction: "asc" }]
        }
    ],
    preview: {
        select: {
            title: "tittel.nb",
            subtitle: "sporsmal_id",
            priority: "prioritet"
        },
        prepare(sporsmal, viewOptions = {}) {
            return {
                title: sporsmal.title,
                subtitle: "SpørsmålsID: " + sporsmal.subtitle
            };
        }
    }
}
