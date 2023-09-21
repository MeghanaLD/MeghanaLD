import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BOOKING.module.css";

const BOOKING = () => {
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

  const onPORTFOLIOTextClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className={styles.booking}>
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
            <div className={styles.portfolio} onClick={onPORTFOLIOTextClick}>
              PORTFOLIO
            </div>
            <div className={styles.booking1}>BOOKING</div>
          </div>
        </div>
        <div className={styles.since2008}>Since 2008</div>
      </div>
      <div className={styles.frame3}>
        <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
        <div className={styles.rectangle1} />
        <div className={styles.rectangle2} />
        <div className={styles.itsVeryImportant}>
          It's very important to me to have a strong connection with each of my
          couples as I know just how much that trust shows in your photographs.
          I believe you deserve to have your story told through the lens of
          someone who understands what makes your relationship unique. That's
          why I insist on meeting you either in person or over the phone--and if
          we're the perfect fit, I will be overjoyed to join you on your wedding
          day!
        </div>
        <div className={styles.frame4}>
          <div className={styles.weddingPricingGuide}>
            Wedding Pricing Guide
          </div>
          <div className={styles.mostCollectionsInclude}>
            Most collections include an engagement session and
            artistically-mastered photographs, and will be fully customized to
            match your day.
          </div>
          <div className={styles.frame5}>
            <div
              className={styles.elopementsTiny}
            >{`ELOPEMENTS & TINY WEDDINGS`}</div>
            <div className={styles.coverage2Hours}>Coverage: 2+ hours</div>
            <div className={styles.from1950}>from $1,950</div>
            <div className={styles.visit}>Visit</div>
            <div className={styles.elopeadventurouslycom}>
              elopeadventurously.com
            </div>
            <div className={styles.forMySpecialized}>
              for my specialized menu
            </div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.weddingCollection}>WEDDING COLLECTION</div>
            <div className={styles.coverage510Hours}>Coverage: 5-10 hours</div>
            <div className={styles.includesEngagementSession}>
              Includes: Engagement session and artistically-mastered photographs
            </div>
            <div className={styles.from3750Starting}>
              from $3,750 starting at 5 hours
            </div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.allDayWedding}>
              ALL DAY WEDDING COLLECTION
            </div>
            <div className={styles.coverageFromGetting}>
              Coverage: From getting ready through exit
            </div>
            <div className={styles.includesEngagementSession}>
              Includes: Engagement session and artistically-mastered photographs
            </div>
            <div className={styles.from7000}>from $7,000</div>
            <div className={styles.optionToSplit}>
              Option to split across two days for a small fee
            </div>
          </div>
          <div className={styles.frame8}>
            <div className={styles.signatureCollection}>
              SIGNATURE COLLECTION
            </div>
            <div className={styles.coverage510Hours}>Coverage: 8-10 hours</div>
            <div className={styles.includesEngagementSession2}>
              Includes: Engagement session and artistically-mastered
              photographs,
            </div>
            <div className={styles.signatureWeddingAlbum}>
              signature wedding album, and after-wedding adventure session
            </div>
            <div className={styles.from8500}>from $8,500</div>
          </div>
          <div className={styles.frame9}>
            <div className={styles.signatureDestinationCollecti}>
              SIGNATURE DESTINATION COLLECTION
            </div>
            <div className={styles.coverage23Days}>Coverage: 2-3 days</div>
            <div className={styles.includesArtisticallyMastere}>
              Includes: Artistically-mastered photographs and signature wedding
              album
            </div>
            <div className={styles.from11500Plus}>
              from $11,500 (plus certain travel expenses depending on location)
            </div>
          </div>
          <div className={styles.pleaseContactMe}>
            Please contact me for multi-day Indian weddings, specific cultural
            events, or anything that doesn't fit in a normal box (exciting!).
          </div>
          <div className={styles.frame10}>
            <div className={styles.otherPhotographyCollections}>
              OTHER PHOTOGRAPHY COLLECTIONS
            </div>
            <div className={styles.from750}>from $750</div>
          </div>
          <div className={styles.proposals}>Proposals</div>
          <div className={styles.engagementSessions}>Engagement Sessions</div>
          <div className={styles.outdoorPortraits}>Outdoor Portraits</div>
          <div className={styles.bridalPortraits}>
            Bridal Portraits / Trash the Dress
          </div>
          <div className={styles.boudoir}>Boudoir</div>
        </div>
        <div className={styles.frame11}>
          <div className={styles.whenYoureReady}>
            When you’re ready to chat, head over to my
          </div>
          <div className={styles.contactPage}>contact page</div>
          <div className={styles.andSayHello}>and say hello!</div>
        </div>
      </div>
      <div className={styles.frame12}>
        <div className={styles.frame13}>
          <div className={styles.rectangle3} />
          <div className={styles.frame14}>
            <div className={styles.frame15}>
              <img className={styles.imageIcon2} alt="" src="/image1@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame16}>
              <img className={styles.imageIcon3} alt="" src="/image2@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame17}>
              <img className={styles.imageIcon4} alt="" src="/image3@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame18}>
              <img className={styles.imageIcon2} alt="" src="/image4@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame19}>
              <img className={styles.imageIcon6} alt="" src="/image5@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame20}>
              <img className={styles.imageIcon2} alt="" src="/image6@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame21}>
              <img className={styles.imageIcon8} alt="" src="/image7@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame22}>
              <img className={styles.imageIcon2} alt="" src="/image8@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame23}>
              <img className={styles.imageIcon10} alt="" src="/image9@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame24}>
              <img className={styles.imageIcon2} alt="" src="/image10@2x.png" />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
          </div>
          <div className={styles.frame25}>
            <div className={styles.inquire}>Inquire</div>
            <div className={styles.here}>here</div>
            <div className={styles.div}>.</div>
          </div>
          <div className={styles.frame26}>
            <div className={styles.frame27}>
              <div className={styles.meghnaPhotography}>Meghna Photography</div>
              <div className={styles.bengaluruWeddingPhotographer}>
                Bengaluru Wedding Photographer
              </div>
              <div className={styles.dreamsPhotographycom}>
                (503) 539-7299 | dreams @ photography.com
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

export default BOOKING;
