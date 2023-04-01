import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
// import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  const client = await clientPromise;
  const db = client.db();

  if (method === "GET") {
    try {
      const orderId = new ObjectId(id);
      const order = await db
        .collection("orders")
        .findOne({ _id: new ObjectId(id) });
      // const order = await db.collection("orders").findOne({[ _id: "64270939187f075dfcce2640"});
      console.log(order)
      if (!order) {
        res.status(404).json({ message: "Order not found" });
      } else {
        res.status(200).json(order);
      }
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  }
  
  if (method === "PUT") {
    try {
      const order = await db
        .collection("orders")
        .findOneAndUpdate({ _id: new ObjectId(id)}, { $set: req.body }, { returnOriginal: false });
      res.status(200).json(order.value);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};

export default handler;