import React from "react";

import neowiz from "./neowiz_logo.png";
import poster from "./poster.png";
import event from "./box_cat.png";

import "./Event.scss";

class Event extends React.Component {
    render() {
        return (
            <div id="event" className="main">
                <div className="event-item">
                    <div className="text-wrapper">
                        <div className="title">
                            #1 네오위즈 채용상담 및 설명회 (29일(월) 오전 11시)
                        </div>
                        <div className="text">
                            네오위즈와 게임에 관심있는 사람은 누구나 환영합니다!
                            막연한 호기심을 풀거나 그동안 궁금했던 것들을 마구
                            해소할 수 있는 기회랍니다. 설명회도 역시나
                            온라인으로 진행되니 편하게 놀러오세요~!
                        </div>
                    </div>
                    <img
                        className="event-image"
                        src={neowiz}
                        alt="neowiz logo"
                    />
                </div>
                <hr></hr>
                <div className="event-item" id="second">
                    <img className="event-image" src={poster} alt="poster" />
                    <div className="text-wrapper">
                        <div className="title">#2 인스타그램 스토리 이벤트</div>
                        <div className="text">
                            여러분들의 인스타그램 스토리에 @itctfestival 태그와
                            함께 과제전 포스터나 화면 캡쳐, 촬영본 등등을
                            자유롭게 공유해주세요. <br />
                            <br />
                            추첨을 통해 코로나 시대의 집콕 필수템 '스마트폰
                            거치대'를 드립니다!
                            <br />
                            <br />
                            *비공개계정일 경우 스토리 업로드 여부 확인이
                            어렵습니다. 이벤트 참여 후 꼭 @itctfestival로 DM을
                            보내주세요!
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="event-item">
                    <div className="text-wrapper">
                        <div className="title">#3 보물찾기 이벤트</div>
                        <div className="text">
                            (정문 과제전) - (과제) = 0 이라고 생각하셨나요?
                            온라인 64동에 과준위가 숨겨둔 두 가지 보물이
                            있답니다. 과제전을 둘러보시면서 보물찾기도 즐기고,
                            경품 받아가세요!
                        </div>
                        <div id="event-announcement">
                            이벤트 세부 정보 및 당첨자 발표:<br></br>
                            서울대학교 연합전공 정보문화학 과제전 페이스북
                            facebook.com/itctfestival<br></br>
                            서울대학교 연합전공 정보문화학 과제전 인스타그램
                            @itctfestival
                        </div>
                    </div>
                    <img
                        className="event-image"
                        src={event}
                        alt="event image"
                    />
                </div>
            </div>
        );
    }
}

export default Event;
