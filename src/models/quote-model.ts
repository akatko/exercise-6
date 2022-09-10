export default interface Quote {
    text: string;
    author: string | null;
  }
  
  let quotesJson: Quote[] = [{ text: "text goes here", author: "any author" }];