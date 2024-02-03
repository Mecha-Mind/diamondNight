import { NextResponse } from "next/server";

// connect to db
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  // fetch

  try {
    await connect();

    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  // fetch

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post Created!", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
