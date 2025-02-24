import React from "react";
import styles from "@/components/latestEntry.module.scss"

interface Data{
    title: string;
    text: string;
    location: string;
    subheading: string;
    author: string;
    date: [];
}

 const LatestEntry = ({title, text, location, subheading, author, date}:Data) => {
    return (
        <div className={styles.container}>
            <div>
                <h2>{title}</h2>
                <h3>{location}, {date?.[3] ?? ""}/{date[2]}/{date[4]}</h3>
                <p>{author} says: {text}</p>

            </div>
        </div>
    )
};

export default LatestEntry;