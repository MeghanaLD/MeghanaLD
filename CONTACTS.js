import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CONTACTS.module.css";

const CONTACTS = () => {
  const navigate = useNavigate();

  const onItemLinkClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onItemLink1Click = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onItemLink2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onItemLink3Click = useCallback(() => {
    navigate("/booking");
  }, [navigate]);

  return (
    <div className={styles.contacts}>
      <div className={styles.divgrecaptchaBadge}>
        <div className={styles.divgrecaptchaLogo}>
          <div className={styles.presentation}>
            <div className={styles.body}>
              <div className={styles.divrcAnchor}>
                <div className={styles.divrcAnchorNormalFooter}>
                  <div className={styles.presentationrcAnchorLogoLa}>
                    <img
                      className={styles.divrcAnchorLogoImgIcon}
                      alt=""
                      src="/divrcanchorlogoimg@2x.png"
                    />
                  </div>
                  <div className={styles.divrcAnchorPt}>
                    <div className={styles.linkPrivacy}>Privacy</div>
                    <div className={styles.div}>{` - `}</div>
                    <div className={styles.linkPrivacy}>Terms</div>
                  </div>
                </div>
                <div className={styles.divrcAnchorInvisibleText}>
                  <div className={styles.span}>
                    <div className={styles.protectedByRecaptchaContainer}>
                      <span>{`protected by `}</span>
                      <span className={styles.recaptcha}>reCAPTCHA</span>
                    </div>
                  </div>
                  <div className={styles.divrcAnchorPt1}>
                    <div className={styles.div1}>-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcanvas}>
        <div className={styles.divheaderwrapper}>
          <div className={styles.header}>
            <div className={styles.divheaderinfo}>
              <div className={styles.heading1}>
                <div className={styles.bookmark}>
                  <img
                    className={styles.aralaniLogo09PrintpngIcon}
                    alt=""
                    src="/aralani-logo09-printpng@2x.png"
                  />
                </div>
              </div>
              <div className={styles.since2023}>Since 2023</div>
              <div className={styles.navigationNavList}>
                <div className={styles.itemLink} onClick={onItemLinkClick}>
                  HOME
                </div>
                <div className={styles.itemLink1} onClick={onItemLink1Click}>
                  PORTFOLIO
                </div>
                <div className={styles.itemLink2} onClick={onItemLink2Click}>
                  ABOUT
                </div>
                <div className={styles.itemLink3} onClick={onItemLink3Click}>
                  BOOKING
                </div>
                <div className={styles.itemLink4}>CONTACT</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.section}>
            <div className={styles.divyui317211695218360142}>
              <div className={styles.divyui3172116952183601421}>
                <div className={styles.figure}>
                  <img
                    className={styles.divyui317211695218360142Icon}
                    alt=""
                    src="/divyui-3-17-2-1-1695218360142-91maskgroup@2x.png"
                  />
                </div>
              </div>
              <div className={styles.heading11}>
                <div className={styles.contact}>Contact</div>
              </div>
              <div className={styles.divrow}>
                <div className={styles.divsqsHtmlContent}>
                  <div className={styles.heading2} />
                  <div className={styles.heading21} />
                  <div className={styles.p} />
                  <div className={styles.meghnaXxxXxxXxxCalltextContainer}>
                    <span className={styles.meghnaXxxXxxXxxCalltextContainer1}>
                      <p className={styles.meghna}>Meghna</p>
                      <p className={styles.meghna}>XXX-XXX-XXX (call/text)</p>
                      <p className={styles.meghna}>dreams @ photography.com</p>
                      <p className={styles.meghna}>
                        2574 HSR Layout,Bengalore,560062
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.separator} />
              <div className={styles.divsqsHtmlContent1}>
                <div className={styles.heading22}>
                  <div className={styles.inquiryForm}>Inquiry Form</div>
                </div>
                <div className={styles.p1}>
                  <i className={styles.emphasisIf}>
                    If you do not hear back from me within 24-48 hours, please
                    check your spam filter or contact me again.  I do not ignore
                    any inquiries. Solicitations will be politely discarded.
                  </i>
                </div>
              </div>
              <div className={styles.iframe}>
                <div className={styles.body1}>
                  <div className={styles.form}>
                    <div className={styles.divhbuiInput}>
                      <div className={styles.labelYour}>Your Name *</div>
                      <div className={styles.input}>
                        <div className={styles.divplaceholder}>
                          <div className={styles.hiThere}>Hi there!</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiInput1}>
                      <div className={styles.labelYour}>
                        The Happy Couple's Names *
                      </div>
                      <div className={styles.input}>
                        <div className={styles.divplaceholder1}>
                          <div
                            className={styles.hiThere}
                          >{`i.e. Jamie Smith & Alex Washington - Leave this blank if you aren't inquiring about a wedding, elopement or engagement`}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiInput2}>
                      <div className={styles.labelYour}>Email Address *</div>
                      <div className={styles.input}>
                        <div className={styles.divplaceholder2}>
                          <div className={styles.hiThere}>
                            I don't send spam, I promise
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiInput3}>
                      <div className={styles.labelYour}>Phone Number *</div>
                      <div className={styles.input3} />
                    </div>
                    <div className={styles.divhbuiDatepicker}>
                      <div className={styles.label}>
                        <div className={styles.labelYour}>
                          Event Date (or estimated) *
                        </div>
                      </div>
                      <div className={styles.divhbuiInput4}>
                        <div className={styles.input4}>
                          <div className={styles.divplaceholder3}>
                            <div className={styles.hiThere}>MM/DD/YY</div>
                          </div>
                        </div>
                        <div className={styles.spaniconContainer}>
                          <div className={styles.iicon}>
                            <div className={styles.pseudo}>
                              <div className={styles.symbol}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiCheckboxGroup}>
                      <div className={styles.labelEvent}>Event Type *</div>
                      <div className={styles.label1}>
                        <div className={styles.spanbp3ControlIndicator} />
                        <div className={styles.wedding}>Wedding</div>
                      </div>
                      <div className={styles.label2}>
                        <div className={styles.spanbp3ControlIndicator} />
                        <div className={styles.wedding}>Engagement</div>
                      </div>
                      <div className={styles.label3}>
                        <div className={styles.spanbp3ControlIndicator2} />
                        <div className={styles.wedding}>Elopement</div>
                      </div>
                      <div className={styles.label4}>
                        <div className={styles.spanbp3ControlIndicator2} />
                        <div className={styles.wedding}>Portraits</div>
                      </div>
                      <div className={styles.label5}>
                        <div className={styles.spanbp3ControlIndicator} />
                        <div className={styles.wedding}>
                          Landscape / Wall Art
                        </div>
                      </div>
                      <div className={styles.label6}>
                        <div className={styles.spanbp3ControlIndicator} />
                        <div className={styles.wedding}>Other</div>
                      </div>
                    </div>
                    <div className={styles.divhbuiInput5}>
                      <div className={styles.label7}>
                        <div className={styles.labelYour}>
                          <p className={styles.meghna}>Venue / City, State</p>
                          <p className={styles.meghna}>
                            (enter "unknown" if you don't know yet) *
                          </p>
                        </div>
                      </div>
                      <div className={styles.input3} />
                    </div>
                    <div className={styles.divhbuiRadioButtonGroup}>
                      <div className={styles.label8}>
                        <div className={styles.howInterestedAre}>
                          How interested are you in having Ara photograph your
                          event? *
                        </div>
                      </div>
                      <div className={styles.label9}>
                        <div className={styles.spanbp3ControlIndicator6} />
                        <div className={styles.wedding}>5</div>
                      </div>
                      <div className={styles.label10}>
                        <div className={styles.spanbp3ControlIndicator7} />
                        <div className={styles.wedding}>4</div>
                      </div>
                      <div className={styles.label11}>
                        <div className={styles.spanbp3ControlIndicator7} />
                        <div className={styles.wedding}>3</div>
                      </div>
                      <div className={styles.label12}>
                        <div className={styles.spanbp3ControlIndicator6} />
                        <div className={styles.wedding}>2</div>
                      </div>
                      <div className={styles.label13}>
                        <div className={styles.spanbp3ControlIndicator6} />
                        <div className={styles.wedding}>1</div>
                      </div>
                      <div className={styles.label14}>
                        <div className={styles.spanbp3ControlIndicator7} />
                        <div className={styles.wedding}>
                          N/A (not a wedding or event)
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiRadioButtonGroup1}>
                      <div className={styles.label15}>
                        <div className={styles.howInterestedAre}>
                          Do you wish to schedule a consultation? *
                        </div>
                      </div>
                      <div className={styles.label9}>
                        <div className={styles.spanbp3ControlIndicator6} />
                        <div className={styles.wedding}>Yes</div>
                      </div>
                      <div className={styles.label17}>
                        <div className={styles.spanbp3ControlIndicator6} />
                        <div className={styles.wedding}>No</div>
                      </div>
                      <div className={styles.label11}>
                        <div className={styles.spanbp3ControlIndicator7} />
                        <div className={styles.wedding}>
                          N/A (or not sure yet)
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiInput6}>
                      <div
                        className={styles.labelYour}
                      >{`Good Days/Times for Consultations `}</div>
                      <div className={styles.input}>
                        <div className={styles.divplaceholder4}>
                          <div className={styles.hiThere}>
                            i.e. Monday evenings, anytime next weekend, etc.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divhbuiTextarea}>
                      <div className={styles.labelYour}>
                        What do you have planned, and what's important to you? *
                      </div>
                      <div className={styles.textarea} />
                    </div>
                    <div className={styles.divhbuiDropdown}>
                      <div className={styles.label19}>
                        <div className={styles.labelYour}>
                          Who sent you? I'd love to thank them. *
                        </div>
                      </div>
                      <div className={styles.divcssBg1rzqControl}>
                        <div className={styles.divcss1hwfws3}>
                          <div className={styles.divcss151xaomPlaceholder}>
                            <div className={styles.selectAnOption}>
                              Select an option
                            </div>
                          </div>
                        </div>
                        <div className={styles.divcss1wy0on6}>
                          <div className={styles.spaniconContainer1}>
                            <div className={styles.iicon}>
                              <div className={styles.iicon}>
                                <div className={styles.symbol1}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.divformFooter}>
                      <div className={styles.spanrecaptchaText}>
                        <div className={styles.thisFormIsContainer}>
                          <p className={styles.meghna}>
                            This form is protected by reCAPTCHA and the Google
                          </p>
                          <p className={styles.meghna}>
                             
                            <span className={styles.privacyPolicy}>
                              Privacy Policy
                            </span>
                              and  
                            <span className={styles.privacyPolicy}>
                              Terms of Service
                            </span>
                              apply.
                          </p>
                        </div>
                      </div>
                      <div className={styles.button}>
                        <b className={styles.send}>Send</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div />
          <div className={styles.divyui3172116952183601422}>
            <div className={styles.p2} />
            <div className={styles.separator1} />
            <div className={styles.divyui3172116952183601423}>
              <div className={styles.divyui3172116952183601424}>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon}
                    alt=""
                    src="/imageassetjpeg@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon1}
                    alt=""
                    src="/imageassetjpeg1@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon2}
                    alt=""
                    src="/imageassetjpeg2@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon3}
                    alt=""
                    src="/imageassetjpeg3@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon4}
                    alt=""
                    src="/imageassetjpeg4@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon}
                    alt=""
                    src="/imageassetjpeg5@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon6}
                    alt=""
                    src="/imageassetjpeg6@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon}
                    alt=""
                    src="/imageassetjpeg7@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon8}
                    alt=""
                    src="/imageassetjpeg8@2x.png"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.imageAssetjpegIcon}
                    alt=""
                    src="/imageassetjpeg9@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.divsqsHtmlContent2}>
              <div className={styles.p3}>
                <div className={styles.strongAralaniContainer}>
                  <p className={styles.meghna}>
                    <b>Aralani Photography</b>
                  </p>
                  <p className={styles.meghna}>
                    <i>Bengaluru Wedding Photographer</i>
                  </p>
                  <p className={styles.meghna}>
                    xxx-xxx-xxx | dreams @ photography.com
                  </p>
                  <p className={styles.meghna}>
                    2574 HSR Layout,Bengalore,560062
                  </p>
                </div>
              </div>
              <div className={styles.p4}>
                <div className={styles.strongAralaniContainer}>
                  <p className={styles.meghna}>
                    PACIFIC NORTHWEST - PORTLAND - COLUMBIA RIVER GORGE - HOOD
                    RIVER - OREGON COAST - BEND - YACHATS
                  </p>
                  <p className={styles.meghna}>
                    SEATTLE - SKAMANIA LODGE - COOPERS HALL - PACIFIC CITY - MT.
                    HOOD SKIBOWL - GORGE CREST VINEYARDS
                  </p>
                  <p className={styles.meghna}>
                    WILLAMETTE VALLEY - WINE COUNTRY - LAKE CHELAN - NORTH
                    CASCADES - OLYMPIC NATIONAL PARK - WORLDWIDE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONTACTS;
