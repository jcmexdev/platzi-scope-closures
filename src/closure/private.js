const person = () => {
  var saveName = 'Name';
  return {
    getName: () => saveName,
    setName: name => {
      saveName = name;
    }
  };
};

newPerson = person();
console.log(newPerson.getName()); // Name

newPerson.setName('Jose');
console.log(newPerson.getName()); // Jose
