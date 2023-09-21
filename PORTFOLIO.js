import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PORTFOLIO.module.css";

const PORTFOLIO = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBOOKINGTextClick = useCallback(() => {
    navigate("/booking");
  }, [navigate]);

  return (
    <div className={styles.portfolio}>
      <div className={styles.frame}>
        <img
          className={styles.imageIcon}
          alt=""
          src="/aralani-logo09-printpng@2x.png"
        />
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <div className={styles.frame2}>
            <div className={styles.home} onClick={onHOMETextClick}>
              HOME
            </div>
            <div className={styles.about} onClick={onABOUTTextClick}>
              ABOUT
            </div>
            <div className={styles.contact} onClick={onCONTACTTextClick}>
              CONTACT
            </div>
            <div className={styles.portfolio1}>PORTFOLIO</div>
            <div className={styles.booking} onClick={onBOOKINGTextClick}>
              BOOKING
            </div>
          </div>
        </div>
        <div className={styles.since2023}>Since 2023</div>
      </div>
      <div className={styles.frame3}>
        <img className={styles.imageIcon1} alt="" src="/image29@2x.png" />
        <img className={styles.imageIcon2} alt="" src="/image30@2x.png" />
        <img className={styles.imageIcon3} alt="" src="/image31@2x.png" />
        <img className={styles.imageIcon4} alt="" src="/image32@2x.png" />
        <img className={styles.imageIcon5} alt="" src="/image33@2x.png" />
        <img className={styles.imageIcon6} alt="" src="/image34@2x.png" />
        <img className={styles.imageIcon7} alt="" src="/image35@2x.png" />
        <img className={styles.imageIcon8} alt="" src="/image36@2x.png" />
        <img className={styles.imageIcon9} alt="" src="/image37@2x.png" />
        <img className={styles.imageIcon10} alt="" src="/image38@2x.png" />
        <img className={styles.imageIcon11} alt="" src="/image39@2x.png" />
        <img className={styles.imageIcon12} alt="" src="/image40@2x.png" />
        <img className={styles.imageIcon13} alt="" src="/image41@2x.png" />
        <img className={styles.imageIcon14} alt="" src="/image42@2x.png" />
        <img className={styles.imageIcon15} alt="" src="/image43@2x.png" />
        <img className={styles.imageIcon16} alt="" src="/image44@2x.png" />
        <img className={styles.imageIcon17} alt="" src="/image45@2x.png" />
        <img className={styles.imageIcon18} alt="" src="/image46@2x.png" />
        <img className={styles.imageIcon19} alt="" src="/image47@2x.png" />
        <img className={styles.imageIcon20} alt="" src="/image48@2x.png" />
        <img className={styles.imageIcon21} alt="" src="/image49@2x.png" />
        <img className={styles.imageIcon22} alt="" src="/image50@2x.png" />
        <img className={styles.imageIcon23} alt="" src="/image51@2x.png" />
        <img className={styles.imageIcon24} alt="" src="/image52@2x.png" />
        <img className={styles.imageIcon25} alt="" src="/image53@2x.png" />
        <img className={styles.imageIcon26} alt="" src="/image54@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image55@2x.png" />
        <img className={styles.imageIcon28} alt="" src="/image56@2x.png" />
        <img className={styles.imageIcon29} alt="" src="/image57@2x.png" />
        <img className={styles.imageIcon30} alt="" src="/image58@2x.png" />
        <img className={styles.imageIcon31} alt="" src="/image59@2x.png" />
        <img className={styles.imageIcon32} alt="" src="/image60@2x.png" />
        <img className={styles.imageIcon33} alt="" src="/image61@2x.png" />
        <img className={styles.imageIcon34} alt="" src="/image62@2x.png" />
        <img className={styles.imageIcon35} alt="" src="/image63@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image64@2x.png" />
        <img className={styles.imageIcon37} alt="" src="/image65@2x.png" />
        <img className={styles.imageIcon38} alt="" src="/image66@2x.png" />
        <img className={styles.imageIcon39} alt="" src="/image67@2x.png" />
        <img className={styles.imageIcon40} alt="" src="/image68@2x.png" />
        <img className={styles.imageIcon41} alt="" src="/image69@2x.png" />
        <img className={styles.imageIcon42} alt="" src="/image70@2x.png" />
        <img className={styles.imageIcon43} alt="" src="/image71@2x.png" />
        <img className={styles.imageIcon44} alt="" src="/image72@2x.png" />
        <img className={styles.imageIcon45} alt="" src="/image73@2x.png" />
        <img className={styles.imageIcon46} alt="" src="/image74@2x.png" />
        <img className={styles.imageIcon47} alt="" src="/image75@2x.png" />
        <img className={styles.imageIcon48} alt="" src="/image76@2x.png" />
        <img className={styles.imageIcon49} alt="" src="/image77@2x.png" />
        <img className={styles.imageIcon50} alt="" src="/image78@2x.png" />
        <img className={styles.imageIcon51} alt="" src="/image79@2x.png" />
        <img className={styles.imageIcon52} alt="" src="/image80@2x.png" />
        <img className={styles.imageIcon53} alt="" src="/image81@2x.png" />
        <img className={styles.imageIcon54} alt="" src="/image82@2x.png" />
        <img className={styles.imageIcon55} alt="" src="/image83@2x.png" />
        <img className={styles.imageIcon56} alt="" src="/image84@2x.png" />
        <img className={styles.imageIcon57} alt="" src="/image85@2x.png" />
        <img className={styles.imageIcon58} alt="" src="/image86@2x.png" />
        <img className={styles.imageIcon59} alt="" src="/image87@2x.png" />
        <img className={styles.imageIcon60} alt="" src="/image88@2x.png" />
        <img className={styles.imageIcon61} alt="" src="/image89@2x.png" />
        <img className={styles.imageIcon62} alt="" src="/image90@2x.png" />
        <img className={styles.imageIcon63} alt="" src="/image91@2x.png" />
        <img className={styles.imageIcon64} alt="" src="/image92@2x.png" />
        <img className={styles.imageIcon65} alt="" src="/image93@2x.png" />
        <img className={styles.imageIcon66} alt="" src="/image94@2x.png" />
        <img className={styles.imageIcon67} alt="" src="/image95@2x.png" />
        <img className={styles.imageIcon68} alt="" src="/image96@2x.png" />
        <img className={styles.imageIcon69} alt="" src="/image97@2x.png" />
        <img className={styles.imageIcon70} alt="" src="/image98@2x.png" />
        <img className={styles.imageIcon71} alt="" src="/image99@2x.png" />
        <img className={styles.imageIcon72} alt="" src="/image100@2x.png" />
        <img className={styles.imageIcon73} alt="" src="/image101@2x.png" />
        <img className={styles.imageIcon74} alt="" src="/image102@2x.png" />
        <img className={styles.imageIcon75} alt="" src="/image103@2x.png" />
        <img className={styles.imageIcon76} alt="" src="/image104@2x.png" />
        <img className={styles.imageIcon77} alt="" src="/image105@2x.png" />
        <img className={styles.imageIcon78} alt="" src="/image106@2x.png" />
      </div>
      <div className={styles.frame4}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.frame5}>
          <div className={styles.rectangle1} />
          <div className={styles.frame6}>
            <div className={styles.frame7}>
              <img className={styles.imageIcon79} alt="" src="/image1@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame8}>
              <img className={styles.imageIcon80} alt="" src="/image2@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame9}>
              <img className={styles.imageIcon81} alt="" src="/image3@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame10}>
              <img className={styles.imageIcon79} alt="" src="/image4@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame11}>
              <img className={styles.imageIcon83} alt="" src="/image5@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame12}>
              <img className={styles.imageIcon79} alt="" src="/image6@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame13}>
              <img className={styles.imageIcon85} alt="" src="/image7@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame14}>
              <img className={styles.imageIcon79} alt="" src="/image8@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame15}>
              <img className={styles.imageIcon87} alt="" src="/image9@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame16}>
              <img
                className={styles.imageIcon79}
                alt=""
                src="/image10@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
          </div>
          <div className={styles.frame17}>
            <div className={styles.inquire}>Inquire</div>
            <div className={styles.here}>here</div>
            <div className={styles.div}>.</div>
          </div>
          <div className={styles.frame18}>
            <div className={styles.frame19}>
              <div className={styles.meghnaPhotography}>Meghna Photography</div>
              <div className={styles.bengaluruWeddingPhotographer}>
                Bengaluru Wedding Photographer
              </div>
              <div className={styles.xxxXxxXxxDreams}>
                xxx-xxx-xxx | dreams @ photography.com
              </div>
              <div className={styles.hsrLayoutbengalore560062}>
                2574 HSR Layout,Bengalore,560062
              </div>
            </div>
            <div className={styles.pacificNorthwest}>
              PACIFIC NORTHWEST - PORTLAND - COLUMBIA RIVER GORGE - HOOD RIVER -
              OREGON COAST - BEND - YACHATS
            </div>
            <div className={styles.seattleSkamania}>
              SEATTLE - SKAMANIA LODGE - COOPERS HALL - PACIFIC CITY - MT. HOOD
              SKIBOWL - GORGE CREST VINEYARDS
            </div>
            <div className={styles.willametteValley}>
              WILLAMETTE VALLEY - WINE COUNTRY - LAKE CHELAN - NORTH CASCADES -
              OLYMPIC NATIONAL PARK - WORLDWIDE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PORTFOLIO;
