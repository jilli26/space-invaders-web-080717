class CrewMember {

  constructor(position, currentShip="Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive(){
    if (this.position !== "Pilot" || this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else {
      this.currentShip.warpDrive = 'engaged!'
    }
   }

   setsInvisibility(){
     if (this.position !== "Defender" || this.currentShip == "Looking for a Rig"){
       return "had no effect"
     }
     else {
       this.currentShip.cloaked = true
     }
   }
   chargePhasers(){
     if (this.position !== "Gunner" || this.currentShip == "Looking for a Rig"){
       return "had no effect"
     }
     else {
       this.currentShip.phasersCharge = 'charged!'
     }
   }



}
