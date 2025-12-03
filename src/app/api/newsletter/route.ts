import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.length) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: 'MailerLite API key not found' }, { status: 500 });
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      email: email,
      groups: ["172751729404675672"]
    })
  };

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', options);
    
    if (response.status === 200 || response.status === 201) {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      const data = await response.json();
      return NextResponse.json({ error: data.message || 'Something went wrong' }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
