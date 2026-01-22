# Schritte

- Render in `App` die Komponente `PlantList`
- Füge in `PlantList` einen State vom Type `Plant[]` hinzu
  - initial Wert: leeres Array (`[]`)
- Füge in `PlantList` einen Button "Lade Pflanzen" ein
- Wenn auf den Button geklickt wird:
  - verwende `fetch` um die Pflanzen zu lesen
  - Die Adresse ist: http://localhost:7200/api/plants
  - Setze die geladenen Pflanzen in den State
  - Du kannst Promise API oder async/await verwenden

# Material
- `fetch` API im Browser:
    - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    - Beispiele: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- JavaScript promises:
    - "async" functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    - "await" keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    - Promise objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    - 
