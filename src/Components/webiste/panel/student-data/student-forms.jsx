import React, { Component } from 'react';
import userIcon from '../../../../assets/images/svg/user-icon.svg';
class StudentsDataFrom extends Component {
    state = {  } 
    render() { 
        return (
            <div className="student-data">
                <h3 className="title">
                    اطلاعات تحصیلی
                </h3>
                <div className="forms">
                    <span className="subject selects">
                        <img src={userIcon}/>
                        <select name="" id="">
                            <option value="رشته تحصیلی">رشته تحصیلی</option>
                            <option value="ریاضی">ریاضی</option>
                            <option value="تجربی">تجربی</option>
                            <option value="انسانی">انسانی</option>
                            <option value="هنر">هنر</option>
                        </select>
                    </span>

                    <span className="grade selects">
                        <img src={userIcon}/>
                        <select name="" id="">
                            <option value="رشته تحصیلی">پایه تحصیلی</option>
                            <option value="دهم">دهم</option>
                            <option value="یازدهم">یازدهم</option>
                            <option value="دوازدهم">دوازدهم</option>
                            <option value="کنکور">کنکور</option>
                            <option value="فارغ التحصیل">فارغ التحصیل</option>
                        </select>
                    </span>
                </div>
                <span className="submit">
                    ثبت تغییرات
                </span>
            </div>
        );
    }
}
 
export default StudentsDataFrom;