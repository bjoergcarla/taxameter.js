/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */

var kttimePris=6.25;
var ktkmPris=5;
var ktstartPris=39;


var taxaGang = new Taxameter();
start(taxaGang);

function global(){
console.log(taxaGang.kmPris);
if (taxaGang.afstand<=1){
taxaGang.kmPris=5;
} else {taxaGang.kmPris=9;}
}