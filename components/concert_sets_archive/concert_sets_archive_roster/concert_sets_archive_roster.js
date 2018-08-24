class Roster {
  constructor(semester, members, abrv) {
    this.semester = semester;
    this.members = members;
    this.abrv = abrv;
  }
}

class Member {
  constructor(name, instrument, row) {
    this.name = name;
    this.instrument = instrument;
    this.row = row;
  }
}

function createSeating(roster) {
  clearSeating(roster.abrv);
  roster.members.forEach(member => {
    placeInSeat(member, roster.abrv)
  });
  arrangeSeats(roster.abrv);
}

function placeInSeat(member, abrv) {
  let row = document.getElementById(`${abrv}-concert-row-${member.row}`)
  let person = document.createElement('div');
  if (row == 1) {
    person.classList.add('conductor');
  } else {
    person.classList.add('person');
    person.setAttribute('data-toggle', 'tooltip');
    person.title = `${member.name} / ${member.instrument}`;
  }
  row.appendChild(person);
}

function arrangeSeats(abrv) {
  for (i = 2; i < 6; i++) {
    let row = document.getElementById(`${abrv}-concert-row-${i}`);
    let numPeople = row.children.length;
    let seatSpacingAngle = 180 / numPeople;
    if (numPeople % 2 == 1) {
      let startAngle = -(seatSpacingAngle * (Math.floor((numPeople) / 2)))
      for (j = 0; j < numPeople; j++) {
        let person = row.children[j];
        let seatAngle = startAngle + (seatSpacingAngle * j);
        seatAngle = seatAngle + 270;
        let padding = ((i - 1) * 4) / 2;
        person.style = `transform: rotate(${seatAngle}deg) translate(${padding}em) rotate(-${seatAngle}deg);`;
      }
    } else {
      let startAngle = -(seatSpacingAngle / 2 + seatSpacingAngle * (Math.floor((numPeople-1) / 2)));
      for (j = 0; j < numPeople; j++) {
        let person = row.children[j];
        let seatAngle = startAngle + (seatSpacingAngle*j);
        seatAngle = seatAngle + 270;
        let padding = ((i - 1) * 4) / 2;
        person.style = `transform: rotate(${seatAngle}deg) translate(${padding}em) rotate(-${seatAngle}deg);`;
      }
    }
  }
}

function clearSeating(abrv) {
  document.getElementById(`${abrv}-concert-row-1`).innerHTML = "";
  document.getElementById(`${abrv}-concert-row-2`).innerHTML = "";
  document.getElementById(`${abrv}-concert-row-3`).innerHTML = "";
  document.getElementById(`${abrv}-concert-row-4`).innerHTML = "";
  document.getElementById(`${abrv}-concert-row-5`).innerHTML = "";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})