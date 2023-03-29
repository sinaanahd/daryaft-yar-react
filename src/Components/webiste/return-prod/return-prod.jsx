import React, { Component } from "react";
import SiteHeader from "../header/header";
import SiteFooter from "../footer/site-footer";
import withWebsiteData from "../../hoc/with-website-data";
import truckImg from "../../../assets/images/svg/truck.svg";
import retrunAsset from "../../../assets/images/svg/return-asset.svg";
class ReturnProd extends Component {
  state = {};
  render() {
    const { cart, user, data, books, change_active } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
          change_active={change_active}
        />
        <section className="return-prod mm-width">
          <div className="img-wrapper">
            <img src={truckImg} alt="نحوه بازگرداندن کالا" />
          </div>
          <div className="text-content">
            <h1 className="title">نحوه بازگرداندن</h1>
            <img src={retrunAsset} />
            <p className="text">
              فروشگاه دریافت یار خودش رو موظف میدونه تا امکان هر گونه اشتباه در
              روند ارسال سفارشات خودش رو به کم ترین میزان ممکن برسونه اما شما
              دوستای خوب دریافت یاری میتونید در صورت مشاهده مشکلی در سفارشات
              خودتون ابتدا با ما تماس بگیرید و پس از تایید مشکل توسط کارشناسان
              ما مرسوله خودتون رو به آدرس ما برگشت بزنید.
            </p>
            <p className="text">
              .هزینه پستی برگشت سفارشات بر عهده فروشگاه دریافت یار خواهد بود.
            </p>
            <p className="text">
              <b>نکته ی خیلی مهم :</b>
              <br />
              حواستون باشه که شرط قبول برگشت کتاب از طرف ما این هست که اصلا کتاب
              رو «تا» نزده باشید و استفاده نکرده باشید و حداکثر ظرف 48 ساعت بعد
              از این کتاب به دستتون رسید برای ما ارسال کنید
            </p>
            <p className="text">
              <b>آدرس ما:</b>
              <br />
              تهران - خ انقلاب، خ فخر رازی، خ وحید نظری،‌ نرسیده به خ ۱۲
              فروردین، پ ۸۱، واحد 1
              <br />
              <b>کد پستی:</b>
              <br />
              1314735163
              <br />
              <b>شماره ثابت:</b>
              <br />
              <a href="tel:+982166950624">021-66950624</a>
            </p>
          </div>
        </section>
        <SiteFooter pause={data.pause} error={data.error} />
      </>
    );
  }
}

export default withWebsiteData(ReturnProd);
