"format register";

(function() {
function define(){};  define.amd = {};
  !(function() {
    "use strict";
    var VERSION = '2.1.0';
    var ENTITIES = {};
    var latin_map = {
      "Á": "A",
      "Ă": "A",
      "Ắ": "A",
      "Ặ": "A",
      "Ằ": "A",
      "Ẳ": "A",
      "Ẵ": "A",
      "Ǎ": "A",
      "Â": "A",
      "Ấ": "A",
      "Ậ": "A",
      "Ầ": "A",
      "Ẩ": "A",
      "Ẫ": "A",
      "Ä": "A",
      "Ǟ": "A",
      "Ȧ": "A",
      "Ǡ": "A",
      "Ạ": "A",
      "Ȁ": "A",
      "À": "A",
      "Ả": "A",
      "Ȃ": "A",
      "Ā": "A",
      "Ą": "A",
      "Å": "A",
      "Ǻ": "A",
      "Ḁ": "A",
      "Ⱥ": "A",
      "Ã": "A",
      "Ꜳ": "AA",
      "Æ": "AE",
      "Ǽ": "AE",
      "Ǣ": "AE",
      "Ꜵ": "AO",
      "Ꜷ": "AU",
      "Ꜹ": "AV",
      "Ꜻ": "AV",
      "Ꜽ": "AY",
      "Ḃ": "B",
      "Ḅ": "B",
      "Ɓ": "B",
      "Ḇ": "B",
      "Ƀ": "B",
      "Ƃ": "B",
      "Ć": "C",
      "Č": "C",
      "Ç": "C",
      "Ḉ": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Ƈ": "C",
      "Ȼ": "C",
      "Ď": "D",
      "Ḑ": "D",
      "Ḓ": "D",
      "Ḋ": "D",
      "Ḍ": "D",
      "Ɗ": "D",
      "Ḏ": "D",
      "ǲ": "D",
      "ǅ": "D",
      "Đ": "D",
      "Ƌ": "D",
      "Ǳ": "DZ",
      "Ǆ": "DZ",
      "É": "E",
      "Ĕ": "E",
      "Ě": "E",
      "Ȩ": "E",
      "Ḝ": "E",
      "Ê": "E",
      "Ế": "E",
      "Ệ": "E",
      "Ề": "E",
      "Ể": "E",
      "Ễ": "E",
      "Ḙ": "E",
      "Ë": "E",
      "Ė": "E",
      "Ẹ": "E",
      "Ȅ": "E",
      "È": "E",
      "Ẻ": "E",
      "Ȇ": "E",
      "Ē": "E",
      "Ḗ": "E",
      "Ḕ": "E",
      "Ę": "E",
      "Ɇ": "E",
      "Ẽ": "E",
      "Ḛ": "E",
      "Ꝫ": "ET",
      "Ḟ": "F",
      "Ƒ": "F",
      "Ǵ": "G",
      "Ğ": "G",
      "Ǧ": "G",
      "Ģ": "G",
      "Ĝ": "G",
      "Ġ": "G",
      "Ɠ": "G",
      "Ḡ": "G",
      "Ǥ": "G",
      "Ḫ": "H",
      "Ȟ": "H",
      "Ḩ": "H",
      "Ĥ": "H",
      "Ⱨ": "H",
      "Ḧ": "H",
      "Ḣ": "H",
      "Ḥ": "H",
      "Ħ": "H",
      "Í": "I",
      "Ĭ": "I",
      "Ǐ": "I",
      "Î": "I",
      "Ï": "I",
      "Ḯ": "I",
      "İ": "I",
      "Ị": "I",
      "Ȉ": "I",
      "Ì": "I",
      "Ỉ": "I",
      "Ȋ": "I",
      "Ī": "I",
      "Į": "I",
      "Ɨ": "I",
      "Ĩ": "I",
      "Ḭ": "I",
      "Ꝺ": "D",
      "Ꝼ": "F",
      "Ᵹ": "G",
      "Ꞃ": "R",
      "Ꞅ": "S",
      "Ꞇ": "T",
      "Ꝭ": "IS",
      "Ĵ": "J",
      "Ɉ": "J",
      "Ḱ": "K",
      "Ǩ": "K",
      "Ķ": "K",
      "Ⱪ": "K",
      "Ꝃ": "K",
      "Ḳ": "K",
      "Ƙ": "K",
      "Ḵ": "K",
      "Ꝁ": "K",
      "Ꝅ": "K",
      "Ĺ": "L",
      "Ƚ": "L",
      "Ľ": "L",
      "Ļ": "L",
      "Ḽ": "L",
      "Ḷ": "L",
      "Ḹ": "L",
      "Ⱡ": "L",
      "Ꝉ": "L",
      "Ḻ": "L",
      "Ŀ": "L",
      "Ɫ": "L",
      "ǈ": "L",
      "Ł": "L",
      "Ǉ": "LJ",
      "Ḿ": "M",
      "Ṁ": "M",
      "Ṃ": "M",
      "Ɱ": "M",
      "Ń": "N",
      "Ň": "N",
      "Ņ": "N",
      "Ṋ": "N",
      "Ṅ": "N",
      "Ṇ": "N",
      "Ǹ": "N",
      "Ɲ": "N",
      "Ṉ": "N",
      "Ƞ": "N",
      "ǋ": "N",
      "Ñ": "N",
      "Ǌ": "NJ",
      "Ó": "O",
      "Ŏ": "O",
      "Ǒ": "O",
      "Ô": "O",
      "Ố": "O",
      "Ộ": "O",
      "Ồ": "O",
      "Ổ": "O",
      "Ỗ": "O",
      "Ö": "O",
      "Ȫ": "O",
      "Ȯ": "O",
      "Ȱ": "O",
      "Ọ": "O",
      "Ő": "O",
      "Ȍ": "O",
      "Ò": "O",
      "Ỏ": "O",
      "Ơ": "O",
      "Ớ": "O",
      "Ợ": "O",
      "Ờ": "O",
      "Ở": "O",
      "Ỡ": "O",
      "Ȏ": "O",
      "Ꝋ": "O",
      "Ꝍ": "O",
      "Ō": "O",
      "Ṓ": "O",
      "Ṑ": "O",
      "Ɵ": "O",
      "Ǫ": "O",
      "Ǭ": "O",
      "Ø": "O",
      "Ǿ": "O",
      "Õ": "O",
      "Ṍ": "O",
      "Ṏ": "O",
      "Ȭ": "O",
      "Ƣ": "OI",
      "Ꝏ": "OO",
      "Ɛ": "E",
      "Ɔ": "O",
      "Ȣ": "OU",
      "Ṕ": "P",
      "Ṗ": "P",
      "Ꝓ": "P",
      "Ƥ": "P",
      "Ꝕ": "P",
      "Ᵽ": "P",
      "Ꝑ": "P",
      "Ꝙ": "Q",
      "Ꝗ": "Q",
      "Ŕ": "R",
      "Ř": "R",
      "Ŗ": "R",
      "Ṙ": "R",
      "Ṛ": "R",
      "Ṝ": "R",
      "Ȑ": "R",
      "Ȓ": "R",
      "Ṟ": "R",
      "Ɍ": "R",
      "Ɽ": "R",
      "Ꜿ": "C",
      "Ǝ": "E",
      "Ś": "S",
      "Ṥ": "S",
      "Š": "S",
      "Ṧ": "S",
      "Ş": "S",
      "Ŝ": "S",
      "Ș": "S",
      "Ṡ": "S",
      "Ṣ": "S",
      "Ṩ": "S",
      "ẞ": "SS",
      "Ť": "T",
      "Ţ": "T",
      "Ṱ": "T",
      "Ț": "T",
      "Ⱦ": "T",
      "Ṫ": "T",
      "Ṭ": "T",
      "Ƭ": "T",
      "Ṯ": "T",
      "Ʈ": "T",
      "Ŧ": "T",
      "Ɐ": "A",
      "Ꞁ": "L",
      "Ɯ": "M",
      "Ʌ": "V",
      "Ꜩ": "TZ",
      "Ú": "U",
      "Ŭ": "U",
      "Ǔ": "U",
      "Û": "U",
      "Ṷ": "U",
      "Ü": "U",
      "Ǘ": "U",
      "Ǚ": "U",
      "Ǜ": "U",
      "Ǖ": "U",
      "Ṳ": "U",
      "Ụ": "U",
      "Ű": "U",
      "Ȕ": "U",
      "Ù": "U",
      "Ủ": "U",
      "Ư": "U",
      "Ứ": "U",
      "Ự": "U",
      "Ừ": "U",
      "Ử": "U",
      "Ữ": "U",
      "Ȗ": "U",
      "Ū": "U",
      "Ṻ": "U",
      "Ų": "U",
      "Ů": "U",
      "Ũ": "U",
      "Ṹ": "U",
      "Ṵ": "U",
      "Ꝟ": "V",
      "Ṿ": "V",
      "Ʋ": "V",
      "Ṽ": "V",
      "Ꝡ": "VY",
      "Ẃ": "W",
      "Ŵ": "W",
      "Ẅ": "W",
      "Ẇ": "W",
      "Ẉ": "W",
      "Ẁ": "W",
      "Ⱳ": "W",
      "Ẍ": "X",
      "Ẋ": "X",
      "Ý": "Y",
      "Ŷ": "Y",
      "Ÿ": "Y",
      "Ẏ": "Y",
      "Ỵ": "Y",
      "Ỳ": "Y",
      "Ƴ": "Y",
      "Ỷ": "Y",
      "Ỿ": "Y",
      "Ȳ": "Y",
      "Ɏ": "Y",
      "Ỹ": "Y",
      "Ź": "Z",
      "Ž": "Z",
      "Ẑ": "Z",
      "Ⱬ": "Z",
      "Ż": "Z",
      "Ẓ": "Z",
      "Ȥ": "Z",
      "Ẕ": "Z",
      "Ƶ": "Z",
      "Ĳ": "IJ",
      "Œ": "OE",
      "ᴀ": "A",
      "ᴁ": "AE",
      "ʙ": "B",
      "ᴃ": "B",
      "ᴄ": "C",
      "ᴅ": "D",
      "ᴇ": "E",
      "ꜰ": "F",
      "ɢ": "G",
      "ʛ": "G",
      "ʜ": "H",
      "ɪ": "I",
      "ʁ": "R",
      "ᴊ": "J",
      "ᴋ": "K",
      "ʟ": "L",
      "ᴌ": "L",
      "ᴍ": "M",
      "ɴ": "N",
      "ᴏ": "O",
      "ɶ": "OE",
      "ᴐ": "O",
      "ᴕ": "OU",
      "ᴘ": "P",
      "ʀ": "R",
      "ᴎ": "N",
      "ᴙ": "R",
      "ꜱ": "S",
      "ᴛ": "T",
      "ⱻ": "E",
      "ᴚ": "R",
      "ᴜ": "U",
      "ᴠ": "V",
      "ᴡ": "W",
      "ʏ": "Y",
      "ᴢ": "Z",
      "á": "a",
      "ă": "a",
      "ắ": "a",
      "ặ": "a",
      "ằ": "a",
      "ẳ": "a",
      "ẵ": "a",
      "ǎ": "a",
      "â": "a",
      "ấ": "a",
      "ậ": "a",
      "ầ": "a",
      "ẩ": "a",
      "ẫ": "a",
      "ä": "a",
      "ǟ": "a",
      "ȧ": "a",
      "ǡ": "a",
      "ạ": "a",
      "ȁ": "a",
      "à": "a",
      "ả": "a",
      "ȃ": "a",
      "ā": "a",
      "ą": "a",
      "ᶏ": "a",
      "ẚ": "a",
      "å": "a",
      "ǻ": "a",
      "ḁ": "a",
      "ⱥ": "a",
      "ã": "a",
      "ꜳ": "aa",
      "æ": "ae",
      "ǽ": "ae",
      "ǣ": "ae",
      "ꜵ": "ao",
      "ꜷ": "au",
      "ꜹ": "av",
      "ꜻ": "av",
      "ꜽ": "ay",
      "ḃ": "b",
      "ḅ": "b",
      "ɓ": "b",
      "ḇ": "b",
      "ᵬ": "b",
      "ᶀ": "b",
      "ƀ": "b",
      "ƃ": "b",
      "ɵ": "o",
      "ć": "c",
      "č": "c",
      "ç": "c",
      "ḉ": "c",
      "ĉ": "c",
      "ɕ": "c",
      "ċ": "c",
      "ƈ": "c",
      "ȼ": "c",
      "ď": "d",
      "ḑ": "d",
      "ḓ": "d",
      "ȡ": "d",
      "ḋ": "d",
      "ḍ": "d",
      "ɗ": "d",
      "ᶑ": "d",
      "ḏ": "d",
      "ᵭ": "d",
      "ᶁ": "d",
      "đ": "d",
      "ɖ": "d",
      "ƌ": "d",
      "ı": "i",
      "ȷ": "j",
      "ɟ": "j",
      "ʄ": "j",
      "ǳ": "dz",
      "ǆ": "dz",
      "é": "e",
      "ĕ": "e",
      "ě": "e",
      "ȩ": "e",
      "ḝ": "e",
      "ê": "e",
      "ế": "e",
      "ệ": "e",
      "ề": "e",
      "ể": "e",
      "ễ": "e",
      "ḙ": "e",
      "ë": "e",
      "ė": "e",
      "ẹ": "e",
      "ȅ": "e",
      "è": "e",
      "ẻ": "e",
      "ȇ": "e",
      "ē": "e",
      "ḗ": "e",
      "ḕ": "e",
      "ⱸ": "e",
      "ę": "e",
      "ᶒ": "e",
      "ɇ": "e",
      "ẽ": "e",
      "ḛ": "e",
      "ꝫ": "et",
      "ḟ": "f",
      "ƒ": "f",
      "ᵮ": "f",
      "ᶂ": "f",
      "ǵ": "g",
      "ğ": "g",
      "ǧ": "g",
      "ģ": "g",
      "ĝ": "g",
      "ġ": "g",
      "ɠ": "g",
      "ḡ": "g",
      "ᶃ": "g",
      "ǥ": "g",
      "ḫ": "h",
      "ȟ": "h",
      "ḩ": "h",
      "ĥ": "h",
      "ⱨ": "h",
      "ḧ": "h",
      "ḣ": "h",
      "ḥ": "h",
      "ɦ": "h",
      "ẖ": "h",
      "ħ": "h",
      "ƕ": "hv",
      "í": "i",
      "ĭ": "i",
      "ǐ": "i",
      "î": "i",
      "ï": "i",
      "ḯ": "i",
      "ị": "i",
      "ȉ": "i",
      "ì": "i",
      "ỉ": "i",
      "ȋ": "i",
      "ī": "i",
      "į": "i",
      "ᶖ": "i",
      "ɨ": "i",
      "ĩ": "i",
      "ḭ": "i",
      "ꝺ": "d",
      "ꝼ": "f",
      "ᵹ": "g",
      "ꞃ": "r",
      "ꞅ": "s",
      "ꞇ": "t",
      "ꝭ": "is",
      "ǰ": "j",
      "ĵ": "j",
      "ʝ": "j",
      "ɉ": "j",
      "ḱ": "k",
      "ǩ": "k",
      "ķ": "k",
      "ⱪ": "k",
      "ꝃ": "k",
      "ḳ": "k",
      "ƙ": "k",
      "ḵ": "k",
      "ᶄ": "k",
      "ꝁ": "k",
      "ꝅ": "k",
      "ĺ": "l",
      "ƚ": "l",
      "ɬ": "l",
      "ľ": "l",
      "ļ": "l",
      "ḽ": "l",
      "ȴ": "l",
      "ḷ": "l",
      "ḹ": "l",
      "ⱡ": "l",
      "ꝉ": "l",
      "ḻ": "l",
      "ŀ": "l",
      "ɫ": "l",
      "ᶅ": "l",
      "ɭ": "l",
      "ł": "l",
      "ǉ": "lj",
      "ſ": "s",
      "ẜ": "s",
      "ẛ": "s",
      "ẝ": "s",
      "ḿ": "m",
      "ṁ": "m",
      "ṃ": "m",
      "ɱ": "m",
      "ᵯ": "m",
      "ᶆ": "m",
      "ń": "n",
      "ň": "n",
      "ņ": "n",
      "ṋ": "n",
      "ȵ": "n",
      "ṅ": "n",
      "ṇ": "n",
      "ǹ": "n",
      "ɲ": "n",
      "ṉ": "n",
      "ƞ": "n",
      "ᵰ": "n",
      "ᶇ": "n",
      "ɳ": "n",
      "ñ": "n",
      "ǌ": "nj",
      "ó": "o",
      "ŏ": "o",
      "ǒ": "o",
      "ô": "o",
      "ố": "o",
      "ộ": "o",
      "ồ": "o",
      "ổ": "o",
      "ỗ": "o",
      "ö": "o",
      "ȫ": "o",
      "ȯ": "o",
      "ȱ": "o",
      "ọ": "o",
      "ő": "o",
      "ȍ": "o",
      "ò": "o",
      "ỏ": "o",
      "ơ": "o",
      "ớ": "o",
      "ợ": "o",
      "ờ": "o",
      "ở": "o",
      "ỡ": "o",
      "ȏ": "o",
      "ꝋ": "o",
      "ꝍ": "o",
      "ⱺ": "o",
      "ō": "o",
      "ṓ": "o",
      "ṑ": "o",
      "ǫ": "o",
      "ǭ": "o",
      "ø": "o",
      "ǿ": "o",
      "õ": "o",
      "ṍ": "o",
      "ṏ": "o",
      "ȭ": "o",
      "ƣ": "oi",
      "ꝏ": "oo",
      "ɛ": "e",
      "ᶓ": "e",
      "ɔ": "o",
      "ᶗ": "o",
      "ȣ": "ou",
      "ṕ": "p",
      "ṗ": "p",
      "ꝓ": "p",
      "ƥ": "p",
      "ᵱ": "p",
      "ᶈ": "p",
      "ꝕ": "p",
      "ᵽ": "p",
      "ꝑ": "p",
      "ꝙ": "q",
      "ʠ": "q",
      "ɋ": "q",
      "ꝗ": "q",
      "ŕ": "r",
      "ř": "r",
      "ŗ": "r",
      "ṙ": "r",
      "ṛ": "r",
      "ṝ": "r",
      "ȑ": "r",
      "ɾ": "r",
      "ᵳ": "r",
      "ȓ": "r",
      "ṟ": "r",
      "ɼ": "r",
      "ᵲ": "r",
      "ᶉ": "r",
      "ɍ": "r",
      "ɽ": "r",
      "ↄ": "c",
      "ꜿ": "c",
      "ɘ": "e",
      "ɿ": "r",
      "ś": "s",
      "ṥ": "s",
      "š": "s",
      "ṧ": "s",
      "ş": "s",
      "ŝ": "s",
      "ș": "s",
      "ṡ": "s",
      "ṣ": "s",
      "ṩ": "s",
      "ʂ": "s",
      "ᵴ": "s",
      "ᶊ": "s",
      "ȿ": "s",
      "ɡ": "g",
      "ß": "ss",
      "ᴑ": "o",
      "ᴓ": "o",
      "ᴝ": "u",
      "ť": "t",
      "ţ": "t",
      "ṱ": "t",
      "ț": "t",
      "ȶ": "t",
      "ẗ": "t",
      "ⱦ": "t",
      "ṫ": "t",
      "ṭ": "t",
      "ƭ": "t",
      "ṯ": "t",
      "ᵵ": "t",
      "ƫ": "t",
      "ʈ": "t",
      "ŧ": "t",
      "ᵺ": "th",
      "ɐ": "a",
      "ᴂ": "ae",
      "ǝ": "e",
      "ᵷ": "g",
      "ɥ": "h",
      "ʮ": "h",
      "ʯ": "h",
      "ᴉ": "i",
      "ʞ": "k",
      "ꞁ": "l",
      "ɯ": "m",
      "ɰ": "m",
      "ᴔ": "oe",
      "ɹ": "r",
      "ɻ": "r",
      "ɺ": "r",
      "ⱹ": "r",
      "ʇ": "t",
      "ʌ": "v",
      "ʍ": "w",
      "ʎ": "y",
      "ꜩ": "tz",
      "ú": "u",
      "ŭ": "u",
      "ǔ": "u",
      "û": "u",
      "ṷ": "u",
      "ü": "u",
      "ǘ": "u",
      "ǚ": "u",
      "ǜ": "u",
      "ǖ": "u",
      "ṳ": "u",
      "ụ": "u",
      "ű": "u",
      "ȕ": "u",
      "ù": "u",
      "ủ": "u",
      "ư": "u",
      "ứ": "u",
      "ự": "u",
      "ừ": "u",
      "ử": "u",
      "ữ": "u",
      "ȗ": "u",
      "ū": "u",
      "ṻ": "u",
      "ų": "u",
      "ᶙ": "u",
      "ů": "u",
      "ũ": "u",
      "ṹ": "u",
      "ṵ": "u",
      "ᵫ": "ue",
      "ꝸ": "um",
      "ⱴ": "v",
      "ꝟ": "v",
      "ṿ": "v",
      "ʋ": "v",
      "ᶌ": "v",
      "ⱱ": "v",
      "ṽ": "v",
      "ꝡ": "vy",
      "ẃ": "w",
      "ŵ": "w",
      "ẅ": "w",
      "ẇ": "w",
      "ẉ": "w",
      "ẁ": "w",
      "ⱳ": "w",
      "ẘ": "w",
      "ẍ": "x",
      "ẋ": "x",
      "ᶍ": "x",
      "ý": "y",
      "ŷ": "y",
      "ÿ": "y",
      "ẏ": "y",
      "ỵ": "y",
      "ỳ": "y",
      "ƴ": "y",
      "ỷ": "y",
      "ỿ": "y",
      "ȳ": "y",
      "ẙ": "y",
      "ɏ": "y",
      "ỹ": "y",
      "ź": "z",
      "ž": "z",
      "ẑ": "z",
      "ʑ": "z",
      "ⱬ": "z",
      "ż": "z",
      "ẓ": "z",
      "ȥ": "z",
      "ẕ": "z",
      "ᵶ": "z",
      "ᶎ": "z",
      "ʐ": "z",
      "ƶ": "z",
      "ɀ": "z",
      "ﬀ": "ff",
      "ﬃ": "ffi",
      "ﬄ": "ffl",
      "ﬁ": "fi",
      "ﬂ": "fl",
      "ĳ": "ij",
      "œ": "oe",
      "ﬆ": "st",
      "ₐ": "a",
      "ₑ": "e",
      "ᵢ": "i",
      "ⱼ": "j",
      "ₒ": "o",
      "ᵣ": "r",
      "ᵤ": "u",
      "ᵥ": "v",
      "ₓ": "x"
    };
    function initialize(object, s) {
      if (s !== null && s !== undefined) {
        if (typeof s === 'string')
          object.s = s;
        else
          object.s = s.toString();
      } else {
        object.s = s;
      }
      object.orig = s;
      if (s !== null && s !== undefined) {
        if (object.__defineGetter__) {
          object.__defineGetter__('length', function() {
            return object.s.length;
          });
        } else {
          object.length = s.length;
        }
      } else {
        object.length = -1;
      }
    }
    function S(s) {
      initialize(this, s);
    }
    var __nsp = String.prototype;
    var __sp = S.prototype = {
      between: function(left, right) {
        var s = this.s;
        var startPos = s.indexOf(left);
        var endPos = s.indexOf(right, startPos + left.length);
        if (endPos == -1 && right != null)
          return new this.constructor('');
        else if (endPos == -1 && right == null)
          return new this.constructor(s.substring(startPos + left.length));
        else
          return new this.constructor(s.slice(startPos + left.length, endPos));
      },
      camelize: function() {
        var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
          return (c ? c.toUpperCase() : '');
        });
        return new this.constructor(s);
      },
      capitalize: function() {
        return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
      },
      charAt: function(index) {
        return this.s.charAt(index);
      },
      chompLeft: function(prefix) {
        var s = this.s;
        if (s.indexOf(prefix) === 0) {
          s = s.slice(prefix.length);
          return new this.constructor(s);
        } else {
          return this;
        }
      },
      chompRight: function(suffix) {
        if (this.endsWith(suffix)) {
          var s = this.s;
          s = s.slice(0, s.length - suffix.length);
          return new this.constructor(s);
        } else {
          return this;
        }
      },
      collapseWhitespace: function() {
        var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
        return new this.constructor(s);
      },
      contains: function(ss) {
        return this.s.indexOf(ss) >= 0;
      },
      count: function(ss) {
        var count = 0,
            pos = this.s.indexOf(ss);
        while (pos >= 0) {
          count += 1;
          pos = this.s.indexOf(ss, pos + 1);
        }
        return count;
      },
      dasherize: function() {
        var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
        return new this.constructor(s);
      },
      latinise: function() {
        var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function(x) {
          return latin_map[x] || x;
        });
        return new this.constructor(s);
      },
      decodeHtmlEntities: function() {
        var s = this.s;
        s = s.replace(/&#(\d+);?/g, function(_, code) {
          return String.fromCharCode(code);
        }).replace(/&#[xX]([A-Fa-f0-9]+);?/g, function(_, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        }).replace(/&([^;\W]+;?)/g, function(m, e) {
          var ee = e.replace(/;$/, '');
          var target = ENTITIES[e] || (e.match(/;$/) && ENTITIES[ee]);
          if (typeof target === 'number') {
            return String.fromCharCode(target);
          } else if (typeof target === 'string') {
            return target;
          } else {
            return m;
          }
        });
        return new this.constructor(s);
      },
      endsWith: function(suffix) {
        var l = this.s.length - suffix.length;
        return l >= 0 && this.s.indexOf(suffix, l) === l;
      },
      escapeHTML: function() {
        return new this.constructor(this.s.replace(/[&<>"']/g, function(m) {
          return '&' + reversedEscapeChars[m] + ';';
        }));
      },
      ensureLeft: function(prefix) {
        var s = this.s;
        if (s.indexOf(prefix) === 0) {
          return this;
        } else {
          return new this.constructor(prefix + s);
        }
      },
      ensureRight: function(suffix) {
        var s = this.s;
        if (this.endsWith(suffix)) {
          return this;
        } else {
          return new this.constructor(s + suffix);
        }
      },
      humanize: function() {
        if (this.s === null || this.s === undefined)
          return new this.constructor('');
        var s = this.underscore().replace(/_id$/, '').replace(/_/g, ' ').trim().capitalize();
        return new this.constructor(s);
      },
      isAlpha: function() {
        return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase());
      },
      isAlphaNumeric: function() {
        return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase());
      },
      isEmpty: function() {
        return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
      },
      isLower: function() {
        return this.isAlpha() && this.s.toLowerCase() === this.s;
      },
      isNumeric: function() {
        return !/[^0-9]/.test(this.s);
      },
      isUpper: function() {
        return this.isAlpha() && this.s.toUpperCase() === this.s;
      },
      left: function(N) {
        if (N >= 0) {
          var s = this.s.substr(0, N);
          return new this.constructor(s);
        } else {
          return this.right(-N);
        }
      },
      lines: function() {
        return this.replaceAll('\r\n', '\n').s.split('\n');
      },
      pad: function(len, ch) {
        if (ch == null)
          ch = ' ';
        if (this.s.length >= len)
          return new this.constructor(this.s);
        len = len - this.s.length;
        var left = Array(Math.ceil(len / 2) + 1).join(ch);
        var right = Array(Math.floor(len / 2) + 1).join(ch);
        return new this.constructor(left + this.s + right);
      },
      padLeft: function(len, ch) {
        if (ch == null)
          ch = ' ';
        if (this.s.length >= len)
          return new this.constructor(this.s);
        return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
      },
      padRight: function(len, ch) {
        if (ch == null)
          ch = ' ';
        if (this.s.length >= len)
          return new this.constructor(this.s);
        return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
      },
      parseCSV: function(delimiter, qualifier, escape, lineDelimiter) {
        delimiter = delimiter || ',';
        escape = escape || '\\';
        if (typeof qualifier == 'undefined')
          qualifier = '"';
        var i = 0,
            fieldBuffer = [],
            fields = [],
            len = this.s.length,
            inField = false,
            inUnqualifiedString = false,
            self = this;
        var ca = function(i) {
          return self.s.charAt(i);
        };
        if (typeof lineDelimiter !== 'undefined')
          var rows = [];
        if (!qualifier)
          inField = true;
        while (i < len) {
          var current = ca(i);
          switch (current) {
            case escape:
              if (inField && ((escape !== qualifier) || ca(i + 1) === qualifier)) {
                i += 1;
                fieldBuffer.push(ca(i));
                break;
              }
              if (escape !== qualifier)
                break;
            case qualifier:
              inField = !inField;
              break;
            case delimiter:
              if (inUnqualifiedString) {
                inField = false;
                inUnqualifiedString = false;
              }
              if (inField && qualifier)
                fieldBuffer.push(current);
              else {
                fields.push(fieldBuffer.join(''));
                fieldBuffer.length = 0;
              }
              break;
            case lineDelimiter:
              if (inUnqualifiedString) {
                inField = false;
                inUnqualifiedString = false;
                fields.push(fieldBuffer.join(''));
                rows.push(fields);
                fields = [];
                fieldBuffer.length = 0;
              } else if (inField) {
                fieldBuffer.push(current);
              } else {
                if (rows) {
                  fields.push(fieldBuffer.join(''));
                  rows.push(fields);
                  fields = [];
                  fieldBuffer.length = 0;
                }
              }
              break;
            case ' ':
              if (inField)
                fieldBuffer.push(current);
              break;
            default:
              if (inField)
                fieldBuffer.push(current);
              else if (current !== qualifier) {
                fieldBuffer.push(current);
                inField = true;
                inUnqualifiedString = true;
              }
              break;
          }
          i += 1;
        }
        fields.push(fieldBuffer.join(''));
        if (rows) {
          rows.push(fields);
          return rows;
        }
        return fields;
      },
      replaceAll: function(ss, r) {
        var s = this.s.split(ss).join(r);
        return new this.constructor(s);
      },
      strip: function() {
        var ss = this.s;
        for (var i = 0,
            n = arguments.length; i < n; i++) {
          ss = ss.split(arguments[i]).join('');
        }
        return new this.constructor(ss);
      },
      right: function(N) {
        if (N >= 0) {
          var s = this.s.substr(this.s.length - N, N);
          return new this.constructor(s);
        } else {
          return this.left(-N);
        }
      },
      setValue: function(s) {
        initialize(this, s);
        return this;
      },
      slugify: function() {
        var sl = (new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, '').toLowerCase())).dasherize().s;
        if (sl.charAt(0) === '-')
          sl = sl.substr(1);
        return new this.constructor(sl);
      },
      startsWith: function(prefix) {
        return this.s.lastIndexOf(prefix, 0) === 0;
      },
      stripPunctuation: function() {
        return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
      },
      stripTags: function() {
        var s = this.s,
            args = arguments.length > 0 ? arguments : [''];
        multiArgs(args, function(tag) {
          s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
        });
        return new this.constructor(s);
      },
      template: function(values, opening, closing) {
        var s = this.s;
        var opening = opening || Export.TMPL_OPEN;
        var closing = closing || Export.TMPL_CLOSE;
        var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
        var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
        var r = new RegExp(open + '(.+?)' + close, 'g');
        var matches = s.match(r) || [];
        matches.forEach(function(match) {
          var key = match.substring(opening.length, match.length - closing.length);
          if (typeof values[key] != 'undefined')
            s = s.replace(match, values[key]);
        });
        return new this.constructor(s);
      },
      times: function(n) {
        return new this.constructor(new Array(n + 1).join(this.s));
      },
      toBoolean: function() {
        if (typeof this.orig === 'string') {
          var s = this.s.toLowerCase();
          return s === 'true' || s === 'yes' || s === 'on' || s === '1';
        } else
          return this.orig === true || this.orig === 1;
      },
      toFloat: function(precision) {
        var num = parseFloat(this.s);
        if (precision)
          return parseFloat(num.toFixed(precision));
        else
          return num;
      },
      toInt: function() {
        return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10);
      },
      trim: function() {
        var s;
        if (typeof __nsp.trim === 'undefined')
          s = this.s.replace(/(^\s*|\s*$)/g, '');
        else
          s = this.s.trim();
        return new this.constructor(s);
      },
      trimLeft: function() {
        var s;
        if (__nsp.trimLeft)
          s = this.s.trimLeft();
        else
          s = this.s.replace(/(^\s*)/g, '');
        return new this.constructor(s);
      },
      trimRight: function() {
        var s;
        if (__nsp.trimRight)
          s = this.s.trimRight();
        else
          s = this.s.replace(/\s+$/, '');
        return new this.constructor(s);
      },
      truncate: function(length, pruneStr) {
        var str = this.s;
        length = ~~length;
        pruneStr = pruneStr || '...';
        if (str.length <= length)
          return new this.constructor(str);
        var tmpl = function(c) {
          return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
        },
            template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
        if (template.slice(template.length - 2).match(/\w\w/))
          template = template.replace(/\s*\S+$/, '');
        else
          template = new S(template.slice(0, template.length - 1)).trimRight().s;
        return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr);
      },
      toCSV: function() {
        var delim = ',',
            qualifier = '"',
            escape = '\\',
            encloseNumbers = true,
            keys = false;
        var dataArray = [];
        function hasVal(it) {
          return it !== null && it !== '';
        }
        if (typeof arguments[0] === 'object') {
          delim = arguments[0].delimiter || delim;
          delim = arguments[0].separator || delim;
          qualifier = arguments[0].qualifier || qualifier;
          encloseNumbers = !!arguments[0].encloseNumbers;
          escape = arguments[0].escape || escape;
          keys = !!arguments[0].keys;
        } else if (typeof arguments[0] === 'string') {
          delim = arguments[0];
        }
        if (typeof arguments[1] === 'string')
          qualifier = arguments[1];
        if (arguments[1] === null)
          qualifier = null;
        if (this.orig instanceof Array)
          dataArray = this.orig;
        else {
          for (var key in this.orig)
            if (this.orig.hasOwnProperty(key))
              if (keys)
                dataArray.push(key);
              else
                dataArray.push(this.orig[key]);
        }
        var rep = escape + qualifier;
        var buildString = [];
        for (var i = 0; i < dataArray.length; ++i) {
          var shouldQualify = hasVal(qualifier);
          if (typeof dataArray[i] == 'number')
            shouldQualify &= encloseNumbers;
          if (shouldQualify)
            buildString.push(qualifier);
          if (dataArray[i] !== null && dataArray[i] !== undefined) {
            var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
            buildString.push(d);
          } else
            buildString.push('');
          if (shouldQualify)
            buildString.push(qualifier);
          if (delim)
            buildString.push(delim);
        }
        buildString.length = buildString.length - 1;
        return new this.constructor(buildString.join(''));
      },
      toString: function() {
        return this.s;
      },
      underscore: function() {
        var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
        if ((new S(this.s.charAt(0))).isUpper()) {
          s = '_' + s;
        }
        return new this.constructor(s);
      },
      unescapeHTML: function() {
        return new this.constructor(this.s.replace(/\&([^;]+);/g, function(entity, entityCode) {
          var match;
          if (entityCode in escapeChars) {
            return escapeChars[entityCode];
          } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
          } else if (match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
          } else {
            return entity;
          }
        }));
      },
      valueOf: function() {
        return this.s.valueOf();
      },
      wrapHTML: function(tagName, tagAttrs) {
        var s = this.s,
            el = (tagName == null) ? 'span' : tagName,
            elAttr = '',
            wrapped = '';
        if (typeof tagAttrs == 'object')
          for (var prop in tagAttrs)
            elAttr += ' ' + prop + '="' + (new this.constructor(tagAttrs[prop])).escapeHTML() + '"';
        s = wrapped.concat('<', el, elAttr, '>', this, '</', el, '>');
        return new this.constructor(s);
      }
    };
    var methodsAdded = [];
    function extendPrototype() {
      for (var name in __sp) {
        (function(name) {
          var func = __sp[name];
          if (!__nsp.hasOwnProperty(name)) {
            methodsAdded.push(name);
            __nsp[name] = function() {
              String.prototype.s = this;
              return func.apply(this, arguments);
            };
          }
        })(name);
      }
    }
    function restorePrototype() {
      for (var i = 0; i < methodsAdded.length; ++i)
        delete String.prototype[methodsAdded[i]];
      methodsAdded.length = 0;
    }
    var nativeProperties = getNativeStringProperties();
    for (var name in nativeProperties) {
      (function(name) {
        var stringProp = __nsp[name];
        if (typeof stringProp == 'function') {
          if (!__sp[name]) {
            if (nativeProperties[name] === 'string') {
              __sp[name] = function() {
                return new this.constructor(stringProp.apply(this, arguments));
              };
            } else {
              __sp[name] = stringProp;
            }
          }
        }
      })(name);
    }
    __sp.repeat = __sp.times;
    __sp.include = __sp.contains;
    __sp.toInteger = __sp.toInt;
    __sp.toBool = __sp.toBoolean;
    __sp.decodeHTMLEntities = __sp.decodeHtmlEntities;
    __sp.constructor = S;
    function getNativeStringProperties() {
      var names = getNativeStringPropertyNames();
      var retObj = {};
      for (var i = 0; i < names.length; ++i) {
        var name = names[i];
        var func = __nsp[name];
        try {
          var type = typeof func.apply('teststring', []);
          retObj[name] = type;
        } catch (e) {}
      }
      return retObj;
    }
    function getNativeStringPropertyNames() {
      var results = [];
      if (Object.getOwnPropertyNames) {
        results = Object.getOwnPropertyNames(__nsp);
        results.splice(results.indexOf('valueOf'), 1);
        results.splice(results.indexOf('toString'), 1);
        return results;
      } else {
        var stringNames = {};
        var objectNames = [];
        for (var name in String.prototype)
          stringNames[name] = name;
        for (var name in Object.prototype)
          delete stringNames[name];
        for (var name in stringNames) {
          results.push(name);
        }
        return results;
      }
    }
    function Export(str) {
      return new S(str);
    }
    ;
    Export.extendPrototype = extendPrototype;
    Export.restorePrototype = restorePrototype;
    Export.VERSION = VERSION;
    Export.TMPL_OPEN = '{{';
    Export.TMPL_CLOSE = '}}';
    Export.ENTITIES = ENTITIES;
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = Export;
    } else {
      if (typeof define === "function" && define.amd) {
        System.register("string/lib/string", [], false, function(__require, __exports, __module) {
          return (function() {
            return Export;
          }).call(this);
        });
      } else {
        window.S = Export;
      }
    }
    function multiArgs(args, fn) {
      var result = [],
          i;
      for (i = 0; i < args.length; i++) {
        result.push(args[i]);
        if (fn)
          fn.call(args, args[i], i);
      }
      return result;
    }
    var escapeChars = {
      lt: '<',
      gt: '>',
      quot: '"',
      apos: "'",
      amp: '&'
    };
    var reversedEscapeChars = {};
    for (var key in escapeChars) {
      reversedEscapeChars[escapeChars[key]] = key;
    }
    ENTITIES = {
      "amp": "&",
      "gt": ">",
      "lt": "<",
      "quot": "\"",
      "apos": "'",
      "AElig": 198,
      "Aacute": 193,
      "Acirc": 194,
      "Agrave": 192,
      "Aring": 197,
      "Atilde": 195,
      "Auml": 196,
      "Ccedil": 199,
      "ETH": 208,
      "Eacute": 201,
      "Ecirc": 202,
      "Egrave": 200,
      "Euml": 203,
      "Iacute": 205,
      "Icirc": 206,
      "Igrave": 204,
      "Iuml": 207,
      "Ntilde": 209,
      "Oacute": 211,
      "Ocirc": 212,
      "Ograve": 210,
      "Oslash": 216,
      "Otilde": 213,
      "Ouml": 214,
      "THORN": 222,
      "Uacute": 218,
      "Ucirc": 219,
      "Ugrave": 217,
      "Uuml": 220,
      "Yacute": 221,
      "aacute": 225,
      "acirc": 226,
      "aelig": 230,
      "agrave": 224,
      "aring": 229,
      "atilde": 227,
      "auml": 228,
      "ccedil": 231,
      "eacute": 233,
      "ecirc": 234,
      "egrave": 232,
      "eth": 240,
      "euml": 235,
      "iacute": 237,
      "icirc": 238,
      "igrave": 236,
      "iuml": 239,
      "ntilde": 241,
      "oacute": 243,
      "ocirc": 244,
      "ograve": 242,
      "oslash": 248,
      "otilde": 245,
      "ouml": 246,
      "szlig": 223,
      "thorn": 254,
      "uacute": 250,
      "ucirc": 251,
      "ugrave": 249,
      "uuml": 252,
      "yacute": 253,
      "yuml": 255,
      "copy": 169,
      "reg": 174,
      "nbsp": 160,
      "iexcl": 161,
      "cent": 162,
      "pound": 163,
      "curren": 164,
      "yen": 165,
      "brvbar": 166,
      "sect": 167,
      "uml": 168,
      "ordf": 170,
      "laquo": 171,
      "not": 172,
      "shy": 173,
      "macr": 175,
      "deg": 176,
      "plusmn": 177,
      "sup1": 185,
      "sup2": 178,
      "sup3": 179,
      "acute": 180,
      "micro": 181,
      "para": 182,
      "middot": 183,
      "cedil": 184,
      "ordm": 186,
      "raquo": 187,
      "frac14": 188,
      "frac12": 189,
      "frac34": 190,
      "iquest": 191,
      "times": 215,
      "divide": 247,
      "OElig;": 338,
      "oelig;": 339,
      "Scaron;": 352,
      "scaron;": 353,
      "Yuml;": 376,
      "fnof;": 402,
      "circ;": 710,
      "tilde;": 732,
      "Alpha;": 913,
      "Beta;": 914,
      "Gamma;": 915,
      "Delta;": 916,
      "Epsilon;": 917,
      "Zeta;": 918,
      "Eta;": 919,
      "Theta;": 920,
      "Iota;": 921,
      "Kappa;": 922,
      "Lambda;": 923,
      "Mu;": 924,
      "Nu;": 925,
      "Xi;": 926,
      "Omicron;": 927,
      "Pi;": 928,
      "Rho;": 929,
      "Sigma;": 931,
      "Tau;": 932,
      "Upsilon;": 933,
      "Phi;": 934,
      "Chi;": 935,
      "Psi;": 936,
      "Omega;": 937,
      "alpha;": 945,
      "beta;": 946,
      "gamma;": 947,
      "delta;": 948,
      "epsilon;": 949,
      "zeta;": 950,
      "eta;": 951,
      "theta;": 952,
      "iota;": 953,
      "kappa;": 954,
      "lambda;": 955,
      "mu;": 956,
      "nu;": 957,
      "xi;": 958,
      "omicron;": 959,
      "pi;": 960,
      "rho;": 961,
      "sigmaf;": 962,
      "sigma;": 963,
      "tau;": 964,
      "upsilon;": 965,
      "phi;": 966,
      "chi;": 967,
      "psi;": 968,
      "omega;": 969,
      "thetasym;": 977,
      "upsih;": 978,
      "piv;": 982,
      "ensp;": 8194,
      "emsp;": 8195,
      "thinsp;": 8201,
      "zwnj;": 8204,
      "zwj;": 8205,
      "lrm;": 8206,
      "rlm;": 8207,
      "ndash;": 8211,
      "mdash;": 8212,
      "lsquo;": 8216,
      "rsquo;": 8217,
      "sbquo;": 8218,
      "ldquo;": 8220,
      "rdquo;": 8221,
      "bdquo;": 8222,
      "dagger;": 8224,
      "Dagger;": 8225,
      "bull;": 8226,
      "hellip;": 8230,
      "permil;": 8240,
      "prime;": 8242,
      "Prime;": 8243,
      "lsaquo;": 8249,
      "rsaquo;": 8250,
      "oline;": 8254,
      "frasl;": 8260,
      "euro;": 8364,
      "image;": 8465,
      "weierp;": 8472,
      "real;": 8476,
      "trade;": 8482,
      "alefsym;": 8501,
      "larr;": 8592,
      "uarr;": 8593,
      "rarr;": 8594,
      "darr;": 8595,
      "harr;": 8596,
      "crarr;": 8629,
      "lArr;": 8656,
      "uArr;": 8657,
      "rArr;": 8658,
      "dArr;": 8659,
      "hArr;": 8660,
      "forall;": 8704,
      "part;": 8706,
      "exist;": 8707,
      "empty;": 8709,
      "nabla;": 8711,
      "isin;": 8712,
      "notin;": 8713,
      "ni;": 8715,
      "prod;": 8719,
      "sum;": 8721,
      "minus;": 8722,
      "lowast;": 8727,
      "radic;": 8730,
      "prop;": 8733,
      "infin;": 8734,
      "ang;": 8736,
      "and;": 8743,
      "or;": 8744,
      "cap;": 8745,
      "cup;": 8746,
      "int;": 8747,
      "there4;": 8756,
      "sim;": 8764,
      "cong;": 8773,
      "asymp;": 8776,
      "ne;": 8800,
      "equiv;": 8801,
      "le;": 8804,
      "ge;": 8805,
      "sub;": 8834,
      "sup;": 8835,
      "nsub;": 8836,
      "sube;": 8838,
      "supe;": 8839,
      "oplus;": 8853,
      "otimes;": 8855,
      "perp;": 8869,
      "sdot;": 8901,
      "lceil;": 8968,
      "rceil;": 8969,
      "lfloor;": 8970,
      "rfloor;": 8971,
      "lang;": 9001,
      "rang;": 9002,
      "loz;": 9674,
      "spades;": 9824,
      "clubs;": 9827,
      "hearts;": 9829,
      "diams;": 9830
    };
  }).call(this);
  })();
(function() {
function define(){};  define.amd = {};
  (function(undefined) {
    var moment,
        VERSION = '2.8.2',
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,
        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        locales = {},
        momentProperties = [],
        hasModule = (typeof module !== 'undefined' && module.exports),
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        parseTokenOneOrTwoDigits = /\d\d?/,
        parseTokenOneToThreeDigits = /\d{1,3}/,
        parseTokenOneToFourDigits = /\d{1,4}/,
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
        parseTokenDigits = /\d+/,
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
        parseTokenT = /T/i,
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
        parseTokenOrdinal = /\d{1,2}/,
        parseTokenOneDigit = /\d/,
        parseTokenTwoDigits = /\d\d/,
        parseTokenThreeDigits = /\d{3}/,
        parseTokenFourDigits = /\d{4}/,
        parseTokenSixDigits = /[+-]?\d{6}/,
        parseTokenSignedNumber = /[+-]?\d+/,
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',
        isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/], ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/], ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/], ['GGGG-[W]WW', /\d{4}-W\d{2}/], ['YYYY-DDD', /\d{4}-\d{3}/]],
        isoTimes = [['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/], ['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]],
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
          'Milliseconds': 1,
          'Seconds': 1e3,
          'Minutes': 6e4,
          'Hours': 36e5,
          'Days': 864e5,
          'Months': 2592e6,
          'Years': 31536e6
        },
        unitAliases = {
          ms: 'millisecond',
          s: 'second',
          m: 'minute',
          h: 'hour',
          d: 'day',
          D: 'date',
          w: 'week',
          W: 'isoWeek',
          M: 'month',
          Q: 'quarter',
          y: 'year',
          DDD: 'dayOfYear',
          e: 'weekday',
          E: 'isoWeekday',
          gg: 'weekYear',
          GG: 'isoWeekYear'
        },
        camelFunctions = {
          dayofyear: 'dayOfYear',
          isoweekday: 'isoWeekday',
          isoweek: 'isoWeek',
          weekyear: 'weekYear',
          isoweekyear: 'isoWeekYear'
        },
        formatFunctions = {},
        relativeTimeThresholds = {
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        },
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),
        formatTokenFunctions = {
          M: function() {
            return this.month() + 1;
          },
          MMM: function(format) {
            return this.localeData().monthsShort(this, format);
          },
          MMMM: function(format) {
            return this.localeData().months(this, format);
          },
          D: function() {
            return this.date();
          },
          DDD: function() {
            return this.dayOfYear();
          },
          d: function() {
            return this.day();
          },
          dd: function(format) {
            return this.localeData().weekdaysMin(this, format);
          },
          ddd: function(format) {
            return this.localeData().weekdaysShort(this, format);
          },
          dddd: function(format) {
            return this.localeData().weekdays(this, format);
          },
          w: function() {
            return this.week();
          },
          W: function() {
            return this.isoWeek();
          },
          YY: function() {
            return leftZeroFill(this.year() % 100, 2);
          },
          YYYY: function() {
            return leftZeroFill(this.year(), 4);
          },
          YYYYY: function() {
            return leftZeroFill(this.year(), 5);
          },
          YYYYYY: function() {
            var y = this.year(),
                sign = y >= 0 ? '+' : '-';
            return sign + leftZeroFill(Math.abs(y), 6);
          },
          gg: function() {
            return leftZeroFill(this.weekYear() % 100, 2);
          },
          gggg: function() {
            return leftZeroFill(this.weekYear(), 4);
          },
          ggggg: function() {
            return leftZeroFill(this.weekYear(), 5);
          },
          GG: function() {
            return leftZeroFill(this.isoWeekYear() % 100, 2);
          },
          GGGG: function() {
            return leftZeroFill(this.isoWeekYear(), 4);
          },
          GGGGG: function() {
            return leftZeroFill(this.isoWeekYear(), 5);
          },
          e: function() {
            return this.weekday();
          },
          E: function() {
            return this.isoWeekday();
          },
          a: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), true);
          },
          A: function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), false);
          },
          H: function() {
            return this.hours();
          },
          h: function() {
            return this.hours() % 12 || 12;
          },
          m: function() {
            return this.minutes();
          },
          s: function() {
            return this.seconds();
          },
          S: function() {
            return toInt(this.milliseconds() / 100);
          },
          SS: function() {
            return leftZeroFill(toInt(this.milliseconds() / 10), 2);
          },
          SSS: function() {
            return leftZeroFill(this.milliseconds(), 3);
          },
          SSSS: function() {
            return leftZeroFill(this.milliseconds(), 3);
          },
          Z: function() {
            var a = -this.zone(),
                b = '+';
            if (a < 0) {
              a = -a;
              b = '-';
            }
            return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
          },
          ZZ: function() {
            var a = -this.zone(),
                b = '+';
            if (a < 0) {
              a = -a;
              b = '-';
            }
            return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
          },
          z: function() {
            return this.zoneAbbr();
          },
          zz: function() {
            return this.zoneName();
          },
          X: function() {
            return this.unix();
          },
          Q: function() {
            return this.quarter();
          }
        },
        deprecations = {},
        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];
    function dfl(a, b, c) {
      switch (arguments.length) {
        case 2:
          return a != null ? a : b;
        case 3:
          return a != null ? a : b != null ? b : c;
        default:
          throw new Error('Implement me');
      }
    }
    function hasOwnProp(a, b) {
      return hasOwnProperty.call(a, b);
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false
      };
    }
    function printMsg(msg) {
      if (moment.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (firstTime) {
          printMsg(msg);
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    function deprecateSimple(name, msg) {
      if (!deprecations[name]) {
        printMsg(msg);
        deprecations[name] = true;
      }
    }
    function padToken(func, count) {
      return function(a) {
        return leftZeroFill(func.call(this, a), count);
      };
    }
    function ordinalizeToken(func, period) {
      return function(a) {
        return this.localeData().ordinal(func.call(this, a), period);
      };
    }
    while (ordinalizeTokens.length) {
      i = ordinalizeTokens.pop();
      formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
      i = paddedTokens.pop();
      formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
    function Locale() {}
    function Moment(config, skipOverflow) {
      if (skipOverflow !== false) {
        checkOverflow(config);
      }
      copyConfig(this, config);
      this._d = new Date(+config._d);
    }
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
      this._days = +days + weeks * 7;
      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = moment.localeData();
      this._bubble();
    }
    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }
      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }
      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }
      return a;
    }
    function copyConfig(to, from) {
      var i,
          prop,
          val;
      if (typeof from._isAMomentObject !== 'undefined') {
        to._isAMomentObject = from._isAMomentObject;
      }
      if (typeof from._i !== 'undefined') {
        to._i = from._i;
      }
      if (typeof from._f !== 'undefined') {
        to._f = from._f;
      }
      if (typeof from._l !== 'undefined') {
        to._l = from._l;
      }
      if (typeof from._strict !== 'undefined') {
        to._strict = from._strict;
      }
      if (typeof from._tzm !== 'undefined') {
        to._tzm = from._tzm;
      }
      if (typeof from._isUTC !== 'undefined') {
        to._isUTC = from._isUTC;
      }
      if (typeof from._offset !== 'undefined') {
        to._offset = from._offset;
      }
      if (typeof from._pf !== 'undefined') {
        to._pf = from._pf;
      }
      if (typeof from._locale !== 'undefined') {
        to._locale = from._locale;
      }
      if (momentProperties.length > 0) {
        for (i in momentProperties) {
          prop = momentProperties[i];
          val = from[prop];
          if (typeof val !== 'undefined') {
            to[prop] = val;
          }
        }
      }
      return to;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.ceil(number);
      } else {
        return Math.floor(number);
      }
    }
    function leftZeroFill(number, targetLength, forceSign) {
      var output = '' + Math.abs(number),
          sign = number >= 0;
      while (output.length < targetLength) {
        output = '0' + output;
      }
      return (sign ? (forceSign ? '+' : '') : '-') + output;
    }
    function positiveMomentsDifference(base, other) {
      var res = {
        milliseconds: 0,
        months: 0
      };
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      other = makeAs(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur,
            tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
          tmp = val;
          val = period;
          period = tmp;
        }
        val = typeof val === 'string' ? +val : val;
        dur = moment.duration(val, period);
        addOrSubtractDurationFromMoment(this, dur, direction);
        return this;
      };
    }
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = duration._days,
          months = duration._months;
      updateOffset = updateOffset == null ? true : updateOffset;
      if (milliseconds) {
        mom._d.setTime(+mom._d + milliseconds * isAdding);
      }
      if (days) {
        rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
      }
      if (months) {
        rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
      }
      if (updateOffset) {
        moment.updateOffset(mom, days || months);
      }
    }
    function isArray(input) {
      return Object.prototype.toString.call(input) === '[object Array]';
    }
    function isDate(input) {
      return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;
      for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function normalizeUnits(units) {
      if (units) {
        var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
        units = unitAliases[units] || camelFunctions[lowered] || lowered;
      }
      return units;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    function makeList(field) {
      var count,
          setter;
      if (field.indexOf('week') === 0) {
        count = 7;
        setter = 'day';
      } else if (field.indexOf('month') === 0) {
        count = 12;
        setter = 'month';
      } else {
        return;
      }
      moment[field] = function(format, index) {
        var i,
            getter,
            method = moment._locale[field],
            results = [];
        if (typeof format === 'number') {
          index = format;
          format = undefined;
        }
        getter = function(i) {
          var m = moment().utc().set(setter, i);
          return method.call(moment._locale, m, format || '');
        };
        if (index != null) {
          return getter(index);
        } else {
          for (i = 0; i < count; i++) {
            results.push(getter(i));
          }
          return results;
        }
      };
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        if (coercedNumber >= 0) {
          value = Math.floor(coercedNumber);
        } else {
          value = Math.ceil(coercedNumber);
        }
      }
      return value;
    }
    function daysInMonth(year, month) {
      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
    function weeksInYear(year, dow, doy) {
      return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    function checkOverflow(m) {
      var overflow;
      if (m._a && m._pf.overflow === -2) {
        overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        m._pf.overflow = overflow;
      }
    }
    function isValid(m) {
      if (m._isValid == null) {
        m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
        if (m._strict) {
          m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0;
        }
      }
      return m._isValid;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    }
    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));
          if (locale) {
            return locale;
          }
          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return null;
    }
    function loadLocale(name) {
      var oldLocale = null;
      if (!locales[name] && hasModule) {
        try {
          oldLocale = moment.locale();
          require('./locale/' + name);
          moment.locale(oldLocale);
        } catch (e) {}
      }
      return locales[name];
    }
    function makeAs(input, model) {
      return model._isUTC ? moment(input).zone(model._offset || 0) : moment(input).local();
    }
    extend(Locale.prototype, {
      set: function(config) {
        var prop,
            i;
        for (i in config) {
          prop = config[i];
          if (typeof prop === 'function') {
            this[i] = prop;
          } else {
            this['_' + i] = prop;
          }
        }
      },
      _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      months: function(m) {
        return this._months[m.month()];
      },
      _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      monthsShort: function(m) {
        return this._monthsShort[m.month()];
      },
      monthsParse: function(monthName) {
        var i,
            mom,
            regex;
        if (!this._monthsParse) {
          this._monthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          if (!this._monthsParse[i]) {
            mom = moment.utc([2000, i]);
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          if (this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      },
      _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdays: function(m) {
        return this._weekdays[m.day()];
      },
      _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysShort: function(m) {
        return this._weekdaysShort[m.day()];
      },
      _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      weekdaysMin: function(m) {
        return this._weekdaysMin[m.day()];
      },
      weekdaysParse: function(weekdayName) {
        var i,
            mom,
            regex;
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          if (!this._weekdaysParse[i]) {
            mom = moment([2000, 1]).day(i);
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          if (this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      },
      _longDateFormat: {
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY LT',
        LLLL: 'dddd, MMMM D, YYYY LT'
      },
      longDateFormat: function(key) {
        var output = this._longDateFormat[key];
        if (!output && this._longDateFormat[key.toUpperCase()]) {
          output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
            return val.slice(1);
          });
          this._longDateFormat[key] = output;
        }
        return output;
      },
      isPM: function(input) {
        return ((input + '').toLowerCase().charAt(0) === 'p');
      },
      _meridiemParse: /[ap]\.?m?\.?/i,
      meridiem: function(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      },
      _calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      calendar: function(key, mom) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.apply(mom) : output;
      },
      _relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      relativeTime: function(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      },
      pastFuture: function(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
      },
      ordinal: function(number) {
        return this._ordinal.replace('%d', number);
      },
      _ordinal: '%d',
      preparse: function(string) {
        return string;
      },
      postformat: function(string) {
        return string;
      },
      week: function(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      },
      _week: {
        dow: 0,
        doy: 6
      },
      _invalidDate: 'Invalid date',
      invalidDate: function() {
        return this._invalidDate;
      }
    });
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;
      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = '';
        for (i = 0; i < length; i++) {
          output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
      };
    }
    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }
      format = expandFormat(format, m.localeData());
      if (!formatFunctions[format]) {
        formatFunctions[format] = makeFormatFunction(format);
      }
      return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format;
    }
    function getParseRegexForToken(token, config) {
      var a,
          strict = config._strict;
      switch (token) {
        case 'Q':
          return parseTokenOneDigit;
        case 'DDDD':
          return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
          return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
          return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
          return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
          if (strict) {
            return parseTokenOneDigit;
          }
        case 'SS':
          if (strict) {
            return parseTokenTwoDigits;
          }
        case 'SSS':
          if (strict) {
            return parseTokenThreeDigits;
          }
        case 'DDD':
          return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
          return parseTokenWord;
        case 'a':
        case 'A':
          return config._locale._meridiemParse;
        case 'X':
          return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
          return parseTokenTimezone;
        case 'T':
          return parseTokenT;
        case 'SSSS':
          return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
          return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
          return parseTokenOneOrTwoDigits;
        case 'Do':
          return parseTokenOrdinal;
        default:
          a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
          return a;
      }
    }
    function timezoneMinutesFromString(string) {
      string = string || '';
      var possibleTzMatches = (string.match(parseTokenTimezone) || []),
          tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
          parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
          minutes = +(parts[1] * 60) + toInt(parts[2]);
      return parts[0] === '+' ? -minutes : minutes;
    }
    function addTimeToArrayFromToken(token, input, config) {
      var a,
          datePartArray = config._a;
      switch (token) {
        case 'Q':
          if (input != null) {
            datePartArray[MONTH] = (toInt(input) - 1) * 3;
          }
          break;
        case 'M':
        case 'MM':
          if (input != null) {
            datePartArray[MONTH] = toInt(input) - 1;
          }
          break;
        case 'MMM':
        case 'MMMM':
          a = config._locale.monthsParse(input);
          if (a != null) {
            datePartArray[MONTH] = a;
          } else {
            config._pf.invalidMonth = input;
          }
          break;
        case 'D':
        case 'DD':
          if (input != null) {
            datePartArray[DATE] = toInt(input);
          }
          break;
        case 'Do':
          if (input != null) {
            datePartArray[DATE] = toInt(parseInt(input, 10));
          }
          break;
        case 'DDD':
        case 'DDDD':
          if (input != null) {
            config._dayOfYear = toInt(input);
          }
          break;
        case 'YY':
          datePartArray[YEAR] = moment.parseTwoDigitYear(input);
          break;
        case 'YYYY':
        case 'YYYYY':
        case 'YYYYYY':
          datePartArray[YEAR] = toInt(input);
          break;
        case 'a':
        case 'A':
          config._isPm = config._locale.isPM(input);
          break;
        case 'H':
        case 'HH':
        case 'h':
        case 'hh':
          datePartArray[HOUR] = toInt(input);
          break;
        case 'm':
        case 'mm':
          datePartArray[MINUTE] = toInt(input);
          break;
        case 's':
        case 'ss':
          datePartArray[SECOND] = toInt(input);
          break;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'SSSS':
          datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
          break;
        case 'X':
          config._d = new Date(parseFloat(input) * 1000);
          break;
        case 'Z':
        case 'ZZ':
          config._useUTC = true;
          config._tzm = timezoneMinutesFromString(input);
          break;
        case 'dd':
        case 'ddd':
        case 'dddd':
          a = config._locale.weekdaysParse(input);
          if (a != null) {
            config._w = config._w || {};
            config._w['d'] = a;
          } else {
            config._pf.invalidWeekday = input;
          }
          break;
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
          token = token.substr(0, 1);
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
          token = token.substr(0, 2);
          if (input) {
            config._w = config._w || {};
            config._w[token] = toInt(input);
          }
          break;
        case 'gg':
        case 'GG':
          config._w = config._w || {};
          config._w[token] = moment.parseTwoDigitYear(input);
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w,
          weekYear,
          week,
          weekday,
          dow,
          doy,
          temp;
      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
        week = dfl(w.W, 1);
        weekday = dfl(w.E, 1);
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
        week = dfl(w.w, 1);
        if (w.d != null) {
          weekday = w.d;
          if (weekday < dow) {
            ++week;
          }
        } else if (w.e != null) {
          weekday = w.e + dow;
        } else {
          weekday = dow;
        }
      }
      temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
    function dateFromConfig(config) {
      var i,
          date,
          input = [],
          currentDate,
          yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear) {
        yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse)) {
          config._pf._overflowDayOfYear = true;
        }
        date = makeUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }
      config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
      }
    }
    function dateFromObject(config) {
      var normalizedInput;
      if (config._d) {
        return;
      }
      normalizedInput = normalizeObjectUnits(config._i);
      config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
      dateFromConfig(config);
    }
    function currentDateArray(config) {
      var now = new Date();
      if (config._useUTC) {
        return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
      } else {
        return [now.getFullYear(), now.getMonth(), now.getDate()];
      }
    }
    function makeDateFromStringAndFormat(config) {
      if (config._f === moment.ISO_8601) {
        parseISO(config);
        return;
      }
      config._a = [];
      config._pf.empty = true;
      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            config._pf.unusedInput.push(skipped);
          }
          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            config._pf.empty = false;
          } else {
            config._pf.unusedTokens.push(token);
          }
          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          config._pf.unusedTokens.push(token);
        }
      }
      config._pf.charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        config._pf.unusedInput.push(string);
      }
      if (config._isPm && config._a[HOUR] < 12) {
        config._a[HOUR] += 12;
      }
      if (config._isPm === false && config._a[HOUR] === 12) {
        config._a[HOUR] = 0;
      }
      dateFromConfig(config);
      checkOverflow(config);
    }
    function unescapeFormat(s) {
      return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      });
    }
    function regexpEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    function makeDateFromStringAndArray(config) {
      var tempConfig,
          bestMoment,
          scoreToBeat,
          i,
          currentScore;
      if (config._f.length === 0) {
        config._pf.invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }
      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        tempConfig._pf = defaultParsingFlags();
        tempConfig._f = config._f[i];
        makeDateFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
          continue;
        }
        currentScore += tempConfig._pf.charsLeftOver;
        currentScore += tempConfig._pf.unusedTokens.length * 10;
        tempConfig._pf.score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function parseISO(config) {
      var i,
          l,
          string = config._i,
          match = isoRegex.exec(string);
      if (match) {
        config._pf.iso = true;
        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(string)) {
            config._f = isoDates[i][0] + (match[6] || ' ');
            break;
          }
        }
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(string)) {
            config._f += isoTimes[i][0];
            break;
          }
        }
        if (string.match(parseTokenTimezone)) {
          config._f += 'Z';
        }
        makeDateFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function makeDateFromString(config) {
      parseISO(config);
      if (config._isValid === false) {
        delete config._isValid;
        moment.createFromInputFallback(config);
      }
    }
    function makeDateFromInput(config) {
      var input = config._i,
          matched;
      if (input === undefined) {
        config._d = new Date();
      } else if (isDate(input)) {
        config._d = new Date(+input);
      } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
        config._d = new Date(+matched[1]);
      } else if (typeof input === 'string') {
        makeDateFromString(config);
      } else if (isArray(input)) {
        config._a = input.slice(0);
        dateFromConfig(config);
      } else if (typeof(input) === 'object') {
        dateFromObject(config);
      } else if (typeof(input) === 'number') {
        config._d = new Date(input);
      } else {
        moment.createFromInputFallback(config);
      }
    }
    function makeDate(y, m, d, h, M, s, ms) {
      var date = new Date(y, m, d, h, M, s, ms);
      if (y < 1970) {
        date.setFullYear(y);
      }
      return date;
    }
    function makeUTCDate(y) {
      var date = new Date(Date.UTC.apply(null, arguments));
      if (y < 1970) {
        date.setUTCFullYear(y);
      }
      return date;
    }
    function parseWeekday(input, locale) {
      if (typeof input === 'string') {
        if (!isNaN(input)) {
          input = parseInt(input, 10);
        } else {
          input = locale.weekdaysParse(input);
          if (typeof input !== 'number') {
            return null;
          }
        }
      }
      return input;
    }
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime(posNegDuration, withoutSuffix, locale) {
      var duration = moment.duration(posNegDuration).abs(),
          seconds = round(duration.as('s')),
          minutes = round(duration.as('m')),
          hours = round(duration.as('h')),
          days = round(duration.as('d')),
          months = round(duration.as('M')),
          years = round(duration.as('y')),
          args = seconds < relativeTimeThresholds.s && ['s', seconds] || minutes === 1 && ['m'] || minutes < relativeTimeThresholds.m && ['mm', minutes] || hours === 1 && ['h'] || hours < relativeTimeThresholds.h && ['hh', hours] || days === 1 && ['d'] || days < relativeTimeThresholds.d && ['dd', days] || months === 1 && ['M'] || months < relativeTimeThresholds.M && ['MM', months] || years === 1 && ['y'] || ['yy', years];
      args[2] = withoutSuffix;
      args[3] = +posNegDuration > 0;
      args[4] = locale;
      return substituteTimeAgo.apply({}, args);
    }
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
      var end = firstDayOfWeekOfYear - firstDayOfWeek,
          daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
          adjustedMoment;
      if (daysToDayOfWeek > end) {
        daysToDayOfWeek -= 7;
      }
      if (daysToDayOfWeek < end - 7) {
        daysToDayOfWeek += 7;
      }
      adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
      return {
        week: Math.ceil(adjustedMoment.dayOfYear() / 7),
        year: adjustedMoment.year()
      };
    }
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
      var d = makeUTCDate(year, 0, 1).getUTCDay(),
          daysToAdd,
          dayOfYear;
      d = d === 0 ? 7 : d;
      weekday = weekday != null ? weekday : firstDayOfWeek;
      daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
      dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
      return {
        year: dayOfYear > 0 ? year : year - 1,
        dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
      };
    }
    function makeMoment(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || moment.localeData(config._l);
      if (input === null || (format === undefined && input === '')) {
        return moment.invalid({nullInput: true});
      }
      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }
      if (moment.isMoment(input)) {
        return new Moment(input, true);
      } else if (format) {
        if (isArray(format)) {
          makeDateFromStringAndArray(config);
        } else {
          makeDateFromStringAndFormat(config);
        }
      } else {
        makeDateFromInput(config);
      }
      return new Moment(config);
    }
    moment = function(input, format, locale, strict) {
      var c;
      if (typeof(locale) === 'boolean') {
        strict = locale;
        locale = undefined;
      }
      c = {};
      c._isAMomentObject = true;
      c._i = input;
      c._f = format;
      c._l = locale;
      c._strict = strict;
      c._isUTC = false;
      c._pf = defaultParsingFlags();
      return makeMoment(c);
    };
    moment.suppressDeprecationWarnings = false;
    moment.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
      config._d = new Date(config._i);
    });
    function pickBy(fn, moments) {
      var res,
          i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return moment();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    moment.min = function() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    };
    moment.max = function() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    };
    moment.utc = function(input, format, locale, strict) {
      var c;
      if (typeof(locale) === 'boolean') {
        strict = locale;
        locale = undefined;
      }
      c = {};
      c._isAMomentObject = true;
      c._useUTC = true;
      c._isUTC = true;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      c._pf = defaultParsingFlags();
      return makeMoment(c).utc();
    };
    moment.unix = function(input) {
      return moment(input * 1000);
    };
    moment.duration = function(input, key) {
      var duration = input,
          match = null,
          sign,
          ret,
          parseIso,
          diffRes;
      if (moment.isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (typeof input === 'number') {
        duration = {};
        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(match[MILLISECOND]) * sign
        };
      } else if (!!(match = isoDurationRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        parseIso = function(inp) {
          var res = inp && parseFloat(inp.replace(',', '.'));
          return (isNaN(res) ? 0 : res) * sign;
        };
        duration = {
          y: parseIso(match[2]),
          M: parseIso(match[3]),
          d: parseIso(match[4]),
          h: parseIso(match[5]),
          m: parseIso(match[6]),
          s: parseIso(match[7]),
          w: parseIso(match[8])
        };
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(moment(duration.from), moment(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }
      return ret;
    };
    moment.version = VERSION;
    moment.defaultFormat = isoFormat;
    moment.ISO_8601 = function() {};
    moment.momentProperties = momentProperties;
    moment.updateOffset = function() {};
    moment.relativeTimeThreshold = function(threshold, limit) {
      if (relativeTimeThresholds[threshold] === undefined) {
        return false;
      }
      if (limit === undefined) {
        return relativeTimeThresholds[threshold];
      }
      relativeTimeThresholds[threshold] = limit;
      return true;
    };
    moment.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', function(key, value) {
      return moment.locale(key, value);
    });
    moment.locale = function(key, values) {
      var data;
      if (key) {
        if (typeof(values) !== 'undefined') {
          data = moment.defineLocale(key, values);
        } else {
          data = moment.localeData(key);
        }
        if (data) {
          moment.duration._locale = moment._locale = data;
        }
      }
      return moment._locale._abbr;
    };
    moment.defineLocale = function(name, values) {
      if (values !== null) {
        values.abbr = name;
        if (!locales[name]) {
          locales[name] = new Locale();
        }
        locales[name].set(values);
        moment.locale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    };
    moment.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', function(key) {
      return moment.localeData(key);
    });
    moment.localeData = function(key) {
      var locale;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return moment._locale;
      }
      if (!isArray(key)) {
        locale = loadLocale(key);
        if (locale) {
          return locale;
        }
        key = [key];
      }
      return chooseLocale(key);
    };
    moment.isMoment = function(obj) {
      return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };
    moment.isDuration = function(obj) {
      return obj instanceof Duration;
    };
    for (i = lists.length - 1; i >= 0; --i) {
      makeList(lists[i]);
    }
    moment.normalizeUnits = function(units) {
      return normalizeUnits(units);
    };
    moment.invalid = function(flags) {
      var m = moment.utc(NaN);
      if (flags != null) {
        extend(m._pf, flags);
      } else {
        m._pf.userInvalidated = true;
      }
      return m;
    };
    moment.parseZone = function() {
      return moment.apply(null, arguments).parseZone();
    };
    moment.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    extend(moment.fn = Moment.prototype, {
      clone: function() {
        return moment(this);
      },
      valueOf: function() {
        return +this._d + ((this._offset || 0) * 60000);
      },
      unix: function() {
        return Math.floor(+this / 1000);
      },
      toString: function() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      },
      toDate: function() {
        return this._offset ? new Date(+this) : this._d;
      },
      toISOString: function() {
        var m = moment(this).utc();
        if (0 < m.year() && m.year() <= 9999) {
          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        } else {
          return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
      },
      toArray: function() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
      },
      isValid: function() {
        return isValid(this);
      },
      isDSTShifted: function() {
        if (this._a) {
          return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
        }
        return false;
      },
      parsingFlags: function() {
        return extend({}, this._pf);
      },
      invalidAt: function() {
        return this._pf.overflow;
      },
      utc: function(keepLocalTime) {
        return this.zone(0, keepLocalTime);
      },
      local: function(keepLocalTime) {
        if (this._isUTC) {
          this.zone(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.add(this._d.getTimezoneOffset(), 'm');
          }
        }
        return this;
      },
      format: function(inputString) {
        var output = formatMoment(this, inputString || moment.defaultFormat);
        return this.localeData().postformat(output);
      },
      add: createAdder(1, 'add'),
      subtract: createAdder(-1, 'subtract'),
      diff: function(input, units, asFloat) {
        var that = makeAs(input, this),
            zoneDiff = (this.zone() - that.zone()) * 6e4,
            diff,
            output;
        units = normalizeUnits(units);
        if (units === 'year' || units === 'month') {
          diff = (this.daysInMonth() + that.daysInMonth()) * 432e5;
          output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
          output += ((this - moment(this).startOf('month')) - (that - moment(that).startOf('month'))) / diff;
          output -= ((this.zone() - moment(this).startOf('month').zone()) - (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
          if (units === 'year') {
            output = output / 12;
          }
        } else {
          diff = (this - that);
          output = units === 'second' ? diff / 1e3 : units === 'minute' ? diff / 6e4 : units === 'hour' ? diff / 36e5 : units === 'day' ? (diff - zoneDiff) / 864e5 : units === 'week' ? (diff - zoneDiff) / 6048e5 : diff;
        }
        return asFloat ? output : absRound(output);
      },
      from: function(time, withoutSuffix) {
        return moment.duration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      },
      fromNow: function(withoutSuffix) {
        return this.from(moment(), withoutSuffix);
      },
      calendar: function(time) {
        var now = time || moment(),
            sod = makeAs(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(this.localeData().calendar(format, this));
      },
      isLeapYear: function() {
        return isLeapYear(this.year());
      },
      isDST: function() {
        return (this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone());
      },
      day: function(input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      },
      month: makeAccessor('Month', true),
      startOf: function(units) {
        units = normalizeUnits(units);
        switch (units) {
          case 'year':
            this.month(0);
          case 'quarter':
          case 'month':
            this.date(1);
          case 'week':
          case 'isoWeek':
          case 'day':
            this.hours(0);
          case 'hour':
            this.minutes(0);
          case 'minute':
            this.seconds(0);
          case 'second':
            this.milliseconds(0);
        }
        if (units === 'week') {
          this.weekday(0);
        } else if (units === 'isoWeek') {
          this.isoWeekday(1);
        }
        if (units === 'quarter') {
          this.month(Math.floor(this.month() / 3) * 3);
        }
        return this;
      },
      endOf: function(units) {
        units = normalizeUnits(units);
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
      },
      isAfter: function(input, units) {
        units = typeof units !== 'undefined' ? units : 'millisecond';
        return +this.clone().startOf(units) > +moment(input).startOf(units);
      },
      isBefore: function(input, units) {
        units = typeof units !== 'undefined' ? units : 'millisecond';
        return +this.clone().startOf(units) < +moment(input).startOf(units);
      },
      isSame: function(input, units) {
        units = units || 'ms';
        return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
      },
      min: deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function(other) {
        other = moment.apply(null, arguments);
        return other < this ? this : other;
      }),
      max: deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function(other) {
        other = moment.apply(null, arguments);
        return other > this ? this : other;
      }),
      zone: function(input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
          if (typeof input === 'string') {
            input = timezoneMinutesFromString(input);
          }
          if (Math.abs(input) < 16) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = this._d.getTimezoneOffset();
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.subtract(localAdjust, 'm');
          }
          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              moment.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
        } else {
          return this._isUTC ? offset : this._d.getTimezoneOffset();
        }
        return this;
      },
      zoneAbbr: function() {
        return this._isUTC ? 'UTC' : '';
      },
      zoneName: function() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      },
      parseZone: function() {
        if (this._tzm) {
          this.zone(this._tzm);
        } else if (typeof this._i === 'string') {
          this.zone(this._i);
        }
        return this;
      },
      hasAlignedHourOffset: function(input) {
        if (!input) {
          input = 0;
        } else {
          input = moment(input).zone();
        }
        return (this.zone() - input) % 60 === 0;
      },
      daysInMonth: function() {
        return daysInMonth(this.year(), this.month());
      },
      dayOfYear: function(input) {
        var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
      },
      quarter: function(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      },
      weekYear: function(input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
      },
      isoWeekYear: function(input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
      },
      week: function(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      },
      isoWeek: function(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      },
      weekday: function(input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      },
      isoWeekday: function(input) {
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
      },
      isoWeeksInYear: function() {
        return weeksInYear(this.year(), 1, 4);
      },
      weeksInYear: function() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      },
      get: function(units) {
        units = normalizeUnits(units);
        return this[units]();
      },
      set: function(units, value) {
        units = normalizeUnits(units);
        if (typeof this[units] === 'function') {
          this[units](value);
        }
        return this;
      },
      locale: function(key) {
        if (key === undefined) {
          return this._locale._abbr;
        } else {
          this._locale = moment.localeData(key);
          return this;
        }
      },
      lang: deprecate('moment().lang() is deprecated. Use moment().localeData() instead.', function(key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          this._locale = moment.localeData(key);
          return this;
        }
      }),
      localeData: function() {
        return this._locale;
      }
    });
    function rawMonthSetter(mom, value) {
      var dayOfMonth;
      if (typeof value === 'string') {
        value = mom.localeData().monthsParse(value);
        if (typeof value !== 'number') {
          return mom;
        }
      }
      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
    }
    function rawGetter(mom, unit) {
      return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }
    function rawSetter(mom, unit, value) {
      if (unit === 'Month') {
        return rawMonthSetter(mom, value);
      } else {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
    function makeAccessor(unit, keepTime) {
      return function(value) {
        if (value != null) {
          rawSetter(this, unit, value);
          moment.updateOffset(this, keepTime);
          return this;
        } else {
          return rawGetter(this, unit);
        }
      };
    }
    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;
    moment.fn.toJSON = moment.fn.toISOString;
    function daysToYears(days) {
      return days * 400 / 146097;
    }
    function yearsToDays(years) {
      return years * 146097 / 400;
    }
    extend(moment.duration.fn = Duration.prototype, {
      _bubble: function() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years = 0;
        data.milliseconds = milliseconds % 1000;
        seconds = absRound(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absRound(seconds / 60);
        data.minutes = minutes % 60;
        hours = absRound(minutes / 60);
        data.hours = hours % 24;
        days += absRound(hours / 24);
        years = absRound(daysToYears(days));
        days -= absRound(yearsToDays(years));
        months += absRound(days / 30);
        days %= 30;
        years += absRound(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
      },
      abs: function() {
        this._milliseconds = Math.abs(this._milliseconds);
        this._days = Math.abs(this._days);
        this._months = Math.abs(this._months);
        this._data.milliseconds = Math.abs(this._data.milliseconds);
        this._data.seconds = Math.abs(this._data.seconds);
        this._data.minutes = Math.abs(this._data.minutes);
        this._data.hours = Math.abs(this._data.hours);
        this._data.months = Math.abs(this._data.months);
        this._data.years = Math.abs(this._data.years);
        return this;
      },
      weeks: function() {
        return absRound(this.days() / 7);
      },
      valueOf: function() {
        return this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6;
      },
      humanize: function(withSuffix) {
        var output = relativeTime(this, !withSuffix, this.localeData());
        if (withSuffix) {
          output = this.localeData().pastFuture(+this, output);
        }
        return this.localeData().postformat(output);
      },
      add: function(input, val) {
        var dur = moment.duration(input, val);
        this._milliseconds += dur._milliseconds;
        this._days += dur._days;
        this._months += dur._months;
        this._bubble();
        return this;
      },
      subtract: function(input, val) {
        var dur = moment.duration(input, val);
        this._milliseconds -= dur._milliseconds;
        this._days -= dur._days;
        this._months -= dur._months;
        this._bubble();
        return this;
      },
      get: function(units) {
        units = normalizeUnits(units);
        return this[units.toLowerCase() + 's']();
      },
      as: function(units) {
        var days,
            months;
        units = normalizeUnits(units);
        days = this._days + this._milliseconds / 864e5;
        if (units === 'month' || units === 'year') {
          months = this._months + daysToYears(days) * 12;
          return units === 'month' ? months : months / 12;
        } else {
          days += yearsToDays(this._months / 12);
          switch (units) {
            case 'week':
              return days / 7;
            case 'day':
              return days;
            case 'hour':
              return days * 24;
            case 'minute':
              return days * 24 * 60;
            case 'second':
              return days * 24 * 60 * 60;
            case 'millisecond':
              return days * 24 * 60 * 60 * 1000;
            default:
              throw new Error('Unknown unit ' + units);
          }
        }
      },
      lang: moment.fn.lang,
      locale: moment.fn.locale,
      toIsoString: deprecate('toIsoString() is deprecated. Please use toISOString() instead ' + '(notice the capitals)', function() {
        return this.toISOString();
      }),
      toISOString: function() {
        var years = Math.abs(this.years()),
            months = Math.abs(this.months()),
            days = Math.abs(this.days()),
            hours = Math.abs(this.hours()),
            minutes = Math.abs(this.minutes()),
            seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
        if (!this.asSeconds()) {
          return 'P0D';
        }
        return (this.asSeconds() < 0 ? '-' : '') + 'P' + (years ? years + 'Y' : '') + (months ? months + 'M' : '') + (days ? days + 'D' : '') + ((hours || minutes || seconds) ? 'T' : '') + (hours ? hours + 'H' : '') + (minutes ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
      },
      localeData: function() {
        return this._locale;
      }
    });
    moment.duration.fn.toString = moment.duration.fn.toISOString;
    function makeDurationGetter(name) {
      moment.duration.fn[name] = function() {
        return this._data[name];
      };
    }
    for (i in unitMillisecondFactors) {
      if (hasOwnProp(unitMillisecondFactors, i)) {
        makeDurationGetter(i.toLowerCase());
      }
    }
    moment.duration.fn.asMilliseconds = function() {
      return this.as('ms');
    };
    moment.duration.fn.asSeconds = function() {
      return this.as('s');
    };
    moment.duration.fn.asMinutes = function() {
      return this.as('m');
    };
    moment.duration.fn.asHours = function() {
      return this.as('h');
    };
    moment.duration.fn.asDays = function() {
      return this.as('d');
    };
    moment.duration.fn.asWeeks = function() {
      return this.as('weeks');
    };
    moment.duration.fn.asMonths = function() {
      return this.as('M');
    };
    moment.duration.fn.asYears = function() {
      return this.as('y');
    };
    moment.locale('en', {ordinal: function(number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
        return number + output;
      }});
    function makeGlobal(shouldDeprecate) {
      if (typeof ender !== 'undefined') {
        return;
      }
      oldGlobalMoment = globalScope.moment;
      if (shouldDeprecate) {
        globalScope.moment = deprecate('Accessing Moment through the global scope is ' + 'deprecated, and will be removed in an upcoming ' + 'release.', moment);
      } else {
        globalScope.moment = moment;
      }
    }
    if (hasModule) {
      module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
      System.register("moment/moment", [], false, function(__require, __exports, __module) {
        (function(require, exports, module) {
          if (module.config && module.config() && module.config().noGlobal === true) {
            globalScope.moment = oldGlobalMoment;
          }
          return moment;
        }).call(__exports, __require, __exports, __module);
      });
      makeGlobal(true);
    } else {
      makeGlobal();
    }
  }).call(this);
  })();
(function() {
function define(){};  define.amd = {};
  !function(name, context, definition) {
    if (typeof module != 'undefined' && module.exports)
      module.exports = definition();
    else if (typeof define == 'function' && define.amd)
      ;
    else
      context[name] = definition();
  }('reqwest', this, function() {
    var win = window,
        doc = document,
        httpsRe = /^http/,
        protocolRe = /(^\w+):\/\//,
        twoHundo = /^(20\d|1223)$/,
        byTag = 'getElementsByTagName',
        readyState = 'readyState',
        contentType = 'Content-Type',
        requestedWith = 'X-Requested-With',
        head = doc[byTag]('head')[0],
        uniqid = 0,
        callbackPrefix = 'reqwest_' + (+new Date()),
        lastValue,
        xmlHttpRequest = 'XMLHttpRequest',
        xDomainRequest = 'XDomainRequest',
        noop = function() {},
        isArray = typeof Array.isArray == 'function' ? Array.isArray : function(a) {
          return a instanceof Array;
        },
        defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded',
          'requestedWith': xmlHttpRequest,
          'accept': {
            '*': 'text/javascript, text/html, application/xml, text/xml, */*',
            'xml': 'application/xml, text/xml',
            'html': 'text/html',
            'text': 'text/plain',
            'json': 'application/json, text/javascript',
            'js': 'application/javascript, text/javascript'
          }
        },
        xhr = function(o) {
          if (o['crossOrigin'] === true) {
            var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null;
            if (xhr && 'withCredentials' in xhr) {
              return xhr;
            } else if (win[xDomainRequest]) {
              return new XDomainRequest();
            } else {
              throw new Error('Browser does not support cross-origin requests');
            }
          } else if (win[xmlHttpRequest]) {
            return new XMLHttpRequest();
          } else {
            return new ActiveXObject('Microsoft.XMLHTTP');
          }
        },
        globalSetupOptions = {dataFilter: function(data) {
            return data;
          }};
    function succeed(r) {
      var protocol = protocolRe.exec(r.url);
      protocol = (protocol && protocol[1]) || window.location.protocol;
      return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response;
    }
    function handleReadyState(r, success, error) {
      return function() {
        if (r._aborted)
          return error(r.request);
        if (r.request && r.request[readyState] == 4) {
          r.request.onreadystatechange = noop;
          if (succeed(r))
            success(r.request);
          else
            error(r.request);
        }
      };
    }
    function setHeaders(http, o) {
      var headers = o['headers'] || {},
          h;
      headers['Accept'] = headers['Accept'] || defaultHeaders['accept'][o['type']] || defaultHeaders['accept']['*'];
      var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
      if (!o['crossOrigin'] && !headers[requestedWith])
        headers[requestedWith] = defaultHeaders['requestedWith'];
      if (!headers[contentType] && !isAFormData)
        headers[contentType] = o['contentType'] || defaultHeaders['contentType'];
      for (h in headers)
        headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h]);
    }
    function setCredentials(http, o) {
      if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
        http.withCredentials = !!o['withCredentials'];
      }
    }
    function generalCallback(data) {
      lastValue = data;
    }
    function urlappend(url, s) {
      return url + (/\?/.test(url) ? '&' : '?') + s;
    }
    function handleJsonp(o, fn, err, url) {
      var reqId = uniqid++,
          cbkey = o['jsonpCallback'] || 'callback',
          cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId),
          cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)'),
          match = url.match(cbreg),
          script = doc.createElement('script'),
          loaded = 0,
          isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1;
      if (match) {
        if (match[3] === '?') {
          url = url.replace(cbreg, '$1=' + cbval);
        } else {
          cbval = match[3];
        }
      } else {
        url = urlappend(url, cbkey + '=' + cbval);
      }
      win[cbval] = generalCallback;
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
        script.htmlFor = script.id = '_reqwest_' + reqId;
      }
      script.onload = script.onreadystatechange = function() {
        if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
          return false;
        }
        script.onload = script.onreadystatechange = null;
        script.onclick && script.onclick();
        fn(lastValue);
        lastValue = undefined;
        head.removeChild(script);
        loaded = 1;
      };
      head.appendChild(script);
      return {abort: function() {
          script.onload = script.onreadystatechange = null;
          err({}, 'Request is aborted: timeout', {});
          lastValue = undefined;
          head.removeChild(script);
          loaded = 1;
        }};
    }
    function getRequest(fn, err) {
      var o = this.o,
          method = (o['method'] || 'GET').toUpperCase(),
          url = typeof o === 'string' ? o : o['url'],
          data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string') ? reqwest.toQueryString(o['data']) : (o['data'] || null),
          http,
          sendWait = false;
      if ((o['type'] == 'jsonp' || method == 'GET') && data) {
        url = urlappend(url, data);
        data = null;
      }
      if (o['type'] == 'jsonp')
        return handleJsonp(o, fn, err, url);
      http = (o.xhr && o.xhr(o)) || xhr(o);
      http.open(method, url, o['async'] === false ? false : true);
      setHeaders(http, o);
      setCredentials(http, o);
      if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
        http.onload = fn;
        http.onerror = err;
        http.onprogress = function() {};
        sendWait = true;
      } else {
        http.onreadystatechange = handleReadyState(this, fn, err);
      }
      o['before'] && o['before'](http);
      if (sendWait) {
        setTimeout(function() {
          http.send(data);
        }, 200);
      } else {
        http.send(data);
      }
      return http;
    }
    function Reqwest(o, fn) {
      this.o = o;
      this.fn = fn;
      init.apply(this, arguments);
    }
    function setType(header) {
      if (header.match('json'))
        return 'json';
      if (header.match('javascript'))
        return 'js';
      if (header.match('text'))
        return 'html';
      if (header.match('xml'))
        return 'xml';
    }
    function init(o, fn) {
      this.url = typeof o == 'string' ? o : o['url'];
      this.timeout = null;
      this._fulfilled = false;
      this._successHandler = function() {};
      this._fulfillmentHandlers = [];
      this._errorHandlers = [];
      this._completeHandlers = [];
      this._erred = false;
      this._responseArgs = {};
      var self = this;
      fn = fn || function() {};
      if (o['timeout']) {
        this.timeout = setTimeout(function() {
          self.abort();
        }, o['timeout']);
      }
      if (o['success']) {
        this._successHandler = function() {
          o['success'].apply(o, arguments);
        };
      }
      if (o['error']) {
        this._errorHandlers.push(function() {
          o['error'].apply(o, arguments);
        });
      }
      if (o['complete']) {
        this._completeHandlers.push(function() {
          o['complete'].apply(o, arguments);
        });
      }
      function complete(resp) {
        o['timeout'] && clearTimeout(self.timeout);
        self.timeout = null;
        while (self._completeHandlers.length > 0) {
          self._completeHandlers.shift()(resp);
        }
      }
      function success(resp) {
        var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type'));
        resp = (type !== 'jsonp') ? self.request : resp;
        var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
            r = filteredResponse;
        try {
          resp.responseText = r;
        } catch (e) {}
        if (r) {
          switch (type) {
            case 'json':
              try {
                resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')');
              } catch (err) {
                return error(resp, 'Could not parse JSON in response', err);
              }
              break;
            case 'js':
              resp = eval(r);
              break;
            case 'html':
              resp = r;
              break;
            case 'xml':
              resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
              break;
          }
        }
        self._responseArgs.resp = resp;
        self._fulfilled = true;
        fn(resp);
        self._successHandler(resp);
        while (self._fulfillmentHandlers.length > 0) {
          resp = self._fulfillmentHandlers.shift()(resp);
        }
        complete(resp);
      }
      function error(resp, msg, t) {
        resp = self.request;
        self._responseArgs.resp = resp;
        self._responseArgs.msg = msg;
        self._responseArgs.t = t;
        self._erred = true;
        while (self._errorHandlers.length > 0) {
          self._errorHandlers.shift()(resp, msg, t);
        }
        complete(resp);
      }
      this.request = getRequest.call(this, success, error);
    }
    Reqwest.prototype = {
      abort: function() {
        this._aborted = true;
        this.request.abort();
      },
      retry: function() {
        init.call(this, this.o, this.fn);
      },
      then: function(success, fail) {
        success = success || function() {};
        fail = fail || function() {};
        if (this._fulfilled) {
          this._responseArgs.resp = success(this._responseArgs.resp);
        } else if (this._erred) {
          fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
        } else {
          this._fulfillmentHandlers.push(success);
          this._errorHandlers.push(fail);
        }
        return this;
      },
      always: function(fn) {
        if (this._fulfilled || this._erred) {
          fn(this._responseArgs.resp);
        } else {
          this._completeHandlers.push(fn);
        }
        return this;
      },
      fail: function(fn) {
        if (this._erred) {
          fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t);
        } else {
          this._errorHandlers.push(fn);
        }
        return this;
      },
      'catch': function(fn) {
        return this.fail(fn);
      }
    };
    function reqwest(o, fn) {
      return new Reqwest(o, fn);
    }
    function normalize(s) {
      return s ? s.replace(/\r?\n/g, '\r\n') : '';
    }
    function serial(el, cb) {
      var n = el.name,
          t = el.tagName.toLowerCase(),
          optCb = function(o) {
            if (o && !o['disabled'])
              cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']));
          },
          ch,
          ra,
          val,
          i;
      if (el.disabled || !n)
        return;
      switch (t) {
        case 'input':
          if (!/reset|button|image|file/i.test(el.type)) {
            ch = /checkbox/i.test(el.type);
            ra = /radio/i.test(el.type);
            val = el.value;
            ;
            (!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val));
          }
          break;
        case 'textarea':
          cb(n, normalize(el.value));
          break;
        case 'select':
          if (el.type.toLowerCase() === 'select-one') {
            optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null);
          } else {
            for (i = 0; el.length && i < el.length; i++) {
              el.options[i].selected && optCb(el.options[i]);
            }
          }
          break;
      }
    }
    function eachFormElement() {
      var cb = this,
          e,
          i,
          serializeSubtags = function(e, tags) {
            var i,
                j,
                fa;
            for (i = 0; i < tags.length; i++) {
              fa = e[byTag](tags[i]);
              for (j = 0; j < fa.length; j++)
                serial(fa[j], cb);
            }
          };
      for (i = 0; i < arguments.length; i++) {
        e = arguments[i];
        if (/input|select|textarea/i.test(e.tagName))
          serial(e, cb);
        serializeSubtags(e, ['input', 'select', 'textarea']);
      }
    }
    function serializeQueryString() {
      return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments));
    }
    function serializeHash() {
      var hash = {};
      eachFormElement.apply(function(name, value) {
        if (name in hash) {
          hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]]);
          hash[name].push(value);
        } else
          hash[name] = value;
      }, arguments);
      return hash;
    }
    reqwest.serializeArray = function() {
      var arr = [];
      eachFormElement.apply(function(name, value) {
        arr.push({
          name: name,
          value: value
        });
      }, arguments);
      return arr;
    };
    reqwest.serialize = function() {
      if (arguments.length === 0)
        return '';
      var opt,
          fn,
          args = Array.prototype.slice.call(arguments, 0);
      opt = args.pop();
      opt && opt.nodeType && args.push(opt) && (opt = null);
      opt && (opt = opt.type);
      if (opt == 'map')
        fn = serializeHash;
      else if (opt == 'array')
        fn = reqwest.serializeArray;
      else
        fn = serializeQueryString;
      return fn.apply(null, args);
    };
    reqwest.toQueryString = function(o, trad) {
      var prefix,
          i,
          traditional = trad || false,
          s = [],
          enc = encodeURIComponent,
          add = function(key, value) {
            value = ('function' === typeof value) ? value() : (value == null ? '' : value);
            s[s.length] = enc(key) + '=' + enc(value);
          };
      if (isArray(o)) {
        for (i = 0; o && i < o.length; i++)
          add(o[i]['name'], o[i]['value']);
      } else {
        for (prefix in o) {
          if (o.hasOwnProperty(prefix))
            buildParams(prefix, o[prefix], traditional, add);
        }
      }
      return s.join('&').replace(/%20/g, '+');
    };
    function buildParams(prefix, obj, traditional, add) {
      var name,
          i,
          v,
          rbracket = /\[\]$/;
      if (isArray(obj)) {
        for (i = 0; obj && i < obj.length; i++) {
          v = obj[i];
          if (traditional || rbracket.test(prefix)) {
            add(prefix, v);
          } else {
            buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
          }
        }
      } else if (obj && obj.toString() === '[object Object]') {
        for (name in obj) {
          buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
        }
      } else {
        add(prefix, obj);
      }
    }
    reqwest.getcallbackPrefix = function() {
      return callbackPrefix;
    };
    reqwest.compat = function(o, fn) {
      if (o) {
        o['type'] && (o['method'] = o['type']) && delete o['type'];
        o['dataType'] && (o['type'] = o['dataType']);
        o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback'];
        o['jsonp'] && (o['jsonpCallback'] = o['jsonp']);
      }
      return new Reqwest(o, fn);
    };
    reqwest.ajaxSetup = function(options) {
      options = options || {};
      for (var k in options) {
        globalSetupOptions[k] = options[k];
      }
    };
    return reqwest;
  });
  })();
System.register("scripts/testFolder/otherTest", ["string/lib/string"], function($__export) {
  "use strict";
  var __moduleName = "scripts/testFolder/otherTest";
  var S;
  function otherTest() {
    var b = 'b';
  }
  $__export("otherTest", otherTest);
  return {
    setters: [function(m) {
      S = m.default;
    }],
    execute: function() {
      ;
    }
  };
});

System.register("scripts/test", ["string/lib/string", "moment/moment", "reqwest/reqwest", "scripts/testFolder/otherTest"], function($__export) {
  "use strict";
  var __moduleName = "scripts/test";
  var S,
      moment,
      reqwest,
      otherTest,
      a;
  return {
    setters: [function(m) {
      S = m.default;
    }, function(m) {
      moment = m.default;
    }, function(m) {
      reqwest = m.default;
    }, function(m) {
      otherTest = m.default;
    }],
    execute: function() {
      a = 'a';
    }
  };
});
