import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createSimpleCard } from '../../store/actions/simpleCardActions';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export class CreateSimpleCard extends Component {

    state = {
        firstPlayer: '',
        secondPlayer: '',
        systemName: '',
        systemType: '',
        special_bids: '',
        major_suit_preference: false,
        transfer_after_opps: false,
        new_suit_at_2: '',
        leadsNT: '',
        leadsC: '',
        discardingC: '',
        discardingNT: '',
        count_low_high: '',
        attitude_low_high: '',
        smithEcho: false,
        negative: false,
        support: false,
        responsive: false,
        lightners: false,
        sos_rdbl: false,
        anti_lead_diection: false,
        drury: false,
        lebensohl: false,
        autolebensohl: false,
        responders_relay: '',
        jump_cue_bids: '',
        blackwood: '',
        exclusion: '',
        gerber: '',
        q_trump: '',
        asing_k: '',
        twod_after_opps_1c: '',
        twod_after_opps_1d: '',
        twod_after_opps_1d_nat: '',
        vs1NT_weak: '',
        vs1NT_normal: '',
        vs1c_strong: '',
        open1c: '',
        open1d: '',
        open1h: '',
        open1s: '',
        open1n: '',
        open2c: '',
        open2d: '',
        open2h: '',
        open2s: '',
        open2n: '',
        open3n: '',
        open4n: '',
        response_1c: '',
        response_1d: '',
        response_1h_bergen: '',
        response_1s_bergen: '',
        response_1h_mixed: '',
        response_1s_mixed: '',
        response_2c: '',
        response_2d: '',
        response_2h: '',
        response_2s: '',
        response_2n: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleBoxChange = (e) => {
        this.setState({
            [e.target.id]: !this.state[e.target.id]
        })
    }

    handleChangeRadio = (e, x) => {
        console.log(e);
        console.log(x);
        this.setState({
            [x]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.createSimpleCard(this.state)
        this.props.history.push('/');
    }

    getHeart = () => {
        return <b style={{ color: '#b81818' }}>♥</b>;
    }
    
    getDiamond = () => {
        return <b style={{ color: '#dd611d' }}>♦</b>;
    }
    
    getClub = () => {
        return <b style={{ color: '#0c7029' }}>♣</b>;
    }
    
    getSpade = () => {
        return <b style={{ color: '#1f3aa9' }}>♠</b>;
    }

    getRequired = () => {
        return <b style={{ color: '#b81818' }}>*</b>;
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4 className="text-teal">Create New Basic Convention Card</h4>
                   
                    <div className="input-field">
                        <label htmlFor="firstPlayer">First Player {this.getRequired()} </label>
                        <input required type="text" id="firstPlayer" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="secondPlayer">Second Player {this.getRequired()} </label>
                        <input required type="text" id="secondPlayer" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="systemName">System Name {this.getRequired()} </label>
                        <input required type="text" id="systemName" onChange={this.handleChange}/>
                    </div>

                    <div className="simple-card__table-big">
                        <h5 className="text-teal">General</h5>   
                        <table className="highlight">
                                <thead>
                                    <tr>
                                        <th className="th-meaning"></th>
                                        <th className="th-responses"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td><b>System Type</b></td>
                                    <td>
                                    
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.systemType}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'systemType',
                                            id: 'systemType',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"acol"}>Acol</option>
                                        <option value={"polish_club"}>Polish Club</option>
                                        <option value={"sayc"}>Sayc</option>
                                        <option value={"s2_1"}>2/1</option>
                                        <option value={"precision"}>Precision</option>
                                        <option value={"inwitofitka"}>Inwitofitka</option>
                                        <option value={"totolotek"}>Totolotek</option>
                                        </Select>
                                    </FormControl>

                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Special bids that may require defence</b></td>
                                    <td>
                                    <textarea id="special_bids" name="special_bids" className="materialize-textarea" onChange={this.handleChange}/>

                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Major Suit Preference</b></td>
                                    <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="major_suit_preference" id="major_suit_preference"
                                            onChange={this.handleBoxChange} />}
                                        />
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Transfers after opponents bidding</b></td>
                                    <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="transfer_after_opps" id="transfer_after_opps"
                                            onChange={this.handleBoxChange} />}
                                        />
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>New suit at the 2 level</b></td>
                                    <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.new_suit_at_2}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'new_suit_at_2',
                                            id: 'new_suit_at_2',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"nf"}>NF</option>
                                        <option value={"f1"}>F1</option>
                                        <option value={"gf"}>GF</option>
                                        </Select>
                                    </FormControl>
                                  </td>
                                </tr>
                                </tbody>
                                </table>
                   


                    </div>

                    <div className="simple-card__table">
                            <h5 className="text-teal">Leads</h5>   
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td><b>NT</b></td>
                                    <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.leadsNT}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'leadsNT',
                                            id: 'leadsNT',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"l2_4"}>2/4</option>
                                        <option value={"l3_5"}>3/5</option>
                                        <option value={"other"}>other</option>
                                        </Select>
                                    </FormControl>
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Suit</b></td>
                                    <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.leadsC}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'leadsC',
                                            id: 'leadsC',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"l2_4"}>2/4</option>
                                        <option value={"l3_5"}>3/5</option>
                                        <option value={"other"}>other</option>
                                        </Select>
                                    </FormControl></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="simple-card__table">
                            <h5 className="text-teal">Discards</h5>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><b>NT</b></td>
                                        <td>
                                            <FormControl>
                                                <Select
                                                native
                                                value={this.state.discardingNT}
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'discardingNT',
                                                    id: 'discardingNT',
                                                }}
                                                >
                                                <option aria-label="None" value="" />
                                                <option value={"attitude"}>Attitude</option>
                                                <option value={"count"}>Count</option>
                                                <option value={"lavinthal"}>Lavinthal signal</option>
                                                <option value={"smiths"}>Smith's signal</option>
                                                <option value={"direct_attitude"}>Direct attitude</option>
                                                </Select>
                                            </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>Suit</b></td>
                                        <td>
                                            <FormControl>
                                                <Select
                                                native
                                                value={this.state.discardingC}
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'discardingC',
                                                    id: 'discardingC',
                                                }}
                                                >
                                                <option aria-label="None" value="" />
                                                <option value={"attitude"}>Attitude</option>
                                                <option value={"count"}>Count</option>
                                                <option value={"lavinthal"}>Lavinthal signal</option>
                                                <option value={"smiths"}>Smith's signal</option>
                                                <option value={"direct_attitude"}>Direct attitude</option>
                                                </Select>
                                            </FormControl>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="simple-card__table-medium">
                            <h5 className="text-teal">Other Signals</h5>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th className="th-responses"></th>
                                        <th className="th-responses"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><b>Count: low-high</b></td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup name="count_low_high" id="count_low_high" value={this.count_low_high} onChange={e => this.handleChangeRadio(e, "count_low_high")}>
                                            <FormControlLabel value="odd" control={<Radio />} label="odd" />
                                            <FormControlLabel value="even" control={<Radio />} label="even" />
                                        </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>Attitude: low-high</b></td>
                                        <td>
                                        <FormControl component="fieldset">
                                            <RadioGroup name="attitude_low_high" id="attitude_low_high" value={this.attitude_low_high} onChange={e => this.handleChangeRadio(e, "attitude_low_high")}>
                                                <FormControlLabel value="encouraging" control={<Radio />} label="encouraging" />
                                                <FormControlLabel value="discouraging" control={<Radio />} label="discouraging" />
                                            </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Smith Echo</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="smithEcho" id="smithEcho"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="simple-card__table">
                            <h5 className="text-teal">Doubles</h5>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                             <b>Negative</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="negative" id="negative"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Support</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="support" id="support"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Responsive</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="responsive" id="responsive"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Lightner's</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="lightners" id="lightners"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>SOS RDBL</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="sos_rdbl" id="sos_rdbl"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Anti-lead diection</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="anti_lead_diection" id="anti_lead_diection"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                        <div className="simple-card__table-medium">
                            <h5 className="text-teal">Conventions</h5>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th className="th-meaning"></th>
                                        <th className="th-meaning"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                <tr>
                                        <td>
                                             <b>Drury</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="drury" id="drury"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Lebensohl</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="lebensohl" id="lebensohl"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Autolebensohl</b></td>
                                        <td>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="autolebensohl" id="autolebensohl"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                             <b>Responder's relay</b></td>
                                        
                                             <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.responders_relay}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'responders_relay',
                                            id: 'responders_relay',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"responders_relay_no"}>no</option>
                                        <option value={"one_way"}>One-way Checkback</option>
                                        <option value={"two_way"}>Two-way Checkback</option>
                                        <option value={"nmf"}>New Minor Forsing</option>
                                        </Select>
                                    </FormControl></td>
                                    </tr>

                                    <tr>
                                        <td>
                                             <b>(Jump) cue-bids</b></td>
                                        <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.jump_cue_bids}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'jump_cue_bids',
                                            id: 'jump_cue_bids',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"michaels_weak"}>Michaels - weak</option>
                                        <option value={"michaels_weak_strong"}>Michaels - weak or strong</option>
                                        <option value={"michaels_all"}>Michaels - all</option>
                                        <option value={"ghestem"}>Ghestem</option>
                                        </Select>
                                    </FormControl></td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>


                        <div className="simple-card__table-medium">
                            <h5 className="text-teal">High level bidding</h5>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th className="th-meaning"></th>
                                        <th className="th-responses"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                <tr>
                                        <td>
                                             <b>Blackwood</b></td>
                                        <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.blackwood}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'blackwood',
                                            id: 'blackwood',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"blackwood_no"}>No Blackwood</option>
                                        <option value={"count1025_q_k"}>1-4 | 0-3 | 2-5 | 2-5 + Q | 2-5 + Q + 1K |..</option>
                                        <option value={"count102_q_k"}>1-4 | 0-3 | 2 | 2 + Q | 2 + Q + 1K |..</option>
                                        <option value={"count031425_q_k"}>0-3 | 1-4 | 2-5 | 2-5 + Q | 2-5 + Q + 1K |..</option>
                                        <option value={"count03142_q_k"}>0-3 | 1-4 | 2 | 2 + Q | 2 + Q + 1K |..</option>
                                        </Select>
                                    </FormControl></td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Exclusion</b></td>
                                        <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.exclusion}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'exclusion',
                                            id: 'exclusion',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"exclusion_no"}>No Exclusion</option>
                                        <option value={"count01234"}>0 | 1 | 2 | 3 | 4</option>
                                        <option value={"count102"}>1-4 | 0-3 | 2 | 2 + Q | 2 + Q + 1K |..</option>
                                        <option value={"count031"}>0-3 | 1-4 | 2 | 2 + Q | 2 + Q + 1K |..</option>
                                        </Select>
                                    </FormControl></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Gerber</b></td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup name="gerber" id={this.gerber} value={this.gerber} onChange={e => this.handleChangeRadio(e, "gerber")}>
                                            <FormControlLabel value="gerber_yes" control={<Radio />} label="yes" />
                                            <FormControlLabel value="geber_no" control={<Radio />} label="no" />
                                        </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Asking about Q trump</b></td>
                                        <td>
                                    <FormControl>
                                        <Select
                                        native
                                        value={this.state.q_trump}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'q_trump',
                                            id: 'q_trump',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={"no"}>no</option>
                                        <option value={"woQt_qt"}>w/o Q trump | Q trump</option>
                                        <option value={"woQt_qt_plusk"}>w/o Q trump | Q trump + 0K |  Q trump + 1K |..</option>
                                        </Select>
                                    </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Asking about K</b></td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.asing_k}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'asing_k',
                                                id: 'asing_k',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"no"}>no</option>
                                            <option value={"count_0123"}>0 | 1 | 2 |..</option>
                                            <option value={"suit_showing_kings"}>suit showing kings</option>
                                            </Select>
                                        </FormControl>
                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>

                        <div className="simple-card__table-big">
                            <h5 className="text-teal">Defense</h5>   
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th className="th-meaning"></th>
                                        <th className="th-responses"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <b>2</b>{this.getDiamond()} after <b>1</b>{this.getClub()} (0-3{this.getClub()})</td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup id="twod_after_opps_1c" name="twod_after_opps_1c" value={this.twod_after_opps_1c} onChange={e => this.handleChangeRadio(e, "twod_after_opps_1c")}>
                                            <FormControlLabel value="natural" control={<Radio />} label="natural" />
                                            <FormControlLabel value="h_s" control={<Radio />} label="♥ + ♠" />
                                        </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>  
                                            <b>2</b>{this.getDiamond()} after <b>1</b>{this.getDiamond()} (0-2{this.getDiamond()}) </td>
                                         <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup id="twod_after_opps_1d" name="twod_after_opps_1d" value={this.twod_after_opps_1d} onChange={e => this.handleChangeRadio(e, "twod_after_opps_1d")}>
                                            <FormControlLabel value="natural" control={<Radio />} label="natural" />
                                            <FormControlLabel value="h_s" control={<Radio />} label="♥ + ♠" />
                                        </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>2</b>{this.getDiamond()} after <b>1</b>{this.getDiamond()} (3+{this.getDiamond()}) </td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup id="twod_after_opps_1d_nat" name="twod_after_opps_1d_nat" value={this.twod_after_opps_1d_nat} onChange={e => this.handleChangeRadio(e, "twod_after_opps_1d_nat")}>
                                            <FormControlLabel value="s_corh" control={<Radio />} label="♠ + ♣/♥" />
                                            <FormControlLabel value="h_s" control={<Radio />} label="♥ + ♠" />
                                        </RadioGroup>
                                        </FormControl>
                                        </td>
                                    </tr>
                                  
                                    <tr>
                                        <td>
                                            vs. <b>1NT</b> (9-14)</td>
                                        <td>
                                            <textarea id="vs1NT_weak" name="vs1NT_weak" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             vs. <b>1NT</b> (14-17)</td>
                                        <td>
                                            <textarea id="vs1NT_normal" name="vs1NT_normal" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             vs. strong <b>1</b>{this.getClub()}</td>
                                        <td>
                                            <textarea id="vs1c_strong" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="simple-card__table-big">
                            <h5 className="text-teal">Openings</h5>
                            <table className="highlight ">
                                <thead>
                                    <tr>
                                        <th className="th-opening">Opening</th>
                                        <th className="th-meaning">Meaning</th>
                                        <th className="th-responses">Responses</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><b>1</b>{this.getClub()}</td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_1c}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_1c',
                                                id: 'open_1c',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"nat_3_plus"}>nat, 3+</option>
                                            <option value={"polish_club"}>polish club</option>
                                            <option value={"any_16_plus"}>ANY, 16+</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_1c" name="response_1c" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><b>1</b>{this.getDiamond()}</td>
                                        <td>
                                        <FormControl>
                                        <FormLabel>min. {this.getDiamond()}</FormLabel>
                                            <Select
                                            native
                                            value={this.state.open_1d}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_1d',
                                                id: 'open_1d',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"v0-2"}>0-2</option>
                                            <option value={"v3"}>3</option>
                                            <option value={"v4_only"}>4 (only if 4441)</option>
                                            <option value={"v4"}>4</option>
                                            <option value={"v5"}>5</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_1d" name="response_1d" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1</b>{this.getHeart()}</td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <FormLabel> min. {this.getHeart()}</FormLabel>
                                        <RadioGroup id="open_1h" name="open_1h" value={this.open_1h} onChange={e => this.handleChangeRadio(e, "open_1h")}>
                                            <FormControlLabel value="v4" control={<Radio />} label="4" />
                                            <FormControlLabel value="v5" control={<Radio />} label="5" />
                                        </RadioGroup>
                                        </FormControl></td>
                                        <td>
                                        <FormControlLabel
                                            label="Bergen"
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="response_1h_bergen" id="response_1h_bergen"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        
                                        <FormControlLabel
                                            label="Mixed raise"
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="response_1h_mixed" id="response_1h_mixed"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1</b>{this.getSpade()}</td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <FormLabel>min. {this.getSpade()}</FormLabel>
                                        <RadioGroup id="open_1s" name="open_1s" value={this.open_1s} onChange={e => this.handleChangeRadio(e, "open_1s")}>
                                            <FormControlLabel value="v4" control={<Radio />} label="4" />
                                            <FormControlLabel value="v5" control={<Radio />} label="5" />
                                        </RadioGroup>
                                        </FormControl></td>
                                        <td>
                                        <FormControlLabel
                                            label="Bergen"
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="response_1s_bergen" id="response_1s_bergen"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        
                                        <FormControlLabel
                                            label="Mixed raise"
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="response_1s_mixed" id="response_1s_mixed"
                                            onChange={this.handleBoxChange} />}
                                        />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1NT</b></td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_1n}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_1n',
                                                id: 'open_1n',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"bal_1517"}>BAL, 15-17</option>
                                            <option value={"bal_1416"}>BAL, 14-16</option>
                                            <option value={"bal_1315"}>BAL, 13-15</option>
                                            <option value={"bal_1214"}>BAL, 12-14</option>
                                            <option value={"any_914"}>ANY, 9-11</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_1n" name="response_1n" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{this.getClub()}</td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_2c}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_2c',
                                                id: 'open_2c',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"acol"}>acol</option>
                                            <option value={"precision"}>precision</option>
                                            <option value={"pre_h_s"}>pre, ♥ + ♠</option>
                                            <option value={"pre_nat"}>pre, nat</option>
                                            <option value={"strong_nat"}>strong, nat</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_2c" name="response_2c" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{this.getDiamond()}</td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_2d}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_2d',
                                                id: 'open_2d',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"mini_multi"}>mini multi</option>
                                            <option value={"multi"}>multi</option>
                                            <option value={"pre_nat"}>pre, nat</option>
                                            <option value={"strong_nat"}>strong, nat</option>
                                            <option value={"pre_h_s"}>pre, ♥ + ♠</option>
                                            <option value={"Wilkosz"}>Wilkosz</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_2d" name="response_2d" className="materialize-textarea" onChange={this.handleChange}/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{this.getHeart()}</td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_2h}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_2h',
                                                id: 'open_2h',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"pre_nat"}>pre, nat</option>
                                            <option value={"strong_nat"}>strong, nat</option>
                                            <option value={"pre_h_o"}>pre, 5+♥ - (4)5+other</option>
                                            <option value={"pre_h_m"}>pre, 5+♥ - (4)5+♣/♦</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_2h" name="response_2h" className="materialize-textarea" onChange={this.handleChange}/></td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{this.getSpade()}</td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_2s}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_2s',
                                                id: 'open_2s',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"pre_nat"}>pre, nat</option>
                                            <option value={"strong_nat"}>strong, nat</option>
                                            <option value={"pre_s_m"}>pre, 5+♠ - (4)5+other</option>
                                            </Select>
                                        </FormControl></td>
                                        <td><textarea id="response_2s" name="response_2s" className="materialize-textarea" onChange={this.handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td><b>2NT</b></td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.open_2n}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'open_2n',
                                                id: 'open_2n',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"pre_mm"}>pre, ♣ + ♦</option>
                                            <option value={"bal_2021"}>BAL, 20-21</option>
                                            <option value={"bal_2122"}>BAL, 21-22</option>
                                            <option value={"bal_2123"}>BAL, 21-23</option>
                                            <option value={"bal_2223"}>BAL, 22-23</option>
                                            </Select>
                                        </FormControl></td>
                                        <td>
                                        <FormControl>
                                            <Select
                                            native
                                            value={this.state.response_2n}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'response_2n',
                                                id: 'response_2n',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={"muppet"}>Muppet</option>
                                            <option value={"puppet"}>Puppet</option>
                                            <option value={"natural"}>Natural</option>
                                            <option value={"other"}>Other</option>
                                            </Select>
                                        </FormControl></td>
                                    </tr>
                                    <tr>
                                        <td><b>3NT</b></td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup id="open_3n" name="open_3n" value={this.open_3n} onChange={e => this.handleChangeRadio(e, "open_3n")}>
                                            <FormControlLabel value="toplay" control={<Radio />} label="To Play" />
                                            <FormControlLabel value="gambling" control={<Radio />} label="Gambling" />
                                        </RadioGroup>
                                        </FormControl></td>
                                        <td>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>4NT</b></td>
                                        <td>
                                        <FormControl component="fieldset">
                                        <RadioGroup id="open_4n" name="open_4n" value={this.open_4n} onChange={e => this.handleChangeRadio(e, "open_4n")}>
                                            <FormControlLabel value="pre_mm" control={<Radio />} label="pre, 6+5+♣/♦" />
                                            <FormControlLabel value="asking_key_cards" control={<Radio />} label="asking about key cards" />
                                        </RadioGroup>
                                        </FormControl></td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                    <div className="input-field">
                        <button className="btn teal lighten-1 z-depth-0 button-large">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSimpleCard: (project) => dispatch(createSimpleCard(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSimpleCard);