// If smile67 asks me: "Where are you from?" I will answer him: "I am from China." Because I'm different from his nationality. If crazyYuyang asks me: "Where are you from?" I will answer him: "I am from HeNan." Because both I and he are Chinese, but we come from different provinces.

// Give you two objects: you and me:

// you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"}
// me ={Country:"AA", Province:"BB", City:"XX", Town:"YY", Street:"ZZ"}
// Then, you ask me a question:

// If the question is "Where are you from?"
// You should compare you and me, from country to street. 
// The result should be the first diffrent place of me.

// result === "I am from XX."

// If no difference, the answer is:
// "Same as you."
// ------------------------------------------------------------------------
// If the question is "What (country/province/city/town/street) are you from?"
// You should compare the (country/province/city/town/street) 
// between you and me. 

// If you and me come from the same place, the answer is:
// "Same as you."

// If not, the answer is:
// "I am from ???."    ---> ??? is the place.
// ------------------------------------------------------------------------
// If the question is invalid (not in the above two formats)
// the answer is:
// "What are you saying?"

function fromWhere(you, me, question) {
    if (question === "Where are you from?") {
        if (you.Country !== me.Country) {
            return `I am from ${me.Country}.`
        } else if (you.Province !== me.Province) {
            return `I am from ${me.Province}.`
        } else if (you.City !== me.City) {
            return `I am from ${me.City}.`
        } else if (you.Town !== me.Town) {
            return `I am from ${me.Town}.`
        } else if (you.Street !== me.Street) {
            return `I am from ${me.Street}.`
        } else {
            return "Same as you."
        }
    } else if (question === "What country are you from?") {
        if (you.Country !== me.Country) {
            return `I am from ${me.Country}.`
        } else {
            return "Same as you."
        }
    } else if (question === "What province are you from?") {
        if (you.Province !== me.Province) {
            return `I am from ${me.Province}.`
        } else {
            return "Same as you."
        }
    } else if (question === "What city are you from?") {
        if (you.City !== me.City) {
            return `I am from ${me.City}.`
        } else {
            return "Same as you."
        }
    } else if (question === "What town are you from?") {
        if (you.Town !== me.Town) {
            return `I am from ${me.Town}.`
        } else {
            return "Same as you."
        }
    } else if (question === "What street are you from?") {
        if (you.Street !== me.Street) {
            return `I am from ${me.Street}.`
        } else {
            return "Same as you."
        }
    } else {
        return "What are you saying?"
    }


}