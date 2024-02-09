import { NextRequest, NextResponse } from "next/server";
// import fetch from "node-fetch";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // console.log("CLIENT");
    // console.log(body);

    const response = await fetch("http://18.188.196.193/generate_answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    return NextResponse.json({
      data: responseData,
    });
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.error();
  }
}
