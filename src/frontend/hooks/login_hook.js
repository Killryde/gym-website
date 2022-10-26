import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default useLogin = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [staff, setStaff] = useState(null);

    useEffect(() => {
        fetch("/api/logins/identity")
            .then((res) => res.json())
            .then((response) => {
                if (response.status == 200) {
                    if (loggedIn != response.logged_in) {
                        setLoggedIn(response.logged_in);
                    }

                    if (response.customer) {
                        setCustomer(response.customer);
                    }

                    if (response.staff) {
                        setStaff(response.staff);
                    }
                }
            });
    }, [loggedIn]);

    const login = (username, password) => {
        const loginPromise = new Promise((resolve, reject) => {
            const body = {
                username,
                password,
            };

            fetch("/api/logins/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.status == 200) {
                        setLoggedIn(true);
                        resolve(res.message);
                    } else {
                        setLoggedIn(false);
                        reject(res.message);
                    }
                })
                .catch((error) => {
                    setLoggedIn(false);
                    reject("failed to fetch: " + error);
                });
        });

        return loginPromise;
    };

    const logout = () => {
        fetch("/api/logins/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setLoggedIn(false);
                setCustomer(null);
                setStaff(null);
                navigate("/");
            })
            .catch((error) => {
                setLoggedIn(false);
                setCustomer(null);
                setStaff(null);
                navigate("/");
            });
    };

    return {
        login,
        logout,
        loggedIn,
        staff,
        customer,
    };
};
