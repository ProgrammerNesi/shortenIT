import { clientPromise } from "@/lib/mongodb"
import { redirect } from "next/navigation"


export default async function Page({ params }) {
  const shorturl  = (await params).shorturl
  const client = await clientPromise;
  const db = client.db("shortIT");
  const collection = db.collection("url");
  const doc=await collection.findOne({shorturl:shorturl})
  if (!doc) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  const now = new Date();

  // If activationDateTime exists and current time is before it
  if (doc.activation && now < new Date(doc.activation)) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/noactivation`);
  }

  // If expiryDateTime exists and current time is after it
  if (doc.expiry && now > new Date(doc.expiry)) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/expired`);
  }

  // All checks passed
  redirect(doc.url);
}