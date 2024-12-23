// Input: Initial Map with key-value pairs
let map = new Map([
  [101, 'John Doe'], // Key: 101, Value: 'John Doe'
  [102, 'Jane Smith'], // Key: 102, Value: 'Jane Smith'
  [103, 'Peter Johnson'], // Key: 103, Value: 'Peter Johnson'
])

// Sorts the map by values (names) alphabetically and creates a new sorted map
let sortedMap = new Map([...map].sort((a, b) => a[1].localeCompare(b[1])))

// Converts the sorted map to a formatted string in the key=value format
let result = `{${[...sortedMap]
  .map(([key, value]) => `${key}=${value}`)
  .join(', ')}}`

// Logs the formatted string representation of the sorted map to the console
console.log('Map: ', result)
