# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value. However, attempting to increment a field by a non-numeric value will result in an error.

## Bug

The bug is in the following line of code:

```javascript
db.collection.updateOne({ _id: 1 }, { $inc: { field: 'abc' } });
```

This code attempts to increment the `field` by the string value `'abc'`, which is not a valid numerical value for the `$inc` operator. This will result in an error.

## Solution

The solution is to ensure that the value being incremented is a number:

```javascript
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });
```

This code will increment the `field` by 1.