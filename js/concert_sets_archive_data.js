// Fall 2017
const EvanN = new Member('Evan Neely', 'Conductor', 1);
const KarinaC = new Member('Karina Chu', 'Flute', 2);
const DannyZ = new Member('Danny Zhu', 'Flute', 2);
const IsabelB = new Member('Isabel Basow', 'Oboe', 2);
const IanH = new Member('Ian Holst', 'Oboe', 2);
const DavidN = new Member('David Neiman', 'Oboe', 2);
const SarahB = new Member('Sarah Bender', 'Clarinet', 3);
const AmandaM = new Member('Amanda Monteavaro', 'Clarinet', 3);
const SarahP = new Member('Sarah Penfield', 'Clarinet', 3);
const TeddyW = new Member('Teddy Warner', 'Clarinet', 3);
const DerekY = new Member('Derek Yan', 'Bassoon', 3);
const SimoneS = new Member('Simone Stein', 'Tenor Saxaphone', 3);
const CaseyR = new Member('Casey Rodriguez', 'Tuba', 4);
const GabeW = new Member('Gabe Whitney', 'Tuba', 4);
const MichaelS = new Member('Michael Spoerl', 'Trombone', 4);
const DylanH = new Member('Dylan Hyun', 'Trombone', 4);
const DylanR = new Member('Dylan Roof', 'Trombone', 4);
const BrandynA = new Member('Brandyn Amado', 'Trombone', 4);
const ChrisC = new Member('Chris Cortez', 'Trombone', 4);
const BeckyJ = new Member('Becky Jesurum', 'Baritone', 4);
const KadeS = new Member('Kade Stewart', 'Baritone', 4);
const JeffKFrench = new Member('Jeff Kang', 'French Horn', 4);
const JordanS = new Member('Jordan Stapinski', 'Trumpet', 4);
const MaxK = new Member('Max Kornyev', 'Trumpet', 4);
const MadisonS = new Member('Madison Stiefield', 'Trumpet', 4);
const JonathanC = new Member('Jonathan Calvello', 'Trumpet', 4);
const BrandonJ = new Member('Brandon Jin', 'Percussion', 5);
const JacquelineL = new Member('Jacqueline Lewis', 'Percussion', 5);
const ElyceM = new Member('Elyce Milligan', 'Percussion', 5);
const JamesS = new Member('James Stumpf', 'Percussion', 5);
const JettV = new Member('Jett Vaultz', 'Percussion', 5);

const Fall17 = new Roster('Fall 2017', [EvanN,
DavidN,IanH,IsabelB,DannyZ,KarinaC,
SarahB,AmandaM,SarahP,TeddyW,DerekY,SimoneS,
JonathanC,MadisonS,MaxK,JordanS,JeffKFrench,KadeS,BeckyJ,ChrisC,BrandynA,DylanR,DylanH,MichaelS,GabeW,CaseyR,
BrandonJ,JacquelineL,ElyceM,JamesS,JettV], 'f17');

createSeating(Fall17);

// Spring 2018
const DallasL = new Member('Dallas Long', 'Conductor', 1);
const AnjaliB = new Member('Anjali Balamurgan', 'Clarinet', 2);
const RuiQ = new Member('Rui Qui Chen', 'Clarinet', 2);
const ZachK = new Member('Zach Kowalewski', 'Alto Saxaphone', 3);
const NicholasS = new Member('Nicholas Scherl', 'Alto Saxaphone', 3);
const RachelM = new Member('Rachel Motz', 'French Horn', 3);
const ScottA = new Member('Scott Alexander', 'Trombone', 4);
const EvanK = new Member('Evan Kareet', 'Baritone', 4);
const EvanS = new Member('Evan Schindewolf', 'Baritone', 4);
const JeffKTru = new Member('Jeff Kang', 'Trumpet', 4);
const YurongD = new Member('Yurong Diao', 'Percussion', 5);

const Spring18 = new Roster('Spring 2018', [DallasL,
AnjaliB,RuiQ,SarahB,DavidN,IsabelB,KarinaC,
AmandaM,SarahP,ZachK,NicholasS,RachelM,
MichaelS,DylanR,ScottA,DylanH,ChrisC,BeckyJ,EvanS,EvanK,CaseyR,JeffKTru,MaxK,MadisonS,JonathanC,
YurongD,BrandonJ,JacquelineL,JamesS,JettV], 's18')

createSeating(Spring18);