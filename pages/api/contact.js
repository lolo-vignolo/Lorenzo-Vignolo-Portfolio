import { MongoClient } from 'mongodb';

async function handler(req, res) {

  let client; // debo hacerlo por que se autentifica cada vez que conecta, sino no funciona

  const connectionStrings = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.khqxu.mongodb.net/${process.env.mongodb_collection}?retryWrites=true&w=majority`

  try {
    client = await MongoClient.connect(
      connectionStrings,
      { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database.' }); /// este mensage lo agarro luego desde el fron para mostrarlo
    return;
  }

  const db = client.db();


  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    ///object to storage in my DB

    const newMessage = {
      email,
      name,
      message,
    };

  

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }


  if (req.method === "GET"){

    
   try{
     const documents = await db
     .collection("messages")
     .find()
     .sort({_id:-1})
     .toArray()
     res.status(200).json({comments:documents})
   } catch{
     (err)=>console.log(err);
   }
  }

  client.close()
}



export default handler;
