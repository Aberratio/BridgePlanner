import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const renderSwitch = (type, type_table) => {
    return type_table[type];
}

const getIconForBox = (isChecked) => {
    if(isChecked) return <Favorite color="secondary" />;
    return <FavoriteBorder />;
}

const getHeart = () => {
    return <b style={{ color: '#b81818' }}>♥</b>;
}

const getDiamond = () => {
    return <b style={{ color: '#dd611d' }}>♦</b>;
}

const getClub = () => {
    return <b style={{ color: '#0c7029' }}>♣</b>;
}

const getSpade = () => {
    return <b style={{ color: '#1f3aa9' }}>♠</b>;
}

const getCrudForAuthor = (simple, auth) => {
    if(auth && auth.uid === simple.authorId) {
        return <p className="system-name text-teal">{ simple.systemName }  <i class="material-icons">edit</i>  <i class="material-icons">delete</i> </p>;
    }
    return <p className="system-name text-teal">{ simple.systemName } </p>;
}

const SimpleDetails = (props) => {
    const { simple, auth } = props;

    if (simple) {
       return ( 
        <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        {getCrudForAuthor(simple, auth)}
                        <p><b>Used by</b> <i>{ simple.firstPlayer } - { simple.secondPlayer }</i></p>

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
                                        {renderSwitch(simple.systemType, {
                                            acol: "Acol", 
                                            polish_club: "Polish",
                                            sayc: "Sayc",
                                            s2_1: "2/1",
                                            precision: "Precision",
                                            inwitofitka: "Inwitofitka",
                                            totolotek: "Totolotek",
                                        
                                        })}
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Special bids that may require defence</b></td>
                                    <td> {simple.special_bids}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Major Suit Preference</b></td>
                                    <td>
                                        { getIconForBox(simple.major_suit_preference) }
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Transfers after opponents bidding</b></td>
                                    <td> { getIconForBox(simple.transfer_after_opps) }
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>New suit at the 2 level</b></td>
                                    <td>
                                    {renderSwitch(simple.new_suit_at_2, {
                                        nf: "NF", 
                                        f1: "F1",
                                        gf: "GF",
                                    })}
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
                                    {renderSwitch(simple.leadsNT, {
                                            l2_4: "2/4", 
                                            l3_5: "3/5",
                                            other: "other",
                                        })}
                                  </td>
                                </tr>
                                <tr>
                                    <td><b>Suit</b></td>
                                    <td>
                                    {renderSwitch(simple.leadsC, {
                                            l2_4: "2/4", 
                                            l3_5: "3/5",
                                            other: "other",
                                        })}</td>
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
                                    {renderSwitch(simple.discardingNT, {
                                            attitude: "Attitude", 
                                            count: "Count",
                                            lavinthal: "Lavinthal signal",
                                            smiths: "Smith's signal",
                                            direct_attitude: "Direct attitude",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Suit</b></td>
                                        <td>
                                    {renderSwitch(simple.discardingC, {
                                            attitude: "Attitude", 
                                            count: "Count",
                                            lavinthal: "Lavinthal signal",
                                            smiths: "Smith's signal",
                                            direct_attitude: "Direct attitude",
                                        })}</td>
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
                                        <td> { simple.count_low_high }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>Attitude: low-high</b></td>
                                        <td> { simple.attitude_low_high }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Smith Echo</b></td>
                                        <td> 
                                        { getIconForBox(simple.smithEcho) }
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
                                        { getIconForBox(simple.negative) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Support</b></td>
                                        <td>
                                        { getIconForBox(simple.support) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Responsive</b></td>
                                        <td>
                                        { getIconForBox(simple.responsive) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Lightner's</b></td>
                                        <td>
                                        { getIconForBox(simple.lightners) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>SOS RDBL</b></td>
                                        <td>
                                        { getIconForBox(simple.sos_rdbl) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Anti-lead diection</b></td>
                                        <td>
                                        { getIconForBox(simple.anti_lead_diection) }
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
                                        { getIconForBox(simple.drury) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Lebensohl</b></td>
                                        <td>
                                        { getIconForBox(simple.lebensohl) }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Autolebensohl</b></td>
                                        <td>
                                        { getIconForBox(simple.autolebensohl) }
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                             <b>Responder's relay</b></td>
                                        
                                             <td>
                                    {renderSwitch(simple.responders_relay, {
                                            responders_relay_no: "no", 
                                            one_way: "One-way Checkback",
                                            two_way: "Two-way Checkback",
                                            nmf: "New Minor Forsing",
                                        })}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                             <b>(Jump) cue-bids</b></td>
                                        <td>
                                    {renderSwitch(simple.jump_cue_bids, {
                                            michaels_weak: "Michaels - weak", 
                                            michaels_weak_strong: "Michaels - weak or strong",
                                            michaels_all: "Michaels - all",
                                            ghestem: "Ghestem",
                                        })}</td>
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
                                    {renderSwitch(simple.blackwood, {
                                            blackwood_no: "No Blackwood", 
                                            count1025_q_k: "1-4 | 0-3 | 2-5 | 2-5 + Q | 2-5 + Q + 1K |..",
                                            count102_q_k: "1-4 | 0-3 | 2 | 2 + Q | 2 + Q + 1K |..",
                                            count031425_q_k: "0-3 | 1-4 | 2-5 | 2-5 + Q | 2-5 + Q + 1K |..",
                                            count03142_q_k: "0-3 | 1-4 | 2 | 2 + Q | 2 + Q + 1K |..",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Exclusion</b></td>
                                        <td>
                                    {renderSwitch(simple.exclusion, {
                                            exclusion_no: "No Exclusion", 
                                            count01234: "0 | 1 | 2 | 3 | 4",
                                            count102: "1-4 | 0-3 | 2 | 2 + Q | 2 + Q + 1K |..",
                                            count031: "0-3 | 1-4 | 2 | 2 + Q | 2 + Q + 1K |..",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Gerber</b></td>
                                        <td> 
                                    {renderSwitch(simple.gerber, {
                                            gerber_yes: "yes", 
                                            geber_no: "no",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Asking about Q trump</b></td>
                                        <td>
                                    {renderSwitch(simple.q_trump, {
                                            no: "no", 
                                            woQt_qt: "w/o Q trump | Q trump",
                                            woQt_qt_plusk: "w/o Q trump | Q trump + 0K |  Q trump + 1K |..",
                                        })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>Asking about K</b></td>
                                        <td>
                                    {renderSwitch(simple.asing_k, {
                                            no: "no", 
                                            count_0123: "0 | 1 | 2 |..",
                                            suit_showing_kings: "suit showing kings",
                                        })}
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
                                             <b>2</b>{getDiamond()} after <b>1</b>{getClub()} (0-3{getClub()})</td>
                                        <td> 
                                    {renderSwitch(simple.twod_after_opps_1c, {
                                            natural: "natural", 
                                            h_s: "♥ + ♠",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>2</b>{getDiamond()} after <b>1</b>{getDiamond()} (0-2{getDiamond()}) </td>
                                        <td> 
                                    {renderSwitch(simple.twod_after_opps_1d, {
                                            natural: "natural", 
                                            h_s: "♥ + ♠",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                             <b>2</b>{getDiamond()} after <b>1</b>{getDiamond()} (3+{getDiamond()}) </td>
                                        <td> 
                                    {renderSwitch(simple.twod_after_opps_1d_nat, {
                                            s_corh: "♠ + ♣/♥", 
                                            h_s: "♥ + ♠",
                                        })}</td>
                                    </tr>
                                  
                                    <tr>
                                        <td>
                                            vs. <b>1NT</b> (9-14)</td>
                                        <td> { simple.vs1NT_weak }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             vs. <b>1NT</b> (14-17)</td>
                                        <td> { simple.vs1NT_normal }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                             vs. strong <b>1</b>{getClub()}</td>
                                        <td> { simple.vs1c_strong }
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
                                        <td><b>1</b>{getClub()}</td>
                                        <td> 
                                    {renderSwitch(simple.open_1c, {
                                            nat_3_plus: "nat, 3+", 
                                            polish_club: "polish club",
                                            any_16_plus: "ANY, 16+",
                                        })}</td>
                                        <td> { simple.response_1c }
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td><b>1</b>{getDiamond()}</td>
                                        <td> min. {getDiamond()}: &nbsp;
                                    {renderSwitch(simple.open_1d, {
                                            v0: "0-2", 
                                            v3: "3",
                                            v4_only: "4 (only if 4441)",
                                            v4: "4",
                                            v5: "5",
                                        })}</td>
                                        <td> { simple.response_1d }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1</b>{getHeart()}</td>
                                        <td> min. {getHeart()}: &nbsp;
                                    {renderSwitch(simple.open_1h, {
                                            v4: "4",
                                            v5: "5",
                                        })}</td>
                                        <td>
                                        Bergen { getIconForBox(simple.response_1h_bergen) }&nbsp; &nbsp;
                                        Mixed raise { getIconForBox(simple.response_1h_mixed) }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1</b>{getSpade()}</td>
                                        <td> min. {getSpade()}: &nbsp;
                                    {renderSwitch(simple.open_1s, {
                                            v4: "4",
                                            v5: "5",
                                        })}</td>
                                        <td>
                                        Bergen { getIconForBox(simple.response_1s_bergen) } &nbsp; &nbsp;
                                        Mixed raise { getIconForBox(simple.response_1s_mixed) } 
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>1NT</b></td>
                                        <td>
                                    {renderSwitch(simple.open_1n, {
                                            bal_1517: "BAL, 15-17", 
                                            bal_1416: "BAL, 14-16",
                                            bal_1315: "BAL, 13-15",
                                            bal_1214: "BAL, 12-14",
                                            any_914: "ANY, 9-11",
                                        })}</td>
                                        <td> { simple.response_1n }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{getClub()}</td>
                                        <td>
                                    {renderSwitch(simple.open_2c, {
                                            acol: "acol", 
                                            precision: "precision",
                                            pre_h_s: "pre, ♥ + ♠",
                                            pre_nat: "pre, nat",
                                            strong_nat: "strong, nat",
                                        })}</td>
                                        <td> { simple.response_2c }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{getDiamond()}</td>
                                        <td>
                                    {renderSwitch(simple.open_2d, {
                                            mini_multi: "mini multi", 
                                            multi: "multi",
                                            pre_nat: "pre, nat",
                                            strong_nat: "strong, nat",
                                            pre_h_s: "pre, ♥ + ♠",
                                            Wilkosz: "Wilkosz",
                                        })}</td>
                                        <td> { simple.response_2d } 
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{getHeart()}</td>
                                        <td>
                                    {renderSwitch(simple.open_2h, {
                                            pre_nat: "pre, nat",
                                            strong_nat: "strong, nat",
                                            pre_h_o: "pre, 5+♥ - (4)5+other",
                                            pre_h_m: "pre, 5+♥ - (4)5+♣/♦",
                                        })}</td>
                                        <td> { simple.response_2h } </td>
                                    </tr>

                                    <tr>
                                        <td><b>2</b>{getSpade()}</td>
                                        <td>
                                    {renderSwitch(simple.open_2s, {
                                            pre_nat: "pre, nat",
                                            strong_nat: "strong, nat",
                                            pre_s_m: "pre, 5+♠ - (4)5+♣/♦",
                                        })}</td>
                                        <td> { simple.response_2s } </td>
                                    </tr>
                                    <tr>
                                        <td><b>2NT</b></td>
                                        <td>
                                    {renderSwitch(simple.open_2n, {
                                            pre_mm: "pre, ♣ + ♦",
                                            bal_2021: "BAL, 20-21",
                                            bal_2122: "BAL, 21-22",
                                            bal_2123: "BAL, 21-23",
                                            bal_2223: "BAL, 22-22",
                                        })}</td>
                                        <td>
                                    {renderSwitch(simple.response_2n, {
                                            muppet: "Muppet",
                                            puppet: "Puppet",
                                            natural: "Natural",
                                            other: "Other",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td><b>3NT</b></td>
                                        <td> 
                                    {renderSwitch(simple.open_3n, {
                                            toplay: "to play",
                                            gambling: "Gambling",
                                        })}</td>
                                        <td>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>4NT</b></td>
                                        <td>
                                    {renderSwitch(simple.open_4n, {
                                            pre_mm: "pre, 6+5♣/♦",
                                            asking_key_cards: "asking about key cards",
                                        })}</td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Created: {moment(simple.createdAt.toDate()).calendar()}</div> 
                    </div>
                </div>
            </div>   
        )
    } else {
        return (
            <div className="container center">
                <p>Loading simple card...</p>
            </div>   
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const simples = state.firestore.data.basic;
    const simple = simples ? simples[id] : null
    return {
        simple: simple,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'basic' }
    ])
) (SimpleDetails)