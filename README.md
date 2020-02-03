# taxameter.js
## En opgave i Strategy Pattern lavet af Bjørg Kristjansen, 3r

### Opgave 1
Har bare tilføjet new date() til både start og slut, derefter minusset dem sammen, for at få tiden mellem dem, derefter dividerer jeg med 1000 da det er millisekunder og det er vold til vores program, og ganget med timeprisen.
For hastigheden har jeg bare misbrugt det system der allerede er i library/start.js, for at kunne bare skrive this.afstand+=delta_afst; for at kunne finde km'eren.

### Opgave 2
Har bare gjort så der er 3 variabler der bestemmer pris, og ændret en lille smule i Taxameter.js som gør at man nemt bare kan copypaste koden for at lave flere banditter og hurtigt og snildt ændre prisen.


### Opgave 3
Copypastede bare krone-taxa.js og krone-taxa.html, ændrede html filen til at pege mod den rigtige .js fil, og så ændrede jeg bare variablerne til at passe.

### Opgave 4
Lavede en variabel som bliver kaldt i start.js hver gang der er gået et sekund. Som siger "hvis der er under en kilomet, så er prisen 5 ellers er den 9."

Har også gjort så man rent faktisk kan kalde på taxameter.variabel istedet for at det er noget scuffed kode der bare ligger der. (Med hjælp fra Hampus).
###Todo - Kommenter kode.
### Bonus opgave 1 (overkommelig)
Udvid Taxameter.js med et firmanavn og en tekstbeskrivelse af prismodellen. Dette kræver at start.js bliver ændret en smule.


### Bonus opgave 2 (svær)
Elin Rejser har fået adgang til alle prismodellerne, og deres prismodel er altid den billigste af de andre modeller.

Lav filerne elin-rejser.js og elin-rejser.html og genbrug så meget som mulig kode fra de andre systemer uden at have duplikeret kode.