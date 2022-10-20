import React from 'react'

export const CountryCodesDropdown = () => {
  return (
    <select
              name="country-codes"
              id="country-codes"
              form="multi-step-form"
            >
              <option data-country-code="IN" value="91">India (+91)</option>
              <option data-country-code="CA" value="1">Canada (+1)</option>
              <optgroup label="Other countries">
                <option data-country-code="DZ" value="213">
                  Algeria (+213)
                </option>
                <option data-country-code="AR" value="54">
                  Argentina (+54)
                </option>
                <option data-country-code="AM" value="374">
                  Armenia (+374)
                </option>
                <option data-country-code="AU" value="61">
                  Australia (+61)
                </option>
                <option data-country-code="AT" value="43">Austria (+43)</option>
                <option data-country-code="AZ" value="994">
                  Azerbaijan (+994)
                </option>
                <option data-country-code="BS" value="1242">
                  Bahamas (+1242)
                </option>
                <option data-country-code="BH" value="973">
                  Bahrain (+973)
                </option>
                <option data-country-code="BD" value="880">
                  Bangladesh (+880)
                </option>
                <option data-country-code="BT" value="975">Bhutan (+975)</option>
                <option data-country-code="CN" value="86">China (+86)</option>
                <option data-country-code="DK" value="45">Denmark (+45)</option>
                <option data-country-code="EG" value="20">Egypt (+20)</option>
                <option data-country-code="FR" value="33">France (+33)</option>
                <option data-country-code="DE" value="49">Germany (+49)</option>
                <option data-country-code="GH" value="233">Ghana (+233)</option>
                <option data-country-code="HK" value="852">
                  Hong Kong (+852)
                </option>
                <option data-country-code="HU" value="36">Hungary (+36)</option>
                <option data-country-code="IS" value="354">
                  Iceland (+354)
                </option>
                <option data-country-code="ID" value="62">
                  Indonesia (+62)
                </option>
                <option data-country-code="IR" value="98">Iran (+98)</option>
                <option data-country-code="IQ" value="964">Iraq (+964)</option>
                <option data-country-code="IE" value="353">
                  Ireland (+353)
                </option>
                <option data-country-code="IL" value="972">Israel (+972)</option>
                <option data-country-code="IT" value="39">Italy (+39)</option>
                <option data-country-code="JM" value="1876">
                  Jamaica (+1876)
                </option>
                <option data-country-code="JP" value="81">Japan (+81)</option>
                <option data-country-code="JO" value="962">Jordan (+962)</option>
                <option data-country-code="KZ" value="7">Kazakhstan (+7)</option>
                <option data-country-code="KE" value="254">Kenya (+254)</option>
                <option data-country-code="KP" value="850">
                  Korea North (+850)
                </option>
                <option data-country-code="KR" value="82">
                  Korea South (+82)
                </option>
                <option data-country-code="KW" value="965">Kuwait (+965)</option>
                <option data-country-code="MY" value="60">Malaysia (+60)</option>
                <option data-country-code="MV" value="960">
                  Maldives (+960)
                </option>
                <option data-country-code="MX" value="52">Mexico (+52)</option>
                <option data-country-code="NP" value="977">Nepal (+977)</option>
                <option data-country-code="NL" value="31">
                  Netherlands (+31)
                </option>
                <option data-country-code="NO" value="47">Norway (+47)</option>
                <option data-country-code="OM" value="968">Oman (+968)</option>
                <option data-country-code="PH" value="63">
                  Philippines (+63)
                </option>
                <option data-country-code="PL" value="48">Poland (+48)</option>
                <option data-country-code="PT" value="351">
                  Portugal (+351)
                </option>
                <option data-country-code="RU" value="7">Russia (+7)</option>
                <option data-country-code="SA" value="966">
                  Saudi Arabia (+966)
                </option>
                <option data-country-code="SG" value="65">
                  Singapore (+65)
                </option>
                <option data-country-code="LK" value="94">
                  Sri Lanka (+94)
                </option>
                <option data-country-code="TH" value="66">Thailand (+66)</option>
                <option data-country-code="GB" value="44">UK (+44)</option>
                <option data-country-code="UA" value="380">
                  Ukraine (+380)
                </option>
                <option data-country-code="AE" value="971">
                  United Arab Emirates (+971)
                </option>
                <option data-country-code="US" value="1">USA (+1)</option>
                <option data-country-code="UZ" value="7">Uzbekistan (+7)</option>
                <option data-country-code="VA" value="379">
                  Vatican City (+379)
                </option>
                <option data-country-code="VE" value="58">
                  Venezuela (+58)
                </option>
                <option data-country-code="VN" value="84">Vietnam (+84)</option>
                <option data-country-code="YE" value="969">Yemen (+969)</option>
                <option data-country-code="ZM" value="260">Zambia (+260)</option>
                <option data-country-code="ZW" value="263">
                  Zimbabwe (+263)
                </option>
              </optgroup>
            </select>
  )
}
