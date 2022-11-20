// interface Database<T, K> {
//   get(id: K): T;
//   set(id: K, value: T): void;
// }

type DBKeyType = string | number ;
/* 
// class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
//   // private db: Record<string, string> = {}
//   protected db: Record<K, T> = {} as Record<K, T> // Now classes that implement this class can get this attribute
//   get(id: K): T {
//     return this.db[id];
//   }
//   set(id: K, value: T): void {
//     this.db[id] = value;
//   }
// } */

export class InMemoryDB<T, K extends DBKeyType>  {
  protected db: Record<K, T> = {} as Record<K, T>

  // TODO: has to by typed as a Record...
  static instance: InMemoryDB<any, string> = new InMemoryDB();

  private constructor(){};

  static set(id: DBKeyType, value: any) {
    InMemoryDB.instance.db[id] = value;
  }
  static get(id: DBKeyType) {
    return InMemoryDB.instance.db[id];
  }

  static has(id: DBKeyType) {
    return InMemoryDB.instance.db.hasOwnProperty(id)
  }
  
}
