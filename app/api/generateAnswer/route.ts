import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = "http://3.144.73.3/generate_answer"; // Your destination URL
  const response = await fetch(url, {
    method: "POST",
    headers: {
      ...req.headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(await req.json()),
  });
  
  const data = await response.json();
  return NextResponse.json(data).setStatus(response.status);
}
