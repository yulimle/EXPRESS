const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://yulim516:qwer1234@cluster0.tlox8mr.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// insertOne
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    test.insertOne(
      {
        name: 'pororo',
        age: 5,
      },
      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        console.log(insertResult);
      },
    );
  });
});

// insertMany
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// deleteOne 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.deleteMany(
//           { age: { $gte: 5 } }, // greater than equal(이상)
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           },
//         );
//         // client.close();
//       },
//     );
//   });
// });

// update 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '다섯살 이상인 친구들' } },
//           (updateOneErr, updateOneResult) => {
//             if (updateOneErr) throw updateOneErr;
//             console.log(updateOneResult);
//           },
//         );

//         // client.close();
//       },
//     );
//   });
// });

// find 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         // test.findOne({ name: 'loopy' }, (findErr, findData) => {
//         //   if (findErr) throw findErr;
//         //   console.log(findData);
//         // });
//         const findCursor = test.find({});
//         console.log(findCursor);
//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });
//       },
//     );
//   });
// });
