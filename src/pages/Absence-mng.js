import { html } from "lit-html";

export default function absenceMng() {
  return html`
    <div class="container">
      <h1 class="row1">부재 관리</h1>

      <div class="row2">
        <div class="btns">
          <button>부재 신청</button>
          <button>부재 관리</button>
        </div>
        <div class="Remaining">
          <div>잔여 연차</div>
          <div>잔여 반차</div>
          <div>잔여 휴가</div>
        </div>
      </div>

      <div class="row3">
        <div class="details">
          <div>부재 신청 내역</div>
          <table>
            <tr class="title">
              <td>
                종류
                <!-- 드롭다운 메뉴 -->
                <div>연차</div>
                <div>반차</div>
                <div>휴가</div>
                <div>출산 휴가</div>
                <div>경조사</div>
              </td>
              <td>승인 여부</td>
              <td>발생일</td>
              <td>신청일</td>
            </tr>

            <tr class="item">
              <td>연차</td>
              <td>승인대기</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
          </table>
        </div>

        <div class="calendar">
          <!-- 모형으로 만들지 진짜 달력을 만들지 -->
        </div>
      </div>

      <div class="submit">
        <h1>부재 신청</h1>
        <div>
          <div>휴가 종류</div>
          <!-- 드롭다운 메뉴 -->
          <div>연차</div>
          <div>반차</div>
          <div>휴가</div>
          <div>출산 휴가</div>
          <div>경조사</div>
        </div>

        <div>
          <div>시작일</div>
          <input type="date" />
        </div>

        <div>
          <div>사용 기간</div>
          <div>10일</div>
        </div>

        <div>
          <div>종료일</div>
          <input type="date" />
        </div>

        <div>
          <input type="text" placeholder="휴가 사유를 입력해주세요." />
        </div>

        <div>
          <button>취소</button>
          <button>휴가 신청하기</button>
        </div>
      </div>
    </div>
  `.strings;
}
