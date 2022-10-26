import { useState } from "react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState("");

    const onSubmit = (data) => {
        setStatus("Signing up...");

        fetch("/api/customers/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status == 200) {
                    setStatus(res.message);
                } else {
                    setStatus(res.message);
                }
            })
            .catch((error) => {
                setStatus("failed to fetch: " + error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group input-group-vertical">
                <span>Username</span>
                <input
                    type="text"
                    className="input input-bordered"
                    {...register("username")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Password</span>
                <input
                    type="password"
                    placeholder="info@site.com"
                    className="input input-bordered"
                    {...register("password")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>First Name</span>
                <input
                    type="text"
                    placeholder="Jane"
                    className="input input-bordered"
                    {...register("first_name")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Last Name</span>
                <input
                    type="text"
                    placeholder="Doe"
                    className="input input-bordered"
                    {...register("last_name")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Phone</span>
                <input
                    type="tel"
                    className="input input-bordered"
                    {...register("phone")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Email</span>
                <input
                    type="text"
                    placeholder="info@site.com"
                    className="input input-bordered"
                    {...register("email")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Payment Method</span>
                <select
                    className="select w-full max-w-xs"
                    {...register("payment_method")}
                >
                    <option disabled selected>
                        Payment Method
                    </option>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Direct Debit</option>
                    <option>Payment Plan</option>
                </select>
            </label>
            <label className="input-group input-group-vertical">
                <span>Country</span>
                <input
                    type="text"
                    placeholder="Australia"
                    className="input input-bordered"
                    {...register("country")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>State</span>
                <input
                    type="text"
                    placeholder="Queensland"
                    className="input input-bordered"
                    {...register("state")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>City</span>
                <input
                    type="text"
                    placeholder="Brisbane"
                    className="input input-bordered"
                    {...register("city")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Street</span>
                <input
                    type="text"
                    placeholder="1 Queen St"
                    className="input input-bordered"
                    {...register("street")}
                />
            </label>
            <label className="input-group input-group-vertical">
                <span>Postcode</span>
                <input
                    type="text"
                    placeholder="0000"
                    className="input input-bordered"
                    {...register("postcode")}
                />
            </label>
            <input type="submit" value="Sign up!" className="btn" />
            <span>{status}</span>
        </form>
    );
};
