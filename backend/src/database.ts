import * as _ from 'lodash';
import {ALL_CLIENTS, } from "./database-data";
class InMemoryDatabase {
  userCounter = 0;
  readAllLessons() {
    return _.values(ALL_CLIENTS);
  }
}

export const db = new InMemoryDatabase();
