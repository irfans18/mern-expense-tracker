import PropTypes from 'prop-types';
import { IconEdit,IconArrowBack  } from "@tabler/icons-react";
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { FETCH_EXPENSE_API } from '../../Constant/api.constant.js';
import { useNavigate } from 'react-router-dom';
import { IconCircle } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const CreateOrUpdate = () => {
    const location = useLocation()
    const { isEdit, expense: initialExpense } = location.state
    const [expense, setExpense] = useState(initialExpense)
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const dttm = !isEdit ? new Date(Date.now()).toISOString().split('T')[0] : new Date(expense.created_at).toISOString().split('T')[0]
    const title = isEdit ? "Edit Spending" : "New Spending"

    const handleSubmit = () => {
        setLoading(true)
        // const newExpense = {
        //     amount,
        //     category,
        //     title: name,
        //     description
        // }

        if (isEdit) {
            console.log(isEdit, expense);
            console.log(`${FETCH_EXPENSE_API}/${expense._id}`);
            axios

                .put(`${FETCH_EXPENSE_API}/${expense._id}`, 
                {
                    amount: +expense.amount,
                    category: expense.category,
                    title: expense.title,
                    description: expense.description,
                 })
                // eslint-disable-next-line no-unused-vars
                .then((response) => {
                    setLoading(false)
                    enqueueSnackbar('Success', { variant: 'success' })
                    navigate('/')
                })
                .catch((error) => {
                    setLoading(false)
                    enqueueSnackbar('Failed', { variant: error })
                })
        } else {
            console.log(expense);
            axios
                .post(`${FETCH_EXPENSE_API}`, expense)
                // eslint-disable-next-line no-unused-vars
                .then((response) => {
                    setLoading(false)
                    enqueueSnackbar('Success', { variant: 'success' })
                    navigate('/')
                })
                .catch((error) => {
                    setLoading(false)
                    enqueueSnackbar('Failed', { variant: error })
                })
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-5 col-sm-12">
                    {loading ? <IconCircle /> :
                        <div className="card shadow-sm h-100">
                            <div className="card-body text-start column-gap-0">
                                <h5 className="card-title fw-light text-center ">{title}</h5>
                                <hr />
                                <form className='column-gap-1'>
                                    <div className="form-group">
                                        <label htmlFor="amount">Amount</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Rp</span>
                                            <input id='amount' name='amount' type="number" className="form-control"
                                                value={expense?.amount || ''}
                                                onChange={(e) => setExpense(prevExp => ({ ...prevExp, amount: e.target.value }))} aria-label="Amount" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Spending</label>
                                        <input type="text" className="form-control" id="title"
                                            value={expense?.title || ''}
                                            onChange={(e) => setExpense(prevExp => ({ ...prevExp,  title: e.target.value }))}
                                            placeholder="mousepad" />
                                    </div>

                                    <div className="form-group py-3">
                                        <label className="form-check-label" >Category</label> <br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="category" id="inlineRadio1" value="productive"
                                                checked={expense?.category === 'productive'}
                                                onChange={(e) => setExpense(prevExp => ({ ...prevExp,  category: e.target.value }))} />
                                            <label className="form-check-label" htmlFor="inlineRadio1">Productive</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="category" id="inlineRadio2" value="consumptive"
                                                checked={expense?.category === 'consumptive'}
                                                onChange={(e) => setExpense(prevExp => ({ ...prevExp,  category: e.target.value }))} />
                                            <label className="form-check-label" htmlFor="inlineRadio2">Consumptive</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" id="description"
                                            value={expense?.description || ''}
                                            onChange={(e) => setExpense(prevExp => ({ ...prevExp,  description: e.target.value }))}
                                            placeholder="Razer Gaming Mouse" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" className="form-control" id="date"
                                            value={dttm}
                                            disabled
                                            onChange={() => { }}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex justify-content-between p-2">
                                <div className="d-flex align-items-center justify-content-start column-gap-4">
                                    <Link to='/' className="btn btn-danger text-white"><IconArrowBack /></Link>
                                    <button className="btn btn-primary" onClick={handleSubmit}>
                                        {isEdit ? <IconEdit /> : "Save"}
                                    </button>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

CreateOrUpdate.propTypes = {
    isEdit: PropTypes.bool,
    expense: PropTypes.object,
}
export default CreateOrUpdate;