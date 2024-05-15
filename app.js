const express = require('express');
const app = express();
const port = 3000;

// Initialisiere leere Listen für Hobbys und Einkaufsliste
let hobbies = [];
let shoppingList = [];
let BesuchteOrte = [];

// Middleware zum Parsen von JSON-Anfragenkörpern
app.use(express.json());

// Endpunkt zum Abrufen der Hobbys
app.get('/hobbies', (req, res) => {
    res.json(hobbies);
});

// Endpunkt zum Abrufen der Besuchte Orte
app.get('/Besuchte-Orte', (req, res) => {
    res.json(BesuchteOrte);
});

// Endpunkt zum Abrufen der Einkaufsliste
app.get('/shopping-list', (req, res) => {
    res.json(shoppingList);
});

// Endpunkt zum Hinzufügen eines Elements zu Hobbys
app.post('/hobbies', (req, res) => {
    const hobby = req.body.hobby;
    hobbies.push(hobby);
    res.send('Hobby wurde hinzugefügt.');
});

// Endpunkt zum Hinzufügen eines Elements zur Einkaufsliste
app.post('/shopping-list', (req, res) => {
    const item = req.body.item;
    shoppingList.push(item);
    res.send('Artikel wurde zur Einkaufsliste hinzugefügt.');
});

// Endpunkt zum Hinzufügen eines Elements zur Einkaufsliste
app.post('/Besuchte-Orte', (req, res) => {
    const item = req.body.item;
    BesuchteOrte.push(item);
    res.send('Da war es Wunderschön.');
});

app.listen(port, () => {
    console.log(`Express-App läuft auf http://localhost:${port}`);
});
