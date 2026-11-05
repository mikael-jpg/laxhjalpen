// Läxorna. Nya läxor läggs överst. child: "Klara", "Bella" eller "Båda".
// sections: extra rutor under "Viktigast" (steps = numrerad lista, rows = bra/dåligt, items = punkter)
window.LESSONS = [
{
  id: "transporter-i-europa",
  title: "Transporter i Europa – export & import",
  subject: "SO",
  child: "Klara",
  added: "2026-11-05",
  perRound: 15, // slumpar 15 av frågorna varje gång
  summary: "Länder köper och säljer varor till varandra – det kallas handel. Sverige har mycket skog och säljer (exporterar) papper och trä. Det är för kallt här för apelsiner, så vi köper (importerar) dem från Spanien. Varorna fraktas med lastbil, tåg, fartyg och flyg. Alla har fördelar och nackdelar, och de flesta transporter påverkar miljön och vår hälsa.",
  sections: [
    {title:"📥 Import – apelsinens resa från Spanien",
     text:"Import = Sverige KÖPER varor från ett annat land. Så här kommer apelsinerna hit:",
     steps:["I soliga Spanien skördas apelsinerna.","De lastas på en lastbil.","Lastbilen kör till en terminal där apelsinerna tvättas och sorteras.","Apelsinerna körs till en hamn i Tyskland. Fartyget åker till Malmö.","Från Malmö körs de till en terminal där de lastas om.","Sedan körs apelsinerna till butiken."]},
    {title:"📤 Export – papprets resa till Storbritannien",
     text:"Export = Sverige SÄLJER varor till ett annat land. Så här går det till med pappret:",
     steps:["I Sverige växer massor av granar. De lastas på lastbil.","Lastbilen kör till ett pappersbruk där man gör papper av granarna.","Pappret körs med lastbil till hamnen i Göteborg.","Pappret åker båt till Storbritannien.","I Storbritannien lastas pappret på en lastbil.","På tryckeriet trycker man brittiska tidningar (t.ex. Daily Mirror) på det svenska pappret."]},
    {title:"🚚🚆🚢✈️ Transportmedel – bra och dåligt",
     rows:[
      {name:"🚚 Lastbil",good:["Praktiskt och snabbt","Kan köra hela vägen fram dit varorna ska"],bad:["Släpper ut avgaser (koldioxid) som förändrar klimatet","Tar mycket plats – vägar och parkeringar","Det blir köer och trafikstockningar"]},
      {name:"🚆 Tåg",good:["Går snabbt","Inga köer","Sällan olyckor","Miljövänligt – de flesta tåg går på el och släpper inte ut avgaser"],bad:["Kan bara åka där det finns järnväg (varorna måste ofta lastas om)"]},
      {name:"🚢 Fartyg",good:["Kan frakta stora och tunga varor: olja, spannmål, järnmalm, bilar","Billigare än lastbil och flyg","Miljövänligare än lastbil och flyg"],bad:["Går långsamt","Kan bara åka på hav, floder och kanaler – varorna lastas om i hamnen"]},
      {name:"✈️ Flygplan",good:["Går fortast","Bra för färskvaror som blommor och grönsaker"],bad:["Dyrt","Släpper ut mycket växthusgaser – sämst för klimatet","Trångt i luften – kräver mycket planering"]}
     ]},
    {title:"🌍 Hur påverkar transporterna?",
     items:["Klimatet: avgaserna innehåller koldioxid, en växthusgas som gör jorden varmare.","Naturen: utsläppen ger svavel som skadar skogar och sjöar.","Hälsan: människor i städer med mycket trafik får lättare allergier och astma.","Marken: mycket av Europa har blivit vägar och parkeringsplatser.","Mest skada gör bensinbilar och flygplan.","Göteborg–Rom: flyg ca 579 kg koldioxid, gammal bil ca 340 kg, ny bil ca 242 kg, buss ca 114 kg, tåg 0 kg, cykel 0 kg."]},
    {title:"💡 Vad kan man göra?",
     items:["Cykla – cykelbanor byggs i många städer.","Åka tåg och buss tillsammans (kollektivtrafik) – politiker kan göra det billigare.","Elbilar ger inga avgaser – men måste laddas ofta.","Motorer som går på rapsolja, sol eller vind.","Välja mat från närmare håll – lunch med kött från Irland, ris från Kina och tomater från Belgien har åkt flera tusen mil!"]}
  ],
  keyPoints: [
    "EXPORT = ett land SÄLJER varor till ett annat land. (Ex = ut ur landet.)",
    "IMPORT = ett land KÖPER varor från ett annat land. (Im = in i landet.)",
    "HANDEL = när länder köper och säljer varor till varandra.",
    "Sverige exporterar papper och trävaror (vi har mycket skog) och importerar t.ex. apelsiner (för kallt här).",
    "Varor byter ofta transportmedel på vägen: lastbil → fartyg → lastbil. Det sker i hamnar och terminaler.",
    "Bäst för miljön: tåg och fartyg. Sämst: flyg och bensinbilar.",
    "Fartyg = stora, tunga varor. Flyg = snabba färskvaror. Lastbil = hela vägen fram."
  ],
  glossary: [
    {term:"Export", def:"När ett land säljer varor till ett annat land."},
    {term:"Import", def:"När ett land köper varor från ett annat land."},
    {term:"Handel", def:"När länder köper och säljer varor till varandra."},
    {term:"Transportmedel", def:"Det som används för att frakta varor eller människor, t.ex. bil, tåg, flygplan eller fartyg."},
    {term:"Terminal", def:"En plats där varor lastas om, sorteras eller byter transportmedel."},
    {term:"Hamn", def:"En plats vid kusten där fartyg lastas och lossas."},
    {term:"Färskvaror", def:"Varor som snabbt blir dåliga, t.ex. blommor, grönsaker och frukt."},
    {term:"Koldioxid", def:"En växthusgas från avgaser som gör att klimatet på jorden blir varmare."},
    {term:"Växthusgas", def:"Gas som stänger in värme runt jorden så att klimatet blir varmare."},
    {term:"Kollektivtrafik", def:"När många åker tillsammans, t.ex. i tåg eller buss."}
  ],
  questions: [
    // Export & import
    {q:"Vad kallas det när ett land SÄLJER varor till ett annat land?", options:["Import","Export","Transport","Terminal"], correct:1, explanation:"Export = sälja ut ur landet."},
    {q:"Vad kallas det när ett land KÖPER varor från ett annat land?", options:["Export","Handel med frakt","Import","Utsläpp"], correct:2, explanation:"Import = köpa in till landet."},
    {q:"Sverige säljer papper till Storbritannien. Är det export eller import för Sverige?", options:["Export","Import","Båda","Inget av dem"], correct:0, explanation:"Sverige säljer → pappret går UT ur landet → export."},
    {q:"Sverige köper apelsiner från Spanien. Är det export eller import för Sverige?", options:["Export","Import","Handel inom landet","Transport"], correct:1, explanation:"Sverige köper → apelsinerna kommer IN i landet → import."},
    {q:"För Spanien – är apelsinerna som säljs till Sverige export eller import?", options:["Import","Export","Ingetdera","Transport"], correct:1, explanation:"Spanien säljer apelsinerna → för Spanien är det export."},
    {q:"Varför exporterar Sverige papper och trävaror?", options:["Vi har så mycket skog","Det är för varmt här","Vi har många hamnar","Andra länder får inte göra papper"], correct:0, explanation:"Sverige har gott om skog och kan därför sälja papper och trävaror."},
    {q:"Varför importerar Sverige apelsiner?", options:["Apelsiner från Sverige är för dyra","Det är för kallt för apelsiner i Sverige","Spanien måste sälja till oss","Det är billigare att flyga dem"], correct:1, explanation:"Det är för kallt för apelsiner här, så vi köper dem från Spanien."},
    {q:"Vad kallas det när länder köper och säljer varor till varandra?", options:["Handel","Trafik","Transport","Terminal"], correct:0, explanation:"Handel = länder köper och säljer varor till varandra."},
    // Hur de gör
    {q:"Apelsinerna: vad händer FÖRST efter att de skördats i Spanien?", options:["De lastas på lastbil","De åker båt till Malmö","De säljs i butiken","De tvättas i Malmö"], correct:0, explanation:"Efter skörden lastas apelsinerna på en lastbil."},
    {q:"Vad händer med apelsinerna på terminalen i Spanien?", options:["De tvättas och sorteras","De pressas till juice","De fryses","De målas"], correct:0, explanation:"På terminalen tvättas och sorteras apelsinerna."},
    {q:"Var lastas apelsinerna på fartyg och vart åker fartyget?", options:["Tyskland → Malmö","Spanien → Göteborg","Malmö → Tyskland","Göteborg → Storbritannien"], correct:0, explanation:"Apelsinerna körs till en hamn i Tyskland, och fartyget åker till Malmö."},
    {q:"Vad gör man av granarna på pappersbruket?", options:["Papper","Möbler","Apelsinlådor","Bränsle"], correct:0, explanation:"På pappersbruket gör man papper av granarna."},
    {q:"Från vilken hamn åker det svenska pappret båt till Storbritannien?", options:["Malmö","Stockholm","Göteborg","Luleå"], correct:2, explanation:"Pappret körs med lastbil till hamnen i Göteborg."},
    {q:"Vad används det svenska pappret till i Storbritannien?", options:["Att trycka tidningar","Att bygga hus","Att elda med","Att slå in apelsiner"], correct:0, explanation:"I Storbritannien trycker man brittiska tidningar på det svenska pappret."},
    {q:"Varför byter varorna ofta transportmedel på vägen (t.ex. lastbil → båt → lastbil)?", options:["Fartyg kan inte köra på vägar och lastbilar kan inte åka över havet","Chauffören blir trött","Det är roligare så","Varorna blir fräschare"], correct:0, explanation:"Varje transportmedel kan bara åka på sitt sätt – därför lastas varorna om i hamnar och terminaler."},
    // Bra och dåligt
    {q:"Vad är en FÖRDEL med lastbil?", options:["Den kan köra hela vägen fram dit varorna ska","Den släpper inte ut avgaser","Det blir aldrig köer","Den kan frakta mest av allt"], correct:0, explanation:"Lastbilen är praktisk – den kan köra ända fram."},
    {q:"Vad är en NACKDEL med lastbil?", options:["Avgaser, tar mycket plats och ger köer","Den kan inte köra på vägar","Den är för långsam för allt","Den går bara på el"], correct:0, explanation:"Lastbilar släpper ut avgaser, tar mycket plats och skapar köer."},
    {q:"Varför är tåg bra för miljön?", options:["De flesta tåg går på el och släpper inte ut avgaser","Tåg går långsamt","Tåg drivs av bensin","Tåg åker bara på natten"], correct:0, explanation:"De flesta tåg drivs av el och släpper inte ut några avgaser."},
    {q:"Vilket transportmedel passar bäst för olja, spannmål och järnmalm?", options:["Flyg","Fartyg","Cykel","Lastbil"], correct:1, explanation:"Stora och tunga varor fraktas ofta med fartyg."},
    {q:"Vad är en fördel med fartyg jämfört med lastbil och flyg?", options:["Billigare och miljövänligare","Snabbast","Kan köra hela vägen fram","Inga hamnar behövs"], correct:0, explanation:"Fartyg är både billigare och mer miljövänligt än lastbil och flyg."},
    {q:"När är flyg bäst att använda?", options:["För färskvaror som blommor och grönsaker","För järnmalm","När det ska vara billigt","När man vill skona miljön"], correct:0, explanation:"Flyget går fort – bra för färskvaror som snabbt blir dåliga."},
    {q:"Vilka är flygets nackdelar?", options:["Dyrt och släpper ut mycket växthusgaser","Långsamt och billigt","Kan inte frakta något","Inga nackdelar"], correct:0, explanation:"Flyg är dyrt och släpper ut mycket växthusgaser."},
    // Påverkan
    {q:"Vilka transporter skadar miljön MEST?", options:["Bensinbilar och flygplan","Tåg och cykel","Fartyg och tåg","Elbilar"], correct:0, explanation:"Mest skada gör bensindrivna bilar och flygplan."},
    {q:"Vilken gas i avgaserna gör att klimatet blir varmare?", options:["Syre","Koldioxid","Kväve","Helium"], correct:1, explanation:"Koldioxid är en växthusgas som gör jorden varmare."},
    {q:"Utsläppen ger också svavel. Vad skadar det?", options:["Skogar och sjöar","Bara bilar","Ingenting","Månen"], correct:0, explanation:"Svavel från utsläppen påverkar skogar och sjöar."},
    {q:"Hur kan avgaser påverka människors hälsa?", options:["Man får lättare allergier och astma","Man blir starkare","Man sover bättre","Ingen påverkan"], correct:0, explanation:"Människor i städer med mycket trafik får lättare allergier som astma."},
    {q:"Resa Göteborg–Rom: vilket alternativ släpper ut MEST koldioxid?", options:["Flyg (ca 579 kg)","Gammal bil (ca 340 kg)","Buss (ca 114 kg)","Tåg (0 kg)"], correct:0, explanation:"Flyget: ca 579 kg – mest av alla."},
    {q:"Vad är bäst för miljön när man väljer mat?", options:["Mat från närmare håll","Mat som flugits långt","Mat från så många länder som möjligt","Det spelar ingen roll"], correct:0, explanation:"Mat från närmare håll har inte behövt transporteras lika långt."},
    {q:"Vad är problemet med elbilar enligt texten?", options:["De måste laddas ofta","De släpper ut mycket avgaser","De är för snabba","De kan inte köra i städer"], correct:0, explanation:"Elbilar ger inga avgaser men måste fortfarande laddas ofta."}
  ]
}
];
