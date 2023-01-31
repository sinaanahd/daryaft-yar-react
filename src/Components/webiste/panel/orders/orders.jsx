import React, { Component } from 'react';
import split_in_three from '../../../functions/spilit_in_three';
import sampleProdImg from '../../../../assets/images/svg/sample-photo.svg';
class Orders extends Component {
    state = {  } 
    render() { 
        return (
            <div className="my-orders g-item">
                <h3 className="title">
                    سفارش‌های من
                </h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                شماره‌سفارش
                            </th>
                            <th>
                                محصول
                            </th>
                            <th>
                                تاریخ
                            </th>
                            <th>
                                قیمت‌کل
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                9213123
                            </td>
                            <td className='prod-imgs'>
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                            </td>
                            <td>
                                ۱۲
                                مهر
                                ۱۴۰۱
                            </td>
                            <td>
                                {split_in_three(263012)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9213123
                            </td>
                            <td className='prod-imgs'>
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                            </td>
                            <td>
                                ۱۲
                                مهر
                                ۱۴۰۱
                            </td>
                            <td>
                                {split_in_three(263012)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9213123
                            </td>
                            <td className='prod-imgs'>
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                            </td>
                            <td>
                                ۱۲
                                مهر
                                ۱۴۰۱
                            </td>
                            <td>
                                {split_in_three(263012)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9213123
                            </td>
                            <td className='prod-imgs'>
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                            </td>
                            <td>
                                ۱۲
                                مهر
                                ۱۴۰۱
                            </td>
                            <td>
                                {split_in_three(263012)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9213123
                            </td>
                            <td className='prod-imgs'>
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                                <img src={sampleProdImg} alt="" />
                            </td>
                            <td>
                                ۱۲
                                مهر
                                ۱۴۰۱
                            </td>
                            <td>
                                {split_in_three(263012)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Orders;