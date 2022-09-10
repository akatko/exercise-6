import axios from "axios";
import Quote from "../models/quote-model";

export default function getQuotes() {
    return axios.get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data)
}