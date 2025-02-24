/* eslint-disable */
import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "@/utils/constants";
import LatestEntry from "@/components/latestEntry";


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
    date: [];
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
            <h2 className="BAAA">Latest from Me & Laura</h2>
            <p>wassup wassup wassuppppppp... here&apos;s the latest from me n laura</p>
            <ul>   
                {data.length > 0 ? (
                    data.map((post, index) => (
                        <li key={index}>
                            <LatestEntry
                            title = {post.title}
                            location = {post.location}
                            author = {post.author}
                            date = {post.date}
                            text = {post.text}
                            />
                        </li>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </ul>
        </div>
    );
};