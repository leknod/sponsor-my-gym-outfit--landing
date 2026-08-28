import { NextResponse } from "next/server";

const DATAFAST_API = "https://datafa.st/api/v1/analytics";
const API_KEY = process.env.DATAFAST_API_KEY;

// Cache response for 30 seconds to avoid excessive API calls
export const revalidate = 30;

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "DATAFAST_API_KEY not configured" },
      { status: 500 }
    );
  }

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    // Fetch realtime visitors and overview (all-time) in parallel
    const [realtimeRes, overviewRes] = await Promise.all([
      fetch(`${DATAFAST_API}/realtime`, { headers, next: { revalidate: 30 } }),
      fetch(`${DATAFAST_API}/overview`, { headers, next: { revalidate: 30 } }),
    ]);

    if (!realtimeRes.ok || !overviewRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch analytics" },
        { status: 502 }
      );
    }

    const realtimeData = await realtimeRes.json();
    const overviewData = await overviewRes.json();

    // Extract realtime visitors count
    const realtimeVisitors =
      realtimeData?.data?.[0]?.visitors ?? 0;

    // Extract total visitors from overview (all-time when no date range)
    const totalVisitors =
      overviewData?.data?.[0]?.visitors ?? 0;

    return NextResponse.json(
      {
        realtime: realtimeVisitors,
        totalVisitors: totalVisitors,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Analytics request failed" },
      { status: 500 }
    );
  }
}
