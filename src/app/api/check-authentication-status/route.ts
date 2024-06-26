import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET(token: any) {
    try {
        const externalAPIResponse = await fetch("https://app.grupoerre.pt:1934/auth/check-authentication-status", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const externalData = await externalAPIResponse.json();

        return NextResponse.json(externalData);
    } catch (error) {
        console.error("Error fetching external data:", error);
        return NextResponse.json({ error: "Failed to fetch data" });
    }
}