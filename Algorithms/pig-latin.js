/*
 * Pig Latin takes the first consonant (or consonant cluster) of an English
 * word, moves it to the end of the word and suffixes "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.
 */
function translatePigLatin(str) {
  // variable para construir la traducción
  var translatedWord = "";
  /* utilización de regex para comprobar vocales en cada palabra (g) y
   * de modo case insensitive (i)
   */
  var regex = /[aeiou]/gi;
  
  /* Se comprueba si el primer carácter es una vocal. En tal caso,
   * devuelve str sumándole "way".
   *
   * Se usa el método match() pues sirve precisamente para contrastar
   * valores regex.
   */
  if (str[0].match(regex)) {
    translatedWord = str + "way";
    return translatedWord;
  }
  
  /*
   * En caso contrario, se usa un bucle para ir pasando por cada
   * carácter. Consonante que se encuentre, la quita con splice() y la
   * añade al final del array con push(). Cuando se encuentra con una
   * vocal, sale del bucle y devuelve la translatedWord.
   */
  var tmpWord = str.split("");
  for(var i = 0; i < str.length -1; i++) {
    if (!tmpWord[0].match(regex)) {
       tmpWord.push(tmpWord.splice(0,1));
    }
    translatedWord = tmpWord.join("") + "ay";
  }
  
  return translatedWord;
}

console.log(translatePigLatin("glove"));
