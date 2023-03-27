// Given two strings s and t, determine if they are isomorphic.
// Answer: Method-1
const isIsomorphic = (s, t) => {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        } else {
            if (Array.from(map.values()).includes(t[i])) {
                return false;
            }
            map.set(s[i], t[i]);
        }
    }
    return true;
}
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
