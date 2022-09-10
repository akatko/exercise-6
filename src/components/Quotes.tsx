import getQuotes from "../services/getQuotes"
import { useEffect, useState } from "react";
import Quote from "../models/quote-model";

export default function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getQuotes().then(data => setQuotes(data));
    }, [])

    return (
        <div className="Quotes">
            <h1>Quotes</h1>
            <ul>
                {quotes.map((quote, index) => <li key={index}>{quote.text} — {quote.author}</li>)}
            </ul>
        </div>
    )
}