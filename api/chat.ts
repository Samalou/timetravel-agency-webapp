import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { message } = req.body as { message?: string };
    if (!message || !message.trim()) return res.status(400).json({ error: "Missing message" });

    const r = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          {
            role: "system",
            content:
              "Tu es l'assistant virtuel de TimeTravel Agency (agence premium). Ton ton est professionnel, chaleureux, passionné d'histoire. Tu connais parfaitement Paris 1889, le Crétacé -65M et Florence 1504. Tu peux inventer des prix cohérents en euros, et recommander une destination selon les préférences. Réponses courtes, utiles, et structurées.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({ error: data?.error ?? data });
    }

    const content = data?.choices?.[0]?.message?.content ?? "Désolé, je n’ai pas compris.";
    return res.status(200).json({ content });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Server error" });
  }
}
