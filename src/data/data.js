const viaggi = [
    {
        id: 0,
        luogo: 'Roma',
        dataInizio: '2025-03-01',
        dataFine: '2025-03-07',
        partecipanti: [
            {
                id: 0,
                nome: 'Mario',
                cognome: 'Rossi',
                cellulare: '3331234567',
                telefonoAggiuntivo: '0645123456',
                email: 'mario.rossi@example.com',
                contattoEmergenza: {
                    nome: 'Luigi Rossi',
                    telefono: '3398765432',
                },
            },
            {
                id: 1,
                nome: 'Giulia',
                cognome: 'Bianchi',
                cellulare: '3459876543',
                telefonoAggiuntivo: '0678901234',
                email: 'giulia.bianchi@example.com',
                contattoEmergenza: {
                    nome: 'Marco Bianchi',
                    telefono: '3287654321',
                },
            },
        ],
    },
    {
        id: 1,
        luogo: 'Milano',
        dataInizio: '2025-04-10',
        dataFine: '2025-04-15',
        partecipanti: [
            {
                id: 0,
                nome: 'Andrea',
                cognome: 'Verdi',
                cellulare: '3465432178',
                telefonoAggiuntivo: null,
                email: 'andrea.verdi@example.com',
                contattoEmergenza: {
                    nome: 'Luca Verdi',
                    telefono: '3276543219',
                },
            },
            {
                id: 1,
                nome: 'Sara',
                cognome: 'Neri',
                cellulare: '3497654321',
                telefonoAggiuntivo: '0687654321',
                email: 'sara.neri@example.com',
                contattoEmergenza: {
                    nome: 'Anna Neri',
                    telefono: '3201234567',
                },
            },
        ],
    },
];

module.exports = viaggi;
