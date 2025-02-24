export const API_URL = "https://bloogywoggyback.vercel.app/"

export interface DataProps{
    title: string;
    text: string;
    location: string;
    subheading: string;
    author: string;
    pictures: string;
    rating: number;
    date: [number, number, number, number, number];
}

export interface FormData{
    title: string;
    text: string;
    location: string;
    subheading: string;
    author: string;
    pictures: string;
    rating: number;
}