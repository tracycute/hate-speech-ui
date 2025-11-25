import { FaUsers } from "react-icons/fa";

export default function GroupInfo() {
  return (
    <div className="panel active">
      <h2>
        <FaUsers style={{ marginRight: "10px", color: "#3f72af" }} />
        Thông tin của nhóm
      </h2>

      <div className="group-info">
        <p>
          <strong>Tên đề tài:</strong> Hệ thống phát hiện và làm nổi bật bình luận thù ghét trên mạng xã hội tiếng Việt
        </p>
        <p>
          <strong>Tiếng Anh:</strong> Vietnamese Social Media Hate Speech Detection and Toxic Keyword Highlighting System
        </p>
        <p>
          <strong>Liên hệ:</strong> <a href="mailto:23521143@gm.uit.edu.vn">23521143@gm.uit.edu.vn</a>
        </p>
      </div>

      <div className="members-table">
        <h3>Danh sách thành viên</h3>
        <table>
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>MSSV</th>
              <th>Khoa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nguyễn Công Phát</td>
              <td>23521143</td>
              <td>KHMT</td>
            </tr>
            <tr>
              <td>Nguyễn Xuân An</td>
              <td>23520023</td>
              <td>KHMT</td>
            </tr>
            <tr>
              <td>Mai Thái Bình</td>
              <td>23520158</td>
              <td>KHMT</td>
            </tr>
            <tr>
              <td>Trương Hoàng Thành An</td>
              <td>23520032</td>
              <td>KHMT</td>
            </tr>
            <tr>
              <td>Nguyễn Lê Quỳnh Hương</td>
              <td>21520255</td>
              <td>KH&KTTT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
