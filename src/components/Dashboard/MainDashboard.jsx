import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeaderDashboard from './HeaderDashboard'

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor:'#F09E00', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:'1.5rem'
    },
  }));


export default function MainDashboard() {
    const classes = useStyles();
    return (
        <div>
            <HeaderDashboard></HeaderDashboard>
            <div className= "margin-main-dashboard">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-md-2.5">
                        <div className="margin-right">
                            <div class="card">
                                <div class="card-header" className={classes.cardHeader}>
                                        Featured
                                </div>
                                <div class="card-body card-body-font-size">
                                    <a className="label-bold">เจ้ามือ :</a> Jennifer<br></br>
                                    <a className="label-bold">รอบเปียถัดไป :</a> 3 มีนาคม 2563<br></br>
                                    <a className="label-bold">ดอกเบี้ย+เงินต้น :</a> 20,200 บาท<br></br>
                                    <a className="label-bold">ยอดส่ง :</a> 150 บาท<br></br>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-2.5">
                            <div className="margin-right">
                            <div class="card">
                                <div class="card-header" className={classes.cardHeader}>
                                    Featured
                                </div>
                                <div class="card-body card-body-font-size">
                                    <a className="label-bold">เจ้ามือ :</a> Jennifer<br></br>
                                    <a className="label-bold">รอบเปียถัดไป :</a> 3 มีนาคม 2563<br></br>
                                    <a className="label-bold">ดอกเบี้ย+เงินต้น :</a> 20,200 บาท<br></br>
                                    <a className="label-bold">ยอดส่ง :</a> 150 บาท<br></br>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-2.5">
                        <div className="margin-right">
                            <div class="card">
                                <div class="card-header" className={classes.cardHeader}>
                                    Featured
                                </div>
                                <div class="card-body card-body-font-size">
                                    <a className="label-bold">เจ้ามือ :</a> Jennifer<br></br>
                                    <a className="label-bold">รอบเปียถัดไป :</a> 3 มีนาคม 2563<br></br>
                                    <a className="label-bold">ดอกเบี้ย+เงินต้น :</a> 20,200 บาท<br></br>
                                    <a className="label-bold">ยอดส่ง :</a> 150 บาท<br></br>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-2.5 ">
                        <div className="margin-right">
                            <div class="card">
                                <div class="card-header" className={classes.cardHeader}>
                                    Featured
                                </div>
                                <div class="card-body card-body-font-size">
                                    <a className="label-bold">เจ้ามือ :</a> Jennifer<br></br>
                                    <a className="label-bold">รอบเปียถัดไป :</a> 3 มีนาคม 2563<br></br>
                                    <a className="label-bold">ดอกเบี้ย+เงินต้น :</a> 20,200 บาท<br></br>
                                    <a className="label-bold">ยอดส่ง :</a> 150 บาท<br></br>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>                      
        </div>
    )
}
