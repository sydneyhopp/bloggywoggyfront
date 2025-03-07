import React from "react";
import styles from "@/components/latestEntry.module.scss"
import { DataProps } from "@/utils/constants";


 const LatestEntry = ({title, text, location, subheading, author, date}:DataProps) => {
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