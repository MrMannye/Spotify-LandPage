import Header from '../../components/Header'
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Axios from 'axios'

const Single = () => {

    const [info, setInfo] = useState(null);
    const [list, setList] = useState([]);
    const router = useRouter();
    const id = useSelector((state) => state.login.id)
    const email = useSelector((state) => state.login.email)

    useEffect(() => {
        Axios.get(`https://backend-nest-bdd.herokuapp.com/users?email=${email}`)
            .then(res => {
                setInfo(res.data)
            })
    }, [email])


    return (
        <div className="single">
            <div className="singleContainer">
                <Header></Header>
                <div className="top mt-12 shadow-lg">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="Image Avatar"
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{info?.name} {info?.lastname}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{info?.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">MXN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;