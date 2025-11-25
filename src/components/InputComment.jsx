import { useState } from "react";
import { FaCommentAlt, FaExclamationTriangle, FaSmile, FaMeh } from "react-icons/fa";
import hateKeywords from "../data/hate_keywords.json";

const negWords = hateKeywords.keywords;
const posWords = ["tốt", "hài lòng", "tuyệt vời", "thân thiện"];

export default function InputComment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const classifyComment = (text) => {
    let type = "neu";
    if (negWords.some((w) => text.toLowerCase().includes(w))) type = "neg";
    else if (posWords.some((w) => text.toLowerCase().includes(w))) type = "pos";
    return type;
  };

  const checkToxic = (text) => {
    const allWords = [
      ...negWords.map((w) => ({ word: w, type: "neg" })),
      ...posWords.map((w) => ({ word: w, type: "pos" })),
    ];
    allWords.sort((a, b) => b.word.length - a.word.length);

    let elements = [];
    let remaining = text;

    while (remaining.length > 0) {
      let matched = false;
      for (let w of allWords) {
        const idx = remaining.toLowerCase().indexOf(w.word.toLowerCase());
        if (idx !== -1) {
          if (idx > 0) elements.push(remaining.slice(0, idx));
          elements.push(
            <span key={elements.length} className={`highlight ${w.type}`}>
              {remaining.slice(idx, idx + w.word.length)}
            </span>
          );
          remaining = remaining.slice(idx + w.word.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        elements.push(remaining);
        break;
      }
    }
    return elements;
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setComments([comment, ...comments]);
    setComment("");
  };

  const renderBadge = (type) => {
    switch (type) {
      case "neg":
        return (
          <span className="badge neg">
            <FaExclamationTriangle style={{ marginRight: "4px" }} />
            Neg
          </span>
        );
      case "pos":
        return (
          <span className="badge pos">
            <FaSmile style={{ marginRight: "4px" }} />
            Pos
          </span>
        );
      default:
        return (
          <span className="badge neu">
            <FaMeh style={{ marginRight: "4px" }} />
            Neu
          </span>
        );
    }
  };

  return (
    <div className="panel active">
      <h2>
        <FaCommentAlt style={{ marginRight: "10px", color: "#3f72af" }} />
        Nhập bình luận
      </h2>
      <textarea
        placeholder="Nhập bình luận..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />
      <button onClick={handleAddComment}>Thêm comment</button>

      <div className="comments">
        {comments.map((c, idx) => {
          const type = classifyComment(c);
          return (
            <div key={idx} className="comment-item">
              <p>{checkToxic(c)}</p>
              {renderBadge(type)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
