class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
      if(typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      };
    }
  
    quickFacts() { 
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const rand = Math.floor(Math.random() * (substituteTeachers.length))
      return substituteTeachers[rand];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }
  
    get pickUpPolicy() {
      return this._pickUpPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);

/* If you would like to continue working on this project, we have listed some avenues to build on your progress.

Create a middle school class
Add more properties to each class (averageTestScores, schoolOverview, etc.)
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools. */
