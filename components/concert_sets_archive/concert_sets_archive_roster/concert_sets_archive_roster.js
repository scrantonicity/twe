class Roster {
  constructor(semester, members) {
    this.semester = semester;
    this.members = members;
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
  clearSeating();
  roster.members.forEach(member => {
    placeInSeat(member)
  });
  arrangeSeats();
}

function placeInSeat(member) {
  let row = document.getElementById(`concert-row-${member.row}`)
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

function arrangeSeats() {
  for (i = 2; i < 6; i++) {
    let row = document.getElementById(`concert-row-${i}`);
    let numPeople = row.children.length;
    let seatSpacingAngle = 180 / numPeople;
    if (numPeople % 2 == 1) {
      for (j = 0; j < numPeople; j++) {
        let person = row.children[j];
        let seatAngle = seatSpacingAngle * (Math.floor((j + 1) / 2));
        if (j % 2 == 1) {
          seatAngle = -1 * seatAngle;
        }
        seatAngle = seatAngle + 270;
        let padding = ((i - 1) * 4) / 2;
        person.style = `transform: rotate(${seatAngle}deg) translate(${padding}em) rotate(-${seatAngle}deg);`;
      }
    } else {
      for (j = 0; j < numPeople; j++) {
        let person = row.children[j];
        let seatAngle = seatSpacingAngle / 2 + seatSpacingAngle * (Math.floor(j / 2));
        if (j % 2 == 0) {
          seatAngle = -1 * seatAngle;
        }
        seatAngle = seatAngle + 270;
        let padding = ((i - 1) * 4) / 2;
        person.style = `transform: rotate(${seatAngle}deg) translate(${padding}em) rotate(-${seatAngle}deg);`;
      }
    }
  }
}

function clearSeating() {
  document.getElementById('concert-row-1').innerHTML = "";
  document.getElementById('concert-row-2').innerHTML = "";
  document.getElementById('concert-row-3').innerHTML = "";
  document.getElementById('concert-row-4').innerHTML = "";
  document.getElementById('concert-row-5').innerHTML = "";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})