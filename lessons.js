// Läxorna. Nya läxor läggs överst. child: "Klara", "Bella" eller "Båda".
window.LESSONS = [
{
  id: "transporter-i-europa",
  title: "Transporter i Europa",
  subject: "SO",
  child: "Klara",
  added: "2026-11-04",
  summary: "Europa har ett tätt nät av vägar, järnvägar, floder, kanaler och luftvägar, och avstånden är ganska korta. Länderna köper och säljer varor till varandra – Sverige säljer papper och trä och köper till exempel apelsiner från Spanien. Transporter skadar miljön, mest bensinbilar och flyg, så det spelar roll hur vi reser och vilken mat vi väljer.",
  keyPoints: [
    "Export = ett land säljer varor till ett annat land. Import = ett land köper varor från ett annat land.",
    "Handel = när länder köper och säljer varor till varandra.",
    "Sverige har mycket skog och säljer papper och trävaror. Det är för kallt för apelsiner här, så vi köper dem från Spanien.",
    "Apelsinernas väg: Spanien → lastbil → terminal (tvättas och sorteras) → hamn i Tyskland → fartyg till Malmö → terminal → butiken.",
    "Pappersexporten: granar i Sverige → pappersbruk → hamnen i Göteborg → båt till Storbritannien → tryckeri för brittiska tidningar.",
    "Lastbil: snabbt och kan köra ända fram, men avgaser, tar mycket plats och ger köer.",
    "Tåg: snabbt, inga köer, få olyckor och miljövänligt – drivs oftast av el.",
    "Fartyg: för stora och tunga varor (olja, spannmål, järnmalm, bilar). Billigare och miljövänligare än lastbil och flyg.",
    "Flyg: går fort, bra för färskvaror (blommor, grönsaker), men dyrt och släpper ut mycket växthusgaser.",
    "Bensinbilar och flygplan skadar miljön mest. Koldioxid är en växthusgas som gör klimatet varmare. Avgaser kan ge astma och allergier.",
    "Göteborg–Rom: flyg ca 579 kg koldioxid, gammal bensinbil ca 340 kg, ny bil ca 242 kg, buss ca 114 kg, tåg och cykel 0 kg.",
    "Lösningar: cykel, cykelbanor, billigare kollektivtrafik, elbilar (men de måste laddas ofta) och mat från närmare håll."
  ],
  glossary: [
    {term:"Export", def:"När ett land säljer varor till ett annat land."},
    {term:"Import", def:"När ett land köper varor från ett annat land."},
    {term:"Handel", def:"När länder köper och säljer varor till varandra."},
    {term:"Transportmedel", def:"Det som används för att frakta varor eller människor, t.ex. bil, tåg, flygplan eller fartyg."},
    {term:"Koldioxid", def:"En växthusgas från avgaser som gör att klimatet på jorden blir varmare."},
    {term:"Kollektivtrafik", def:"När många åker tillsammans, t.ex. i tåg eller buss."}
  ],
  questions: [
    {q:"Vad kallas det när ett land säljer varor till ett annat land?", options:["Import","Export","Transport","Handelsresa"], correct:1, explanation:"Export är när ett land säljer varor till ett annat land."},
    {q:"Vad betyder import?", options:["Att ett land köper varor från ett annat land","Att ett land säljer varor till ett annat land","Att man reser på semester","Att man bygger nya vägar"], correct:0, explanation:"Import är när ett land köper varor från ett annat land."},
    {q:"Vad kallas det när länder köper och säljer varor till varandra?", options:["Transportmedel","Trafik","Handel","Utsläpp"], correct:2, explanation:"Handel är när länder köper och säljer varor till varandra."},
    {q:"Varför köper Sverige apelsiner från Spanien?", options:["Spanska apelsiner är billigast i världen","Det är för kallt för apelsiner i Sverige","Sverige får inte odla apelsiner","Spanien har mest skog"], correct:1, explanation:"Det är för kallt för apelsiner i vårt land, så vi köper dem från Spanien."},
    {q:"Vad kan Sverige sälja till andra länder eftersom vi har så mycket skog?", options:["Apelsiner och frukt","Olja och bensin","Papper och trävaror","Bilar och båtar"], correct:2, explanation:"Sverige har gott om skog och kan sälja papper och trävaror."},
    {q:"Vad händer med apelsinerna på terminalen i Spanien?", options:["De tvättas och sorteras","De målas orange","De pressas till juice","De fryses ner"], correct:0, explanation:"Lastbilen kör till terminalen där apelsinerna tvättas och sorteras."},
    {q:"Till vilken svensk stad åker fartyget med apelsinerna från Tyskland?", options:["Göteborg","Stockholm","Luleå","Malmö"], correct:3, explanation:"Apelsinerna körs till en hamn i Tyskland och fartyget åker till Malmö."},
    {q:"Från vilken hamn skickas det svenska pappret till Storbritannien?", options:["Malmö","Göteborg","Helsingborg","Stockholm"], correct:1, explanation:"Pappret körs med lastbil till hamnen i Göteborg och åker båt till Storbritannien."},
    {q:"Vilket transportmedel används ofta för stora och tunga varor som olja, spannmål och järnmalm?", options:["Flygplan","Lastbil","Fartyg","Cykel"], correct:2, explanation:"Varor som är stora och tunga fraktas ofta med båt."},
    {q:"Varför är tåg miljövänligt?", options:["Det kör bara på natten","De flesta tåg drivs av el och släpper inte ut avgaser","Det går långsamt","Det drivs av rapsolja"], correct:1, explanation:"De flesta tåg drivs av el och släpper inte ut några avgaser."},
    {q:"När är flyg ett bra sätt att frakta varor?", options:["När varorna är stora och tunga","När det ska vara billigt","När man fraktar färskvaror som blommor eller grönsaker","När man vill skona miljön"], correct:2, explanation:"Flyget går fort och är bra för färskvaror som blommor och grönsaker."},
    {q:"Vilka transporter gör mest skada på miljön enligt texten?", options:["Tåg och cyklar","Bensindrivna bilar och flygplan","Fartyg och bussar","Elbilar och tåg"], correct:1, explanation:"Mest skada gör bensindrivna bilar och flygplan."},
    {q:"Vilken växthusgas i avgaserna gör att klimatet blir varmare?", options:["Syre","Koldioxid","Kväve","Vattenånga"], correct:1, explanation:"Utsläppen innehåller framför allt koldioxid, en växthusgas."},
    {q:"Resan Göteborg–Rom: vilket val släpper ut MEST koldioxid?", options:["Flyg (ca 579 kg)","Gammal bensinbil (ca 340 kg)","Buss (ca 114 kg)","Tåg (0 kg)"], correct:0, explanation:"Flyget släpper ut ca 579 kg koldioxid – mest av alla."},
    {q:"Hur kan avgaser påverka människors hälsa?", options:["Man blir längre","Man får lättare allergier som astma","Man ser bättre","De påverkar inte hälsan alls"], correct:1, explanation:"Människor som bor i städer med mycket trafik får lättare allergier som astma."},
    {q:"Vad är problemet med elbilar enligt texten?", options:["De släpper ut mycket avgaser","De är för snabba","De måste fortfarande laddas ofta","De kan bara köra i städer"], correct:2, explanation:"Elbilar ger inga avgaser, men problemet är att de måste laddas ofta."},
    {q:"Vad är bäst för miljön när man väljer mat?", options:["Mat som har flugits långt","Mat som kommer från närmare håll","Mat från så många länder som möjligt","Det spelar ingen roll"], correct:1, explanation:"För miljön är det bättre att välja mat som kommer från närmare håll."},
    {q:"Utsläppen från förbränning ger svavel. Vad påverkar det?", options:["Skogar och sjöar","Bara städer","Månen","Ingenting"], correct:0, explanation:"Utsläppen ger svavel som påverkar skogar och sjöar."}
  ]
}
];
