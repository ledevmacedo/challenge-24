import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";


// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     const { email, password } = req.body;
//     try {
//         const signIn = await fetch('https://app.grupoerre.pt:1934/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });
//         const data = await signIn.json();
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error fetching external data:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// }

export async function POST(request: NextRequest) {
    // Supondo que 'email' e 'password' sejam obtidos do corpo da requisição
    const { email, password } = await request.json();

    try {
        const response = await fetch('https://app.grupoerre.pt:1934/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching external data:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
