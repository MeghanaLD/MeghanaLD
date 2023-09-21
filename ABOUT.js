import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUT.module.css";

const ABOUT = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/landing-page");
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
    <div className={styles.about}>
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
            <div className={styles.about1}>ABOUT</div>
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
          <img className={styles.imageIcon1} alt="" src="/image11@2x.png" />
        </div>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.frame7}>
              <img className={styles.imageIcon2} alt="" src="/image12@2x.png" />
            </div>
            <div className={styles.frame8}>
              <img className={styles.imageIcon3} alt="" src="/image13@2x.png" />
            </div>
          </div>
          <div className={styles.frame9}>
            <img className={styles.imageIcon4} alt="" src="/image14@2x.png" />
            <div className={styles.frame10}>
              <img className={styles.imageIcon5} alt="" src="/image15@2x.png" />
            </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.frame12}>
              <img className={styles.imageIcon6} alt="" src="/image16@2x.png" />
            </div>
            <div className={styles.frame13}>
              <img className={styles.imageIcon7} alt="" src="/image17@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.rectangle1} />
        <div className={styles.rectangle2} />
        <div className={styles.rectangle3} />
        <div className={styles.frame14}>
          <div className={styles.frame15}>
            <img className={styles.imageIcon8} alt="" src="/image18@2x.png" />
            <div className={styles.viewFullsize}>View fullsize</div>
          </div>
          <div className={styles.frame16}>
            <div className={styles.styleApproach}>{`Style & Approach`}</div>
            <div className={styles.iUseA}>
              I use a combination of photojournalism, artistic portraiture, and
              landscape techniques to tell stories heavy on emotion and
              atmosphere. While I don't aspire to be your weird new best friend,
              my goal is get to know you so I can document your event through
              the eyes of a friend. I don't have a formula or template for
              photographing weddings--each day, couple and story is unique.
            </div>
            <div className={styles.asAnAlternating}>
              As an alternating combination of wallflower and cheerful
              taskmaster, I quietly get in the thick of things to capture events
              as they unfold, and provide clear, positive guidance for everyone
              to look their best in portraits. I think it's fair to say most
              people feel awkward having their photo taken (I feel the same
              unless the right person is behind the lens!), so I'm very
              forthcoming with direction, dialogue and inspiration.
            </div>
            <div className={styles.withOver300}>
              With over 300 weddings under my belt, I'm also happy to assist
              with those things normal humans don't do on a daily basis:
              bustling a gown, pinning a boutonniere, troubleshooting a zipper
              on a bridesmaid's dress (why are they always terrible?), hooking
              French buttons, cutting the X threads from suit jacket backs, and
              reminding you to take your hair tie off your wrist before photos.
            </div>
            <div className={styles.i}>I</div>
            <div className={styles.enthusiastically}>enthusiastically</div>
            <div className={styles.supportMarriageEquality}>
              support marriage equality. Humanity is beautiful. Bring it.
            </div>
            <div className={styles.theProcess}>The Process</div>
            <div className={styles.onceICreate}>
              Once I create your photos, I begin my custom artistic mastering
              process. I want your photographs to look amazing for decades to
              come, so I edit my wedding and engagement photographs as I would
              my landscapes: true, vibrant colors that feel like they did in
              person, and classic black and whites that focus in on the moment.
              I don't do extensive Photoshop unless under a special request--I
              believe in real, natural beauty (and doing my job with flattering
              posing in portraits).
            </div>
          </div>
        </div>
        <div className={styles.rectangle4} />
        <div className={styles.frame17}>
          <div className={styles.helloImMeghna}>Hello! I’m MEGHNA.</div>
          <div className={styles.cladSometimesIn}>
            Clad sometimes in muddy boots, sometimes in a pair of heels, my
            career as a wedding photographer often requires both sets of
            footwear as I follow my clients on their romantic adventures all
            over the world. Catamarans, towering ballrooms, glacial lakes,
            rooftops, mountains, bed and breakfasts, mossy forests and craggy
            coastlines all enchant me. My spirit is undaunted, and I am forever
            inspired by relationships, nature, wind and light.
          </div>
          <div className={styles.photographingWeddingsConstan}>
            Photographing weddings constantly reminds me that love is alive,
            strong, deep, unexpected, and worth fighting for. My couples are
            very dear to me, and I often follow them on more adventures through
            their lives. My husband and I still have sushi dates with my very
            first wedding couple from 2012.
          </div>
          <div className={styles.iLiveIn}>
            I live in Portland with my husband, Nathan, who makes me really
            happy. I love hiking, traveling to cold and rocky places, rock
            climbing, reading, dinner parties, drinking IPAs like a good Pacific
            Northwesterner and Scotch like someone who loves Scotland, puttering
            around the garden, playing at the arcade, planning our next big
            trip, and our dog, Ukee. I'm a shameless waterfallaholic. I might
            love Star Wars
          </div>
          <div className={styles.aLittleToo}>a little too much.</div>
          <div className={styles.iLookForward}>
            I look forward to meeting you and going on an adventure!
          </div>
          <div className={styles.xoxo}>xoxo</div>
        </div>
        <div className={styles.frame18}>
          <div className={styles.givingBack}>Giving Back</div>
          <div className={styles.aPortionOf}>
            A portion of Meghna Photography's profits and time enthusiastically
            supports the following organizations:
          </div>
          <div className={styles.frame19}>
            <div className={styles.friendsOfThe}>
              Friends of the Columbia Gorge
            </div>
            <div className={styles.div}>-</div>
            <div className={styles.oregonStateParks}>
              Oregon State Parks Foundation
            </div>
            <div className={styles.div1}>-</div>
            <div className={styles.trailkeepersOfOregon}>
              Trailkeepers of Oregon
            </div>
            <div className={styles.threeRiversHumane}>
              Three Rivers Humane Society
            </div>
            <div className={styles.div2}>-</div>
            <div className={styles.theCatAdoption}>The Cat Adoption Team</div>
          </div>
        </div>
        <div className={styles.frame20}>
          <div className={styles.frame21}>
            <div className={styles.rectangle5} />
            <div className={styles.frame22}>
              <div className={styles.frame23}>
                <img
                  className={styles.imageIcon9}
                  alt=""
                  src="/image19@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame24}>
                <img
                  className={styles.imageIcon10}
                  alt=""
                  src="/image20@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame25}>
                <img
                  className={styles.imageIcon11}
                  alt=""
                  src="/image21@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame26}>
                <img
                  className={styles.imageIcon12}
                  alt=""
                  src="/image22@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame27}>
                <img
                  className={styles.imageIcon13}
                  alt=""
                  src="/image23@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame28}>
                <img
                  className={styles.imageIcon12}
                  alt=""
                  src="/image24@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame29}>
                <img
                  className={styles.imageIcon15}
                  alt=""
                  src="/image25@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame30}>
                <img
                  className={styles.imageIcon12}
                  alt=""
                  src="/image26@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame31}>
                <img
                  className={styles.imageIcon17}
                  alt=""
                  src="/image27@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
              <div className={styles.frame32}>
                <img
                  className={styles.imageIcon12}
                  alt=""
                  src="/image28@2x.png"
                />
                <div className={styles.viewFullsize1}>View fullsize</div>
              </div>
            </div>
            <div className={styles.frame33}>
              <div className={styles.frame34}>
                <div className={styles.megnhaPhotography}>
                  Megnha Photography
                </div>
                <div className={styles.bengaluruWeddingPhotographer}>
                  Bengaluru Wedding Photographer
                </div>
                <div className={styles.xxxXxxXxxDreams}>
                  XXX-XXX-XXX| dreams @ photography.com
                </div>
                <div className={styles.hsrLayoutbengalore560062}>
                  2574 HSR Layout,Bengalore,560062
                </div>
              </div>
              <div className={styles.pacificNorthwest}>
                PACIFIC NORTHWEST - PORTLAND - COLUMBIA RIVER GORGE - HOOD RIVER
                - OREGON COAST - BEND - YACHATS
              </div>
              <div className={styles.seattleSkamania}>
                SEATTLE - SKAMANIA LODGE - COOPERS HALL - PACIFIC CITY - MT.
                HOOD SKIBOWL - GORGE CREST VINEYARDS
              </div>
              <div className={styles.willametteValley}>
                WILLAMETTE VALLEY - WINE COUNTRY - LAKE CHELAN - NORTH CASCADES
                - OLYMPIC NATIONAL PARK - WORLDWIDE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
