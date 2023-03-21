const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://yulim516:qwer1234@cluster0.tlox8mr.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const member = client.db('kdt5').collection('member');
  // 비우고 시작
  member.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    member.insertMany(
      [
        { name: '김민정', age: 25 },
        { name: '이유림', age: 26 },
        { name: '이찬호', age: 26 },
        { name: '김정혁', age: 25 },
        { name: '송민선', age: 29 },
      ],
      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        console.log(insertResult);
        member.insertOne(
          { name: '구슬기', age: 30 },
          (insertOneErr, insertOneResult) => {
            if (insertOneErr) throw insertOneErr;
            console.log(insertOneResult);
            member.deleteOne(
              { name: '김민정' },
              (deleteOneErr, deleteOneResult) => {
                if (deleteOneErr) throw deleteOneErr;
                console.log(deleteOneResult);
                member.updateOne(
                  { name: '구슬기' },
                  { $set: { name: '김민정', age: 25 } },
                  (updateOneErr, updateOneResult) => {
                    if (updateOneErr) throw updateOneErr;
                    console.log(updateOneResult);
                    const findCursor = member.find({ age: { $gte: 25 } });
                    findCursor.toArray((toArrErr, arrData) => {
                      if (toArrErr) throw toArrErr;
                      console.log(arrData);
                    });
                  },
                );
              },
            );
          },
        );
      },
    );
  });
});
