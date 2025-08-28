import Quote from "../models/quotesModel.js";
import { buscar_quote } from "../services/kanyeService.js";

export async function kanyePost(req, res) {
    try {
        const data = await buscar_quote();

        if (!data || !data.quote) {
            return res.status(404).json({ error: "Nenhuma quote encontrada." });
        }

        const quote = new Quote({
            quote: `Kanye said: ${data.quote}`,
        });

        await quote.save();

        console.log("Quote salva com sucesso:", quote);

        return res.status(201).json(quote);
    } catch (error) {
        console.error("Erro no kanyePost:", error);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

// Buscar todas as quotes salvas
export async function kanyeGet(req, res) {
    try {
        const quotes = await Quote.find();

        if (quotes.length === 0) {
            return res.status(404).json({ message: "Nenhuma quote encontrada." });
        }

        return res.status(200).json(quotes);
    } catch (error) {
        console.error("Erro no kanyeGet:", error);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

export async function kanyeDelete(req, res) {
    try {
        const { id } = req.params;

        const deletedQuote = await Quote.findByIdAndDelete(id);

        if (!deletedQuote) {
            return res.status(404).json({ error: "Quote não encontrada para exclusão." });
        }

        return res.status(200).json({ message: "Quote deletada com sucesso." });
    } catch (error) {
        console.error("Erro no kanyeDelete:", error);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}
