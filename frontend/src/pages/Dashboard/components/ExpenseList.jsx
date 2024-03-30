/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react"
import axios from 'axios';
import {IconBookmark, IconCircle, IconPlus, IconShoppingCart} from "@tabler/icons-react";
import {FETCH_EXPENSE_API} from "@/Constant/api.js";
import ExpenseItem from "@pages/Dashboard/components/ExpenseItem.jsx";
import {Link} from "react-router-dom";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios
            .get(FETCH_EXPENSE_API)
            .then((response) => {
                setExpenses(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <section className="shadow">
            <div className="container shadow-sm p-4 my-4 rounded-2">
                <div className="d-flex justify-content-between">
                    <h2 className="my-2">Expense Tracker</h2>
                    <div className="d-flex justify-content-end column-gap-2">
                        <Link to="/new" state={{ isEdit: false }}>
                            <p className="text-end my-2">
                                <span className="badge text-bg-primary rounded-pill"><IconPlus/></span>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="row row-cols-lg-4 row-cols-1 g-4 pt-2">
                    {loading ? <IconCircle/> : expenses.map((exp, index) =>
                        (<div key={index} className="col">
                            <ExpenseItem
                                expense={exp}
                            />
                        </div>)
                    )}
                </div>
            </div>
        </section>
    );


}
export default ExpenseList;