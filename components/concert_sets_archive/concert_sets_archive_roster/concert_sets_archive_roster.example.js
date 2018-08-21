const DallasLong = new Member('Dallas Long', 'Conductor', 1);
const KarniaChiu = new Member('Karna Chiu', 'Flute', 2);
const Amanda = new Member('Amanda Monteavaro', 'Clarinet', 3);
const Rachel = new Member('Rachel Motz', 'French Horn', 3)
const BeckyJesurum = new Member('Becky Jesurum', 'Baritone', 4);
const DylanHyun = new Member('Dylan Hyun', 'Trombone', 4);
const MichaelSpo = new Member('Michael Spoerel', 'Trombone', 4)
const BrandonJin = new Member('Brandon Jin', 'Percussion', 5)

const Fall17 = new Roster('Fall 2017', [DallasLong, KarniaChiu, BeckyJesurum, DylanHyun, Amanda, Rachel, MichaelSpo, BrandonJin]);

createSeating(Fall17);