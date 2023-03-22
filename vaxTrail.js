function vaxTrail(people) {
    const ageRanges = {
        A: [],
        B: [],
        C: [],
        D: [],
    };

    for (let i = 0; i < people.length; i++) {
        // console.log(people[0])
        let person = people[i];
        if (person.temperature >= 100 || person.age >50) {
            ageRanges.D.push(person);
        } else if (person.age >= 20 && person.age <= 30) {
            ageRanges.A.push(person);
        } else if (person.age >= 31 && person.age <= 40) {
            ageRanges.B.push(person);
        } else if (person.age >= 41 && person.age <= 50) {
            ageRanges.C.push(person);
        }
    }
    return ageRanges;
}

// Example 

(vaxTrail([
    { name: 'sunil', age: 21, temperature: 100.9 },
    { name: 'Biplap', age: 222, temperature: 98 },
    { name: 'John', age: 33, temperature: 99 },
    { name: 'Jane', age: 45, temperature: 97.5 },
    { name: 'Bob', age: 50, temperature: 100.5 },
    { name: 'Alice', age: 27, temperature: 99.8 },
]))
