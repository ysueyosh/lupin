import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const apiGatewayUrl =
      'https://8s79nven7k.execute-api.ap-northeast-1.amazonaws.com/sendMail'; // LambdaのURL
    const response = await fetch(apiGatewayUrl!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.text();
    return NextResponse.json({ message: data }, { status: response.status });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Lambda呼び出し失敗' }, { status: 500 });
  }
}
