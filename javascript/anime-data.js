// Dados dos animes
const animeData = [
    {
        id: 1,
        title: "Kanojo Okarishimasu",
        altTitles: ["Rent-a-Girlfriend", "Namorada de Aluguel"],
        image: "../imagens/Kanojo-Okarishimasu.jpg",
        year: 2020,
        episodes: 48,
        status: "Em andamento",
        genres: ["Romance", "Comédia", "Drama", "Slice of Life"],
        synopsis: "Kazuya Kinoshita é um estudante universitário que, após ser dispensado por sua namorada após um mês de namoro, decide usar um aplicativo para alugar uma namorada chamada Chizuru Mizuhara. No entanto, porque ela parece tão autêntica, ele começa a desenvolver sentimentos reais por ela. Mas depois de descobrir que ela não é tão genuína quanto ele pensava, ele a avalia mal. Quando a avó de Kazuya colapsa no hospital, ele leva Chizuru para vê-la, e sua avó fica tão feliz com ela que Kazuya continua alugando-a para manter as aparências.",
        rating: 7.2,
        episodes: [
            { number: 1, title: "Namorada e Namorada", date: "10/07/2020", crunchyrollUrl: "https://www.crunchyroll.com/series/G6QWV3976/rent-a-girlfriend"}, // :contentReference[oaicite:1]{index=1}"},
            { number: 2, title: "Ex e Namorada", date: "17/07/2020", link:"" },
            { number: 3, title: "Encontro e Namorada", date: "24/07/2020", link:"" },
            { number: 4, title: "Amigo e Namorada", date: "31/07/2020", link:"" },
            { number: 5, title: "Avó e Namorada", date: "07/08/2020", link:"" },
            { number: 6, title: "Namorada e Namorada", date: "14/08/2020", link:"" },
            { number: 7, title: "Mentira e Namorada", date: "21/08/2020", link:"" },
            { number: 8, title: "Natal e Namorada", date: "28/08/2020", link:"" },
            { number: 9, title: "Vizinhos e Namorada", date: "04/09/2020", link:"" },
            { number: 10, title: "Verdade e Namorada", date: "11/09/2020", link:"" },
            { number: 11, title: "Namorada e Namorada", date: "18/09/2020", link:"" },
            { number: 12, title: "Confissão e Namorada", date: "25/09/2020", link:"" }
        ],
        characters: [
            { name: "Kazuya Kinoshita", role: "Protagonista", image: "../imagens/characters/kazuya.jpg" },
            { name: "Chizuru Mizuhara", role: "Protagonista", image: "../imagens/characters/chizuru.jpg" },
            { name: "Mami Nanami", role: "Antagonista", image: "../imagens/characters/mami.jpg" },
            { name: "Ruka Sarashina", role: "Coadjuvante", image: "../imagens/characters/ruka.jpg" },
            { name: "Sumi Sakurasawa", role: "Coadjuvante", image: "../imagens/characters/sumi.jpg" }
        ],
        related: [2, 5, 7]
    },
    {

        id: 2,
        title: "One Piece",
        altTitles: [],
        image: "../imagens/One-Piece.jpg",
        year: 1999,
        episodes: 1100,
        status: "Em andamento",
        genres: ["Ação", "Aventura", "Comédia", "Fantasia", "Shounen"],
        synopsis: "One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997. A história segue as aventuras de Monkey D. Luffy, um garoto cujo corpo ganhou as propriedades de borracha após ter comido uma Fruta do Diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o 'One Piece', a fim de se tornar o próximo Rei dos Piratas.",
        rating: 9.0,
        episodes: [
            { number: 1, title: "Eu Sou Luffy! O Homem Que Vai Se Tornar o Rei dos Piratas!", date: "20/10/1999" },
            { number: 2, title: "O Grande Espadachim Aparece! Caçador de Piratas Roronoa Zoro", date: "27/10/1999" },
            { number: 3, title: "Morgan vs Luffy! Quem é a Bela Jovem?", date: "03/11/1999" },
            { number: 4, title: "O Passado de Luffy! A Ruiva Shanks Aparece!", date: "10/11/1999" },
            { number: 5, title: "Medo Terrível! Palhaço Pirata Buggy!", date: "17/11/1999" },
            { number: 6, title: "Situação Desesperadora! Domador de Feras Mohji vs Luffy!", date: "24/11/1999" },
            { number: 7, title: "Duelo Intenso! Zoro o Espadachim vs Cabaji o Acrobata!", date: "01/12/1999" },
            { number: 8, title: "Quem Vencerá? Confronto de Habilidades da Akuma no Mi!", date: "08/12/1999" },
            { number: 9, title: "A Mulher Honrada! Nami a Ladra de Piratas!", date: "15/12/1999" },
            { number: 10, title: "O Homem Mais Forte do Leste! Capitão Usopp Aparece!", date: "22/12/1999" },
            { number: 11, title: "Revelação! Kurahadol, o Mordomo Pirata!", date: "29/12/1999" },
            { number: 12, title: "Conspiração! Capitão Kuro, o Plano de Assassinato!", date: "05/01/2000" }
        ],
        characters: [
            { name: "Monkey D. Luffy", role: "Protagonista", image: "../imagens/characters/luffy.jpg" },
            { name: "Roronoa Zoro", role: "Protagonista", image: "../imagens/characters/zoro.jpg" },
            { name: "Nami", role: "Protagonista", image: "../imagens/characters/nami.jpg" },
            { name: "Usopp", role: "Protagonista", image: "../imagens/characters/usopp.jpg" },
            { name: "Sanji", role: "Protagonista", image: "../imagens/characters/sanji.jpg" }
        ],
        related: [3, 6, 10]
    },
    {
        id: 3,
        title: "Naruto Shippuden",
        altTitles: ["Naruto: Shippuuden"],
        image: "../imagens/Naruto-Shippuden.jpg",
        year: 2007,
        episodes: 500,
        status: "Concluído",
        genres: ["Ação", "Aventura", "Shounen", "Ninja"],
        synopsis: "Naruto Uzumaki retorna à Vila da Folha após dois anos e meio de treinamento intenso com Jiraiya. Agora mais forte e determinado, ele busca trazer Sasuke Uchiha de volta e enfrentar a organização criminosa Akatsuki, que ameaça o mundo shinobi com seus planos obscuros. A história acompanha sua jornada para se tornar Hokage e proteger seus amigos.",
        rating: 8.4,
        episodes: [
            { number: 1, title: "Retorno", date: "15/02/2007" },
            { number: 2, title: "A Akatsuki Se Move", date: "15/02/2007" },
            { number: 3, title: "Os Resultados do Treinamento", date: "22/02/2007" },
            { number: 4, title: "Jinchuuriki do Areia", date: "01/03/2007" },
            { number: 5, title: "Como Kazekage", date: "08/03/2007" }
    ],
    characters: [
            { name: "Naruto Uzumaki", role: "Protagonista", image: "../imagens/characters/naruto.jpg" },
            { name: "Sasuke Uchiha", role: "Coadjuvante", image: "../imagens/characters/sasuke.jpg" },
            { name: "Sakura Haruno", role: "Coadjuvante", image: "../imagens/characters/sakura.jpg" },
            { name: "Kakashi Hatake", role: "Mentor", image: "../imagens/characters/kakashi.jpg" },
            { name: "Pain (Nagato)", role: "Antagonista", image: "../imagens/characters/pain.jpg" }
    ],
    related: [8, 10, 14]

    },
    {
        id: 4,
        title: "Jujutsu Kaisen",
        altTitles: ["Sorcery Fight"],
        image: "../imagens/Jujutsu-Kaisen.jpg",
        year: 2020,
        episodes: 48,
        status: "Em andamento",
        genres: ["Ação", "Sobrenatural", "Escolar", "Shounen"],
        synopsis: "Yuji Itadori é um estudante do ensino médio que vive em Sendai com seu avô. Apesar de suas habilidades físicas naturais, ele evita o time de atletismo devido à sua aversão ao esforço. Em vez disso, ele escolhe se juntar ao Clube de Pesquisa Oculta, onde pode relaxar e sair com seus amigos. Quando um talismã de alto grau é desselado, monstros começam a aparecer ao redor da escola. Devido a uma série de eventos, Yuji engole o dedo de Sukuna, um talismã amaldiçoado, e se torna seu hospedeiro. Devido à maldição de Sukuna, todos os feiticeiros estão obrigados a exorcizá-lo (e, por extensão, Yuji) imediatamente. No entanto, apesar de ser possuído, Yuji ainda é capaz de manter o controle sobre seu corpo. Vendo isso, o mais poderoso dos feiticeiros, Satoru Gojo, decide levá-lo para a Escola Técnica de Jujutsu para propor um plano aos seus superiores: adiar a sentença de morte de Yuji até que ele consuma todos os dedos de Sukuna, permitindo que eles o matem de uma vez.",
        rating: 8.7,
        episodes: [
            { number: 1, title: "Ryomen Sukuna", date: "03/10/2020" },
            { number: 2, title: "Por Mim Mesmo", date: "10/10/2020" },
            { number: 3, title: "Menina de Aço", date: "17/10/2020" },
            { number: 4, title: "Morte Pintada", date: "24/10/2020" },
            { number: 5, title: "Existência Maldita", date: "31/10/2020" },
            { number: 6, title: "Após a Chuva", date: "07/11/2020" },
            { number: 7, title: "Assalto", date: "14/11/2020" },
            { number: 8, title: "Brilho", date: "21/11/2020" },
            { number: 9, title: "Pequeno Peixe e Peixe Reverso", date: "28/11/2020" },
            { number: 10, title: "Formação Paralela", date: "05/12/2020" },
            { number: 11, title: "Futebol Noturno", date: "12/12/2020" },
            { number: 12, title: "Para Você Algum Dia", date: "19/12/2020" }
        ],
        characters: [
            { name: "Yuji Itadori", role: "Protagonista", image: "../imagens/characters/yuji.jpg" },
            { name: "Megumi Fushiguro", role: "Protagonista", image: "../imagens/characters/megumi.jpg" },
            { name: "Nobara Kugisaki", role: "Protagonista", image: "../imagens/characters/nobara.jpg" },
            { name: "Satoru Gojo", role: "Mentor", image: "../imagens/characters/gojo.jpg" },
            { name: "Sukuna", role: "Antagonista", image: "../imagens/characters/sukuna.jpg" }
        ],
        related: [3, 6, 9]
    },
    {
        id: 5,
        title: "Solo Leveling",
        altTitles: ["Ore Dake Level Up na Ken", "Only I Level Up"],
        image: "../imagens/Solo-Leveling.jpg",
        year: 2024,
        episodes: 12,
        status: "Concluído",
        genres: ["Ação", "Fantasia", "Sobrenatural", "Shounen"],
        synopsis: "Jin-Woo Sung é conhecido como o caçador mais fraco da humanidade. Após ser quase morto em uma dungeon de rank duplo, ele acorda com uma habilidade única: a capacidade de subir de nível sozinho. Agora, ele começa uma jornada para se tornar o caçador mais forte do mundo, enfrentando criaturas poderosas, guildas perigosas e segredos que podem abalar toda a humanidade.",
        rating: 8.8,
        episodes: [
            { number: 1, title: "O Começo do Fim", date: "06/01/2024" },
            { number: 2, title: "A Última Chance", date: "13/01/2024" },
            { number: 3, title: "O Sistema", date: "20/01/2024" },
            { number: 4, title: "Primeira Missão", date: "27/01/2024" },
            { number: 5, title: "Evolução", date: "03/02/2024" }
        ],
        characters: [
            { name: "Jin-Woo Sung", role: "Protagonista", image: "../imagens/characters/jinwoo.jpg" },
            { name: "Jin-Ah Sung", role: "Coadjuvante", image: "../imagens/characters/jinah.jpg" },
            { name: "Cha Hae-In", role: "Coadjuvante", image: "../imagens/characters/chaehaein.jpg" },
            { name: "Go Gun-Hee", role: "Coadjuvante", image: "../imagens/characters/gogunhee.jpg" },
            { name: "Baruka", role: "Antagonista", image: "../imagens/characters/baruka.jpg" }
        ],
        related: [7, 10, 15]

    },
    {
        id: 6,
        title: "Bleach",
        altTitles: [],
        image: "../imagens/bleach.jpg",
        year: 2004,
        episodes: 366,
        status: "Concluído",
        genres: ["Ação", "Aventura", "Sobrenatural", "Shounen"],
        synopsis: "Bleach segue as aventuras de Ichigo Kurosaki, um estudante do ensino médio com a habilidade de ver fantasmas. A vida de Ichigo muda drasticamente após encontrar Rukia Kuchiki, uma Shinigami (Deus da Morte) que está em missão para eliminar Hollows, espíritos malignos que podem prejudicar tanto fantasmas quanto humanos. Quando Rukia é gravemente ferida ao proteger Ichigo de um Hollow, ela tenta transferir metade de seus poderes para Ichigo, mas ele acaba absorvendo quase todos os seus poderes. Com os novos poderes de Ichigo, e Rukia incapaz de retornar à Soul Society, Ichigo é forçado a assumir os deveres de um Shinigami, defendendo humanos de Hollows e guiando almas ao outro mundo.",
        rating: 8.2,
        episodes: [
            { number: 1, title: "O Dia em que Me Tornei um Shinigami", date: "05/10/2004" },
            { number: 2, title: "O Trabalho de um Shinigami", date: "12/10/2004" },
            { number: 3, title: "O Desejo de Proteger", date: "19/10/2004" },
            { number: 4, title: "Confronto", date: "26/10/2004" },
            { number: 5, title: "Golpe do Destino", date: "02/11/2004" },
            { number: 6, title: "Ichigo Torna-se um Hollow", date: "09/11/2004" },
            { number: 7, title: "Confronto com o Hollow", date: "16/11/2004" },
            { number: 8, title: "Dia de Chuva", date: "23/11/2004" },
            { number: 9, title: "Unbreakable Heart", date: "30/11/2004" },
            { number: 10, title: "Proteção do Amuleto", date: "07/12/2004" },
            { number: 11, title: "O Homem Mais Malvado", date: "14/12/2004" },
            { number: 12, title: "Um Shinigami Nasce", date: "21/12/2004" }
        ],
        characters: [
            { name: "Ichigo Kurosaki", role: "Protagonista", image: "../imagens/characters/ichigo.jpg" },
            { name: "Rukia Kuchiki", role: "Protagonista", image: "../imagens/characters/rukia.jpg" },
            { name: "Orihime Inoue", role: "Protagonista", image: "../imagens/characters/orihime.jpg" },
            { name: "Yasutora Sado", role: "Protagonista", image: "../imagens/characters/chad.jpg" },
            { name: "Uryu Ishida", role: "Protagonista", image: "../imagens/characters/uryu.jpg" }
        ],
        related: [2, 4, 7]
    },
    {
        id: 7,
        title: "Attack on Titan",
        altTitles: ["Shingeki no Kyojin", "Ataque dos Titãs"],
        image: "../imagens/Attack-on-Titan.jpg",
        year: 2013,
        episodes: 87,
        status: "Concluído",
        genres: ["Ação", "Drama", "Fantasia", "Mistério", "Shounen"],
        synopsis: "A história gira em torno de Eren Yeager, seu irmão adotivo Mikasa Ackerman e seu amigo de infância Armin Arlert, que vivem em um mundo onde a humanidade vive dentro de cidades cercadas por enormes muralhas devido à ameaça dos Titãs, gigantes humanoides que devoram humanos aparentemente sem razão. Quando um Titã Colossal aparece e destrói a muralha da cidade natal de Eren, os Titãs invadem a cidade e devoram a mãe de Eren diante de seus olhos. Jurando vingança, Eren se junta à Tropa de Exploração, um grupo de elite de soldados que lutam contra os Titãs fora das muralhas e exploram o mundo exterior.",
        rating: 9.1,
        episodes: [
            { number: 1, title: "Para Você, 2000 Anos Depois", date: "07/04/2013" },
            { number: 2, title: "Naquele Dia", date: "14/04/2013" },
            { number: 3, title: "A Luz Fraca em Meio ao Desespero", date: "21/04/2013" },
            { number: 4, title: "A Noite da Cerimônia de Formatura", date: "28/04/2013" },
            { number: 5, title: "Primeira Batalha", date: "05/05/2013" },
            { number: 6, title: "O Mundo que a Menina Viu", date: "12/05/2013" },
            { number: 7, title: "Pequena Lâmina", date: "19/05/2013" },
            { number: 8, title: "Ouvindo o Batimento do Coração", date: "26/05/2013" },
            { number: 9, title: "O Que Aconteceu com o Braço Esquerdo", date: "02/06/2013" },
            { number: 10, title: "Resposta", date: "09/06/2013" },
            { number: 11, title: "Ídolo", date: "16/06/2013" },
            { number: 12, title: "Ferimento", date: "23/06/2013" }
        ],
        characters: [
            { name: "Eren Yeager", role: "Protagonista", image: "../imagens/characters/eren.jpg" },
            { name: "Mikasa Ackerman", role: "Protagonista", image: "../imagens/characters/mikasa.jpg" },
            { name: "Armin Arlert", role: "Protagonista", image: "../imagens/characters/armin.jpg" },
            { name: "Levi Ackerman", role: "Capitão", image: "../imagens/characters/levi.jpg" },
            { name: "Erwin Smith", role: "Comandante", image: "../imagens/characters/erwin.jpg" }
        ],
        related: [1, 7, 8]
    },
    {
         id: 8,
        title: "Demon Slayer",
        altTitles: ["Kimetsu no Yaiba", "Caçador de Demônios"],
        image: "../imagens/Demon-Slayer.jpg",
        year: 2019,
        episodes: 55,
        status: "Concluído",
        genres: ["Ação", "Sobrenatural", "Histórico", "Shounen"],
        synopsis: "Ambientado no Japão durante o Período Taisho (1912-1926), a história gira em torno de Tanjiro Kamado, um jovem de bom coração que se tornou o sustento de sua família após a morte de seu pai. Um dia, Tanjiro vai a outra cidade para vender carvão. Ao retornar, ele descobre que sua família foi atacada e morta por um demônio. Tanjiro e sua irmã Nezuko são os únicos sobreviventes do incidente, com Nezuko sendo transformada em um demônio, mas ainda surpreendentemente mostrando sinais de emoção e pensamento humanos. Tanjiro se torna um caçador de demônios para encontrar uma cura para sua irmã e matar o demônio que matou sua família.",
        rating: 8.9,
        episodes: [
            { number: 1, title: "Crueldade", date: "06/04/2019" },
            { number: 2, title: "Sakonji Urokodaki, o Treinador", date: "13/04/2019" },
            { number: 3, title: "Sabito e Makomo", date: "20/04/2019" },
            { number: 4, title: "Seleção Final", date: "27/04/2019" },
            { number: 5, title: "Meu Próprio Aço", date: "04/05/2019" },
            { number: 6, title: "Espadachim com Demônio", date: "11/05/2019" },
            { number: 7, title: "Muzan Kibutsuji", date: "18/05/2019" },
            { number: 8, title: "O Cheiro de Sangue Encantador", date: "25/05/2019" },
            { number: 9, title: "Demônio das Temari e Demônio da Flecha", date: "01/06/2019" },
            { number: 10, title: "Juntos Para Sempre", date: "08/06/2019" },
            { number: 11, title: "A Casa do Tambor", date: "15/06/2019" },
            { number: 12, title: "O Javali Mostra suas Presas", date: "22/06/2019" }
        ],
        characters: [
            { name: "Tanjiro Kamado", role: "Protagonista", image: "../imagens/characters/tanjiro.jpg" },
            { name: "Nezuko Kamado", role: "Protagonista", image: "../imagens/characters/nezuko.jpg" },
            { name: "Zenitsu Agatsuma", role: "Protagonista", image: "../imagens/characters/zenitsu.jpg" },
            { name: "Inosuke Hashibira", role: "Protagonista", image: "../imagens/characters/inosuke.jpg" },
            { name: "Giyu Tomioka", role: "Hashira", image: "../imagens/characters/giyu.jpg" }
        ],
        related: [2, 4, 9]
    },
    {
        id: 9,
        title: "Oshi no Ko",
        altTitles: ["【Oshi no Ko】", "Meus Ídolos"],
        image: "../imagens/Oshi-no-Ko.png",
        year: 2023,
        episodes: 11,
        status: "Concluído",
        genres: ["Drama", "Mistério", "Psicológico", "Seinen"],
        synopsis: "Gorou, um médico obstetra e fã da idol Ai Hoshino, é assassinado na véspera do parto dela. Ele reencarna como Aquamarine, filho da própria Ai. Ao lado de sua irmã gêmea Ruby, também reencarnada, ele tenta desvendar os segredos obscuros da indústria do entretenimento e vingar a morte de sua mãe, enquanto ambos trilham caminhos distintos no showbiz.",
        rating: 8.7,
        episodes: [
            { number: 1, title: "Mãe e Crianças", date: "12/04/2023" },
            { number: 2, title: "Transferência", date: "19/04/2023" },
            { number: 3, title: "Terceira Opção", date: "26/04/2023" },
            { number: 4, title: "Trabalho Infantil", date: "03/05/2023" },
            { number: 5, title: "Reality Show", date: "10/05/2023" }
        ],
        characters: [
            { name: "Aquamarine Hoshino", role: "Protagonista", image: "../imagens/characters/aquamarine.jpg" },
            { name: "Ruby Hoshino", role: "Coadjuvante", image: "../imagens/characters/ruby.jpg" },
            { name: "Ai Hoshino", role: "Personagem-chave", image: "../imagens/characters/ai.jpg" },
            { name: "Kana Arima", role: "Coadjuvante", image: "../imagens/characters/kana.jpg" },
            { name: "Akane Kurokawa", role: "Coadjuvante", image: "../imagens/characters/akane.jpg" }
        ],
        related: [8, 6, 12]

    },
    {
        id: 10,
        title: "Sousou no Frieren",
        altTitles: ["Frieren: Beyond Journey's End", "Frieren e a Jornada para o Além"],
        image: "../imagens/sousou-no-frieren.jpg",
        year: 2023,
        episodes: 28,
        status: "Concluído",
        genres: ["Fantasia", "Drama", "Aventura", "Slice of Life"],
        synopsis: "Após derrotar o Rei Demônio ao lado de seus companheiros, a elfa maga Frieren vê seus amigos envelhecerem e morrerem, enquanto ela continua vivendo por séculos. Anos depois, ela embarca em uma nova jornada com aprendizes e novos aliados, refletindo sobre o valor do tempo, das memórias e do verdadeiro significado das conexões humanas.",
        rating: 9.1,
        episodes: [
            { number: 1, title: "O que você pode ver depois de 10 anos", date: "29/09/2023" },
            { number: 2, title: "A Mago que viu o fim da jornada", date: "29/09/2023" },
            { number: 3, title: "Jornada para o Norte", date: "06/10/2023" },
            { number: 4, title: "Aqueles que sabem da magia", date: "13/10/2023" },
            { number: 5, title: "Memórias do Herói", date: "20/10/2023" }
        ],
        characters: [
            { name: "Frieren", role: "Protagonista", image: "../imagens/characters/frieren.jpg" },
            { name: "Fern", role: "Coadjuvante", image: "../imagens/characters/fern.jpg" },
            { name: "Stark", role: "Coadjuvante", image: "../imagens/characters/stark.jpg" },
            { name: "Himmel", role: "Herói Lendário", image: "../imagens/characters/himmel.jpg" },
            { name: "Heiter", role: "Sacerdote", image: "../imagens/characters/heiter.jpg" }
        ],
        related: [6, 9, 14]

    },
    {
        id: 11,
        title: "Kaiju No. 8",
        altTitles: ["Monster #8"],
        image: "../imagens/kaiju-no-8.jpg",
        year: 2023,
        episodes: 12,
        status: "Em andamento",
        genres: ["Ação", "Sci-Fi", "Kaiju", "Shounen"],
        synopsis: "O Japão é um país que sofre constantes ataques de monstros gigantes conhecidos como 'kaiju'. A Força de Defesa enfrenta essas ameaças, enquanto empresas de limpeza removem os cadáveres dos kaiju. Kafka Hibino, que sonhava em se juntar à Força de Defesa, acabou trabalhando em uma dessas empresas de limpeza. Um dia, uma criatura misteriosa entra em seu corpo, dando-lhe a capacidade de se transformar em um kaiju. Agora, como 'Kaiju No. 8', ele tenta esconder sua identidade enquanto busca realizar seu sonho de infância.",
        rating: 8.5,
        episodes: [
            { number: 1, title: "Esse é o Meu Sonho", date: "13/04/2023" },
            { number: 2, title: "Não Vou Desistir", date: "20/04/2023" },
            { number: 3, title: "Força de Defesa", date: "27/04/2023" },
            { number: 4, title: "Kaiju No. 8", date: "04/05/2023" },
            { number: 5, title: "Poder Oculto", date: "11/05/2023" },
            { number: 6, title: "Treinamento", date: "18/05/2023" },
            { number: 7, title: "Primeira Missão", date: "25/05/2023" },
            { number: 8, title: "Confronto", date: "01/06/2023" },
            { number: 9, title: "Segredo Revelado", date: "08/06/2023" },
            { number: 10, title: "Decisão", date: "15/06/2023" },
            { number: 11, title: "Batalha Final", date: "22/06/2023" },
            { number: 12, title: "Novo Começo", date: "29/06/2023" }
        ],
        characters: [
            { name: "Kafka Hibino", role: "Protagonista", image: "../imagens/characters/kafka.jpg" },
            { name: "Mina Ashiro", role: "Protagonista", image: "../imagens/characters/mina.jpg" },
            { name: "Reno Ichikawa", role: "Coadjuvante", image: "../imagens/characters/reno.jpg" },
            { name: "Kikoru Shinomiya", role: "Coadjuvante", image: "../imagens/characters/kikoru.jpg" },
            { name: "Soshiro Hoshina", role: "Capitão", image: "../imagens/characters/hoshina.jpg" }
        ],
        related: [9, 12, 3]
    },
    {
        id: 12,
        title: "Dandadan",
        altTitles: [],
        image: "../imagens/Dandadan.jpg",
        year: 2023,
        episodes: 12,
        status: "Em andamento",
        genres: ["Ação", "Comédia", "Romance", "Sobrenatural", "Sci-Fi", "Shounen"],
        synopsis: "Momo Ayase é uma garota que acredita em fantasmas, mas não em alienígenas, enquanto Okarun é um garoto que acredita em alienígenas, mas não em fantasmas. Quando os dois decidem provar um ao outro que estão certos, acabam encontrando tanto fantasmas quanto alienígenas, e suas vidas mudam para sempre. Agora, com poderes sobrenaturais, eles enfrentam ameaças de outro mundo enquanto tentam recuperar o que perderam.",
        rating: 8.8,
        episodes: [
            { number: 1, title: "Acredito em Fantasmas", date: "03/10/2023" },
            { number: 2, title: "Acredito em Alienígenas", date: "10/10/2023" },
            { number: 3, title: "O Poder da Vovó Turbo", date: "17/10/2023" },
            { number: 4, title: "Sereno Gelado", date: "24/10/2023" },
            { number: 5, title: "Maldição", date: "31/10/2023" },
            { number: 6, title: "Poderes Ocultos", date: "07/11/2023" },
            { number: 7, title: "Encontro Sobrenatural", date: "14/11/2023" },
            { number: 8, title: "Batalha no Templo", date: "21/11/2023" },
            { number: 9, title: "Segredos Revelados", date: "28/11/2023" },
            { number: 10, title: "Aliança Improvável", date: "05/12/2023" },
            { number: 11, title: "Confronto Final", date: "12/12/2023" },
            { number: 12, title: "Novo Começo", date: "19/12/2023" }
        ],
        characters: [
            { name: "Momo Ayase", role: "Protagonista", image: "../imagens/characters/momo.jpg" },
            { name: "Ken Takakura (Okarun)", role: "Protagonista", image: "../imagens/characters/okarun.jpg" },
            { name: "Vovó Turbo", role: "Mentora", image: "../imagens/characters/turbo.jpg" },
            { name: "Aira Shiratori", role: "Coadjuvante", image: "../imagens/characters/aira.jpg" },
            { name: "Jiji", role: "Antagonista", image: "../imagens/characters/jiji.jpg" }
        ],
        related: [8, 9, 11]
    }
];


