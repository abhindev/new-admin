import clientPromise from "../../../lib/mongodb.ts"
// import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;

  const client = await clientPromise;

  console.log("clientPromise ::::"+clientPromise)

  const db = client.db();

  if (method === "GET") {
    try { 
      const orders = await db.collection("orders").find().toArray();
      res.status(200).json(orders,);
    } catch (err) {
      console.log("error::" + err)
      // res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const order = await db.collection("orders").insertOne(req.body);
      res.status(201).json(order);
      console.log(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;