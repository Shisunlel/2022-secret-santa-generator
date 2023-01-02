export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}

export const matchPeople = people => {
  let secretSantaList = []
  let peopleList = [...people]
  peopleList = peopleList.sort(() => 0.5 - Math.random());
  people.forEach(person => {
    const receiver = peopleList.find(p => p.email !== person.email);
    if (receiver) {
      peopleList = peopleList.filter(p => p.email !== receiver.email)
      secretSantaList.push({
        giver: person,
        receiver,
      });
    } else {
      const lastReceiver = secretSantaList[0];
      const newReceiverIndex = secretSantaList.findIndex(receiver => {
        return receiver.email !== lastReceiver.receiver.email;
      })
      secretSantaList.push({
        giver: person,
        receiver: secretSantaList[newReceiverIndex].receiver,
      })
      secretSantaList[newReceiverIndex].receiver = person;
    }
  })
  // Return an array of randomly matched up people.
  // The array should have objects with the following structure:
  // { giver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}, receiver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}}

  // Rules:
  // 1. For every person there has to be a giver
  // 2. A person cannot be their own giver

  return secretSantaList
}
