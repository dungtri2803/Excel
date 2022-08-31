import React from "react";
import styles from "../../styles/Ourvision.module.scss";
import Image from "next/image";
import I1 from "../../public/images/i1.png";
import I2 from "../../public/images/i2.png";
import I3 from "../../public/images/i3.png";
import I4 from "../../public/images/i4.png";

function Ourvision() {
  return (
    <section className={styles.OurvisionSection}>
      <div className={styles.Ourvision}>
        <div className={styles.OurvisionContent}>
          <div className={styles.OurvisionDes}>
            <p>OUR VISION</p>
          </div>
          <div className={styles.OurvisionTitle}>
            <p>What are our goals</p>
          </div>
        </div>
        <div className={styles.OurvisionList}>
          <div className={styles.OurvisionItem}>
            <div className={styles.OurvisionItemImg}>
              <Image src={I1} alt="" />
            </div>
            <div className={styles.OurvisionItemTitle}>
              <p>
              Global software service provider
              </p>
            </div>
            <div className={styles.OurvisionItemDes}>
              <p>
                To become the largest POS solution provider for the Nail and Spa
                industry in the US, Australia and Vietnam
              </p>
            </div>
          </div>
          <div className={styles.OurvisionItem}>
            <div className={styles.OurvisionItemImg}>
              <Image src={I2} alt="" />
            </div>
            <div className={styles.OurvisionItemTitle}>
              <p>
              Digital services in the ecosystem
              </p>
            </div>
            <div className={styles.OurvisionItemDes}>
              <p>
                Successfully building a trading floor of the Healthcare and
                Beauty industry for the Vietnamese community globally
              </p>
            </div>
          </div>
          <div className={styles.OurvisionItem}>
            <div className={styles.OurvisionItemImg}>
              <Image src={I3} alt="" />
            </div>
            <div className={styles.OurvisionItemTitle}>
              <p>
              International outsourcing
              </p>
            </div>
            <div className={styles.OurvisionItemDes}>
              <p>
                To become an international software outsourcing service provider
              </p>
            </div>
          </div>
          <div className={styles.OurvisionItem}>
            <div className={styles.OurvisionItemImg}>
              <Image src={I4} alt="" />
            </div>
            <div className={styles.OurvisionItemTitle}>
              <p>
              Manage technology, telecommunications
              </p>
            </div>
            <div className={styles.OurvisionItemDes}>
              <p>
                To become a reputable information technology infrastructure
                management service provider in Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourvision;
