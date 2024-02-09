import { NextRequest, NextResponse } from "next/server";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await fetch("http://18.217.132.215/generate_answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
