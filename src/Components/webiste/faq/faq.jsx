import React, { Component } from "react";
import SiteFooter from "../footer/site-footer";
import SiteHeader from "../header/header";
import withWebsiteData from "../../hoc/with-website-data";
import faqImg from "../../../assets/images/svg/FAQs.svg";
class FAQ extends Component {
  state = {};
  render() {
    const { cart, user, data, books } = this.props;
    return (
      <>
        <SiteHeader
          cart_count={cart ? cart.cart_summary.items_count : 0}
          name={user ? user.name : "ورود / ثبت نام"}
          is_logged_in={data.is_logged_in}
          books={books}
        />
        <section className="return-prod mm-width">
          <div className="img-wrapper">
            <img src={faqImg} alt="نحوه بازگرداندن کالا" />
          </div>
          <div className="text-content">
            <h1 className="title">سوالات متداول شما </h1>
            <h2 className="h2-title">
              سوالات متداول شما هزینه و مدت زمان ارسال سفارشات چه میزان است؟
            </h2>
            <p className="text">
              تمامی سفارشات ها به صورت رایگان به سراسر کشور از طریق پست پیشتاز
              ارسال میشود و زمان تقریبی که سفارشات به دست شما میرسد بین یک تا سه
              روز کاری هست.
              <br />
              در صورت این که ساکن تهران هستید میتونید با پرداخت هزینه پیک همان
              روز تحویل بگیرید.
            </p>
            <h2 className="h2-title">تخفیف های فروشگاه چقدر هست؟</h2>
            <p className="text">
              فروشگاه دریافت یار در تمام طول سال روی تمامی محصولاتش تخفیف داره
              اما در برخی از ایام خاص میزان تخفیف افزایش پیدا میکنه.
              <br />
              اما در فروشگاه دریافت یار شما با امکان استفاده از بخش پرسشکده و
              رفع اشکال از سوالات دوستانتون علاوه بر تخفیف همیشگی فروشگاه
              میتونید روی بعضی محصولات تا 30 درصد تخفیف .کسب کنید
            </p>
            <h2 className="h2-title">کد تخفیف فروشگاه رو از کجا دریافت کنم؟</h2>
            <p className="text">
              تمامی تخفیف ها به صورت اتومات روی کل محصولات در فروشگاه اعمال شده
              اما در برخی از ایام خاص سال در شبکه های اجتماعی فروشگاه ما و یا به
              صورت پیامکی کد تخفیف تقدیم شما میشود.
            </p>
            <h2 className="h2-title">
              از زمان سفارشم در فروشگاه بیش از یک هفته گذشته برای پیگیری چه کار
              کنم؟
            </h2>
            <p className="text">
              درصورت اطمینان خاطر شما از خرید موفق از فروشگاه دریافت یار برای
              پیگیری سفارشتون با ما تماس بگیرید
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

export default withWebsiteData(FAQ);
