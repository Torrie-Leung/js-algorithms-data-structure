// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  let charCountObj = {}
  let maxChar = ''
  let maxCount = 0

  // fill character count obj
  for(let i = 0; i < str.length; i++){
    const char = str[i]
    charCountObj[char] = charCountObj[char] + 1 || 1
    if(charCountObj[char] > maxCount){
      maxChar = char
      maxCount = charCountObj[char]
    }
  }

  return maxChar
}

// tip: create a character count object like {H:1,e:1,l:2,o:1} for "Hello"

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
