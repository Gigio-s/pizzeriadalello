/* Pizzeria da Lello Le Fornaci - dati menu
   Fonte: menu sfogliabile ufficiale pizzeriadalello.it (settembre 2026).
   Per modificare prezzi o ingredienti basta cambiare questo file. */

var CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3Fp93g3AABsPKODQxzIxBVAjWHa/';

/* ---------- Le protagoniste della ruota (foto ricreate con Higgsfield, sfondo trasparente) ---------- */
window.LELLO_PIZZE = [
  /* Foto inviate da Lello il 27/10/2026, ricreate con Higgsfield. conferma:true = nome da far confermare al cliente */
  { id:'bpm', nome:'La B.P.M.', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/bpm.webp',
    frase:'Mortadella, pistacchio di Bronte e burrata: la pizza che fa girare la testa.',
    ing:[['Fior di latte','100% latte italiano'],['Mortadella','dopo cottura'],['Pesto di pistacchi','di Bronte'],['Granella di pistacchi',''],['Zest di limone','BIO'],['Burrata','di Andria pugliese']] },
  { id:'sangennaro', nome:'San Gennaro', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/sangennaro.webp',
    frase:'Bianca con salame dolce, ricotta di bufala, tarallo e pistacchio.',
    ing:[['Fior di latte','100% latte italiano'],['Salame napoletano','dolce'],['Ricotta di bufala','fresca'],['Tarallo napoletano','sbriciolato'],['Pesto di pistacchi','di Bronte']] },
  { id:'superverace', nome:'Super Verace', cat:'Classiche napoletane', prezzo:10, img:'assets/img/pizze/superverace.webp',
    frase:'La verace con la bufala e il cornicione ripieno di ricotta.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Bufala campana','D.O.P., a fine cottura'],['Basilico fresco',''],['Cornicione ripieno','di ricotta fresca'],['Olio EVO','"Nino Centonze"']] },
  { id:'posillipo', nome:'Posillipo', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/posillipo.webp',
    frase:'Datterini, rucola selvatica e una burrata intera al centro.',
    ing:[['Fior di latte','100% latte italiano'],['Pomodorino datterino',''],['Rucola selvatica',''],['Burrata','di Andria pugliese'],['Olio EVO','"Nino Centonze"']] },
  { id:'toto', nome:'La Totò', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/toto.webp',
    frase:'Friarielli e salame napoletano, con la ricotta di bufala a chiudere.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Friarielli','napoletani'],['Salame napoletano','Salumificio Barbato'],['Ricotta di bufala',''],['Basilico fresco',''],['Pepe',''],['Olio EVO','"Nino Centonze"']] },
  { id:'supergold', nome:'Super Gold', cat:'Eccellenze napoletane', prezzo:11, img:'assets/img/pizze/supergold.webp',
    frase:'Pomodoro giallo del Monte Somma, bufala e cornicione ripieno.',
    ing:[['Cornicione ripieno','di ricotta'],['Pomodoro giallo','del Monte Somma'],['Bufala campana','D.O.P.'],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'friarielli', nome:"Friariell' e Sasicc'", cat:'Classiche napoletane', prezzo:10, img:'assets/img/pizze/friarielli.webp',
    frase:'Il classico napoletano: friarielli saltati e salsiccia fresca.',
    ing:[['Fior di latte','100% latte italiano'],['Friarielli','saltati con aglio e peperoncino'],['Salsiccia fresca',''],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'bellezze', nome:'Le Bellezze del Sud', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/bellezze.webp',
    frase:'Tonno lavorato a mano, pomodorino semisecco, pistacchio e burrata.',
    ing:[['Fior di latte','100% latte italiano'],['Tonno','"Delfino Battista"'],['Pomodorino','semisecco'],['Pesto di pistacchi','dopo cottura'],['Burrata','dopo cottura']] },
  { id:'scugnizzo', nome:'La Scugnizzo', cat:'Eccellenze napoletane', prezzo:13, img:'assets/img/pizze/scugnizzo.webp',
    frase:'Metà rossa e metà gialla, con il cornicione ripieno di salsiccia.',
    ing:[['Cornicione ripieno','di salsiccia'],['Pomodoro','"Oro del Vesuvio" (metà)'],['Pomodoro giallo','del Monte Somma (metà)'],['Pesto di basilico','dopo cottura'],['Tarallo napoletano','sbriciolato'],['Pepe','']] },
  { id:'pulcinella', nome:'La Pulcinella', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/pulcinella.webp',
    frase:'Bianca, con cicoli napoletani e ricotta di bufala. Napoli in purezza.',
    ing:[['Fior di latte','100% latte italiano'],['Cicoli napoletani','Salumificio Barbato'],['Provola fresca','di Agerola'],['Ricotta di bufala',''],['Basilico',''],['Pepe',''],['Olio EVO','"Nino Centonze"']] },
  { id:'crocche', nome:'Crocchè', cat:'Eccellenze napoletane', prezzo:14, img:'assets/img/pizze/crocche.webp',
    frase:'Cremosa, filante e super golosa, con le crocchette di patate sopra.',
    ing:[['Panna',''],['Fiordilatte',''],['Prosciutto cotto',''],['Crocchette di patate',''],['Basilico fresco','']] },
  { id:'nuovagialla', nome:'Zuccosa', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/nuovagialla.webp',
    frase:'Base di zucca, gorgonzola, salame dolce napoletano e taralli sbriciolati.',
    ing:[['Base di zucca',''],['Gorgonzola',''],['Salame napoletano','dolce'],['Taralli napoletani','sbriciolati']] },
  { id:'margherita', nome:'Margherita', cat:'Classiche napoletane', prezzo:7, img:'assets/img/pizze/margherita.webp',
    frase:'La regina: pomodoro, fior di latte e basilico.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'ruota', nome:'Margherita a Ruota di Carro', cat:'Classiche napoletane', prezzo:8, img:'assets/img/pizze/ruota.webp',
    frase:'Più grande e tirata, con meno bordo: come da vera tradizione napoletana.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'verace', nome:'La Verace', cat:'Classiche napoletane', prezzo:8, img:'assets/img/pizze/verace.webp',
    frase:'Pomodoro e bufala campana messa a fine cottura.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Bufala campana','D.O.P., a fine cottura'],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'provola', nome:'Provola e Pepe', cat:'Classiche napoletane', prezzo:8, img:'assets/img/pizze/provola.webp',
    frase:'Provola di Agerola e una bella macinata di pepe.',
    ing:[['Pomodoro','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Provola fresca','di Agerola'],['Pepe',''],['Basilico',''],['Olio EVO','"Nino Centonze"']] },
  { id:'marinara', nome:'Marinara', cat:'Classiche napoletane', prezzo:6, img:'assets/img/pizze/marinara.webp',
    frase:'Pomodoro, aglio e origano: la più antica di tutte.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Aglio',''],['Origano','di Salina'],['Basilico fresco',''],['Olio EVO','"Nino Centonze"']] },
  { id:'montanare', nome:'Le Montanare', cat:'Fritti e antipasti', prezzo:7, img:'assets/img/pizze/montanare.webp',
    frase:'Pizzette fritte napoletane con pomodoro, Grana e basilico.',
    ing:[['Pizzette fritte',''],['Pomodoro','"Oro del Vesuvio"'],['Grana Padano',''],['Basilico','']] },
  { id:'crocchepiatto', nome:'Crocchè di patate', cat:'Fritti e antipasti', prezzo:7, img:'assets/img/pizze/crocchepiatto.webp',
    frase:'Le crocchette di patate napoletane, dorate e filanti.',
    ing:[['Crocchè di patate','fritte al momento']] },
  { id:'cuoppo', nome:'Cuoppo Napoletano', cat:'Fritti e antipasti', prezzo:8, img:'assets/img/pizze/cuoppo.webp',
    frase:'Il cartoccio di fritti della tradizione napoletana.',
    ing:[['Fritti misti','della tradizione']] },
  { id:'frittmista', nome:'Frittura mista di pesce', cat:'Fritti e antipasti', prezzo:17, img:'assets/img/pizze/frittmista.webp',
    frase:'Calamari, anelli e gamberetti, con limone.',
    ing:[['Calamari',''],['Anelli',''],['Gamberetti',''],['Limone','']] },
  { id:'frittgolfo', nome:'Frittura del Golfo', cat:'Fritti e antipasti', prezzo:20, img:'assets/img/pizze/frittgolfo.webp',
    frase:'La frittura ricca: con scampo e gamberone.',
    ing:[['Calamari',''],['Anelli',''],['Gamberetti',''],['Scampo',''],['Gamberone',''],['Limone','']] },
  { id:'cazzilli', nome:'Piatto Cazzilli alla Giovanni', cat:'Fritti e antipasti', prezzo:7, img:'assets/img/pizze/cazzilli.webp',
    frase:'Pomodoro, aglio, origano e salamino piccante.',
    ing:[['Pomodoro','"Oro del Vesuvio"'],['Aglio',''],['Origano','di Salina'],['Salamino piccante',''],['Olio EVO','"Nino Centonze"']] }
];

/* ---------- Altre pizze del menu (27/10/2026) ----------
   Le 10 ricreate a settembre + 41 nuove generate con Higgsfield dal testo del menu ufficiale. */
/* 02/11/2026: foto vere 'nuove pizze 3' (Verace, Margherita Gold, Calzone Vesuvio, Cazzilli + 5 fritti nuovi), Zuccosa rinominata, foto calzone spostata su Calzone Napoli.
   01/11/2026: tolte Los Angeles e Saporita (porchetta) su richiesta del cliente.
   01/11/2026: 17 immagini sostituite con le foto vere di Lello (cartella "nuove pizze 2", vedi _mappa-pizze.md) */
window.LELLO_PIZZE = window.LELLO_PIZZE.concat([
  { id:'costiera', nome:'La Costiera', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/costiera.webp',
    frase:'Salsiccia, Piennolo e scaglie di provolone del Monaco.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Salsiccia fresca',''],['Pomodoro rosso','del Piennolo D.O.P.'],['Provolone del Monaco','D.O.P., a scaglie'],['Olio EVO','"Nino Centonze"']] },
  { id:'quattropomodori', nome:'Ai Quattro Pomodori', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/quattropomodori.webp',
    frase:'Quattro pomodori campani, quattro sapori in un solo disco.',
    ing:[['Fior di latte','100% latte italiano'],['Pomodoro pelato','"Oro del Vesuvio"'],['Pomodoro rosso','del Piennolo D.O.P.'],['Pomodoro giallo','del Monte Somma D.O.P.'],['Pomodoro secco','semi dry'],['Olio EVO','"Nino Centonze"'],['Basilico fresco','']] },
  { id:'rock', nome:'La Rock', cat:'Eccellenze napoletane', prezzo:13, img:'assets/img/pizze/rock.webp',
    frase:'Divisa in quattro: gli ingredienti li sceglie Lello, al momento.',
    ing:[['Spicchio 1','scelto da Lello'],['Spicchio 2','scelto da Lello'],['Spicchio 3','scelto da Lello'],['Spicchio 4','scelto da Lello'],['Ingredienti eccellenti','sempre diversi']] },
  { id:'scudetto', nome:'Lo Scudetto', cat:'Eccellenze napoletane', prezzo:10, img:'assets/img/pizze/scudetto.webp',
    frase:'Cornicione ripieno di ricotta e il tricolore sopra.',
    ing:[['Fior di latte','100% latte italiano'],['Cornicione ripieno','di ricotta'],['Pomodoro a freddo','"Oro del Vesuvio"'],['Pesto di basilico',''],['Olio EVO','"Nino Centonze"'],['Basilico fresco','']] },
  { id:'gioia', nome:'La Gioia', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/gioia.webp',
    frase:'Colori del Vesuvio e una burrata al centro. Fresca, allegra, estiva.',
    ing:[['Fior di latte','100% latte italiano'],['Pomodorino giallo','del Vesuvio'],['Pomodoro a freddo','"Oro del Vesuvio"'],['Pesto di basilico',''],['Burrata','di Andria']] },
  { id:'giovipiz', nome:'La Giovi Piz', cat:'Eccellenze napoletane', prezzo:10, img:'assets/img/pizze/giovipiz.webp',
    frase:'Base bianca, provola e salamino piccante. Semplice e decisa.',
    ing:[['Base bianca',''],['Fior di latte','100% latte italiano'],['Provola fresca','di Agerola'],['Salamino piccante',''],['Pepe',''],['Basilico fresco','']] },
  { id:'napule', nome:'Napulè', cat:'Eccellenze napoletane', prezzo:12, img:'assets/img/pizze/napule.webp',
    frase:'Tonno a tranci e pistacchio: il mare che incontra la terra.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Pomodorini','semi dry'],['Tonno','a tranci'],['Pesto di pistacchi','di Bronte'],['Basilico',''],['Origano',''],['Aglio','']] },
  { id:'calzonenapoli', nome:'Calzone Napoli', cat:'Calzoni', prezzo:10, forma:'calzone', img:'assets/img/pizze/calzonenapoli.webp',
    frase:'Al forno, ripieno come una volta.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Prosciutto',''],['Salame Napoli','di Barbato'],['Ricotta fresca',''],['Provola fresca','di Agerola'],['Pepe','']] },
  { id:'calzonefritto', nome:'Calzone Fritto', cat:'Calzoni', prezzo:10, forma:'calzone', img:'assets/img/pizze/calzonefritto.webp',
    frase:'Il Napoli, ma fritto. Dorato fuori, filante dentro.',
    ing:[['Pomodoro pelato','"Oro del Vesuvio"'],['Fior di latte','100% latte italiano'],['Prosciutto',''],['Salame Napoli','di Barbato'],['Ricotta fresca',''],['Provola fresca','di Agerola'],['Fritto','al momento']] },
  { id:'calzoneterry', nome:'Calzone Terry', cat:'Calzoni', prezzo:10, forma:'calzone', img:'assets/img/pizze/calzoneterry.webp',
    frase:'Scarola, capperi di Salina, olive e bufala. Al forno o fritto.',
    ing:[['Fior di latte','100% latte italiano'],['Scarola saltata','con aglio'],['Capperi','di Salina'],['Olive taggiasche',''],['Bufala campana','D.O.P.']] },
  {"id": "eccellenza", "nome": "Eccellenza", "cat": "Eccellenze napoletane", "prezzo": 12, "img": 'assets/img/pizze/eccellenza.webp', "frase": "Melanzane a funghetto, pomodorino giallo e provolone del Monaco.", "ing": [["Pomodoro \"Oro del Vesuvio\"", ""], ["Fior di latte", ""], ["Melanzane fritte \"a funghetto\"", ""], ["Pomodorino giallo", ""], ["Provolone del Monaco D", ""], ["O", ""], ["P", ""], ["Olio EVO", ""]]},
  {"id": "arcobaleno", "nome": "Arcobaleno", "cat": "Eccellenze napoletane", "prezzo": 12, "img": 'assets/img/pizze/arcobaleno.webp', "frase": "Peperoni, melanzane, olive e una burrata intera al centro.", "ing": [["Fior di latte", ""], ["Peperoni al forno", ""], ["Melanzane fritte \"a funghetto\"", ""], ["Olive taggiasche", ""], ["Burrata", ""]]},
  {"id": "nonnorafele", "nome": "Nonno Rafele", "cat": "Eccellenze napoletane", "prezzo": 10, "img": 'assets/img/pizze/nonnorafele.webp', "frase": "Scarola saltata con capperi e olive, come la faceva il nonno.", "ing": [["Pomodoro \"Oro del Vesuvio\"", ""], ["Fior di latte", ""], ["Scarola saltata con aglio e capperi di Salina", ""], ["Olive taggiasche", ""], ["Olio EVO", ""]]},
  {"id": "reginasofia", "nome": "Regina Sofia", "cat": "Eccellenze napoletane", "prezzo": 12, "img": 'assets/img/pizze/reginasofia.webp', "frase": "Pomodorino giallo, provola, olive e scaglie di Grana.", "ing": [["Fior di latte", ""], ["Pomodorino giallo \"Oro del Vesuvio\"", ""], ["Provola di Agerola", ""], ["Olive taggiasche", ""], ["Scaglie di Grana D", ""], ["O", ""], ["P", ""], ["Basilico", ""]]},
  {"id": "mergellina", "nome": "Mergellina", "cat": "Eccellenze napoletane", "prezzo": 12, "img": 'assets/img/pizze/mergellina.webp', "frase": "Datterini, provola di Agerola e bufala campana.", "ing": [["Fior di latte", ""], ["Pomodorini datterino", ""], ["Provola di Agerola", ""], ["Bufala campana D", ""], ["O", ""], ["P", ""], ["Basilico", ""], ["Olio EVO", ""]]},
  {"id": "maruzzella", "nome": "Maruzzella", "cat": "Eccellenze napoletane", "prezzo": 10, "img": 'assets/img/pizze/maruzzella.webp', "frase": "Olive taggiasche e alici di Cetara: il mare di Napoli.", "ing": [["Pomodoro \"Oro del Vesuvio\"", ""], ["Fior di latte", ""], ["Olive taggiasche", ""], ["Alici di Cetara \"Delfino Battista\"", ""], ["Basilico", ""]]},
  {"id": "margheritagold", "nome": "Margherita Gold", "cat": "Eccellenze napoletane", "prezzo": 8, "img": 'assets/img/pizze/margheritagold.webp', "frase": "La margherita con il pomodoro giallo del Monte Somma.", "ing": [["Passata di pomodoro giallo del Monte Somma", ""], ["Fior di latte", ""], ["Basilico", ""], ["Olio EVO", ""]]},
  {"id": "tarantella", "nome": "Tarantella", "cat": "Eccellenze napoletane", "prezzo": 8, "img": 'assets/img/pizze/tarantella.webp', "frase": "Metà rossa e metà gialla: due pomodori, una sola pizza.", "ing": [["Metà pomodoro \"Oro del Vesuvio\"", ""], ["Metà pomodoro giallo del Monte Somma", ""], ["Fior di latte", ""], ["Basilico", ""]]},
  {"id": "calzonevesuvio", "nome": "Calzone Vesuvio", "cat": "Calzoni", "prezzo": 10, "img": 'assets/img/pizze/calzonevesuvio.webp', "frase": "Ricotta, cicoli e provola: il calzone che scotta.", "ing": [["Pomodoro \"Oro del Vesuvio\"", ""], ["Ricotta fresca", ""], ["Cicoli \"Barbato Napoli\"", ""], ["Pepe", ""], ["Provola di Agerola", ""]], "forma": "calzone"},
  {"id": "s-marinara", "nome": "Marinara", "cat": "Pizze sottili", "prezzo": 5, "img": 'assets/img/pizze/s-marinara.webp', "frase": "Sottile e croccante: pomodoro, aglio e origano.", "ing": [["Pomodoro", ""], ["Aglio e origano", ""]]},
  {"id": "s-margherita", "nome": "Margherita", "cat": "Pizze sottili", "prezzo": 6, "img": 'assets/img/pizze/s-margherita.webp', "frase": "La sottile più semplice: pomodoro e mozzarella.", "ing": [["Pomodoro", ""], ["Mozzarella", ""]]},
  {"id": "s-diavola", "nome": "Diavola", "cat": "Pizze sottili", "prezzo": 7, "img": 'assets/img/pizze/s-diavola.webp', "frase": "Sottile e croccante: salamino piccante.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Salamino piccante", ""]]},
  {"id": "s-romana", "nome": "Romana", "cat": "Pizze sottili", "prezzo": 8, "img": 'assets/img/pizze/s-romana.webp', "frase": "Sottile e croccante: capperi e acciughe.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Capperi e acciughe", ""]]},
  {"id": "s-giusy", "nome": "Giusy", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-giusy.webp', "frase": "Sottile e croccante: pomodorini, bufala, rucola.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Pomodorini", ""], ["Bufala", ""], ["Rucola", ""]]},
  {"id": "s-golosa", "nome": "Golosa", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-golosa.webp', "frase": "Sottile e croccante: provola, pancetta.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Provola", ""], ["Pancetta", ""]]},
  {"id": "s-montanara", "nome": "Montanara", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-montanara.webp', "frase": "Sottile e croccante: porcini, asiago, salamino.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Porcini", ""], ["Asiago", ""], ["Salamino", ""]]},
  {"id": "s-calzone", "nome": "Calzone", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-calzone.webp', "frase": "Sottile e croccante: prosciutto, funghi, carciofi.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Prosciutto", ""], ["Funghi", ""], ["Carciofi", ""]], "forma": "calzone"},
  {"id": "s-tonnocipolla", "nome": "Tonno e Cipolla di Tropea", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-tonnocipolla.webp', "frase": "Sottile e croccante: tonno, cipolla.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Tonno", ""], ["Cipolla", ""]]},
  {"id": "s-verdure", "nome": "Verdure", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-verdure.webp', "frase": "Sottile e croccante: melanzane, zucchine, cipolla, asparagi, radicchio, peperoni.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Melanzane", ""], ["Zucchine", ""], ["Cipolla", ""], ["Asparagi", ""], ["Radicchio", ""], ["Peperoni", ""]]},
  {"id": "s-quattroformaggi", "nome": "Quattro Formaggi", "cat": "Pizze sottili", "prezzo": 9, "img": 'assets/img/pizze/s-quattroformaggi.webp', "frase": "Sottile e croccante: verde, asiago, grana, provola.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Verde", ""], ["Asiago", ""], ["Grana", ""], ["Provola", ""]]},
  {"id": "s-capricciosa", "nome": "Capricciosa", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-capricciosa.webp', "frase": "Sottile e croccante: prosciutto, funghi, carciofi, salamino.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Prosciutto", ""], ["Funghi", ""], ["Carciofi", ""], ["Salamino", ""]]},
  {"id": "s-tirolese", "nome": "Tirolese", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-tirolese.webp', "frase": "Sottile e croccante: speck, panna, funghi porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Speck", ""], ["Panna", ""], ["Funghi porcini", ""]]},
  {"id": "s-vegetariana", "nome": "Vegetariana", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-vegetariana.webp', "frase": "Sottile e croccante: melanzane, zucchine, funghi porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Melanzane", ""], ["Zucchine", ""], ["Funghi porcini", ""]]},
  {"id": "s-maremonti", "nome": "Mare e Monti", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-maremonti.webp', "frase": "Sottile e croccante: frutti di mare, funghi porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Frutti di mare", ""], ["Funghi porcini", ""]]},
  {"id": "s-lello", "nome": "Lello", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-lello.webp', "frase": "Sottile e croccante: prosciutto, funghi, carciofi, peperoni, wurstel, salamino, asparagi.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Prosciutto", ""], ["Funghi", ""], ["Carciofi", ""], ["Peperoni", ""], ["Wurstel", ""], ["Salamino", ""], ["Asparagi", ""]]},
  {"id": "s-fornaci", "nome": "Fornaci", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-fornaci.webp', "frase": "Sottile e croccante: radicchio, salsiccia, pancetta.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Radicchio", ""], ["Salsiccia", ""], ["Pancetta", ""]]},
  {"id": "s-dipinta", "nome": "Dipinta", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-dipinta.webp', "frase": "Sottile e croccante: gamberetti in salsa rosa, rucola.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Gamberetti in salsa rosa", ""], ["Rucola", ""]]},
  {"id": "s-lilly", "nome": "Lilly", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-lilly.webp', "frase": "Sottile e croccante: friarielli, zucchine, melanzane, radicchio.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Friarielli", ""], ["Zucchine", ""], ["Melanzane", ""], ["Radicchio", ""]]},
  {"id": "s-burratacrudo", "nome": "Burrata e Crudo", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-burratacrudo.webp', "frase": "Sottile e croccante: burrata, crudo.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Burrata", ""], ["Crudo", ""]]},
  {"id": "s-burratapomodorini", "nome": "Burrata, Pomodorini e Rucola", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-burratapomodorini.webp', "frase": "Sottile e croccante: burrata, pomodorini, rucola.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Burrata", ""], ["Pomodorini", ""], ["Rucola", ""]]},
  {"id": "s-nostromo", "nome": "Nostromo", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-nostromo.webp', "frase": "Sottile e croccante: tonno, cipolla, acciughe, olive taggiasche, pomodorini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Tonno", ""], ["Cipolla", ""], ["Acciughe", ""], ["Olive taggiasche", ""], ["Pomodorini", ""]]},
  {"id": "s-sanvalentino", "nome": "San Valentino", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-sanvalentino.webp', "frase": "Sottile e croccante: bufala, pomodorini, porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Bufala", ""], ["Pomodorini", ""], ["Porcini", ""]]},
  {"id": "s-fashion", "nome": "Fashion", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-fashion.webp', "frase": "Sottile e croccante: bufala, prosciutto cotto, porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Bufala", ""], ["Prosciutto cotto", ""], ["Porcini", ""]]},
  {"id": "s-ischia", "nome": "Ischia (bianca)", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-ischia.webp', "frase": "Sottile e croccante: pomodorini, bufala, olive taggiasche, origano.", "ing": [["Mozzarella", ""], ["Pomodorini", ""], ["Bufala", ""], ["Olive taggiasche", ""], ["Origano", ""]]},
  {"id": "s-osarracino", "nome": "O' Sarracino", "cat": "Pizze sottili", "prezzo": 10, "img": 'assets/img/pizze/s-osarracino.webp', "frase": "Sottile e croccante: capperi, pomodorini, acciughe, olive taggiasche, origano.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Capperi", ""], ["Pomodorini", ""], ["Acciughe", ""], ["Olive taggiasche", ""], ["Origano", ""]]},
  {"id": "s-sostanziosa", "nome": "Sostanziosa (bianca)", "cat": "Pizze sottili", "prezzo": 12, "img": 'assets/img/pizze/s-sostanziosa.webp', "frase": "Sottile e croccante: funghi porcini, burrata, crudo.", "ing": [["Mozzarella", ""], ["Funghi porcini", ""], ["Burrata", ""], ["Crudo", ""]]},
  {"id": "s-burrataspeck", "nome": "Burrata, Speck e Porcini", "cat": "Pizze sottili", "prezzo": 12, "img": 'assets/img/pizze/s-burrataspeck.webp', "frase": "Sottile e croccante: burrata, speck, porcini.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Burrata", ""], ["Speck", ""], ["Porcini", ""]]},
  {"id": "s-fruttidimare", "nome": "Frutti di Mare", "cat": "Pizze sottili", "prezzo": 12, "img": 'assets/img/pizze/s-fruttidimare.webp', "frase": "Sottile e croccante: frutti di mare, cozze.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Frutti di mare", ""], ["Cozze", ""]]},
  {"id": "s-amalfi", "nome": "Amalfi", "cat": "Pizze sottili", "prezzo": 15, "img": 'assets/img/pizze/s-amalfi.webp', "frase": "Sottile e croccante: seppie, polipi, gamberetti, gamberone, scampo, capesante.", "ing": [["Pomodoro", ""], ["Mozzarella", ""], ["Seppie", ""], ["Polipi", ""], ["Gamberetti", ""], ["Gamberone", ""], ["Scampo", ""], ["Capesante", ""]]}
]);
/* ordine della ruota: come il menu (classiche, eccellenze, calzoni, sottili, altro) */
(function(){
  var ord={'Classiche napoletane':0,'Eccellenze napoletane':1,'Calzoni':2,'Pizze sottili':3};
  window.LELLO_PIZZE=window.LELLO_PIZZE.map(function(p,i){ return [p,i]; }).sort(function(a,b){
    var x=(a[0].cat in ord)?ord[a[0].cat]:9, y=(b[0].cat in ord)?ord[b[0].cat]:9; return x-y || a[1]-b[1];
  }).map(function(x){ return x[0]; });
})();

/* ---------- Menu completo, nello stile del menu ufficiale ----------
   Ogni sezione: t1 (parola sottile) + t2 (parola in grassetto), col = colore fascia, ink = colore nomi.
   Voce: [nome, prezzo, ingredienti/formato, id pizza della ruota]. Prezzo: numero oppure testo.
   Voce ['§','Titoletto'] = sottotitolo dentro la sezione. */
/* 03/11/2026: prodotti surgelati (richiesta di Lello). Simbolo fiocco di neve accanto al nome
   nel menu del sito, nel menu stampato, nel PDF e nella scheda della ruota.
   Per aggiungere o togliere un prodotto basta modificare questo elenco (nome esatto come nel menu). */
window.LELLO_FRZ = '<svg class="frz" viewBox="0 0 24 24" role="img" aria-label="Prodotto surgelato"><title>Prodotto surgelato</title><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2M4.4 10.2l2.6-1.6-.1-3M19.6 13.8L17 15.4l.1 3M4.4 13.8L7 15.4l-.1 3M19.6 10.2L17 8.6l.1-3"/></svg>';
window.LELLO_SURGELATI = ['Cuoppo Napoletano','Crocchè di patate','Frittatine di pasta (4 pz)','Olive ascolane (10 pz)','Mozzarelline (10 pz)',
  'Alghette di mare (10 pz)','Frittura mista di pesce','Frittura del Golfo','Capesante gratin (4 pz)'];
window.lelloSurg = function(nome){ return window.LELLO_SURGELATI.indexOf(nome)>-1 ? ' '+window.LELLO_FRZ : ''; };

window.LELLO_MENU = [
  { id:'classiche', titolo:'Classiche napoletane', t1:'Classiche', t2:'Napoletane', col:'#B48E76', ink:'#8A6750',
    pill:'<b>Su tutte le pizze</b> la bufala la mettiamo a fine cottura. <b>Tutte le pizze Napoli</b> si possono richiedere con il <b>cornicione ripieno</b> (+2,50 €) di: ricotta fresca, provola affumicata, fior di latte 100% latte italiano, friarielli saltati, scarola saltata, cicoli.', voci:[
    ['Margherita',7,'Pomodoro pelato "Oro del Vesuvio", fior di latte 100% latte italiano, basilico fresco, olio EVO "Nino Centonze"','margherita'],
    ['Marinara',6,'Pomodoro pelato "Oro del Vesuvio", aglio, origano di Salina, basilico fresco, olio EVO','marinara'],
    ['La Verace',8,'Pomodoro pelato "Oro del Vesuvio", bufala campana D.O.P., basilico fresco, olio EVO','verace'],
    ['Super Verace',10,'Pomodoro pelato, bufala campana D.O.P., basilico, cornicione ripieno di ricotta fresca, olio EVO','superverace'],
    ["Friariell' e Sasicc'",10,'Fior di latte, friarielli saltati con aglio e peperoncino, salsiccia fresca, basilico, olio EVO','friarielli'],
    ['Provola e Pepe',8,'Pomodoro "Oro del Vesuvio", fior di latte, provola fresca di Agerola, pepe, basilico, olio EVO','provola'],
    ['Margherita a Ruota di Carro',8,'Più grande e tirata, con meno bordo: come da vera tradizione napoletana','ruota']
  ]},
  { id:'eccellenze', titolo:'Eccellenze napoletane', t1:'Eccellenze', t2:'Napoletane', col:'#D07A30', ink:'#B35F17',
    nota:'Le pizze firmate da Lello, con prodotti D.O.P. campani.', voci:[
    ['La Costiera',12,'Pomodoro "Oro del Vesuvio", fior di latte, salsiccia fresca, pomodoro del Piennolo D.O.P., scaglie di provolone del Monaco D.O.P., olio EVO','costiera'],
    ['Eccellenza',12,'Pomodoro "Oro del Vesuvio", fior di latte, melanzane fritte "a funghetto", pomodorino giallo, provolone del Monaco D.O.P., olio EVO'],
    ['La B.P.M.',12,'Fior di latte. Dopo cottura: mortadella, pesto di pistacchi di Bronte, granella di pistacchi, zest di limone BIO, burrata di Andria','bpm'],
    ['Arcobaleno',12,'Fior di latte, peperoni al forno, melanzane fritte "a funghetto", olive taggiasche, burrata'],
    ['Ai Quattro Pomodori',12,'Fior di latte, pomodoro "Oro del Vesuvio", pomodoro del Piennolo D.O.P., pomodoro giallo del Monte Somma D.O.P., pomodoro semi dry, basilico','quattropomodori'],
    ['Nonno Rafele',10,'Pomodoro "Oro del Vesuvio", fior di latte, scarola saltata con aglio e capperi di Salina, olive taggiasche, olio EVO'],
    ['La Rock',13,'Pizza divisa in 4 parti con ingredienti eccellenti scelti al momento da Lello','rock'],
    ['La Pulcinella',12,'Fior di latte, cicoli napoletani Barbato, provola di Agerola, ricotta di bufala, basilico, pepe, olio EVO','pulcinella'],
    ['La Totò',12,'Pomodoro "Oro del Vesuvio", fior di latte, friarielli, salame napoletano Barbato, ricotta di bufala, basilico, pepe','toto'],
    ['Le Bellezze del Sud',12,'Fior di latte, tonno lavorato a mano "Delfino Battista", pomodorino semisecco. Dopo cottura: pesto di pistacchi di Bronte, burrata','bellezze'],
    ['Posillipo',12,'Fior di latte, pomodorino datterino, rucola selvatica, burrata di Andria, olio EVO','posillipo'],
    ['San Gennaro',12,'Fior di latte, salame napoletano dolce, ricotta di bufala, tarallo napoletano sbriciolato, pesto di pistacchi di Bronte','sangennaro'],
    ['Regina Sofia',12,'Fior di latte, pomodorino giallo "Oro del Vesuvio", provola di Agerola, olive taggiasche, scaglie di Grana D.O.P., basilico'],
    ['Lo Scudetto',10,'Fior di latte, cornicione ripieno di ricotta, pomodoro "Oro del Vesuvio" a freddo, pesto di basilico, basilico','scudetto'],
    ['La Gioia',12,'Fior di latte, pomodorino giallo del Vesuvio, pomodoro "Oro del Vesuvio" a freddo, pesto di basilico, burrata di Andria','gioia'],
    ['La Giovi Piz',10,'Base bianca, fior di latte, provola di Agerola, salamino piccante, pepe, basilico','giovipiz'],
    ['Napulè',12,'Pomodoro "Oro del Vesuvio", pomodorini semi dry, tonno a tranci, pesto di pistacchi di Bronte, basilico, origano, aglio','napule'],
    ['Mergellina',12,'Fior di latte, pomodorini datterino, provola di Agerola, bufala campana D.O.P., basilico, olio EVO'],
    ['Maruzzella',10,'Pomodoro "Oro del Vesuvio", fior di latte, olive taggiasche, alici di Cetara "Delfino Battista", basilico'],
    ['La Scugnizzo',13,'Cornicione ripieno di salsiccia, metà pomodoro "Oro del Vesuvio" e metà pomodoro giallo del Monte Somma. Dopo cottura: pesto di basilico, tarallo sbriciolato, pepe','scugnizzo'],
    ['Margherita Gold',8,'Passata di pomodoro giallo del Monte Somma, fior di latte, basilico, olio EVO'],
    ['Super Gold',11,'Cornicione ripieno di ricotta, pomodoro giallo del Monte Somma, bufala campana D.O.P., basilico','supergold'],
    ['Zuccosa',12,'Base di zucca, gorgonzola, salame dolce napoletano, taralli sbriciolati','nuovagialla'],
    ['Crocchè',14,'Panna, fior di latte, prosciutto cotto, crocchette di patate, basilico fresco','crocche'],
    ['Tarantella',8,'Metà pomodoro "Oro del Vesuvio", metà pomodoro giallo del Monte Somma, fior di latte, basilico']
  ]},
  { id:'calzoni', titolo:'Calzoni', t1:'I nostri', t2:'Calzoni', col:'#8C2B2B', ink:'#8C2B2B', nota:'Al forno oppure fritti.', voci:[
    ['Calzone Napoli',10,'Pomodoro "Oro del Vesuvio", fior di latte, prosciutto, salame Napoli di Barbato, ricotta fresca, pepe, provola di Agerola','calzonenapoli'],
    ['Calzone Fritto',10,'Il Calzone Napoli, fritto al momento','calzonefritto'],
    ['Calzone Vesuvio',10,'Pomodoro "Oro del Vesuvio", ricotta fresca, cicoli "Barbato Napoli", pepe, provola di Agerola'],
    ['Calzone Terry',10,'Fior di latte, scarola saltata con aglio e capperi di Salina, olive taggiasche, bufala campana D.O.P.','calzoneterry']
  ]},
  { id:'sottili', titolo:'Pizze sottili', t1:'Pizze', t2:'Sottili', col:'#3BAA47', ink:'#258A33',
    nota:'Tutte le tradizionali si possono fare con impasto Napoli (+1 €). Base senza glutine su richiesta (+3,50 €).', voci:[
    ['Marinara',5,'Pomodoro, aglio e origano'],['Margherita',6,'Pomodoro, mozzarella'],['Diavola',7,'Pomodoro, mozzarella, salamino piccante'],
    ['Romana',8,'Pomodoro, mozzarella, capperi e acciughe'],['Giusy',9,'Pomodoro, mozzarella, pomodorini, bufala, rucola'],['Golosa',9,'Pomodoro, mozzarella, provola, pancetta'],
    ['Montanara',9,'Pomodoro, mozzarella, porcini, asiago, salamino'],['Calzone',9,'Pomodoro, mozzarella, prosciutto, funghi, carciofi'],['Tonno e Cipolla di Tropea',9,'Pomodoro, mozzarella, tonno, cipolla'],
    ['Verdure',9,'Pomodoro, mozzarella, melanzane, zucchine, cipolla, asparagi, radicchio, peperoni'],['Quattro Formaggi',9,'Pomodoro, mozzarella, verde, asiago, grana, provola'],
    ['Capricciosa',10,'Pomodoro, mozzarella, prosciutto, funghi, carciofi, salamino'],
    ['Tirolese',10,'Pomodoro, mozzarella, speck, panna, funghi porcini'],
    ['Vegetariana',10,'Pomodoro, mozzarella, melanzane, zucchine, funghi porcini'],['Mare e Monti',10,'Pomodoro, mozzarella, frutti di mare, funghi porcini'],
    ['Lello',10,'Pomodoro, mozzarella, prosciutto, funghi, carciofi, peperoni, wurstel, salamino, asparagi'],['Fornaci',10,'Pomodoro, mozzarella, radicchio, salsiccia, pancetta'],
    ['Dipinta',10,'Pomodoro, mozzarella, gamberetti in salsa rosa, rucola'],['Lilly',10,'Pomodoro, mozzarella, friarielli, zucchine, melanzane, radicchio'],
    ['Burrata e Crudo',10,'Pomodoro, mozzarella, burrata, crudo'],['Burrata, Pomodorini e Rucola',10,'Pomodoro, mozzarella, burrata, pomodorini, rucola'],
    ['Nostromo',10,'Pomodoro, mozzarella, tonno, cipolla, acciughe, olive taggiasche, pomodorini'],['San Valentino',10,'Pomodoro, mozzarella, bufala, pomodorini, porcini'],
    ['Fashion',10,'Pomodoro, mozzarella, bufala, prosciutto cotto, porcini'],['Ischia (bianca)',10,'Mozzarella, pomodorini, bufala, olive taggiasche, origano'],
    ["O' Sarracino",10,'Pomodoro, mozzarella, capperi, pomodorini, acciughe, olive taggiasche, origano'],
    ['Sostanziosa (bianca)',12,'Mozzarella, funghi porcini, burrata, crudo'],['Burrata, Speck e Porcini',12,'Pomodoro, mozzarella, burrata, speck, porcini'],
    ['Frutti di Mare',12,'Pomodoro, mozzarella, frutti di mare, cozze'],['Amalfi',15,'Pomodoro, mozzarella, seppie, polipi, gamberetti, gamberone, scampo, capesante']
  ]},
  { id:'antipasti', titolo:'Antipasti e fritti', t1:'Antipasti', t2:'e Fritti', col:'#4F7FA0', ink:'#36688A',
    nota:'<span class="frz-leg">'+window.LELLO_FRZ+' Prodotto surgelato</span>', voci:[
    ['Le Montanare',7,'Pizzette fritte napoletane con pomodoro "Oro del Vesuvio", Grana Padano, basilico','montanare'],
    ['Cuoppo Napoletano',8,'Il cartoccio di fritti della tradizione','cuoppo'],
    ['Crocchè di patate',7,'','crocchepiatto'],['Frittatine di pasta (4 pz)',7,''],['Piatto Cazzilli alla Giovanni',7,'','cazzilli'],
    ['Olive ascolane (10 pz)',5,''],['Mozzarelline (10 pz)',5,''],['Alghette di mare (10 pz)',5,''],['Patate fritte',5,''],['Patate dippers',5,''],
    ['Frittura mista di pesce',17,'Calamari, anelli, gamberetti','frittmista'],['Frittura del Golfo',20,'Calamari, anelli, gamberetti, scampo, gamberone','frittgolfo'],
    ['Piatto crudo',14,'Burrata o bufala con focaccia al rosmarino'],['Insalata di mare',14,'Polipo, seppie, gamberetti'],
    ['Cocktail di gamberetti',14,''],['Capesante gratin (4 pz)',14,''],
    ['Scarole',5,''],['Friarielli',5,''],['Insalata mista',4,'']
  ]},
  { id:'insalatone', titolo:'Insalatone', t1:'Le nostre', t2:'Insalatone', col:'#8DBF43', ink:'#5E8F1F', voci:[
    ['Positano',12,'Misticanza, pomodorini, tonno, olive taggiasche, mozzarella di bufala'],
    ['Amalfitana',14,'Misticanza, rucola, gamberetti, pomodorini, polipo, seppie'],
    ['Agerolese',10,'Misticanza, tonno, peperoni al forno, scaglie di grana, olive taggiasche'],
    ['Furore',10,'Misticanza, carciofi, funghi, mais, pomodorini']
  ]},
  { id:'piccoli', titolo:'Per i piccoli', t1:'Per i', t2:'Piccoli', col:'#E07AA6', ink:'#C24F82', voci:[
    ['Cotoletta di pollo e patatine',6,''],['Wurstel di pollo e tacchino e patatine',6,''],['Hamburger di manzo e patatine',6,''],
    ['Pasta panna e prosciutto',6,''],['Pasta al pomodoro',6,''],['Hamburger e patate (per i grandi)',14,'Hamburger di scottona da 200 g e patate dippers']
  ]},
  { id:'birre', titolo:'Birre', t1:'Le nostre', t2:'Birre', col:'#D9BE6A', ink:'#94761C', fg:'#1d1a1b', voci:[
    ['§','Alla spina'],
    ['Bionda','3,50 · 5,00','30 cl · 50 cl'],['Rossa','4,50 · 5,50','33 cl · 50 cl'],['Bianca','4,00 · 5,50','25 cl · 50 cl'],
    ['§','In bottiglia'],
    ['Moretti',4.5,'66 cl'],['Weissbier',5.5,'50 cl'],['Radler','3,50 · 4,50','33 cl · 50 cl'],['Birra analcolica',3.5,'33 cl'],
    ['§','Artigianali "la Villana" · 50 cl'],
    ['Rude',6.5,'American Pale Ale · 5,2%'],['Dumper',6.5,'India Pale Ale · 6,8%'],['Cinque',6.5,'Kölsch Style · 4,8%'],
    ['Gatsby',6.5,'Extra Special Bitter · 5,1%'],['Peonia',6.5,'Blanche · 4,8%'],['Squillo',6.5,'Pils · 5,0%']
  ]},
  { id:'aperitivi', titolo:'Aperitivi', t1:'Gli', t2:'Aperitivi', col:'#C8479A', ink:'#B0307F', voci:[
    ['Spritz Aperol',4,''],['Spritz Campari',4,''],['Spritz Select',3.5,''],['Spritz liscio',3,''],
    ['Americano',6,''],['Gin Tonic',6,''],['Gingerino o Crodino',3,''],['Gingerino o Crodino con Prosecco',3.5,'']
  ]},
  { id:'bibite', titolo:'Bibite e caffè', t1:'Bibite', t2:'e Caffè', col:'#7F7F7F', ink:'#555555', voci:[
    ['Acqua gassata o naturale',3,'75 cl'],['Bibite in lattina',3,'33 cl'],['Coca Cola alla spina','3,00 · 4,00','piccola · media'],
    ['Amari vari',3.5,''],['Grappe varie',4.5,''],['Liquori della Costiera Amalfitana',3,''],['Sorbetto al limone analcolico',3.5,''],
    ['§','Caffetteria'],
    ['Caffè',1.5,''],['Orzo, macchiato o deca',2,''],['Caffè corretto',2.5,'']
  ]},
  { id:'vini', titolo:'Vini e dolci', t1:'Vini', t2:'e Dolci', col:'#5F5F5F', ink:'#444444', voci:[
    ['Vino frizzante alla spina','2,00 · 4,00 · 8,00','¼ l · ½ l · 1 l'],
    ['§','In bottiglia · bottiglia 75 cl · calice'],
    ['Soave Classico DOC','15,00 · 3,50',''],['Passerina','15,00 · 3,50',''],['Falanghina IGT','15,00 · 3,50',''],
    ['Valpolicella Classico Superiore','15,00 · 3,50',''],['Prosecco DOCG Valdobbiadene Brut','15,00 · 3,50',''],['Merlot','20,00 · 4,00',''],
    ['§','Dolci'],
    ['Dolci al carrello','5,00 · 6,00','chiedi al personale le proposte del giorno'],['Servizio torta',10,'']
  ]}
];
window.LELLO_EXTRA = ['Aggiunte da 1 a 3 €','Impasto Napoli +1 €','Cornicione ripieno +2,50 €','Base senza glutine +3,50 €','Pizza baby -0,50 €'];

/* collega automaticamente le voci del menu alle pizze della ruota con lo stesso nome */
(function(){
  var map={classiche:'Classiche napoletane',eccellenze:'Eccellenze napoletane',calzoni:'Calzoni',sottili:'Pizze sottili'};
  window.LELLO_MENU.forEach(function(g){
    var c=map[g.id]; if(!c) return;
    g.voci.forEach(function(v){
      if(v[0]==='§' || v[3]) return;
      window.LELLO_PIZZE.forEach(function(p){ if(!v[3] && p.cat===c && p.nome===v[0]) v[3]=p.id; });
    });
  });
})();

window.LELLO_IMG_V='20261105';
/* miniature locali per il menu e il PDF (assets/img/menu/<id>.webp) */
window.LELLO_PIZZE.forEach(function(p){
  p.surg=window.LELLO_SURGELATI.indexOf(p.nome)>-1;
  p.thumb='assets/img/menu/'+p.id+'.webp';
  /* versione leggera (420 px) per le pizze piccole della ruota; la grande (800 px) si carica solo quando apri la pizza */
  if(/^assets\/img\/pizze\/[^/]+\.webp$/.test(p.img)) p.sm=p.img.replace('assets/img/pizze/','assets/img/pizze/s/');
  /* numero di versione: quando si cambiano le foto delle pizze, aggiornare LELLO_IMG_V (es. data di oggi)
     cosi' anche chi ha gia' visitato il sito vede subito le foto nuove */
  var v='?v='+window.LELLO_IMG_V; p.img+=v; p.thumb+=v; if(p.sm) p.sm+=v;
});
