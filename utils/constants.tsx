export const API_URL = "https://bloogywoggyback.vercel.app/"

export interface DataProps{
    title: string;
    text: string;
    location: string;
    subheading: string;
    author: string;
    date: [number, number, number, number, number];
}