import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
    return NextResponse.json({
      message:
        "this is data from 'tokenAuth' route. Make a POST Request to send your message",
    });
  }