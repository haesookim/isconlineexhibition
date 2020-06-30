import React from "react";
import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";
import { Route, Switch, Router, Redirect } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CRP from "./../../Component/Classes/CRP";
import HCI from "./../../Component/Classes/HCI";
import IIT from "../../Component/Classes/IntrotoInfoTech";
import Datavis from "../../Component/Classes/DataVis";
import IGD from "../../Component/Classes/IGD";
import Web from "../../Component/Classes/Web";
import Dt4C from "../../Component/Classes/Dt4C";
import DM from "../../Component/Classes/DM";
import DVP from "../../Component/Classes/DVP";

import "./Tour.scss";
import first from "./1f_mini.png";
import second from "./2f_mini.png";
import third from "./3f_mini.png";

class Tour extends React.Component {
    state = {
        "1F": [
            {
                name: "창의연구실습",
                desc:
                    "알고 계셨습니까, 휴먼? AI는 이미 우리 사회 곳곳에 퍼져 있다는 것을…. 아무도 모르는 사이 우리의 삶을 이롭게 만들 수도, 통제할 수도 있는 AI. 어떻게 바라 보아야 할까요? 창의력 뿜뿜 사변적 디자인 프로젝트와 함께 고민해 보아요!",
                link: "CRP",
                position: "1층 야외공간",
            },
            {
                name: "HCI 이론 및 실습",
                desc:
                    "HCI는 컴퓨터와 사람을 잇는 공부를 하는 학문! 이번 HCI 최종 과제는 챗봇 만들기였습니다. 사용자에게 꼭 맞춘 친절하고 재미있는 챗봇들을 구경하고 가세요!",
                link: "HCI",
                position: "1층 스튜디오",
            },
        ],
        "2F": [
            {
                name: "게임의 이해",
                desc:
                    "기간은 15주. 목표는 게임 하나를 제작해내는 것.날이 갈수록 낯설었던 팀원들과 유니티, 구글 드라이브가 익숙해지는 게 느껴지네요!하지만 어김없이 마지막 날에는 이런 말이 들립니다.“배 교수님… 저희에게 제발 한 주만 더…”",
                link: "IGD",
                position: "2층 전시홀",
            },
            {
                name: "정보문화기술입문",
                desc:
                    "요즘엔 코딩을 알아야 디지털 세상에서 인사라도 할 수 있다는데… Hello World는 부담스러운 당신에게 바치는 따뜻한 찬사 “Hello Processing!” 프로세싱으로 배우는 프로그래밍의 기초이자 정보문화학을 여행하는 초심자들을 위한 입문서.",
                link: "IICT",
                position: "2층 테라스 부근",
            },
            {
                name: "비주얼라이제이션",
                desc:
                    "어떻게 하면 사람들이 쉽고 정확하게 이해할 수 있도록 데이터를 시각화할 수 있을까요? 또 왜곡된 그래프에 속지 않으려면 어떻게 해야할까요? 관악의 비주얼, 비주얼라이제이션에서 배워보세요!",
                link: "DataVis",
                position: "2층 복도",
            },
            {
                name: "디지털영상실습 1",
                desc:
                    "재밌는 영상 직접 만들자! 영상 제작의 모든 것을 체험할 수 있는 관악 최고의 영상 강좌! 애니메이션부터 단편영화까지 만들어보고 싶었던 영상 다 만들고 가세요!",
                link: "DI",
                position: "2층 희관홀",
            },
        ],
        "3F": [
            {
                name: "디자인 사고와 커뮤니케이션",
                desc:
                    "최종... 진짜최종... 진짜최종_final... 디자인은 끝없는 개선과 반복의 연속입니다.디자인 사고와 커뮤니케이션에서는 데이터를 예술로 만들고, 디자인을 데이터로 만드는 데 어떤 것들이 필요한지 배우게 됩니다. 디자인을 넘어서, 예술을 만들어나가는 학생들의 작품을 구경해 보세요!",
                link: "Dt4C",
                position: "3층 랩실 앞쪽",
            },
            {
                name: "웹프로그래밍개론",
                desc:
                    "HTML, CSS, Ruby, Rails를 한 방에 배울 수 있는 관악 유일(아닐 수도 있음)의 강좌가 있다?! 웹프로그래밍개론을 듣고나면 당신도 웹 프로그래밍 마스터!",
                link: "Web",
                position: "3층 랩실 뒤쪽",
            },
            {
                name: "디지털 음향의 이해",
                desc:
                    "왜 지그재그 그림에서 소리가 나지?하루도 빼놓지 않고 듣게 되는 디지털 음향들, 원리와 제작 방식이 궁금하지 않으신가요?디지털 음향의 이해에서 여러 소리를 직접 녹음하고 편집해보세요!",
                link: "DM",
                position: "3층 랩실 뒤쪽",
            },
        ],

        selectedsubj: { name: "", link: "", desc: "", position: "" },
        actionsVisible: false,
    };
    loadClass(dest) {
        this.props.onSelectSubject(dest);
        // setTimeout(() => {
        this.props.history.push(
            "/tour/" + this.props.currentFloor + "/" + dest.link,
        );
    }

    onClickFloor = (floorText) => {
        this.props.onChangeFloor(
            floorText,
            this.state[floorText],
            this.state[floorText][0],
        );
        this.props.history.push(
            "/tour/" + floorText + "/" + this.state[floorText][0].link,
        );
    };

    setSidebar = () => {
        let pathArray = window.location.pathname.split("/");
        if (
            this.props.selectedSubject !== null &&
            this.props.selectedSubject !== undefined
        ) {
            if (pathArray[2] !== this.props.currentFloor) {
                this.props.onChangeFloor(
                    pathArray[2],
                    this.state[pathArray[2]],
                    this.state[pathArray[2]][0],
                );
            }
            if (pathArray[3] !== this.props.selectedSubject.link) {
                let filtered = this.state[pathArray[2]].filter((item) => {
                    return item.link === pathArray[3];
                });
                this.props.onSelectSubject(filtered[0]);
            }
        } else {
            this.props.onSelectSubject(this.state["3F"][0]);
        }

        //this.setState({ selectedsubj: this.props.selectedSubject });
    };

    decideBackground = () => {
        let image =
            this.props.currentFloor === "1F"
                ? first
                : this.props.currentFloor === "2F"
                ? second
                : third;

        return { backgroundImage: `url(${image})` };
    };

    decideLoc = () => {
        let left = 0;
        let top = 0;
        switch (this.props.selectedSubject.link) {
            case "HCI":
                left = 40;
                top = 29;
                break;
            case "CRP":
                left = 85;
                top = 75;
                break;
            case "IICT":
                left = 18;
                top = 100;
                break;
            case "IGD":
                left = 120;
                top = 60;
                break;
            case "DataVis":
                left = 53;
                top = 90;
                break;
            case "Dt4C":
                left = 150;
                top = 75;
                break;
            case "DM":
                left = 49;
                top = 61;
                break;
            case "Web":
                left = 49;
                top = 61;
                break;
            case "DI":
                left = 105;
                top = 35;
                break;
            default:
                break;
        }
        return { left: left, top: top };
    };

    // componentDidMount = () => {
    //     this.setSidebar();
    // };

    render() {
        this.setSidebar();
        const classList = this.props.subjectList.map((item) => {
            return (
                <div
                    className="subject-list"
                    onClick={() => this.loadClass(item)}
                    key={item.name}
                    id={
                        item.name === this.props.selectedSubject.name
                            ? "sel-subject"
                            : ""
                    }
                >
                    {item.name}
                </div>
            );
        });

        return (
            <div id="wrapper">
                <div id="sidebar">
                    <div id="maploc">
                        <div
                            id="minimap"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    (this.props.currentFloor === "1F"
                                        ? first
                                        : this.props.currentFloor === "2F"
                                        ? second
                                        : third) +
                                    ")",
                            }}
                        >
                            <div id="loc-circle" style={this.decideLoc()}></div>
                        </div>
                        <div id="maptext">
                            {this.props.selectedSubject.position}
                        </div>
                    </div>
                    <div id="class">
                        <div>{this.props.currentFloor + " 수업 목록"}</div>
                        <hr></hr>
                        <div id="classList">{classList}</div>
                    </div>
                    <div id="classinfo">
                        <div className="title">
                            {this.props.selectedSubject.name}
                        </div>
                        <div className="description">
                            {this.props.selectedSubject.desc}
                        </div>
                    </div>
                </div>
                <div id="mainTour">
                    <div className="location">
                        <Router history={this.props.history}>
                            <Switch>
                                <Route path="/tour/1F/CRP" component={CRP} />
                                <Route path="/tour/1F/HCI" component={HCI} />
                                <Route path="/tour/2F/IICT" component={IIT} />
                                <Route path="/tour/2F/IGD" component={IGD} />
                                <Route
                                    path="/tour/2F/Datavis"
                                    component={Datavis}
                                />
                                <Route path="/tour/2F/DI" component={DVP} />
                                <Route path="/tour/3F/Dt4C" component={Dt4C} />
                                <Route path="/tour/3F/Web" component={Web} />
                                <Route path="/tour/3F/DM" component={DM} />
                                <Redirect path="/tour/1F" to="/tour/1F/CRP" />
                                <Redirect path="/tour/2F" to="/tour/2F/IGD" />
                                <Redirect path="/tour/3F" to="/tour/3F/Dt4C" />
                                <Redirect path="/tour" to="/tour/1F/CRP" />
                            </Switch>
                        </Router>
                    </div>

                    <div id="carousel">
                        <div
                            className={
                                this.props.currentFloor === "3F"
                                    ? "selected floor"
                                    : "floor"
                            }
                            onClick={() => this.onClickFloor("3F")}
                        >
                            3F
                        </div>
                        <div
                            className={
                                this.props.currentFloor === "2F"
                                    ? "selected floor"
                                    : "floor"
                            }
                            onClick={() => this.onClickFloor("2F")}
                        >
                            2F
                        </div>
                        <div
                            className={
                                this.props.currentFloor === "1F"
                                    ? "selected floor"
                                    : "floor"
                            }
                            onClick={() => this.onClickFloor("1F")}
                        >
                            1F
                        </div>
                    </div>
                </div>
                <div id="actions" onClick={() => this.props.activateFAB()}>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => this.props.activateFAB()}
                    ></FontAwesomeIcon>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentFloor: state.assign.currentFloor,
        subjectList: state.assign.subjectList,
        selectedSubject: state.assign.selectedSubject,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFloor: (num, list, subj) => {
            dispatch({
                type: actionTypes.GET_FLOOR,
                floor: num,
                subjectList: list,
                selectedSubject: subj,
            });
        },
        onSelectSubject: (subject) => {
            dispatch({
                type: actionTypes.GET_SUBJECT,
                subject: subject,
            });
        },
        activateFAB: () => {
            dispatch({ type: actionTypes.ACTIVATE_MENU });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
