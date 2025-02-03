/* eslint-disable */
import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "@/utils/constants";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// use axios to do a GET request to grab posts

interface Data{
    title: string;
    text: string;
    location: string;
    subheading: string;
    author: string;
    date: number[];
}

export default function Latest() {

    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>();

    const fetchData = async() => {
        try {
            const response = await axiosInstance.get("/grab-posts");
            if (response.data && Array.isArray(response.data.data)){
                setData(response.data.data);
            } else {
                throw new Error("Invalid data format");
            }
            
        } catch (error) {
            setError("Failed to load posts.");
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <p>Loading latest posts...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (

        <div>
            <h2>Latest from Me & Laura</h2>
            <p>wassup wassup wassuppppppp... here&apos;s the latest from me n laura</p>
            <ul>   
                {data.length > 0 ? (
                    data.map((post, index) => (
                        <li key={index}>
                            <h2>{post.title}</h2>
                            <h3>{post.location}</h3>
                            <p>author: {post.author}, {post.date?.[3] ?? ""}/{post.date[2]}/{post.date[4]}</p>
                            <p>{post.text}</p>
                        </li>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </ul>
        </div>
    );
};