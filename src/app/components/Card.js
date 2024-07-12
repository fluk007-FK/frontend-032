import Image from "next/image";
import c1 from "../../../public/c1.jpg";
import c2 from "../../../public/c2.jpg";
import c3 from "../../../public/c3.jpg";
import c4 from "../../../public/c4.jpg";
import c5 from "../../../public/c5.jpg";
import c6 from "../../../public/c6.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src={c1} className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">เป็ดขาวในกลางน้ำที่นิ่งสงบ</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c2} className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">สาวชาวบ้านที่เย็นชา</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c3} className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">ต้นไม้ที่ยื่งใหญ่</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src={c4} className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">ศาลาแดงชาน</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c5} className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">ต้นไม้ที่ตายจากกลางฮิมะ</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c6} className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">หมูบ้านในยอดเขาที่สุงชัน</h5>
                <p className="card-text">###########################</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
