/* eslint-disable no-unused-vars */
import { IconEdit, IconHeart, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FETCH_EXPENSE_API } from "../../../Constant/api";
import ConfirmationDialog from "./ConfirmationDialog";


const ExpenseItem = ({ expense }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const { _id: id, amount, category, title, description, created_at: date } = expense
    const dttm = new Date(date).toDateString()

    const openConfirmation = () => {
        setShowConfirmation(true);
    };

    // Function to handle closing the confirmation dialog
    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    // Function to handle deleting the item
    const handleDelete = (itemId) => {
        setLoading(true)
        console.log(`Item ${itemId} deleted`);
        axios.delete(`${FETCH_EXPENSE_API}/${id}`)
        setTimeout(() => {
            setLoading(false)
            closeConfirmation();
            window.location.reload();
        }, 1000);
    };
    return (
        <>
            {loading ? <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> :
                <div className="card shadow-sm h-100">
                    <div className="card-body text-start column-gap-0">
                        <h5 className="card-title fw-light">{title}</h5>
                        <hr />
                        <p className="fw-normal">Amount : <br /> <span className="fw-semibold">Rp {amount}</span></p>
                        <p className="fw-normal">Category : <br /> <span className="fw-semibold">{category.toUpperCase()}</span></p>
                        <p className="fw-normal">Description : <br /> {description}</p>
                        <p className="fw-normal">Date : <br /> {dttm}</p>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex align-items-center justify-content-start column-gap-4">
                            <button onClick={openConfirmation} className="btn btn-danger text-white"><IconTrash /></button>
                            <Link to={`/${id}/edit`} state={{ expense: expense, isEdit: true }} className="btn btn-primary"><IconEdit /></Link>
                        </div>
                    </div>
                    {showConfirmation && (
                        <ConfirmationDialog
                            message="Are you sure you want to delete this item?"
                            onConfirm={() => handleDelete(id)}
                            onCancel={closeConfirmation}
                        />
                    )}
                </div>}


        </>
    );
}

ExpenseItem.propTypes = {
    expense: PropTypes.object,
}

export default ExpenseItem;