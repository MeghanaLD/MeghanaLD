import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPORTFOLIOTextClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onBOOKINGTextClick = useCallback(() => {
    navigate("/booking");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.frame}>
        <img
          className={styles.imageIcon}
          alt=""
          src="/aralani-logo09-printpng@2x.png"
        />
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <div className={styles.frame2}>
            <div className={styles.home}>HOME</div>
            <div className={styles.about} onClick={onABOUTTextClick}>
              ABOUT
            </div>
            <div className={styles.contact} onClick={onCONTACTTextClick}>
              CONTACT
            </div>
            <div className={styles.portfolio} onClick={onPORTFOLIOTextClick}>
              PORTFOLIO
            </div>
            <div className={styles.booking} onClick={onBOOKINGTextClick}>
              BOOKING
            </div>
          </div>
        </div>
        <div className={styles.since2023}>Since 2023</div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.rectangle1} />
          <div className={styles.frame5}>
            <img className={styles.imageIcon1} alt="" src="/image107@2x.png" />
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image108@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image109@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image110@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image111@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image112@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image113@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image114@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image115@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image116@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image117@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image118@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image119@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image120@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image121@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image122@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image123@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image124@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image125@2x.png"
              />
            </div>
            <div className={styles.frame6}>
              <div className={styles.rectangle2} />
              <img
                className={styles.imageIcon2}
                alt=""
                src="/image126@2x.png"
              />
            </div>
          </div>
          <div className={styles.frame25}>
            <div className={styles.rectangle21} />
            <div className={styles.rectangle22} />
          </div>
        </div>
        <img className={styles.imageIcon21} alt="" src="/image127@2x.png" />
        <div className={styles.rectangle23} />
        <div className={styles.frame26}>
          <div className={styles.image} />
          <img className={styles.imageIcon22} alt="" src="/image128@2x.png" />
          <img className={styles.imageIcon23} alt="" src="/image129@2x.png" />
        </div>
        <div className={styles.rectangle24} />
        <div className={styles.frame27}>
          <div className={styles.frame28}>
            <img className={styles.imageIcon24} alt="" src="/image130@2x.png" />
          </div>
          <div className={styles.frame29}>
            <img className={styles.imageIcon25} alt="" src="/image131@2x.png" />
          </div>
          <div className={styles.frame30}>
            <img className={styles.imageIcon26} alt="" src="/image132@2x.png" />
          </div>
          <div className={styles.frame31}>
            <img className={styles.imageIcon27} alt="" src="/image133@2x.png" />
          </div>
          <div className={styles.frame32}>
            <img className={styles.imageIcon28} alt="" src="/image134@2x.png" />
          </div>
          <div className={styles.frame33}>
            <img className={styles.imageIcon25} alt="" src="/image135@2x.png" />
          </div>
          <div className={styles.frame34}>
            <img className={styles.imageIcon30} alt="" src="/image136@2x.png" />
          </div>
          <div className={styles.frame35}>
            <img className={styles.imageIcon31} alt="" src="/image137@2x.png" />
          </div>
          <div className={styles.frame36}>
            <img className={styles.imageIcon27} alt="" src="/image138@2x.png" />
          </div>
          <div className={styles.frame37}>
            <img className={styles.imageIcon25} alt="" src="/image139@2x.png" />
          </div>
          <div className={styles.frame38}>
            <img className={styles.imageIcon34} alt="" src="/image140@2x.png" />
          </div>
          <div className={styles.frame39}>
            <img className={styles.imageIcon28} alt="" src="/image141@2x.png" />
          </div>
          <div className={styles.frame40}>
            <img className={styles.imageIcon25} alt="" src="/image142@2x.png" />
          </div>
          <div className={styles.frame41}>
            <img className={styles.imageIcon25} alt="" src="/image143@2x.png" />
          </div>
          <div className={styles.frame42}>
            <img className={styles.imageIcon25} alt="" src="/image144@2x.png" />
          </div>
          <div className={styles.frame43}>
            <img className={styles.imageIcon39} alt="" src="/image145@2x.png" />
          </div>
        </div>
        <div className={styles.rectangle25} />
        <div className={styles.frame44}>
          <div className={styles.frame45}>
            <img className={styles.imageIcon40} alt="" src="/image146@2x.png" />
            <div className={styles.weddings}>WEDDINGS</div>
          </div>
          <div className={styles.frame46}>
            <img className={styles.imageIcon41} alt="" src="/image147@2x.png" />
            <div className={styles.elopements}>ELOPEMENTS</div>
          </div>
          <div className={styles.frame47}>
            <img className={styles.imageIcon40} alt="" src="/image148@2x.png" />
            <div className={styles.engagements}>ENGAGEMENTS</div>
          </div>
          <div className={styles.frame48}>
            <img className={styles.imageIcon41} alt="" src="/image149@2x.png" />
            <div className={styles.portraits}>PORTRAITS</div>
          </div>
        </div>
        <div className={styles.rectangle26} />
        <img className={styles.imageIcon44} alt="" src="/image150@2x.png" />
        <div className={styles.frame49}>
          <div className={styles.welcome}>Welcome</div>
          <div
            className={styles.vibrantAwardWinningWedding}
          >{`Vibrant, Award-Winning Wedding & Elopement Photography - Portland Oregon, the Pacific Northwest & Worldwide`}</div>
          <div
            className={styles.since2023Ara}
          >{`Since 2023, Ara of XXX Photography has adventured all over the world with her clients, telling their love stories through vibrant photographs. As a native Bangalorian and award-winner in both wedding & landscape photography, she creates one-of-a-kind art combining nature and atmosphere with the joyful unpredictability of life’s most important moments. She has photographed over 300 weddings taking place in towering ballrooms, country estates, backcountry waterfalls, mountain ski resorts, cozy bed and breakfasts, balconies in Delhi, rooftops in Bangalore, and many places in between.`}</div>
          <div className={styles.basedInThe}>
            Based in the Bangaloret and available all over India, Ara can’t wait
            to join you wherever your heart is happiest.
          </div>
        </div>
        <div className={styles.araWasEverything}>
          “Ara was everything; I mean everything for our wedding day. It didn't
          matter what time of the day it was or what everyone was doing, if she
          saw something we were looking for she stopped everything and captured
          that moment. She's brilliant. So happy we chose her. Also, she is
          EASILY loved by all of our family! Can’t thank her enough for making
          our day what it was!”
        </div>
        <div className={styles.priyanshu}>- Priyanshu</div>
        <div className={styles.recentAwards}>Recent Awards</div>
        <div className={styles.frame50}>
          <div className={styles.meghnasWorkIs}>
            “Meghna's work is truly amazing! We were very picky when selecting
            our wedding photographer as we wanted someone whose photos, we felt,
            could be used as artwork as we planned on framing one of our
            pictures to put in our home, but didn't want anything cheesy... and
            wow, did she deliver. Her background is in landscape photography so
            the images she is able to capture are breathtaking. She is beyond
            talented, a true professional, and so easy to work with. Her love
            and passion for what she does shows in her work. Our family and
            friends have not been able to stop gushing over the quality of our
            photos. Book her for your wedding, trust me, you will not regret
            it!”
          </div>
          <div className={styles.priyanshu1}>- Priyanshu.</div>
        </div>
        <div className={styles.frame51}>
          <div className={styles.collections}>Collections</div>
          <div className={styles.grandOrTiny}>
            Grand or tiny, indoors or out, near or far, you’ll find a collection
            to match your unique adventure.
          </div>
        </div>
        <div className={styles.frame52}>
          <div
            className={styles.meghnaIsTrue}
          >{`“Meghna is true talent, memorializing some of our most treasured moments more vividly than we could have imagined. The landscape we love, our incessant laughter, our friends & fam, the reflections and splashes, silhouettes, smooches, and smiles all beneath the sunset that made our day ours!”`}</div>
          <div className={styles.rakibul}>- Rakibul</div>
        </div>
      </div>
      <div className={styles.frame53}>
        <div className={styles.frame54} />
        <div className={styles.frame55}>
          <div className={styles.rectangle27} />
          <div className={styles.frame56}>
            <div className={styles.frame57}>
              <img
                className={styles.imageIcon45}
                alt=""
                src="/image151@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame58}>
              <img
                className={styles.imageIcon46}
                alt=""
                src="/image152@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame59}>
              <img
                className={styles.imageIcon47}
                alt=""
                src="/image153@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame60}>
              <img
                className={styles.imageIcon45}
                alt=""
                src="/image154@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame61}>
              <img
                className={styles.imageIcon49}
                alt=""
                src="/image155@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame62}>
              <img
                className={styles.imageIcon45}
                alt=""
                src="/image156@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame63}>
              <img
                className={styles.imageIcon51}
                alt=""
                src="/image157@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame64}>
              <img
                className={styles.imageIcon45}
                alt=""
                src="/image158@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame65}>
              <img
                className={styles.imageIcon53}
                alt=""
                src="/image159@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
            <div className={styles.frame66}>
              <img
                className={styles.imageIcon45}
                alt=""
                src="/image160@2x.png"
              />
              <div className={styles.viewFullsize}>View fullsize</div>
            </div>
          </div>
          <div className={styles.frame67}>
            <div className={styles.frame68}>
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

export default LandingPage;
