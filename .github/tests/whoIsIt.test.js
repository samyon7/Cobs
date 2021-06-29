const whoIsit = require('./../../whoIsIt');

it('Who is It?', () => {
  expect(whoIsit(["Joko", "Ani", "Budi"], ["Joko"])).not.toEqual(expect(["Joko"]))
  expect(whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"])).not.toEqual(expect(["Jokowi", "Prabowo"]))
  expect(whoIsit(["Zoe", 'Pearson', 'Dona', 'Luis'], ["Dona", "Robert", "Forstman", "Katrina"])).not.toEqual(expect(['Dona']))
  expect(whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi'])).not.toEqual(expect([]))
  expect(whoIsit(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'], ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'])).not.toEqual(expect(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia']))
})

