/**
 * Takes a deeply nested object, `source`, and returns an object with
 * dot-separated paths pointing to all primitive values from `source`.
 *
 * Examples:
 *
 *   flatten({ foo: { bar: 1 } })
 *     //=> { 'foo.bar': 1 }
 *
 *   flatten({ foo: [{ bar: 1 }, { bar: 2 }] })
 *     //=> { 'foo.0.bar': 1, 'foo.1.bar': 2 }
 */
function flatten(source) {
  // TODO: Implement this function
  // For loop iterate over the object.
  let flattenSource = {};

  for (let key in source) {
    if (typeof source[key] === "object") {
      recurseFn(source[key], flattenSource, key)
    } else {
      flattenSource[key] = source[key];
    }
  }
  console.log(flattenSource)
  return flattenSource
}

let recurseFn = (obj, flattenSource, prefix) => {
  if (!obj) {
    flattenSource[prefix] = obj
    return
  }
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      recurseFn(obj[key], flattenSource, prefix + "." + key)
    } else {
      flattenSource[prefix + "." + key] = obj[key];
    }
  }
}

flatten(null);