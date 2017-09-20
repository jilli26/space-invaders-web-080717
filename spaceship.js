class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = this.setCrew(crew)
    this.phasers = 5
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crew.length > 0 ? false : true
    this.phasersCharge = 'uncharged'
  }

  setCrew(crew) {
    console.log(this)
    crew.forEach( crewMember => crewMember.currentShip = this)
    return crew
  }

}
