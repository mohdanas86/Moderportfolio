// app/api/visits/route.js
import { NextResponse } from "next/server";
import Visit from "@/models/Visit";
import { connectToDatabase } from "@/util/mongodb";

export async function GET() {
    try {
        await connectToDatabase();
        const counter = await Visit.getCounter();
        return NextResponse.json({ count: counter.count });
    } catch (error) {
        console.error("Error fetching visit count:", error);
        return NextResponse.json({ error: "Failed to fetch visit count" }, { status: 500 });
    }
}

export async function POST() {
    try {
        await connectToDatabase();
        const newCount = await Visit.increment();
        return NextResponse.json({ count: newCount });
    } catch (error) {
        console.error("Error incrementing visit count:", error);
        return NextResponse.json({ error: "Failed to increment visit count" }, { status: 500 });
    }
}