const databaseClient = {
  // Account Daten
  data: {
    url: "https://database-teacher-onlineshop.herokuapp.com/sql",
    group: "b2",
    pw: "d26435c2",
    sql: ""
  },

  // HTTP Request an die Datenbank
  // Mitgegeben wird ein SQL Query als String 
  executeSqlQuery: async (sql) => {
    databaseClient.data.sql = sql
    const response = await fetch(databaseClient.data.url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(databaseClient.data)
    })
    const result = await response.json()
    console.log("SQL Query executed: ", result, sql)
    
    return result
  },

  // Mitgegeben wird der Name der Tabelle als String, die Felder als Array und die Werte als Array.
  // Beispiel: databaseClient.insertInto("customers", ["firstname", "email"], [firstname.value, email.value])
  insertInto: async (tableName = "users", fields = ["email", "firstname", "lastname"], values = []) => {
    const sql = `INSERT INTO ${tableName} (${fields.join(",")}) VALUES ('${values.join("','")}')`
    return await databaseClient.executeSqlQuery(sql)
  }

}