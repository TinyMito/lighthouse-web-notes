let a = {
  key1: 'property',
  key2: {
    subKey1: 'subProperty',
    subKey2: ['One', 'Two', 'Three']
  }
}
console.log(a.key2.subKey2[1]) // Two
console.log(a['key2']['subKey2'][1]) // Two)