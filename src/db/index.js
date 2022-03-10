
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('products.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY NOT NULL, 
        name TEXT NOT NULL, image TEXT NULL, category INTEGER NOT NULL, price REAL NOT NULL)`,
        [],
        () => {
          resolve();
          
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const getProduct = (id) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM product WHERE id = ?', [id], (_, rows) => {
          let data = [];
          var len = rows.rows.length;
          for (let i = 0; i < len; i++) {
            let row = rows.rows.item(i);
            data.push(row);
          }
          resolve(data);
        }, (_, err) => {
          reject(err);
        })
      })
    })

    return promise;
}

export const setInitialProducts = () => {
  getProduct(1).then((products) => {
    console.log(products);
    console.log(products.length)
    if(products.length == 0){
      insertProduct('Remera Gris', null, "1", 1500)
      .then(() => {});
      insertProduct('Jean gastado', null, "2", 3000)
      .then(() => {});
      insertProduct('Buzo verde', null, "3", 2300)
      .then(() => {});
      insertProduct('Campera negra', null, "4", 5000)
      .then(() => {});
      insertProduct('Zapatillas grises', null, "5", 4000)
      .then(() => {});
    }
  }).catch((err) => {console.error(err)})
}

export const insertProduct = (title, image, category, price) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO product (name, image, category, price) VALUES (?, ?, ?, ?)',
        [title, image, category, price],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};

export const fetchProducts = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM product',
        [],
        (_, result) => {
          let data = [];
          var len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          resolve(data);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });

  return promise;
};