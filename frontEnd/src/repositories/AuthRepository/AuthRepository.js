import {auth} from '../../mock/auth.json';

export default class AuthRepository {
  static getState () {
    return auth;
  }

  // static get (id) {
  //   return persons.find(person => person.id === id);
  // }
  //
  // static save (person) {
  //   person.id = Math.floor(Math.random() * 10000000000).toString();
  //   persons.push(person);
  //   return person;
  // }
  //
  // static edit (person, id) {
  //   const personIndex = persons.findIndex(p => p.id === id);
  //   if (~personIndex) persons[personIndex] = person;
  //   else return AuthRepository.save(person);
  // }
  //
  // static delete (id) {
  //   const index = persons.findIndex(p => p.id === id);
  //   persons.splice(index, 1);
  // }
  //
  // static all () {
  //   return persons;
  // }
}
