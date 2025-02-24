import React, { useState } from "react";
import axios from "axios";
import { API_URL, FormData } from "@/utils/constants";


const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
// helper function to actually call the post command
export async function submitPost(postData: FormData) {
try {
    const response = await axiosInstance.post("/posts", postData);
    return response.data;
} catch (error) {
    console.error("Error submitting post:", error);
    throw error;
}
}



export default function FillPostForm() {
    const [formData, setFormData] = useState<FormData>({
        location: '',
        rating: 0,
        title: '',
        subheading: '',
        author: '',
        text: '',
        pictures: '',
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, 
                                [name]: value}));
    }

    
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        // prevents from automatically loading to backend
        e.preventDefault();

        try {
            const result = await submitPost(formData);
            alert("Post submitted successfully!");
            // reset form data to default values
            setFormData({
                location: '',
                rating: 0,
                title: '',
                subheading: '',
                author: '',
                text: '',
                pictures: '',
              });
            
          } catch (error) {
            console.error('Error:', error);
            alert('Error submitting post');
          }
    }



    return (

        <div className="flex mb-4 flex-col">
            <h1>Submit a post here!</h1>
            <form className="flex mb-4 flex-col" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Subheading:
                    <input
                    type="text"
                    name="subheading"
                    value={formData.subheading}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Author:
                    <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Location:
                    <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Text:
                    <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    />
                </label>


                <label>
                    Picture:
                    <input
                    type="text"
                    name="picture"
                    value={formData.pictures}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Rating:
                    <input
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    />
                </label>


                <button type="submit">Submit</button>

            </form>
        </div>

    )

};