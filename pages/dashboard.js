import {useEffect, useState} from 'react'
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/dash.module.scss";
import Widget from "../components/widget/Widget";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";
import Table from "../components/table/Table";
import { useSelector } from "react-redux";
import {useRouter} from 'next/router'

const Home = () => {

    const admin = useSelector((state) => state.login.admin);
    const {push} = useRouter();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(admin !== 1){
            push('/');
        }
    })

    return (
        <div className={styles.home}>
            <Sidebar />
            <div className={styles.homeContainer}>
                <Navbar />
                <div className={styles.widgets}>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className={styles.charts}>
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className={styles.listContainer}>
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;