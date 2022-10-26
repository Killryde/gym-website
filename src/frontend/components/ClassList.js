import { useEffect, useState } from "react";

export const ClassList = () => {
    const [class_list_data, set_class_list_data] = useState([]);

    useEffect(() => {
        fetch("/api/class/all")
            .then((res) => res.json())
            .then((response) => {
                if (response.status == 200) {
                    set_activity_list_data(response.activity);
                }
            });
    }, []);

    return (
        <section className="class-list">
            {class_list_data.map((class_item_data) => (
                <ClassItem cruise={class_item_data} />
            ))}
        </section>
    );
};

const ClassItem = ({ classes }) => {
    return (
        <section className="class-item">
            <span>Class: {classes.class_name ?? "Not specified"}</span>
            <span>
                Class Date: {classes.start_date ?? "Not specified"}
            </span>
            <span>From: {classes.from ?? "Not specified"}</span>
            <span>To: {classes.to ?? "Not specified"}</span>
            <span>
                Class Capacity:{" "}
                {classes.customer_capacity ?? "Not specified"}
            </span>
        </section>
    );
};
