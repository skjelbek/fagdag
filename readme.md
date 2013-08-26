Step 1 (Hello World):
- Inkludere Libs-filene (jQuery -> handlebars -> ember)
- Opprette app.js
- Lage index-templaten med "Hello world!"

Step 2 (Routes og templates):
- Opprette router.js og lage routene "partier" og "politikere"
- Lage templatene "partier" og "politikere"
- Huske å legge til {{outlet}} i index-templaten.

Step 3 (Navigering):
- Legge til header med link til index
- Legge til ul med linker til partier og politikere routene

Step 4 (Modeller):
- Legge til ember-data i scriptene som refereres
- Legge til App.Store i app.js
- Opprette mappen app/models
- Opprette Parti.js
- Opprette Politiker.js
- Utvide templatene så vi lister ut partier og politikere

Step 5 (Vise en enkelt politiker og parti):
- Legge til routes for en enkelt politiker og et enkelt parti
	- Endre App.Router.map
	- Legge til App.PartiRoute
	- Legge til App.PolitikerRoute
- Legge til template for politiker og parti

Step 6 (Frivillig - vise hvordan komponenter fungerer):
- Lage templaten "components/circle-component"
- Bruke denne komponenten i linkene til partier og politikere

Step 7 (Lage "editable-image" view):
- Opprett mappen app/views
- Opprett filen EditableImage.js i denne mappen
- Lag templaten "editable-image"
- Bytt ut img-taggene med {{view editable-image}}
- Husk å referere til filen EditableImage

Step 8 (Stemme på parti):
- Opprette mappen controllers
- Opprette PartiController.js
- Lage metoden stem
- Lage metoden stem i Parti

Step 9 (Lage DoorbellButton):
- For å stemmer "russian style" lager vi en doorbellbutton. Den stemmer når man holder den nede
- Opprett filen DoorbellButton.js
- Wrap knappen vi lagde for å stemme inne i denne i stedet