```javascript
// Incorrect use of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: 'abc' } });
```